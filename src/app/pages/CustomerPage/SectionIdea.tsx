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
import moreClient01 from './assets/moreClient/01.png';
import moreClient02 from './assets/moreClient/02.png';
import moreClient03 from './assets/moreClient/03.png';
import moreClient04 from './assets/moreClient/04.png';
import moreClient05 from './assets/moreClient/05.png';
import moreClient06 from './assets/moreClient/06.png';
import moreClient07 from './assets/moreClient/07.png';
import moreClient08 from './assets/moreClient/08.png';
import moreClient09 from './assets/moreClient/09.png';
import moreClient10 from './assets/moreClient/10.png';
import moreClient11 from './assets/moreClient/11.png';
import moreClient12 from './assets/moreClient/12.png';
import moreClient13 from './assets/moreClient/13.png';
import moreClient14 from './assets/moreClient/14.png';
import moreClient15 from './assets/moreClient/15.png';
import moreClient16 from './assets/moreClient/16.png';
import moreClient17 from './assets/moreClient/17.png';
import moreClient18 from './assets/moreClient/18.png';
import moreClient19 from './assets/moreClient/19.png';
import moreClient20 from './assets/moreClient/20.png';
import moreClient21 from './assets/moreClient/21.png';
import moreClient22 from './assets/moreClient/22.png';
import moreClient23 from './assets/moreClient/23.png';
const moreClient = [
  moreClient01,
  moreClient02,
  moreClient03,
  moreClient04,
  moreClient05,
  moreClient06,
  moreClient07,
  moreClient08,
  moreClient09,
  moreClient10,
  moreClient11,
  moreClient12,
  moreClient13,
  moreClient14,
  moreClient15,
  moreClient16,
  moreClient17,
  moreClient18,
  moreClient19,
  moreClient20,
  moreClient21,
  moreClient22,
  moreClient23,
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
    margin: 8px 0 32px;
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