import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import WrappedButton from 'app/components/WrappedButton'
import { Masthead } from '../SKFH/Masthead';
import * as color from 'styles/colors';
import { PageWrapper } from 'app/components/PageWrapper';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { Box } from '@mui/system';
import { useWindowSize, useWindowPosition } from '../../hooks'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fade from 'react-reveal/Fade';
import { HeroSlider } from './HeroSlider';
import AboutTheCase from './AboutTheCase'
import ParallaxImg from './ParallaxImg'
import Target from './Target'
import brickImg from './assets/brick-img.jpg'
import MakeADiffrernce from './assets/makeADiffrernce.jpg'
import BrandInsights from './assets/brandInsights.svg'
import CrossTalk from './assets/cross-talk.jpg'
import CrossXTalk from './assets/crossxtalk.svg'
import TalkImg from './assets/talk.jpg'
import Characteristic from './assets/design-characteristic.svg'
import talkBrick from './assets/talk-brick.jpg'
import guidelineImg from './assets/design-guideline.jpg'
import improving1 from './assets/improving-1.jpg'
import improving2 from './assets/improving-2.jpg'
import improving3 from './assets/improving-3.jpg'
import improving4 from './assets/improving-4.jpg'
import improving5 from './assets/improving-5.jpg'
import improving6 from './assets/improving-6.jpg'
import crossTalkMb from './assets/cross-talk-mb.svg'
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Mark } from '../HomePage/Mark';
export function SKFHPage() {
  const windowWidth = useWindowSize().width
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <Helmet>
        <title>專案實例</title>
        <meta
          name="description"
          content="We combine strategic design and product experience."
        />
      </Helmet>
      <NavBar bgColor={color.BGGrey} color={color.DarkBlue} />
      <ParallaxProvider>
        <div>
          <PageWrapper overflow={"true"} className="page-container">
            <Masthead />
          </PageWrapper>
          <PageWrapper overflow={"true"} className="slider-wrapper">
            <HeroSlider />
          </PageWrapper>
          <AboutTheCase />
          <ParallaxImg img={brickImg} alt="brickImg" height={windowWidth > 960 ? 600 : 280} />
          <Target />
          {/* <ParallaxImg img={MakeADiffrernce} alt="MakeADiffrernce" height={810}/> */}
          <SectionMakeADiffrernce>
            <img src={MakeADiffrernce} alt="MakeADiffrernce" />
          </SectionMakeADiffrernce>
          <DesignConcept>
            <PageWrapper overflow={"true"} className="page-container">
              <Horizon blackBg>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">DESIGN CONCEPT</h4>
                </div>
                <h4 className="eng">03</h4>
              </Horizon>
              <Fade bottom>
                <div className="huge eng">
                  Key Messages from Brand<br /> Insights
                </div>
                <h1>品牌洞察收斂</h1>
              </Fade>
            </PageWrapper>
            {windowWidth > 960 ?
              <BrandInsightImg>
                <Fade bottom>
                  <img src={BrandInsights} alt="BrandInsights" />
                </Fade>
              </BrandInsightImg> :
              <div className="insights-mb">
                <div className="list">
                  <div className="circle" />
                  <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                    <h1>沈澱累積</h1>
                    <h5 className="eng">時間發酵對話，穩健持續的突破進步</h5>
                  </Box>
                </div>
                <div className="list">
                  <div className="circle" />
                  <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                    <h1>保持初衷</h1>
                    <h5 className="eng">審視自己，創新的過程中不背棄精神與傳承理念</h5>
                  </Box>
                </div>
                <div className="list">
                  <div className="circle" />
                  <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                    <h1>簡單純粹</h1>
                    <h5 className="eng">新光忠於自己的腳步，不盲目追求趨勢</h5>
                  </Box>
                </div>
              </div>
            }
          </DesignConcept>
          <SectionCrossTalk>
            <PageWrapper overflow={"true"} className="page-container">
              <Fade bottom>
                <Box>
                  <img style={{ width: '100%' }} src={CrossTalk} alt="cross talk" />
                </Box>
              </Fade>
              <CrossXTalkImg>
                <img src={windowWidth > 960 ? CrossXTalk : crossTalkMb} alt="CrossXTalk" />
              </CrossXTalkImg>
              <Container maxWidth={'xl'} className="container-wrapper">
                <Grid container className="container">
                  <Grid xs={12} md={10} mdOffset={1}>
                    <Fade bottom>
                      <h1 className="">
                        <FeatureHead>
                          將金控品牌底蘊特色的精神、薪火相傳的理念，<div className='draw'>利用兼容並蓄的對話，開啟多元的交流</div>，產生共鳴。
                        </FeatureHead>
                      </h1>
                      <p>從內訪中發現進步跟改變並非一昧推翻既有的價值，過程中不能背棄原本精神跟傳承理念，對話除了傳承，也能促進不同觀點交流，不同的人相互合作，讓改變不是一句口號跟潮流。</p>
                    </Fade>
                  </Grid>
                </Grid>
              </Container>
            </PageWrapper>
          </SectionCrossTalk>
          <Parallax speed={-8}>
            <BottomImgs>
              <Grid md={6}>
                <img src={TalkImg} alt="TalkImg" />
              </Grid>
              <Grid md={6}>
                <img src={talkBrick} alt="talkBrick" />
              </Grid>
            </BottomImgs>
          </Parallax>
          <DesignConcept>
            <PageWrapper overflow={"true"} className="page-container">
              <Horizon blackBg>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">DESIGN CONCEPT</h4>
                </div>
                <h4 className="eng">04</h4>
              </Horizon>
              <Fade bottom>
                <div className="huge eng characteristic">
                  Design <br /> Characteristic
                </div>
                <h1>設計優化重點</h1>
              </Fade>
            </PageWrapper>
            {windowWidth > 960 ?
              <BrandInsightImg>
                <Fade bottom>
                  <img src={Characteristic} alt="Characteristic" />
                </Fade>
              </BrandInsightImg> :
              <div className="insights-mb characteristic">
                <div className="list">
                  <div className="circle" />
                  <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                    <h1>提升行動體驗</h1>
                    <h5 className="eng">重新建構資訊佈局，讓資訊更清晰閱讀</h5>
                  </Box>
                </div>
                <div className="list">
                  <div className="circle" />
                  <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                    <h1>資訊架構優化</h1>
                    <h5 className="eng">快速掌握站內資訊，減少摸索時間</h5>
                  </Box>
                </div>
                <div className="list">
                  <div className="circle" />
                  <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                    <h1>建立設計系統</h1>
                    <h5 className="eng">靈活運用，依需求快速組合、變化</h5>
                  </Box>
                </div>
              </div>
            }
          </DesignConcept>
          <ImprovingSection>
            <PageWrapper overflow={"true"} className="wrapper">
              <Grid container className="container">
                <Grid xs={12} md={10} mdOffset={1}>
                  <Fade bottom>
                    <div className="head">
                      <div className="huge en">Improving the Mobility <br />Experience</div>
                      <h1>
                        <FeatureHead>
                          <div className="draw">
                            提升行動體驗
                          </div>
                        </FeatureHead>
                      </h1>
                    </div>
                  </Fade>
                </Grid>
                <TwoColumnsArticle>
                  <Grid xs={12} md={5} mdOffset={1} lg={5} lgOffset={1} xl={5} xlOffset={1} className="left">
                    <Fade bottom>
                      <div className="text">
                        <div className="index">01</div>
                        <h3>資訊內容呈現</h3>
                        <h2>重新建構資訊佈局，讓資訊更清晰閱讀</h2>
                        <h3>官網中有多種顯示不同資訊的列表跟表格，我們將資訊列表做詳細的盤點，明確地劃分資訊間的層級關係去提高資訊的清晰度，來符合手機瀏覽體驗的特性，讓使用者可以上下捲動來查閱繁複的資訊。</h3>
                      </div>
                    </Fade>
                  </Grid>
                  <Grid xs={12} md={6} className="right">
                    <Fade bottom>
                      <img src={improving1} alt="improving1" />
                    </Fade>
                  </Grid>
                </TwoColumnsArticle>
                <TwoColumnsArticle>
                  <Grid xs={12} md={6} lg={6} xl={5} xlOffset={1} className="left">
                    <Fade bottom>
                      <img src={improving2} alt="improving2" />
                    </Fade>
                  </Grid>
                  <Grid xs={12} md={5} lg={5} className="right">
                    <Fade bottom>
                      <div className="text">
                        <div className="index">02</div>
                        <h3>跨裝置一致體驗</h3>
                        <h2>在不同裝置之間，都可以感受同樣的操作體驗</h2>
                        <h3>在設計網站中的元件模組時，把該模組在手機版的瀏覽體驗與應用方式納入優先的考量範圍中，讓桌機與手機之間能有效地呈現一致的資訊內容與操作體驗，減少兩者間的體驗斷點。</h3>
                      </div>
                    </Fade>
                  </Grid>
                </TwoColumnsArticle>
                <Grid xs={12} md={10} mdOffset={1} className="heads-up">
                  <Fade bottom>
                    <div className="head">
                      <div className="huge en">Information Architecture <br />Redesign</div>
                      <FeatureHead>
                        <div className="draw">
                          資訊架構優化
                        </div>
                      </FeatureHead>
                    </div>
                  </Fade>
                </Grid>
                <TwoColumnsArticle>
                  <Grid xs={12} md={5} mdOffset={1} className="left">
                    <Fade bottom>
                      <div className="index">03</div>
                      <h3>導覽系統</h3>
                      <h2>快速掌握站內資訊，減少摸索時間</h2>
                      <h3>導覽系統有如書的目錄，可幫助使用者判斷需要的內容，過去的官網導覽系統只揭露到第二層分類，經過優化後加入第三層，使用者可透過這邊的索引，快速判斷想要查看的資訊，不需要再點擊進頁面後才能判斷內容是否符合所需。</h3>
                    </Fade>
                  </Grid>
                  <Grid xs={12} md={6} className="right">
                    <Fade bottom>
                      <img src={improving3} alt="improving3" />
                    </Fade>
                  </Grid>
                </TwoColumnsArticle>
                <TwoColumnsArticle>
                  <Grid xs={12} md={6} lg={6} xl={5} xlOffset={1} className="left">
                    <Fade bottom>
                      <img src={improving4} alt="improving4" />
                    </Fade>
                  </Grid>
                  <Grid xs={12} md={5} lg={5} className="right">
                    <Fade bottom>
                      <div className="index">04</div>
                      <h3>提煉資訊重點</h3>
                      <h2>內容呈現輕重排序，提升取得效率</h2>
                      <h3>數據顯示網站中流量相當高部分為「股東專區」跟「最新消息」，所以我們在設計時也呼應需求，像是每個月的營運狀況、整個集團相關的最新消息，主動揭露於官網首頁，使用者在首頁瀏覽時就能看到關鍵重點。</h3>
                    </Fade>
                  </Grid>
                </TwoColumnsArticle>
                <Grid xs={12} md={10} mdOffset={1} className="heads-up">
                  <Fade bottom>
                    <div className="head">
                      <div className="huge en">A System for Consistency <br /> & Efficiency</div>
                      <FeatureHead>
                        <div className="draw">
                          建立設計系統
                        </div>
                      </FeatureHead>
                    </div>
                  </Fade>
                </Grid>
                <TwoColumnsArticle>
                  <Grid xs={12} md={5} mdOffset={1} className="left">
                    <Fade bottom>
                      <div className="index">05</div>
                      <h3>數位識別系統</h3>
                      <h2>打造豐富的視覺元素，呈現耳目一新的品牌印象</h2>
                      <h3>依循著品牌形象與價值主張，建構出豐富的視覺設計元素來塑造氛圍，我們延伸了一套完整的識別系統，包含色彩、字型、圖標、圖紋與影像調性，幫助金控品牌訊息傳遞上能更完整、獨特。</h3>
                    </Fade>
                  </Grid>
                  <Grid xs={12} md={6} className="right">
                    <Fade bottom>
                      <img src={improving5} alt="improving5" />
                    </Fade>
                  </Grid>
                </TwoColumnsArticle>
                <TwoColumnsArticle>
                  <Grid xs={12} md={6} lg={6} xl={5} xlOffset={1} className="left">
                    <Fade bottom>
                      <img src={improving6} alt="improving6" />
                    </Fade>
                  </Grid>
                  <Grid xs={12} md={5} lg={5} className="right">
                    <Fade bottom>
                      <div className="index">06</div>
                      <h3>元件模組化</h3>
                      <h2>靈活運用，依需求快速組合、變化</h2>
                      <h3>數據顯示網站中流量相當高部分為「股東專區」跟「最新消息」，所以我們在設計時也呼應需求，像是每個月的營運狀況、整個集團相關的最新消息，主動揭露於官網首頁，使用者在首頁瀏覽時就能看到關鍵重點。</h3>
                    </Fade>
                  </Grid>

                  {/* <Grid xs={12} md={5} lg={5} className="right">
                    <div className="index">06</div>
                    <h3>元件模組化</h3>
                    <h2>靈活運用，依需求快速組合、變化</h2>
                    <h3>藉由模組化設計除了打造金控品牌體驗ㄧ致性之外，在運營方面，未來也可因應內容需求彈性擴充與重複使用，提升後續維運效率。</h3>
                  </Grid> */}
                </TwoColumnsArticle>
              </Grid>
            </PageWrapper>
          </ImprovingSection>
          <GuidelineSection>
            <PageWrapper overflow={"true"} className="page-container">
              <Horizon blackBg>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">DESIGN GUIDELINE</h4>
                </div>
                <h4 className="eng">05</h4>
              </Horizon>
              <Grid container className="container">
                <Grid xs={12} md={8} mdOffset={2}>
                  <Fade bottom>
                    <h1>
                      為金控集團打造具一致性的品牌數位體驗
                    </h1>
                    <p>透過集合一系列預先建置、可重複利用的設計資產：色彩、元件、輔助圖形及圖標等，以及制定運用這些設計資產的原則，來協助集團各公司的內外部設計團隊能夠更快、更有效率地延續嶄新的金控品牌形象。</p>
                  </Fade>
                  <WrappedButton
                    text="VISIT WEBSITE LINK"
                    link="#"
                    isWhite={true}
                  />
                </Grid>
              </Grid>
            </PageWrapper>
            <img src={guidelineImg} alt="guidelineImg" />
          </GuidelineSection>
        </div>
      </ParallaxProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .page-container{
    max-width: 1520px;
  }
  .slider-wrapper{
    padding: 0;
  }
`

const GuidelineSection = styled.div`
  .container{
    text-align: center;
    h1{
      margin: 10px 0 0;
    }
    p{
      margin: 16px 0 32px;
    }
    a{
      margin: 0 0 96px;
      background-color: ${color.White};
    }
  }
  img{
    width: 100%;
  }
`

const TwoColumnsArticle = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 120px;
  .left{
    img{
      margin-left: 0;
    }
  }
  .right{

  }
  img{
    /* width: calc( 100% + 80px ); */
    max-width: 700px;
    width: 100%;
  }
  .index{
    font-size: 150px;
    font-family :'Poppins';
    color: rgba(255,255,255, .1);
    font-weight: 500;
    line-height: 150px;
    margin-top: 58px;
    /* max-width: 526px; */
  }
  h3{
    margin: 8px 0;
    /* max-width: 526px; */
  }
  h2{
    margin: 0 0 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid ${color.White};
    /* max-width: 526px; */
  }
  .text{
    /* max-width: 526px; */
    display: block;
  }
  .MuiGrid2-root{
    position: relative;
    /* flex-grow: 1;
    flex-basis: 0;
    min-width: 0; */
  }
  ${media.xlarge`
    img{
      width: calc( 100% + 80px );
    }
    .left{
      img{
        margin-left: -80px;
        position: absolute;
        right: 0;
      }
    }
  `}
  ${media.large`
    .left{
      img{
        margin-left: -80px;
      }
    }
  `}
  ${media.medium`
    flex-direction: column;
    .left{
      order: 1;
    }
  `}
`
const ImprovingSection = styled.div`
  overflow: hidden;
  .wrapper{
    max-width: calc( 100vw - 80px );
    padding: 130px 0 40px;
    color: ${color.White};
    background-color: #3C4851;
    overflow: visible;
  }
  .head{
    border-left: 8px solid ${color.White};
    padding-left: 48px;
    margin-bottom: 90px;
    h1{
      margin: 5px 0 0;
    }
  }
  .heads-up{
    margin-top: 110px;
  }
  ${media.xlarge`
    .wrapper{
      max-width: calc( 100vw - 80px );
    }
  `}
  ${media.large`
    .wrapper{
      max-width: calc( 100vw - 80px );
    }
  `}
  ${media.medium`
    .wrapper{
      max-width: initial;
      padding: 32px 20px 86px;
    }
    .head{
      margin-bottom: 32px;
      padding-left: 16px;
      h1{
        font-size: 22px;
        line-height: 33px;
      }
    }
  `}
`

const CrossXTalkImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px auto 64px;
  overflow: hidden;
  ${media.medium`
    margin: 32px 0;
  `}
`

const SectionCrossTalk = styled.div`
  background-color: #3C4851;
  color: ${color.White};
  padding: 96px 0 0;
  position: relative;
  z-index: 1;
  .container{
    border-left: 1px solid ${color.White};
    border-right: 1px solid ${color.White};
    margin-bottom: 144px;
    h1{
      margin: 0 auto 24px;
      text-align: center;
      max-width: 862px;
    }
    p{
      text-align: center;
      max-width: 744px;
      margin: 0 auto 24px;
    }
  }
  ${media.medium`
    padding: 20px 0 0;
    .container-wrapper{
      padding: 0!important;
    }
    .container{
      padding: 20px;
      margin: 0 0 48px;
      h1{
        margin-bottom: 16px;
      }
      p{
        margin: 0;
      }
    }
  `}
`

const BottomImgs = styled.div`
  display: flex;
  margin-bottom: 80px;
  img{
    width: 100%;
  }
  ${media.medium`
    flex-direction: column;
  `}
`

const BrandInsightImg = styled.div`
  display: flex;
  margin: 58px -148px 168px;
  img{
    width: 100%;
  }
`
const DesignConcept = styled.div`
  color: ${color.DarkBlue};
  overflow: hidden;
  h1{
    margin: 12px 0 0;
  }
  .insights-mb{
    margin: 40px 20px 48px;
    .list{
      display: flex;
      flex-direction: row;
      margin-bottom: 30px;
      .circle{
        width: 64px;
        height: 64px;
        background-color: #E73523;
        border-radius: 100%;
        margin-right: 12px;
      }
      h1{
        margin: 0 0 4px;
      }
      h5{
        margin: 0;
      }
    }
    &.characteristic{
      .circle{
        background-color: #3C4851;
      }
    }
  }
  .characteristic{
    br{
      display: none;
    }
  }
  ${media.medium`
    br{
      display: none;
    }
    h1{
      margin: 8px 0 0;
    }
    .characteristic{
      br{
        display: block;
      }
    }
  `}
`

const Horizon = styled.div<{
  blackBg?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 120px 0;
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
    padding: 64px 0 72px;
  `}
`;

const SectionMakeADiffrernce = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 80px;
  img{
    width: 100%;
  }
  ${media.medium`
    margin-bottom: 0;
  `}
`
const PageController = styled.div`
  position: absolute;
  top: 0%;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 0 48px;
  display: flex;
  gap: 24px;
  z-index: 11;
  button{
    cursor: pointer;
    border: 0;
    background: none;
    margin: 0;
    padding: 0;
  }
`


const FeatureHead = styled.h1`
  .draw::after{
    content: '';
    border-bottom: 15px solid #E73523;
  }
  .draw{
        display: inline;
        background-size: 1px 16px;
        box-shadow: inset 0 21px #3C4851, inset 0px 54px #E73523;
    }
  ${media.large`
    margin-bottom: -8px;
  `}
  ${media.medium`
    display: block;
    margin-bottom: -8px;
    /* max-width: 320px; */
    
    .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 21px #3C4851, inset 0px 54px #E73523;
    }
  `}
`