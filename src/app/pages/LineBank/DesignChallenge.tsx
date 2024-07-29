import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import * as color from 'styles/colors';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import { useWindowSize, isDesktop } from '../../hooks'
import Lottie from 'lottie-react';
import Img1 from './assets/design-challenge-01.jpg';
import Img2 from './assets/design-challenge-02.jpg';
import Img3 from './assets/design-challenge-03.jpg';
import highHive from './assets/high-hive.json';
export default function DesignChallenge() {
  const windowWidth = useWindowSize().width

  return (
    <Wrapper>
      <Grid className="text" container spacing={5} rowSpacing={9}>
        {windowWidth > 960 ?
          <Grid xs={12} xsOffset={0} md={10} mdOffset={1} zIndex="1">
            <Fade bottom cascade={windowWidth > 1432} duration={500} delay={100}>
              <div className="super eng">Design</div>
            </Fade>
            <Fade bottom cascade duration={500} delay={100}>
              <div className="super eng">Challenge</div>
            </Fade>
          </Grid> :
          <Grid xs={12} xsOffset={0} md={10} mdOffset={1} zIndex="2">
            <Grid container spacing={0} rowSpacing={0}>
              <Grid xs={12}>
                <Fade bottom cascade={windowWidth > 1432} duration={500} delay={100}>
                  <div className="super eng">Design</div>
                </Fade>
              </Grid>
              <Grid xs={9} xsOffset={3}>
                <Fade bottom cascade duration={500} delay={100}>
                  <div className="super eng">Challenge</div>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
        }
        <Grid xs={6} className="mb-img">
          <ParallaxImg>
            <Parallax speed={15}>
              <Fade bottom duration={1000} delay={100}>
                <img src={Img1} alt="Img1" />
              </Fade>
            </Parallax>
          </ParallaxImg>
        </Grid>
        <Grid xs={6} className="mb-img">
          <ParallaxImg>
            <Parallax speed={5}>
              <Fade bottom duration={1000} delay={100}>
                <img src={Img2} alt="Img2" />
              </Fade>
            </Parallax>
          </ParallaxImg>
        </Grid>
        <Grid xs={6} className="mb-img">
          <ParallaxImg>
            <Parallax speed={8}>
              <Fade bottom duration={1000} delay={100}>
                <img src={Img3} alt="Img3" />
              </Fade>
            </Parallax>
          </ParallaxImg>
        </Grid>
      </Grid>
      <Grid className="teams-img" container spacing={5} rowSpacing={9}>
        <Grid xs={12} md={5} mdOffset={1} className="left">
          <ParallaxImg>
            <Parallax speed={15}>
              <Fade bottom duration={1000} delay={100}>
                <img src={Img1} alt="Img1" />
              </Fade>
            </Parallax>
          </ParallaxImg>
          <div className="highHive">
            <Lottie animationData={highHive} loop={true} />
          </div>
        </Grid>
        <Grid xs={12} md={6} className="right">
          <ParallaxImg>
            <Parallax speed={10}>
              <Fade bottom duration={1000} delay={100}>
                <img src={Img2} alt="Img2" />
              </Fade>
            </Parallax>
          </ParallaxImg>
          <div className="context">
            <Fade >
              <h2>如何協助主要 TA 養成理財習慣與引導投資下單並持續回訪？</h2>
              <h4>
              數位銀行想要拓展的用戶除了剛進入投資市場，尚在摸索理財方向的年輕人，也期待引導理財老手持續回訪
              </h4>
              <h4>
              市面上提供的金融資訊複雜度較高，怎麼讓主要鎖定的族群都能透過理財網得到足以驅動轉化的資訊、並帶入易懂的理財觀念培養用戶，是在設計前就需要思考的問題
              </h4>
            </Fade>
          </div>
          <ParallaxImg>
            <Parallax speed={8}>
              <Fade bottom duration={1000} delay={200}>
                <img src={Img3} alt="Img3" />
              </Fade>
            </Parallax>
          </ParallaxImg>
          <div className="context">
            <Fade >
              <h2>如何提煉品牌精神傳遞核心訊息讓用戶持續回訪，促使官網與理財網互相導流交易？</h2>
              <h4>
              理財網在提升用戶對產品的了解時既要延續原有品牌體驗讓用戶有信任度，傳遞的內容也與官網有所區分，以明確的溝通策略傳遞品牌價值、成功做到獲客與導流下單
              </h4>
            </Fade>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
}


const ParallaxImg = styled.div`
  overflow: hidden;
  margin: 0 -80px;
  img {
    width: 100%;
  }
  ${media.medium`
    margin: 0 -20px;
  `}
`;


const Wrapper = styled.div`
  padding: 120px 0 90px;
  overflow: hidden;
  background-color: ${color.DarkBlue};
  color: ${color.White};
  .super:nth-child(2) {
    margin-left: 0px;
  }
  .text {
    position: relative;
    z-index: 1;
  }
  .teams-img {
    margin-top: -150px;
    position: relative;
    z-index: 0;
    .left {
      padding-left: 60px;
      padding-right: 70px;
      margin-top: 150px;
    }
    img {
      width: 100%;
    }
    .right {
      margin-top: -170px;
      padding: 0 150px 0 0;
    }
    .highHive {
      display: flex;
      justify-content: start;
      margin-top: 300px;
      div {
        width: 350px;
      }
    }
    .context {
      margin-top: 64px;
      margin-bottom: 100px;
      padding: 0 40px 18px;
      border-left: 1px solid ${color.White};
      border-right: 1px solid ${color.White};
      h2 {
        margin: 0 0 16px 0;
        font-weight: 400;
      }
      h4 {
        margin: 0 0 34px;
        &:nth-last-child(1){
          margin: 0;
        }
      }
    }
  }
  ${ParallaxImg} {
    margin: 0;
    overflow: visible;
  }
  .mb-img{
    display: none;
  }
  .mb-highHive{
    display: none;
  }
  @media screen and (max-width: 1432px) {
    .text{
      .super{
        font-size: 100px;
        line-height: 114px;
      }
    }
  }
  ${media.large`
    .teams-img{
      .left{
        padding-left: 0;
      }
      .right{
        padding-right: 0;
      }
    }
  `}
  ${media.medium`
    padding: 12px 20px 80px;
    .change {
      /* margin-left: 25px; */
      margin-left: -9px;
    }
    .left{
      display: none;
    }
    .teams-img{
      z-index: 1;
      .MuiGrid2-root{
        width: 100%;
      }
      .right{
        margin-top: 0;
        padding: 0;
        ${ParallaxImg}{
          display: none;
        }
        .context{
          margin: -16px 20px 0;
          padding: 24px 20px 0;
          h2,h4{
            text-align: left;
          }
          h2{
            margin-bottom: 8px;
          }
          h4{
            margin-bottom: 16px;
            font-size: 14px;
          }
        }
      }
    }
    .mb-img{
      display: block;
      z-index: 0;
      :nth-child(2) {
        padding-right: 10px;
        margin-top: -412px;
        /* margin-top: -242px; */
      }
      :nth-child(3) {
        padding-left: 10px;
        margin-top: -540px;
        padding-right: 20px;
      }
      :nth-child(4) {
        padding-left: 54%;
        margin-top: -20%;
        width: 100%;
        margin-right: 20px;
        padding-bottom: 200px;
      }
    }
    .mb-highHive{
      display: block;
      /* margin-left: 36px; */
      max-width: 50%;
      margin: 0 auto 40px;
    }
  `}
  ${media.small`
    .text{
      .super{
        font-size: 48px;
        line-height: 60px;
      }
    }
    .mb-img{
      :nth-child(2) {
        margin-top: -242px;
      }
      :nth-child(3) {
        margin-top: -336px;
      }
    }
  `}
`;
