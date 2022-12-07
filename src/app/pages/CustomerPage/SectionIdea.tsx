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
import acer from './assets/moreClient/acer.png';
import Advantech from './assets/moreClient/Advantech.png';
import Amway from './assets/moreClient/Amway.png';
import ASUS from './assets/moreClient/ASUS.png';
import Audi from './assets/moreClient/Audi.png';
import Cathay_Financial_Holdings from './assets/moreClient/Cathay_Financial_Holdings.png';
import Cathay_Life_Insurance from './assets/moreClient/Cathay_Life_Insurance.png';
import Cathay_United_Bank from './assets/moreClient/Cathay_United_Bank.png';
import China_Airlines from './assets/moreClient/China_Airlines.png';
import CTBC from './assets/moreClient/CTBC.png';
import Delta from './assets/moreClient/Delta.png';
import eslite from './assets/moreClient/eslite.png';
import EVA_Air from './assets/moreClient/EVA_Air.png';
import FETnet from './assets/moreClient/FETnet.png';
import First_Bank from './assets/moreClient/First_Bank.png';
import Fubon_Bank from './assets/moreClient/Fubon_Bank.png';
import gamania from './assets/moreClient/gamania.png';
import Nan_Shan from './assets/moreClient/Nan_Shan.png';
import HOTAI from './assets/moreClient/HOTAI.png';
import HTC from './assets/moreClient/HTC.png';
import KKBOX from './assets/moreClient/KKBOX.png';
import LINE from './assets/moreClient/LINE.png';
import PChome from './assets/moreClient/PChome.png';
import Wowprime from './assets/moreClient/Wowprime.png';
import taxi from './assets/moreClient/55688.png';

import Shin_Kong from './assets/moreClient/Shin_Kong.png';
import Sinyi from './assets/moreClient/Sinyi.png';
import STARLUX from './assets/moreClient/STARLUX.png';
import Synology from './assets/moreClient/Synology.png';
import Taipei_City_Government from './assets/moreClient/Taipei_City_Government.png';
import Taishin_Bank from './assets/moreClient/Taishin_Bank.png';
const moreClient = [
  acer,
  Advantech,
  Amway,
  ASUS,
  Audi,
  China_Airlines,
  Delta,
  gamania,
  HTC,
  KKBOX,
  LINE,
  PChome,
  Synology,
  CTBC,
  Wowprime,
  Fubon_Bank,
  Taishin_Bank,
  taxi,
  HOTAI,
  EVA_Air,
  Sinyi,
  Nan_Shan,
  STARLUX,
  Cathay_Life_Insurance,
  Cathay_United_Bank,
  Cathay_Financial_Holdings,
  First_Bank,
  Shin_Kong,
  eslite,
  Taipei_City_Government,
  FETnet
];
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
          <div className="wrapper border">
            <Grid xs={6} xsOffset={3}>
              <Box maxWidth={'220px'} m="0 auto">
                <Fade>
                  {ideaActive && <Lottie animationData={lottieClient} loop={false} />}
                </Fade>
              </Box>
            </Grid>
            <h1 className="eng">
              We serve clients across diverse industries.
            </h1>
            <h2>我們累積了豐富的服務經驗，在多元產業中跨領域延伸</h2>
            <div className="more-client">
              {moreClient.map((item, index) => {
                return <img key={index} src={item} alt={"client" + index} />;
              })}
            </div>
          </div>
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
    width: 100%;
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
    margin: 8px 0 72px;
  }
  a {
    margin: 32px auto 0;
    background-color: #fff;
    min-width: 215px;
  }
  .more-client {
    display: inline-grid;
    grid-gap: 56px;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    img {
      height: 46px;
    }
  }
  ${media.large`
    .more-client {
      /* width: 100%; */
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
      border: 0;
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
  ${media.small`
    .more-client {
      grid-gap: 24px;
    }
  `}
`;