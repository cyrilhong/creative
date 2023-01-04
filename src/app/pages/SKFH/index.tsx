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
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
export function SKFHPage() {
  const windowWidth = useWindowSize().width
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>專案實例</title>
        <meta
          name="description"
          content="We combine strategic design and product experience."
        />
      </Helmet>
      <NavBar bgColor={color.BGGrey} color={color.DarkBlue} />
      <ParallaxProvider>
        <div className="">
          <PageWrapper overflow={"true"}>
            <Masthead />
            <HeroSlider />
          </PageWrapper>
          <AboutTheCase />
          <ParallaxImg img={brickImg} alt="brickImg" height={600} />
          <Target />
          {/* <ParallaxImg img={MakeADiffrernce} alt="MakeADiffrernce" height={810}/> */}
          <SectionMakeADiffrernce>
            <img src={MakeADiffrernce} alt="MakeADiffrernce" />
          </SectionMakeADiffrernce>
          <DesignConcept>
            <PageWrapper overflow={"true"}>
              <Horizon blackBg>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">DESIGN CONCEPT</h4>
                </div>
              </Horizon>
              <div className="huge eng">
                Key Messages from Brand<br /> Insights
              </div>
              <h1>品牌洞察收斂</h1>
            </PageWrapper>
            <BrandInsightImg>
              <img src={BrandInsights} alt="BrandInsights" />
            </BrandInsightImg>
          </DesignConcept>
          <SectionCrossTalk>
            <PageWrapper overflow={"true"}>
              <Box>
                <img style={{ width: '100%' }} src={CrossTalk} alt="cross talk" />
              </Box>
              <CrossXTalkImg>
                <img src={CrossXTalk} alt="CrossXTalk" />
              </CrossXTalkImg>
              <Container maxWidth={'xl'} className="">
                <Grid container className="container">
                  <Grid xs={12} md={10} mdOffset={1}>
                    <h1 className="">
                      將金控品牌底蘊特色的精神、薪火相傳的理念，利用兼容並蓄的對話，開啟多元的交流，產生共鳴。
                    </h1>
                    <p>從內訪中發現進步跟改變並非一昧推翻既有的價值，過程中不能背棄原本精神跟傳承理念，對話除了傳承，也能促進不同觀點交流，不同的人相互合作，讓改變不是一句口號跟潮流。</p>
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
            <PageWrapper overflow={"true"}>
              <Horizon blackBg>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">DESIGN CONCEPT</h4>
                </div>
              </Horizon>
              <div className="huge eng">
                Design Characteristic
              </div>
              <h1>設計優化重點</h1>
            </PageWrapper>
            <BrandInsightImg>
              <img src={Characteristic} alt="Characteristic" />
            </BrandInsightImg>
          </DesignConcept>
          <ImprovingSection>
            <PageWrapper overflow={"true"} className="wrapper">
              <Grid container className="container">
                <Grid xs={12} md={10} mdOffset={1}>
                  <div className="head">
                    <div className="huge en">Improving the Mobility <br />Experience</div>
                    <h1>提升行動體驗</h1>
                  </div>
                </Grid>
                <TwoColumnsArticle>
                  <Grid xs={12} md={5} mdOffset={1} lg={5} lgOffset={1} className="left">
                    <div className="index">01</div>
                    <h3>資訊內容呈現</h3>
                    <h2>重新建構資訊佈局，讓資訊更清晰閱讀</h2>
                    <h3>官網中有多種顯示不同資訊的列表跟表格，我們將資訊列表做詳細的盤點，明確地劃分資訊間的層級關係去提高資訊的清晰度，來符合手機瀏覽體驗的特性，讓使用者可以上下捲動來查閱繁複的資訊。</h3>
                  </Grid>
                  <Grid xs={12} md={6} className="right">
                    <img src={improving1} alt="improving1" />
                  </Grid>
                </TwoColumnsArticle>
                <TwoColumnsArticle>
                  <Grid xs={12} md={6} lg={6} xl={5} xlOffset={1} className="left">
                    <img src={improving2} alt="improving2" />
                  </Grid>
                  <Grid xs={12} md={5} lg={5} className="right">
                    <div className="index">02</div>
                    <h3>跨裝置一致體驗</h3>
                    <h2>在不同裝置之間，都可以感受同樣的操作體驗</h2>
                    <h3>在設計網站中的元件模組時，把該模組在手機版的瀏覽體驗與應用方式納入優先的考量範圍中，讓桌機與手機之間能有效地呈現一致的資訊內容與操作體驗，減少兩者間的體驗斷點。</h3>
                  </Grid>
                </TwoColumnsArticle>
                <Grid xs={12} md={10} mdOffset={1} className="heads-up">
                  <div className="head">
                    <div className="huge en">Information Architecture <br />Redesign</div>
                    <h1>資訊架構優化</h1>
                  </div>
                </Grid>
                <TwoColumnsArticle>
                  <Grid xs={12} md={5} mdOffset={1} className="left">
                    <div className="index">03</div>
                    <h3>導覽系統</h3>
                    <h2>快速掌握站內資訊，減少摸索時間</h2>
                    <h3>導覽系統有如書的目錄，可幫助使用者判斷需要的內容，過去的官網導覽系統只揭露到第二層分類，經過優化後加入第三層，使用者可透過這邊的索引，快速判斷想要查看的資訊，不需要再點擊進頁面後才能判斷內容是否符合所需。</h3>
                  </Grid>
                  <Grid xs={12} md={6} className="right">
                    <img src={improving3} alt="improving3" />
                  </Grid>
                </TwoColumnsArticle>
                <TwoColumnsArticle>
                  <Grid xs={12} md={6} lg={6} xl={5} xlOffset={1} className="left">
                    <img src={improving4} alt="improving4" />
                  </Grid>
                  <Grid xs={12} md={5} lg={5} className="right">
                    <div className="index">04</div>
                    <h3>提煉資訊重點</h3>
                    <h2>內容呈現輕重排序，提升取得效率</h2>
                    <h3>數據顯示網站中流量相當高部分為「股東專區」跟「最新消息」，所以我們在設計時也呼應需求，像是每個月的營運狀況、整個集團相關的最新消息，主動揭露於官網首頁，使用者在首頁瀏覽時就能看到關鍵重點。</h3>
                  </Grid>
                </TwoColumnsArticle>
                <Grid xs={12} md={10} mdOffset={1} className="heads-up">
                  <div className="head">
                    <div className="huge en">A System for Consistency <br /> & Efficiency</div>
                    <h1>資訊架構優化</h1>
                  </div>
                </Grid>
                <TwoColumnsArticle>
                  <Grid xs={12} md={5} mdOffset={1} className="left">
                    <div className="index">05</div>
                    <h3>數位識別系統</h3>
                    <h2>打造豐富的視覺元素，呈現耳目一新的品牌印象</h2>
                    <h3>依循著品牌形象與價值主張，建構出豐富的視覺設計元素來塑造氛圍，我們延伸了一套完整的識別系統，包含色彩、字型、圖標、圖紋與影像調性，幫助金控品牌訊息傳遞上能更完整、獨特。</h3>
                  </Grid>
                  <Grid xs={12} md={6} className="right">
                    <img src={improving5} alt="improving5" />
                  </Grid>
                </TwoColumnsArticle>
                <TwoColumnsArticle>
                  <Grid xs={12} md={6} lg={6} xl={5} xlOffset={1} className="left">
                    <img src={improving6} alt="improving6" />
                  </Grid>
                  <Grid xs={12} md={5} lg={5} className="right">
                    <div className="index">06</div>
                    <h3>元件模組化</h3>
                    <h2>靈活運用，依需求快速組合、變化</h2>
                    <h3>藉由模組化設計除了打造金控品牌體驗ㄧ致性之外，在運營方面，未來也可因應內容需求彈性擴充與重複使用，提升後續維運效率。</h3>
                  </Grid>
                </TwoColumnsArticle>
              </Grid>
            </PageWrapper>
          </ImprovingSection>
          <GuidelineSection>
            <PageWrapper overflow={"true"}>
              <Horizon blackBg>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">DESIGN GUIDELINE</h4>
                </div>
              </Horizon>
              <Grid container className="container">
                <Grid xs={12} md={8} mdOffset={2}>
                  <h1>
                    為金控集團打造具一致性的品牌數位體驗
                  </h1>
                  <p>透過集合一系列預先建置、可重複利用的設計資產：色彩、元件、輔助圖形及圖標等，以及制定運用這些設計資產的原則，來協助集團各公司的內外部設計團隊能夠更快、更有效率地延續嶄新的金控品牌形象。</p>
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
    </>
  );
}

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
  }
  h3{
    margin: 8px 0;
  }
  h2{
    margin: 0 0 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid ${color.White};
  }
  .MuiGrid2-root{
    position: relative;
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
`
const ImprovingSection = styled.div`
  overflow: hidden;
  .wrapper{
    max-width: calc( 100vw - 160px );
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
      max-width: calc( 100vw - 160px );
    }
  `}
  ${media.large`
    .wrapper{
      max-width: calc( 100vw - 80px );
    }
  `}
`

const CrossXTalkImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px auto 64px;
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
  
`

const BottomImgs = styled.div`
  display: flex;
  margin-bottom: 80px;
  img{
    width: 100%;
  }
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

