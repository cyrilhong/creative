import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as color from 'styles/colors';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { Box } from '@mui/system';
import { useWindowSize } from '../../hooks'
import { media } from 'styles/media';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Lottie from 'lottie-react';
import aboutUsAnim from './assets/about-us.json'
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
                <Fade>
                  {ideaActive && <Lottie animationData={aboutUsAnim} loop={false} />}
                </Fade>
              </Box>
            </Grid>
          </Grid>
          <h1 className="eng">
            Surround yourself with highly ambitious, friendly & humble people!
          </h1>
          <h2>我們深知人才是最重要的資產，一起加入改變！</h2>
          <Box display={"flex"} justifyContent="center">
            <WrappedButton
              text="JOIN US"
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
  background-color: ${color.White};
  .wrapper {
    margin: 0 auto;
    width: 100%;
    padding: 0 80px;
    h2{
      margin: 16px 0 0;
    }
    a{
      background-color: ${color.White};
    }
    .content {
      margin: 0 auto;
      max-width: 1760px;
      padding: 0 80px 30px;
      box-sizing: content-box;
      border-left: 1px solid ${color.DarkBlue};
      border-right: 1px solid ${color.DarkBlue};
      color: ${color.DarkBlue};
      h1 {
        margin: 40px 0 0;
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