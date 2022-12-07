import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as colors from 'styles/colors';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { useWindowSize } from '../../hooks'
import { media } from 'styles/media';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Lottie from 'lottie-react';
import lottieJoinUs from './assets/join-us.json';
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
            <Container maxWidth={'xl'}>
                <Grid container className="container">
                    <Grid xs={12} md={6}>
                        <div className="wrapper border">
                            <Grid xs={6} margin="0 auto" maxWidth={"220px"}>
                                <Fade bottom>
                                    {ideaActive && <Lottie
                                        animationData={lottieClient}
                                        loop={false}
                                    />}
                                </Fade>
                            </Grid>
                            <h1 className="eng">Happy teams create change.</h1>
                            <h2>我們用心生活，賦予多變創意能量</h2>
                            <WrappedButton
                                text="ABOUT US"
                                link="/about-us"
                                isWhite={true}
                            />
                        </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <div className="wrapper">
                            <Grid xs={6} margin="0 auto" maxWidth={"220px"}>
                                <Fade bottom>
                                    {ideaActive && <Lottie animationData={lottieJoinUs} loop={1} />}
                                </Fade>
                            </Grid>
                            <h1 className="eng">Let’s make work a real joy.</h1>
                            <h2>與我們一起加入改變的行列！</h2>
                            <WrappedButton
                                text="JOIN US"
                                link="/join-us"
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
  .MuiContainer-root{
    padding: 0 16px!important;
  }
  .wrapper {
    padding: 16px 40px;
  }
  .border {
    border-right: 1px solid ${colors.DarkBlue};
  }
  h1 {
    margin: 16px 0 0;
  }
  h2 {
    font-size: 24px;
    margin: 8px 0 16px;
  }
  a {
    margin: 32px auto 0;
    background-color: #fff;
    min-width: 215px;
  }
  ${media.large`
    a{
      margin-top: 16px;
    }
  `}
  ${media.medium`
    padding: 48px 0;
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
      margin: 8px 0 16px;
      font-size: 18px;
    }
    a{
      min-width: 172px;
    }
  `}
`;
