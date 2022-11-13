import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import * as colors from 'styles/colors';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import { useWindowSize } from '../../hooks'
import styled from 'styled-components/macro';
import { useForm, ValidationError } from '@formspree/react';
import Box from '@mui/material/Box';
import { Grid, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import * as color from 'styles/colors';
import hero1 from './assets/customer-img-1.jpg';
import hero2 from './assets/customer-img-2.jpg';
import clients1 from './assets/selectedClient/client-01.png';
import clients2 from './assets/selectedClient/client-02.png';
import clients3 from './assets/selectedClient/client-03.png';
import clients4 from './assets/selectedClient/client-04.png';
import clients5 from './assets/selectedClient/client-05.png';
import clients6 from './assets/selectedClient/client-06.png';
import clients7 from './assets/selectedClient/client-07.png';
import clients8 from './assets/selectedClient/client-08.png';
import clients9 from './assets/selectedClient/client-09.png';
import clients10 from './assets/selectedClient/client-10.png';
import clients1Hover from './assets/client-01-hover.png';
import clients2Hover from './assets/client-02-hover.png';
import clients3Hover from './assets/client-03-hover.png';
import clients4Hover from './assets/client-04-hover.png';
import clients5Hover from './assets/client-05-hover.png';
import clients6Hover from './assets/client-06-hover.png';
import clients7Hover from './assets/client-07-hover.png';
import clients8Hover from './assets/client-08-hover.png';
import clients9Hover from './assets/client-09-hover.png';
import clients10Hover from './assets/client-10-hover.png';
import arrowBtn from './assets/arrow-btn.svg';
import Idea from './assets/idea.svg';
import { media } from 'styles/media';
import Lottie from 'lottie-react';
import lottieClient from './assets/client.json';
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
import heroImgMb from './assets/hero-img-mb.png';
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
export function CustomerPage() {
  const [state, handleSubmit] = useForm('mdojganb');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  const target = useRef(null);
  function Mark() {
    const { ref } = useParallax<HTMLDivElement>({
      // scaleX: [0, 1],
      // opacity: [0, 1],
      // endScroll: 1000,
      // speed: 10,
      // rotateY: [0, 360]
    });
    return <span ref={ref} />;
  }
  const windowWidth = useWindowSize().width

  return (
    <ParallaxProvider>
      <Helmet>
        <title>Customer</title>
        <meta
          name="description"
          content="A React Boilerplate application CustomerPage"
        />
      </Helmet>
      <NavBar />
      <div className="bg-customer">
        <PageWrapper>
          <HeroWrapper>
            {windowWidth > 960 ?
              <>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    We don’t change
                  </Fade>
                </div>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    the world. But our
                  </Fade>
                </div>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    clients do.
                  </Fade>
                </div>
                <div className="content">
                  <Fade bottom duration={500} delay={100}>
                    <h1>
                      我們
                      <Mark />
                      幫助客戶打破框架，進而形塑共好的
                    </h1>
                    <h1>
                      長期夥伴關係
                    </h1>
                  </Fade>
                </div>
              </> :
              <>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    We don’t change
                  </Fade>
                </div>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    the world. But our
                  </Fade>
                </div>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    clients do.
                  </Fade>
                </div>
                <div className="content">
                  <Fade bottom duration={500} delay={100}>
                    <h1>
                      <Box>我們</Box>
                      <Mark />
                      幫助客戶打破框架，進而
                    </h1>
                    <h1>
                      形塑共好的長期夥伴關係
                    </h1>
                  </Fade>
                </div>
              </>
            }
            <div className="hero-img-mb">
              <img src={heroImgMb} alt="heroImgMb" />
            </div>

            <ParallaxWrapper01>
              <Parallax scale={[1, 1.2]}>
                <img src={hero1} alt="Yoxi" />
              </Parallax>
            </ParallaxWrapper01>
            <ParallaxWrapper02>
              <Parallax scale={[1, 1.3]}>
                <img src={hero2} alt="Yoxi" />
              </Parallax>
            </ParallaxWrapper02>
          </HeroWrapper>
        </PageWrapper>
        <OurClients>
          <Container maxWidth={'xl'}>
            <Grid container spacing={5} rowSpacing={5}>
              <Grid item xs={12}>
                <Horizon>
                  <div className="title">
                    <div className="dot" />
                    <h4 className="eng">OUR CLIENTS</h4>
                  </div>
                </Horizon>
              </Grid>
              <Grid className='left' item xs={12} md={4}>
                <div className="huge eng">Selected <br />Clients</div>
                {/* <div className="huge eng">Clients</div> */}
                <h1>
                  我們在創新之路 <br /> 一起共伴
                </h1>
              </Grid>
              <Grid className="clients" item xs={12} md={8}>
                <Grid container spacing={0} rowSpacing={0}>
                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients1Hover} alt="01" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients1} alt="01" />
                      </Box>
                      <hr />
                      <h5>
                        與金融領導品牌深度合作，含跨全省 ATM、企金與親子金融跨接觸點數位服務。
                      </h5>
                      <div className="link">
                        <a href="#">
                          <img src={arrowBtn} alt="arrowBtn" /> 親子數位金融服務
                        </a>
                        <a href="#">
                          <img src={arrowBtn} alt="arrowBtn" />
                          企業銀行重塑案
                        </a>
                      </div>
                    </div>
                  </Grid>

                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients3Hover} alt="03" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients3} alt="03" />
                      </Box>
                      <hr />
                      <h5>
                        品牌創意發想到設計執行整合，從司機到乘客的應用情境，與和泰一起重新定義舒適用車體驗。
                      </h5>
                      <div className="link">
                        <a href="#">
                          <img src={arrowBtn} alt="arrowBtn" />
                          和泰派遣服務 APP
                        </a>
                      </div>
                    </div>
                  </Grid>
                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients2Hover} alt="02" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients2} alt="02" />
                      </Box>
                      <hr />
                      <h5>
                        全新航空品牌的數位旅程體驗，橫跨手機、官網，貨運與免稅品等跨平台數位服務。
                      </h5>
                      <div className="link">
                        <a href="#">
                          <img src={arrowBtn} alt="arrowBtn" />
                          星宇航空數位建置案
                        </a>
                      </div>
                    </div>
                  </Grid>
                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients4Hover} alt="04" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients4} alt="04" />
                      </Box>
                      <hr />
                      <h5>
                      不只是電信服務，以研究洞察為起點，為個人、商務、會員生活服務的官網設計顧問案。
                      </h5>
                      <div className="link">
                        <a href="#">
                          <img src={arrowBtn} alt="arrowBtn" /> 星遠傳數位生活平台
                        </a>
                      </div>
                    </div>
                  </Grid>
                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients5Hover} alt="05" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients5} alt="05" />
                      </Box>
                      <hr />
                      <h5>
                      為全球整體節能解決方案領導企業持續優化數位運用，打造電源、EV 充電與自動化服務。
                      </h5>
                      <div className="link">
                        <a href="#">
                          <img src={arrowBtn} alt="arrowBtn" /> 品牌數位設計系統
                        </a>

                      </div>
                    </div>
                  </Grid>
                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients6Hover} alt="06" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients6} alt="06" />
                      </Box>
                      <hr />
                      <h5>
                      以個人化旅行助手為核心，打造全新訂票、免稅品與會員服務的行動 APP。
                      </h5>
                      <div className="link">
                        <a href="#">
                          <img src={arrowBtn} alt="arrowBtn" /> 華航行動飛航體驗
                        </a>
                      </div>
                    </div>
                  </Grid>
                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients7Hover} alt="07" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients7} alt="07" />
                      </Box>
                      <hr />
                      <h5>
                      數位多元學習管道，掌握顧客與消費型位，從學習趨勢研究著手。
                      </h5>
                      <div className="link">
                        <a href="#">
                          <img src={arrowBtn} alt="arrowBtn" /> 線上學習互動平台
                        </a>
                      </div>
                    </div>
                  </Grid>
                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients10Hover} alt="10" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients10} alt="10" />
                      </Box>
                      <hr />
                      <h5>
                        與國泰醫院一起以病人為中心的思考出發，優化預約掛號與診療查詢的數位產品體驗。

                      </h5>
                      <div className="link">
                        <a href="#">
                          <img src={arrowBtn} alt="arrowBtn" /> 國泰醫院 APP 服務
                        </a>
                      </div>
                    </div>
                  </Grid>

                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients9Hover} alt="09" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients9} alt="09" />
                      </Box>
                      <hr />
                      <h5>
                        與台新銀行團隊攜手合作，持續優化最懂年輕人，整合存錢、消費、理財的 Richart 數位帳戶。
                      </h5>
                      <div className="link">
                        <a href="#">數位銀行金融服務
                          <img src={arrowBtn} alt="arrowBtn" />
                        </a>
                      </div>
                    </div>
                  </Grid>

                  <Grid className="card" item xs={6} md={4}>
                    <Box className="visible">
                      <img src={clients8Hover} alt="08" />
                    </Box>
                    <div className="hover">
                      <Box display={'flex'} justifyContent="center">
                        <img src={clients8} alt="08" />
                      </Box>
                      <hr />
                      <h5>
                        與餐飲集團深度合作，輔助顧客善用數位平台，提升支付、回購強化會員加值服務。
                      </h5>
                      <div className="link">

                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </OurClients>
        <SectionIdea>
          <Container maxWidth={'xl'}>
            <Grid container className="container">
              <Grid xs={12} md={12}>
                <div className="wrapper border">
                  <Box width={'220px'} m="0 auto">
                    <Fade>
                      <Lottie animationData={lottieClient} loop={2} />
                    </Fade>
                  </Box>
                  <h1 className="eng">
                    We serve clients across diverse industries
                  </h1>
                  <h2>我們累積了豐富的服務經驗，在多元產業中跨領域延伸</h2>
                  <div className="more-client">
                    {moreClient.map((item, index) => {
                      return <img key={index} src={item} alt={"client" + index} />;
                    })}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </SectionIdea>
      </div>
    </ParallaxProvider>
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
    margin: 8px 0 32px;
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

const OurClients = styled.div`
  margin-top: 40px;
  /* height: 500px; */
  padding-bottom: 200px;
  background-color: ${color.DarkBlue};
  color: ${color.White};
  position: relative;
  z-index: 0;
  .clients {
    .card {
      position: relative;
      cursor: pointer;
      /* border: 1px solid rgba(162, 170, 164, 0.5); */
      outline: 1px solid rgba(162, 170, 164, 0.5);
      outline-offset: -1px;
      padding: 24px;
      color: ${color.DarkBlue};
      transition: all 0.5s ease-in;
      .visible {
        transition: all 0.5s ease-in;
        opacity: 1;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        left: 0;
        top: 0;
      }
      .link {
        display: flex;
        flex-direction: column;
        min-height: 58px;
        justify-content: flex-end;
        a {
          color: ${color.DarkBlue};
          display: flex;
          margin: 0 0 8px;
          align-items: center;
          font-size: 14px;
          text-decoration: none;
          &:hover{
            text-decoration: underline;
          }
          h5 {
            margin: 0;
          }
          img {
            width: 20px;
            height: 20px;
            margin: 0 8px 0 0;
          }
        }
      }
      img {
        height: 48px;
        margin-bottom: 10px;
      }
      h5 {
        margin: 24px 0 28px;
        min-height: 65px;
      }
      hr {
        border-bottom: 1px solid #d9d9d9;
        border-top: 0;
      }
      .hover {
        transition: all 0.5s ease-in;
        /* display: none; */
        opacity: 0;
        z-index: 5;
        position: relative;
        /* position: absolute; */
        /* width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        align-items: center;
        justify-content: center; */
      }
      &:hover {
        background-color: #fff;
        .visible {
          opacity: 0;
        }
        .hover {
          opacity: 1;
        }
      }
    }
  }
  ${media.medium`
    .left{
      br{
        display: none;
      }
    }
  `}
`;

const ParallaxWrapper01 = styled.div`
  overflow: hidden;
  width: 510px;
  position: absolute;
  right: 0;
  top: 200px;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
const ParallaxWrapper02 = styled.div`
  overflow: hidden;
  width: 398px;
  position: absolute;
  right: 220px;
  top: 436px;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

const HeroWrapper = styled.main`
  text-align: left;
  padding: 200px 0 180px;
  position: relative;
  .huge, h1{
    position: relative;
    z-index: 2;
  }
  .content {
    margin-top: 24px;
    z-index: 2;
    position: relative;
    h1 {
      margin: 0;
      display: flex;
      span {
        position: relative;
        /* width: 467px; */
        display: block;
        position: absolute;
        top: 20px;
        height: 24px;
        /* transition: all 0.5s ease-in-out; */
        background: ${colors.Orange};
        z-index: -1;
        animation: marker 1s forwards;
        animation-delay: 2s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }
    }
  }
  .hero-img-mb{
    display: none;
  }
  @keyframes marker {
    from {
      width: 0;
    }
    to {
      width: 296px;
    }
  }
  @media screen and (max-width:1330px) {
    ${ParallaxWrapper01}{
      display: none;
    }
    ${ParallaxWrapper02}{
      display: none;
    }
  }
  ${media.medium`
    padding: 72px 0;
    .content{
      margin: 8px 0 32px;
      h1{
        span {
          left: 48px;
          max-width: 192px;
          height: 16px;
          top: 14px;
        }
      }
    }
    .hero-img-mb{
      display: block;
      img{
        width: 100%;
      }
    }
  `}
`;

const Horizon = styled.div`
  /* border-top: 1px solid ${colors.White}; */
  display: flex;
  justify-content: space-between;
  padding: 120px 0;
  color: ${colors.White};
  position: relative;
  &::after {
    content: '';
    width: 100%;
    display: block;
    border-top: 1px solid ${colors.White};
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
      background-color: ${colors.White};
      margin-right: 8px;
    }
    h4 {
      margin: 0;
    }
  }
  ${media.medium`
    padding: 32px 0 72px;
  `}
`;
