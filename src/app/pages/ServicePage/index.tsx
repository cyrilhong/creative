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
import { Container } from '@mui/material';
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
import { isDesktop, useWindowSize } from '../../hooks'
import WrappedButton from 'app/components/WrappedButton'
import heroImgMb from './assets/heroImgMb.png'
import Lottie from 'lottie-react';
import ourWorks from './assets/our-works.json'
import Collapse from 'app/components/Collapse'
import SectionIdea from './SectionIdea'
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
  const windowWidth = useWindowSize().width

  return (
    <ParallaxProvider>
      <Helmet>
        <title>Customer</title>
        <meta
          name="description"
          content="A React Boilerplate application ServicePage"
        />
      </Helmet>
      <NavBar bgColor={color.BGGreen} color={color.DarkBlue} />
      <div className="bg-service">
        <PageWrapper>
          <HeroWrapper>
            {isDesktop() ?
              <>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    Experience Design
                  </Fade>
                </div>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    driven by prototyping
                  </Fade>
                </div>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    & process.
                  </Fade>
                </div>
                <div className="content">
                  <Fade bottom duration={500} delay={100}>
                    <h1>
                      我們透過完善的設計流程與反覆驗證，
                    </h1>
                    <h1>
                      <Mark />
                      幫助客戶實現願景
                    </h1>
                  </Fade>
                </div>
              </> :
              <>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    Experience Design
                  </Fade>
                </div>
                <div className="eng huge">
                  <Fade bottom cascade duration={500} delay={100}>
                    Driven By Process.
                  </Fade>
                </div>
                <div className="content">
                  <Fade bottom duration={500} delay={100}>
                    <h1>
                      我們透過完善的設計流程與反覆驗證，
                    </h1>
                    <h1>
                      <Mark />幫助客戶實現願景
                    </h1>
                  </Fade>
                </div>
              </>
            }
            <div className="hero-img-mb">
              <img src={heroImgMb} alt="heroImgMb" />
            </div>
            <Grid style={{ position: 'absolute', width: '100%', top: '200px' }} container spacing={0} rowSpacing={0}>
              <Grid xs={5} xsOffset={7}>
                <ParallaxWrapper01>
                  <Parallax speed={12}>
                    <Fade bottom duration={500} delay={500}>
                      <img src={hero2} alt="hero2" />
                    </Fade>
                  </Parallax>
                </ParallaxWrapper01>
              </Grid>
              <Grid xs={4} xsOffset={6} position="relative">
                <ParallaxWrapper02>
                  <Parallax speed={8}>
                    <Fade bottom duration={500} delay={600}>
                      <img src={hero1} alt="hero1" />
                    </Fade>
                  </Parallax>
                </ParallaxWrapper02>
              </Grid>
            </Grid>
          </HeroWrapper>

          <Horizon pt="40px">
            <div className="title">
              <div className="dot" />
              <h4 className="eng">PROCESS</h4>
            </div>
            <h4 className="eng">01</h4>
          </Horizon>

          <ProcessSection>
            <Grid container>
              <Grid xs={12} md={4}>
                {isDesktop() ? <Fade bottom cascade duration={500} delay={100}>
                  <div className="huge eng">Tailored</div>
                  <div className="huge eng">Design</div>
                  <div className="huge eng">Process</div>
                  <h1 style={{ margin: 0 }}>客製化設計流程</h1>
                </Fade> :
                  <Fade bottom duration={500} delay={100}>
                    <div className="huge eng">Tailored Design</div>
                    <div className="huge eng">Process</div>
                    <h1 style={{ margin: 0 }}>客製化設計流程</h1>
                  </Fade>
                }
              </Grid>
              <Grid xs={12} md={8} padding={0}>
                <h4>
                  我們相信每個服務與產品的誕生都是一段連續的過程，從探索研究、創新概念到設計落實，全程都應該對應商業目標，用戶需求與市場期待。我們善於傾聽、縝密而細心的爬梳情境，深化為每一個獨特而且鮮明的洞察，進而落實到每位用戶手上愉悅且讚嘆的產品體驗，我們對待每一個承接的項目都無比認真，不忘初心方得始終。
                </h4>
                <Fade bottom cascade duration={500} delay={100}>
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
                  <Parallax speed={-15}>
                    <img src={posters} alt="posters" />
                  </Parallax>
                </ParallaxImg>
              </Grid>
            </Grid>
            <Horizon>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">SERVICES</h4>
              </div>
              <h4 className="eng">02</h4>
            </Horizon>
            <Grid container spacing={0}>
              <Grid xs={12} md={6}>
                <div className="huge eng title">
                  Service and Product Strategy
                </div>
                <h1>產品與體驗策略</h1>
                <Grid xs={12} md={10}>
                  <Box maxWidth={`${windowWidth > 899 ? '400px' : 'initial'}`}>
                    <h4 className='subtitle'>
                      分析脈絡趨勢、挖掘使用者需求，我們提供全方位體驗設計諮詢服務，為你的產品制定體驗策略方針。
                    </h4>
                  </Box>
                  <ItemList>
                    <Collapse list={[
                      {
                        title: "市場研究與競爭分析",
                        answer: `透過系統的設計方法，從競品、產業、用戶等不同面向，評估現有產品，定義產品設計方向。`,
                        expanded: false
                      },
                      {
                        title: "產品定位與價值主張",
                        answer: `依循研究脈絡與洞見，規劃在競爭市場上的產品優勢，在市場上建構獨特價值的設計挑戰。`,
                        expanded: false
                      },
                      {
                        title: "使用者研究",
                        answer: `深入使用者生活領域，深度的觀察、訪談，從使用者身上汲取洞見建立觀點。`,
                        expanded: false
                      },
                      {
                        title: "設計思考工作坊",
                        answer: `鼓勵參與、共創、凝聚共識找出解決對策的手法，藉以擬定策略與發展方向。`,
                        expanded: false
                      },
                    ]} />
                  </ItemList>
                </Grid>
              </Grid>
              <Grid xs={12} md={6} className="core">
                <div className="huge eng title">Core Experience Planning</div>
                <h1>核心體驗規劃</h1>
                <Grid xs={12} md={10}>
                  <ItemList>
                    <Box maxWidth={`${windowWidth > 899 ? '400px' : 'initial'}`}>
                      <h4 className='subtitle'>
                        從用戶洞見出發，制定體驗策略並落實設計創新，建立以使用者中心的使用經驗。
                      </h4>
                    </Box>
                    <Collapse list={[
                      {
                        title: "體驗流程規劃",
                        answer: `脈絡分析後轉化落實，規劃完整的產品主功能框架與核心價值，串連為順暢易用的使用體驗設計。`,
                        expanded: false
                      },
                      {
                        title: "網站規劃與設計",
                        answer: `將發展的雛形與設計概念，在設計過程中經歷探索與收斂，從真實用戶的測試驗證後作為修改與調整依據，進而交付與開發實作。`,
                        expanded: false
                      },
                      {
                        title: "概念測試與需求驗證",
                        answer: `原型測試快速測試產品概念，第一手使用回饋幫助產品更貼近市場需求。`,
                        expanded: false
                      },
                    ]} />
                  </ItemList>
                </Grid>
              </Grid>
            </Grid>

            <DigitalProduct>
              {/* <Grid container>
                <Grid xs={12}>
                  <ParallaxImg>
                    <Parallax scale={[1, 1.05]}>
                      <img src={bgSecond} alt="bgSecond" />
                    </Parallax>
                  </ParallaxImg>
                </Grid>
              </Grid> */}

              <Grid container spacing={0} marginTop={isDesktop() ? '72px' : '58px'}>
                <Grid xs={12} md={5}>
                  <div className="huge eng" style={{ paddingRight: '40px' }}>
                    Digial Product Design
                  </div>
                  <h1 style={{ margin: '8px 0' }}>數位產品設計</h1>
                  <Box maxWidth={'400px'}>
                    <h4>
                      探索創新原點，打造關鍵場景情境，跨領域整合品牌、創意、互動，建構產品解決方案。
                    </h4>
                  </Box>
                </Grid>
                <Grid xs={12} md={6} xsOffset={0} mdOffset={1}>
                  <Grid xs={12} md={10}>
                    <ItemList>
                      <Collapse list={[
                        {
                          title: "品牌定位與溝通策略",
                          answer: `因索創新原點，量身打造關鍵場景情境，跨領域整合品牌、創意、互動，建構符合產品解決方案。`,
                          expanded: false
                        },
                        {
                          title: "APP 使用者介面設計",
                          answer: `UI 介面設計，展現操作流程上的功能、顧及使用的便利性與產品設計美學，落實介面元件與設計系統的完善。`,
                          expanded: false
                        },
                        {
                          title: "網站規劃設計與前端工程",
                          answer: `因應服務定位與需求建構網站，包含資訊架構、導覽動線、版面、互動行為與內容規劃。`,
                          expanded: false
                        },
                        {
                          title: "跨平台裝置介面設計",
                          answer: `適應多樣的場景與使用行為，發展線上或線下的使用介面，諸如 ATM、Kiosk、平板或各項終端設備介面設計。`,
                          expanded: false
                        },
                      ]} />
                    </ItemList>
                  </Grid>
                </Grid>
              </Grid>
            </DigitalProduct>
          </PageWrapper>
        </SecondSection>
        <SectionIdea />
      </div>
    </ParallaxProvider>
  );
}




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
  width: 100%;
  /* position: absolute; */
  /* right: 0;
  top: 200px; */
  max-width: 510px;
  img {
    object-fit: cover;
    width: 100%;
  }
  ${media.medium`
    display: none;
  `}
`;
const ParallaxWrapper02 = styled.div`
  /* overflow: hidden; */
  width: 100%;
  /* position: absolute; */
  /* right: 220px; */
  /* bottom: 80px; */
  max-width: 398px;
  margin-top: -174px;
  /* bottom: -80px; */
  img {
    object-fit: cover;
    width: 100%;
  }
`;

const HeroWrapper = styled.main`
  text-align: left;
  padding: 200px 0 134px;
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
        background: ${colors.Yellow};
        z-index: -1;
        animation: marker 1s forwards;
        animation-delay: 1.2s;
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
  @media screen and (max-width:1440px) {
    /* ${ParallaxWrapper01}{
      display: none;
    } */
    ${ParallaxWrapper02}{
      display: none;
    }
  }
  ${media.large`
    padding: 200px 0 4px;
  `}
  ${media.medium`
    padding: 72px 0;
    .content{
      margin: 8px 0 32px;
      h1{
        span {
          left: 0;
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

const Horizon = styled.div<{
  pt?: string;
}>`
  /* border-top: 1px solid ${colors.White}; */
  display: flex;
  justify-content: space-between;
  padding-bottom: 120px;
  padding-top: ${prop => prop.pt ? prop.pt : '120px'};
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
    letter-spacing: 0.1rem;
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
  ${media.medium`
    padding: 32px 0 72px;
  `}
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

    h2 {
      margin: 0;
    }
  }
  h4 {
    margin: 0 0 72px;
    /* font-weight: 100; */
  }
  ${media.large`
    .huge{
      font-size: 64px;
      line-height: 80px;
    }
  `}
  ${media.medium`
    padding-bottom: 32px;
    .huge{
      font-size: 32px;
      line-height: 40px;
    }
    h4{
      margin: 48px 0 32px;
      font-size: 16px;
    }
  `}
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
  .title{
    padding-right: 40px;
    font-size: 60px;
    line-height: 75px;
  }
  h1{
    margin: 8px 0;
  }
  h4{
    margin: 0 0 48px;
  }
  ${Horizon}{
    padding: 72px 0 40px;
  }
  ${media.medium`
    padding: 24px 0 0;
    ${Horizon}{
      padding: 32px 0 36px;
    }
    .huge{
      margin-top: 32px;
    }
    h4{
      margin: 0 0 32px;
    }
    .title{
      padding-right: 0;
      font-size: 32px;
      line-height: 40px;
      margin-top: 0;
    }
    .subtitle{
      font-size: 16px;
    }
    h3{
      font-size: 18px;
      line-height: 27px;
    }
    .core{
      margin-top: 48px;
    }
  `}
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
  h4{
    margin: 0;
  }
  ${media.medium`
    padding-bottom: 56px;
    margin-top: 32px;
  `}
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
