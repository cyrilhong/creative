import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as colors from 'styles/colors';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { Box } from '@mui/system';
import { useWindowSize } from '../../hooks'
import { media } from 'styles/media';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Lottie from 'lottie-react';
import lottieClient from './assets/client.json';
import WrappedButton from 'app/components/WrappedButton'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
export default function Idea() {
  const ideaRef = useRef<any>(null);
  const [ideaActive, setIdeaActive] = useState(false)
  useScrollPosition(({ prevPos, currPos }) => {
    if (ideaRef.current!.getBoundingClientRect().top < 1000) {
      setIdeaActive(true)
    } else {
      setIdeaActive(false)
    }
  });
  return (
    <SectionIdea ref={ideaRef}>
      <div className="wrapper">
        <div className="content">
          <Grid container className="container">
            <Grid xs={6} xsOffset={3}>
              <Box maxWidth={'220px'} m="0 auto">
                <Fade bottom>
                  {ideaActive && <Lottie animationData={lottieClient} loop={false} />}
                </Fade>
              </Box>
            </Grid>
          </Grid>
          <h1 className="eng">
            Serving 100+ top companies with diverse cross-field experience
          </h1>
          <h2>我們用心協助客戶創造價值，進而形塑共好的長期夥伴關係</h2>
          <Box display={"flex"} justifyContent="center">
            <WrappedButton
              text="OUR CLIENTS"
              link="#"
              isWhite={true}
            />
          </Box>
        </div>
      </div>
    </SectionIdea>
  );
}
const SectionIdea = styled.div`
  padding: 96px 0;
  display: flex;
  text-align: center;
  background-color: ${colors.White};
  .wrapper {
    margin: 0 auto;
    width: 100%;
    padding: 0 80px;
    a{
      background-color: ${colors.White};
    }
    .content {
      margin: 0 auto;
      max-width: 1760px;
      padding: 0 80px 30px;
      box-sizing: content-box;
      border-left: 1px solid ${colors.DarkBlue};
      border-right: 1px solid ${colors.DarkBlue};
      h1 {
        margin-top: 40px;
      }
      h2{
        margin-bottom: 0;
      }
    }
  }
  ${media.large`
    .content {
      padding: 0 60px
    }
  `}
  ${media.medium`
    padding: 48px 0;
    .wrapper{
      padding: 0 20px;
      .content {
        padding: 0 20px;
        .idea{
          width: 160px;
        }
        h1{
          margin: 24px 0 8px;
        }
        h2{
          margin: 0;
        }
      }
    }
  `};
`;
