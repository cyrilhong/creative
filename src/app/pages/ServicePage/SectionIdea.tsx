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
import ourWorks from './assets/our-works.json'
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
      <Container maxWidth={'xl'}>
        <Grid container className="container">
          <Grid xs={12} md={12}>
            <div className="wrapper border">
              <Box width={'220px'} m="0 auto">
                <Fade>
                  {ideaActive && <Lottie animationData={ourWorks} loop={false} />}
                </Fade>
              </Box>
              <h1 className="eng">
                We believe success comes with responsibility.
              </h1>
              <h2>我們相信成功伴隨著責任，看看我們的精彩案例</h2>
              <WrappedButton
                text="OUR WORKS"
                link="#"
                isWhite={true}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </SectionIdea>
  );
}
const SectionIdea = styled.div`
  padding: 96px 0;
  display: flex;
  text-align: center;
  background-color: ${colors.White};
  .wrapper {
    padding: 16px 40px;
  }
  .border {
    border-right: 1px solid ${colors.DarkBlue};
    border-left: 1px solid ${colors.DarkBlue};
  }
  h1 {
    margin: 16px 0 0;
  }
  h2 {
    font-size: 24px;
    margin: 8px 0 0;
  }
  a {
    margin: 32px auto 0;
    background-color: #fff;
    min-width: 215px;
  }
  .more-client {
    display: inline-grid;
    grid-gap: 44px;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    img {
      height: 46px;
    }
  }
  ${media.large`
    .more-client {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
  ${media.medium`
    padding: 48px 0;
    .wrapper {
      padding: 32px;
    }
    .container{
      flex-direction: column;
      border-right: 1px solid ${colors.DarkBlue};
      border-left: 1px solid ${colors.DarkBlue};
      gap: 48px;
    }
    .border {
      border-right: 0;
    }
    h1{
      margin-top: 24px;:
    }
    h2{
      margin: 8px 0 24px;
    }
    a{
      min-width: 172px;
    }
    .more-client {
      grid-template-columns: repeat(3, 1fr);
      img{
        height: 24px;
      }
    }
  `}
`;