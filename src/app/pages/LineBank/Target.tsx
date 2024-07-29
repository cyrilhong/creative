import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import * as color from 'styles/colors';
import CountUp from 'react-countup';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useWindowSize, isDesktop } from '../../hooks'
import { PageWrapper } from 'app/components/PageWrapper';
import Performance from './Performance'
import StickyTemplate from './StickyTemplate'
import * as colors from 'styles/colors';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import HowMightWe from './assets/How-Might-We.svg'
import How1 from './assets/how-1.svg'
import How2 from './assets/how-2.svg'
import How3 from './assets/how-3.svg'
import How3Mb from './assets/how-3-mb.svg'
import Lottie from 'lottie-react';
import DialogLeft from './assets/dialog-left.json'
import DialogRight from './assets/dialog-right.json'
export default function Target() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate01Active, setAnimate01Active] = useState(false)
  const [animate02Active, setAnimate02Active] = useState(false)
  const [animate03Active, setAnimate03Active] = useState(false)
  const lottieRef1 = useRef<any>(null);
  const lottieRef2 = useRef<any>(null);
  const lottieRef3 = useRef<any>(null);
  useScrollPosition(({ }) => {
    // console.log(ref.current!.getBoundingClientRect().top);
    if (windowWidth > 960) {
      if (
        positionRef.current!?.getBoundingClientRect().top < 120 && windowWidth > 960
      ) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      if (ref.current!.getBoundingClientRect().top < 500) {
        setAnimate01Active(true)
      } else {
        setAnimate01Active(false)
      }
      if (ref.current!.getBoundingClientRect().top < 140) {
        setAnimate02Active(true)
      } else {
        setAnimate02Active(false)
      }
      if (ref.current!.getBoundingClientRect().top < 230) {
        setAnimate03Active(true)
      } else {
        setAnimate03Active(false)
      }
    } else {
      if (
        positionRef.current!?.getBoundingClientRect().top < 120 && windowWidth > 960
      ) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      if (ref.current!.getBoundingClientRect().top < 0) {
        setAnimate01Active(true)
      } else {
        setAnimate01Active(false)
      }
      if (ref.current!.getBoundingClientRect().top < -600) {
        setAnimate02Active(true)
      } else {
        setAnimate02Active(false)
      }
      if (ref.current!.getBoundingClientRect().top < -300) {
        setAnimate03Active(true)
      } else {
        setAnimate03Active(false)
      }
    }
  });
  const positionRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);
  const [bottomSticky, setBottomSticky] = useState(false);
  const windowWidth = useWindowSize().width
  function Mark(props) {
    const { ref } = useParallax<HTMLDivElement>({
      scaleX: [0, 1],
      rootMargin: { top: 0, right: 0, bottom: -600, left: 0 },
    });
    const color = props.color ? props.color : colors.ElectricBlue;
    return (
      <span style={{ height: windowWidth > 960 ? 'auto' : '24px', display: windowWidth > 960 ? 'inline-block' : 'inline-block' }}>
        <div style={{ zIndex: 1, position: 'relative' }}>{props.children}</div>
        <span
          style={{
            position: 'relative',
            display: 'block',
            bottom: '30px',
            height: '24px',
            backgroundColor: color,
            zIndex: 0,
            transformOrigin: 'left',
          }}
          ref={ref}
        ></span>
      </span>
    );
  }
  return (
    <Wrapper ref={ref}>
      <PageWrapper overflow={"false"} className="page-container">
        <Container maxWidth={'xl'} className="target-section">
          <Grid container className="container">
            <Grid xs={12} md={12}>
              <Fade bottom>
                <h3>
                  設計目標
                </h3>
                <FeatureHead>
                  針對 YZ 世代在投資的現況問題，建立品牌溝通策略<br />吸引年輕用戶與專業投資者銜接產品使用。
                </FeatureHead>
              </Fade>
            </Grid>
          </Grid>
        </Container>

        <Horizon>
          <div className="title">
            <div className="dot" />
            <h4 className="eng">OUR CHALLENGE</h4>
          </div>
          <h4 className="eng">02</h4>
        </Horizon>

      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    background-color: ${color.DarkBlue};
    position: relative;
    z-index: 1;
    overflow: visible;
    color: ${color.White};
    /* padding-bottom: 340px; */
    padding-top: 200px;
    .gradient{
      border-radius: 800.557px;
      opacity: 0.6;
      background: linear-gradient(180deg, rgba(17, 220, 240, 0.70) 38.36%, rgba(0, 178, 196, 0.04) 95.37%);
      filter: blur(125px);
      width: 800.557px;
      height: 279.874px;
      transform: rotate(-0.014deg);
      flex-shrink: 0;
      position: absolute;
      left: 20%;
      bottom: -60%;
      z-index: -1;
    }
    h3{
      font-size: 28px;
      font-weight: 500;
      margin: 32px 0 24px;
    }
    .page-container{
        max-width: 1520px;
        overflow: visible;
        position: relative;
        /* height: 1400px; */
    }
    .how-might-we{
      position: absolute;
      bottom: -41%;
      right: 8vw;
    }
    .info{
      font-size: 20px;
      font-weight: bold;
      margin: -162px 0 0 40px;
      width: 360px;
      position: relative;
    }
    .How1{
      position: absolute;
      left: 0;
      margin-top: 4%;
      width: 460px;
      cursor: pointer;
    }
    .How2{
      position: absolute;
      left: 10vw;
      bottom: -73%;
      width: 460px;
      cursor: pointer;
      .info{
        margin-left: 65px;
      }
    }
    .How3{
      position: absolute;
      right: -2vw;
      bottom: -70%;
      width: 460px;
      cursor: pointer;
    }

    .target-section{
        text-align: center;
        h1{
           max-width: 1060px;
           margin: 0 auto 62px;
        }
        h2{
            margin: 32px 0 20px;
        }
    }
    .border-left{
        border-left: 1px solid ${color.White};
        padding-left: 16px;
    }
    .topic-1{
        margin: 146px 0;
    }
    /* .topic-2{
        margin-top: 146px;
    } */
    .info-graph-1{
        margin-top: 10px;
        margin-bottom: 162px;
    }
    .info-graph-2{
        margin-top: 10px;
    }
    ${media.large`
      .how-might-we{
        bottom: -46%;
        /* right: -5vw; */
        left: 38vw;
      }
      .How2{
        bottom: -50vw;
        left: 0;
      }
      .How3{
        bottom: -68%;
        right: -2vw;
      }
    `}
    ${media.medium`
      padding: 96px 0 0;
      .page-container{
        height: auto;
        overflow: hidden;
        padding-bottom: 96px;
      }
      h3{
        font-size: 16px;
        margin: 16px 0;
      }
      .info{
        font-size: 16px;
        width: 72%;
      }
      .How1,.How2{
        .info{
          margin: -33% 0 0 34px;
          /* margin: -17vw 0 0 34px; */
          max-width: 368px;
        }
      }
      .How3{
        .info{
          margin: -33% 0 0 58px;
          /* margin: -13vw 0 0 58px; */
          max-width: 368px;
        }
      }
      .target-section{
        h2{
            font-size: 16px;
            line-height: 24px;
            margin: 16px 0 22px;
        }
        h1{
            font-size: 22px;
            line-height: 33px;
            margin: 0 0 16px;
        }
      }
      .target-order{
        gap: 120px;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-top: -16px;
        img{
          margin-bottom: 64px;
          left: 0;
        }
      }
      .how-might-we{
        position: relative;
        bottom: initial;
        right: initial;
        width: 100%;
        order: 10;
        margin-bottom: 64px;
        margin: 0 -25px 64px -25px;
        width: calc( 100% + 55px );
      }
      .How1{
        position: relative;
        width: 100%;
        left: 0;
        margin-top: initial;
        min-height: 176px;
        max-width: 460px;
      }
      .How2{
        position: relative;
        left: initial;
        width: 100%;
        bottom: initial;
        order: 2;
        max-width: 460px;
        min-height: 176px;
      }
      .How3{
        position: relative;
        right: 0;
        width: 100%;
        bottom: initial;
        min-height: 176px;
        max-width: 460px;
      }
      .gradient{
        bottom: 5%;
        left: 0;
      }
  `}
`;

const Subhead = styled.div`
    font-size: 20px;
    line-height: 30px;
    margin: 120px auto 0;
    text-align: center;
    max-width: 360px;
    position: relative;
    &::before{
        content: '';
        width: 40px;
        height: 1px;
        border-bottom: 1px solid ${color.White};
        position: absolute;
        left: -40px;
        top: 13px
    }
    &::after{
        content: '';
        width: 40px;
        height: 1px;
        border-bottom: 1px solid ${color.White};
        position: absolute;
        right: -40px;
        top: 13px;
    }
    ${media.medium`
        margin: 96px auto 0;
        font-size: 16px;
        max-width: initial;
        width: fit-content;
        padding: 0 12px;
        &::before{
            width: 20px;
            left: -22px;
            top: 14px;
        }
        &::after{
            width: 20px;
            right: -22px;
            top: 14px;
        }
    `}
`

const Horizon = styled.div<{
  blackBg?: boolean;
}>`
    display: flex;
    justify-content: space-between;
    padding: 200px 0 120px;
    color: ${prop => (!prop.blackBg ? color.White : color.DarkBlue)};
    &::after {
      content: '';
      width: 100%;
      display: block;
      border-top: 1px solid
        ${prop => (!prop.blackBg ? color.White : color.DarkBlue)};
      position: absolute;
    }
    h4 {
      margin: 20px 0 0;
      font-weight: 300;
    }
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 20px 0 0;
      .dot {
        width: 16px;
        height: 16px;
        margin-bottom: 2px;
        border-radius: 100%;
        background-color: ${prop =>
    !prop.blackBg ? color.BGGrey : color.DarkBlue};
        margin-right: 8px;
      }
      h4 {
        margin: 0;
        letter-spacing: 0.1rem;
      }
    }
    ${media.medium`
      padding: 136px 0 72px;
    `}
  `;



const FeatureHead = styled.h1`
  .draw::after{
    content: '';
    border-bottom: 15px solid #E73523;
  }
  .draw{
        display: inline;
        background-size: 1px 16px;
        box-shadow: inset 0 21px #0c1c24, inset 0px 54px #E73523;
    }
  ${media.large`
    margin-bottom: -8px;
  `}
  ${media.medium`
    display: block;
    margin-bottom: -8px;
    /* max-width: 320px; */
    br{
      display: none;
    }
    .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 21px #0c1c24, inset 0px 54px #E73523;
    }
  `}
`
