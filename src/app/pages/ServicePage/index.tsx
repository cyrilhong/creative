import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import * as colors from 'styles/colors';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components/macro';
import { useForm, ValidationError } from '@formspree/react';
import Box from '@mui/material/Box';
// import { Grid, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import * as color from 'styles/colors';
import arrowBtn from './assets/arrow-btn.svg';
import Magnifier from './assets/magnifier.svg';
import hero1 from './assets/hero-1.jpg';
import hero2 from './assets/hero-2.jpg';
import designProcess from './assets/img-design-process.png';
import posters from './assets/hero-posters.jpg';
import roundArrowBtn from './assets/round-arrow-btn.svg';
import bgSecond from './assets/bg-second.jpg';
import arrowBlack from './assets/arrow-black.svg';
import { media } from 'styles/media';

export function ServicePage() {
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

  return (
    <ParallaxProvider>
      <Helmet>
        <title>Customer</title>
        <meta
          name="description"
          content="A React Boilerplate application ServicePage"
        />
      </Helmet>
      <NavBar />
      <div className="bg-service">
        <PageWrapper>
          <HeroWrapper>
            <div className="eng huge">
              <Fade bottom cascade duration={2000} delay={100}>
                Experience Design
              </Fade>
            </div>
            <div className="eng huge">
              <Fade bottom cascade duration={2000} delay={100}>
                driven by prototyping
              </Fade>
            </div>
            <div className="eng huge">
              <Fade bottom cascade duration={2000} delay={100}>
                & process.
              </Fade>
            </div>
            <div className="content">
              <h1 style={{ display: 'block' }}>
                <Fade bottom duration={2000} delay={100}>
                  <Mark />
                  我們透過完善的設計流程與反覆驗證，
                </Fade>
                <Fade bottom duration={2000} delay={100}>
                  幫助客戶實現願景
                </Fade>
              </h1>
            </div>
            <ParallaxWrapper01>
              <Parallax scale={[1, 2]}>
                <img src={hero2} alt="hero2" />
              </Parallax>
            </ParallaxWrapper01>
            <ParallaxWrapper02>
              <Parallax scale={[1, 1.5]}>
                <img src={hero1} alt="hero1" />
              </Parallax>
            </ParallaxWrapper02>
          </HeroWrapper>
          <Horizon>
            <div className="title">
              <div className="dot" />
              <h4 className="eng">PROCESS</h4>
            </div>
            <h4 className="eng">01</h4>
          </Horizon>

          <ProcessSection>
            <Grid container>
              <Grid xs={4}>
                <Fade bottom cascade duration={2000} delay={100}>
                  <div className="huge eng">Tailored</div>
                  <div className="huge eng">Design</div>
                  <div className="huge eng">Process</div>
                  <h1 style={{ margin: 0 }}>客製化設計流程</h1>
                </Fade>
              </Grid>
              <Grid xs={8} padding={0}>
                <h4 style={{ margin: '0 0 48px' }}>
                  假字假字假字假字探索創新原點，打造關鍵場景情境，跨領域整合品牌、創意、互動，建構產品解決方案。探索創新原點，打造關鍵場景情境，跨領域整合品牌、創意、互動，建構產品解決方案。探索創新原點，打造關鍵場景情境，跨領域整合品牌、創意、互動，建構產品解決方案。
                </h4>
                <Fade bottom cascade duration={2000} delay={100}>
                  <img src={designProcess} alt="design-process" />
                </Fade>
              </Grid>
            </Grid>
          </ProcessSection>
        </PageWrapper>

        <SecondSection>
          <PageWrapper>
            <Grid container>
              <Grid xs={12}>
                <ParallaxImg>
                  <Parallax scale={[1, 1.5]}>
                    <img src={posters} alt="posters" />
                  </Parallax>
                </ParallaxImg>
              </Grid>
            </Grid>
            <Horizon style={{ paddingTop: '72px' }}>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">SERVICES</h4>
              </div>
              <h4 className="eng">02</h4>
            </Horizon>
            <Grid container spacing={0}>
              <Grid xs={6}>
                <div className="huge eng" style={{ paddingRight: '40px' }}>
                  Service and Product Strategy
                </div>
                <h1>服務與產品策略</h1>
                <Box maxWidth={'400px'}>
                  <h4>
                    分析脈絡趨勢、挖掘使用者需求，提供全方位體驗設計諮詢服務，為您的產品制定體驗策略方針
                  </h4>
                </Box>
                <Grid xs={10}>
                  <ItemList>
                    <ul>
                      <li>
                        <Head>
                          <h3>市場研究與競爭分析</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </Head>
                      </li>
                      <li>
                        <Head>
                          <h3>產品定位與價值主張</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </Head>
                      </li>
                      <li>
                        <Head>
                          <h3>使用者研究</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </Head>
                      </li>
                    </ul>
                  </ItemList>
                </Grid>
              </Grid>
              <Grid xs={6}>
                <div className="huge eng">Core Experience Planning</div>
                <h1>核心體驗規劃</h1>
                <Box maxWidth={'400px'}>
                  <h4>
                    從用戶洞見出發，制定體驗策略規劃落實設計創新，建立以使用者中心的使用經驗。
                  </h4>
                </Box>
                <Grid xs={10}>
                  <ItemList>
                    <ul>
                      <li>
                        <Head>
                          <h3>體驗流程規劃</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </Head>
                      </li>
                      <li>
                        <Head>
                          <h3>設計概念驗證</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </Head>
                      </li>
                      <li>
                        <Head>
                          <h3>概念測試與需求驗證</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </Head>
                      </li>
                    </ul>
                  </ItemList>
                </Grid>
              </Grid>
            </Grid>

            <DigitalProduct>
              <Grid container>
                <Grid xs={12}>
                  <ParallaxImg>
                    <Parallax scale={[1, 1.5]}>
                      <img src={bgSecond} alt="bgSecond" />
                    </Parallax>
                  </ParallaxImg>
                </Grid>
              </Grid>

              <Grid container spacing={0} marginTop="72px">
                <Grid xs={5}>
                  <div className="huge eng" style={{ paddingRight: '40px' }}>
                    Digial Product Design
                  </div>
                  <h1 style={{ margin: 0 }}>數位產品設計</h1>
                  <Box maxWidth={'400px'}>
                    <h4>
                      探索創新原點，打造關鍵場景情境，跨領域整合品牌、創意、互動，建構產品解決方案。
                    </h4>
                  </Box>
                </Grid>
                <Grid xs={6} xsOffset={1}>
                  <Grid xs={10}>
                    <ItemList>
                      <ul>
                        <li>
                          <Head>
                            <h3>App 規劃與設計</h3>
                            <img src={roundArrowBtn} alt="button" />
                          </Head>
                        </li>
                        <li>
                          <Head>
                            <h3>網站規劃與設計</h3>
                            <img src={roundArrowBtn} alt="button" />
                          </Head>
                        </li>
                        <li>
                          <Head>
                            <h3>跨平台介面設計</h3>
                            <img src={roundArrowBtn} alt="button" />
                          </Head>
                          <h4>
                            從用戶洞見出發，制定體驗策略規劃落實設計創新，建立以使用者中心的使用經驗。
                          </h4>
                        </li>
                      </ul>
                    </ItemList>
                  </Grid>
                </Grid>
              </Grid>
            </DigitalProduct>
          </PageWrapper>
        </SecondSection>
        <SectionIdea>
          <div className="wrapper">
            <div className="content">
              <img className="magnifier" src={Magnifier} alt="Magnifier" />
              <h1 className="eng">
                We believe success comes with responsibility.
              </h1>
              <h2>我們相信成功伴隨著責任，看看我們的精彩案例</h2>
              <CTA href={'#'}>
                <h4 className="eng">OUR WORKS</h4>
                <img src={arrowBlack} alt="arrow" />
              </CTA>
            </div>
          </div>
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
  .more-client {
    display: grid;
    grid-gap: 44px;
    grid-template-columns: repeat(6, 1fr);
    img {
      height: 46px;
    }
  }
  .wrapper {
    margin: 0 auto;
    width: 100%;
    padding: 0 80px;
    .content {
      margin: 0 auto;
      max-width: 1760px;
      padding: 0 80px 30px;
      box-sizing: content-box;
      border-left: 1px solid ${colors.DarkBlue};
      border-right: 1px solid ${colors.DarkBlue};
      h1 {
        margin-top: 40px;
        margin-bottom: 16px;
      }
      h2 {
        margin: 16px 0 48px;
      }
      ${media.large`
        padding: 0 60px
      `}
      ${media.medium`
        padding: 0 20px;
      `};
    }
  }
`;

const OurClients = styled.div`
  margin-top: 40px;
  /* height: 500px; */
  padding-bottom: 200px;
  background-color: ${color.DarkBlue};
  color: ${color.White};
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
        a {
          color: ${color.DarkBlue};
          display: flex;
          margin: 0 0 8px;
          align-items: center;
          font-size: 14px;
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
      }
      hr {
        border-bottom: 1px solid #d9d9d9;
        border-top: 0;
      }
      .hover {
        transition: all 0.5s ease-in;
        /* display: none; */
        opacity: 0;
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
  bottom: 80px;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

const HeroWrapper = styled.main`
  text-align: left;
  padding: 200px 0 174px;
  position: relative;
  .content {
    margin-top: 24px;
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
        background: ${colors.Yellow};
        z-index: -1;
        animation: marker 1s forwards;
        animation-delay: 2s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }
    }
  }
  @keyframes marker {
    from {
      width: 0;
    }
    to {
      width: 414px;
    }
  }
`;

const Horizon = styled.div`
  /* border-top: 1px solid ${colors.White}; */
  display: flex;
  justify-content: space-between;
  padding: 120px 0;
  color: ${colors.DarkBlue};
  position: relative;
  &::after {
    content: '';
    width: 100%;
    display: block;
    border-top: 1px solid ${colors.DarkBlue};
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
      background-color: ${colors.DarkBlue};
      margin-right: 8px;
    }
    h4 {
      margin: 0;
    }
  }
`;

const ProcessSection = styled.div`
  padding-bottom: 120px;
  img {
    width: 100%;
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    border-bottom: 1px solid ${color.AJABlue};
    align-items: center;
    padding-bottom: 24px;
    img {
      cursor: pointer;
      width: 48px;
    }
    h4 {
      margin: 0 0 4px;
      font-weight: 100;
    }
    h2 {
      margin: 0;
    }
  }
`;

const ParallaxImg = styled.div`
  overflow: hidden;
  /* margin: 0 -80px; */
  img {
    width: 100%;
  }
`;

const SecondSection = styled.div`
  padding: 76px 0 0;
  background-color: ${color.BGBeige};
`;

const ItemList = styled.div`
  ul {
    padding: 0;
    li {
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      list-style: none;
      border-top: 1px solid ${color.DarkBlue};
      &:nth-last-child(1) {
        border-bottom: 1px solid ${color.DarkBlue};
      }
      h3 {
        margin: 0;
      }
      h4 {
        padding-right: 72px;
      }
    }
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DigitalProduct = styled.div`
  margin-top: 120px;
  padding-bottom: 200px;
`;

const CTA = styled.a`
  width: 242px;
  background: initial;
  border: 1px solid ${color.DarkBlue};
  border-radius: 100px;
  padding: 16px 32px;
  display: flex;
  color: ${color.DarkBlue};
  margin: 32px auto 0;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  h4 {
    margin: 0;
  }
  img {
    margin-left: 4px;
  }
`;
