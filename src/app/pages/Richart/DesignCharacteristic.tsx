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
import Img01 from './assets/img-01.png'
import Img02 from './assets/img-02.jpg'
import Img03 from './assets/img-03.jpg'
import Img04 from './assets/img-04.jpg'
import Img05 from './assets/img-05.jpg'
import Img06 from './assets/img-06.jpg'
import HeroSlider from './Slider'
export default function DesignCharacteristic() {
  const windowWidth = useWindowSize().width

  return (
    <ImprovingSection>
      <PageWrapper overflow={"true"} className="wrapper">
        <Grid container className="container">
          <Grid xs={12} className="grid" md={10} mdOffset={1}>
            <Horizon blackBg>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">DESIGN FEATURES</h4>
              </div>
              <h4 className="eng">04</h4>
            </Horizon>
            <Fade bottom>
              <div className="huge en">Design Characteristic</div>
              <h1>
                設計優化重點
              </h1>
            </Fade>
          </Grid>
          <Grid xs={12} className="grid" md={10} mdOffset={1}>
            <TwoColumnsArticle left>
              <Grid xs={12} md={5} lg={5} xl={5} className="left">
                <Fade bottom>
                  <div className="text">
                    <div className="index">01 <small>HOMEPAGE</small></div>
                    <h2>提升資訊的個人化程度，打造個人黏性互動空間，打開 Richart 就像走進自己的房間</h2>
                    <p>首頁即承載使用者最需要即刻掌握的個人化資訊。上方可一眼總覽個人的資產概況，下方可自訂理財小工具，方便管理與查詢理財商品，讓每個人的首頁更貼近個人的需求。</p>
                    <p>同時新版也呼應國外的金融 APP 的趨勢，領先國內金融業，導入貼心的深淺模式切換，視覺風格上主打深色的調性，呈現品牌特性之外，也保有功能上良好的操作體驗。</p>
                  </div>
                </Fade>
              </Grid>
              <Grid xs={12} md={7} lg={7} xl={7} className="right">
                <Fade bottom>
                  <img src={Img01} alt="Img01" />
                </Fade>
              </Grid>
            </TwoColumnsArticle>
          </Grid>
          <Grid xs={12} className="grid" md={10} mdOffset={1}>
            <TwoColumnsArticle>
              <Grid xs={12} md={7} lg={7} xl={7} className="left">
                <Fade bottom>
                  <img src={Img02} alt="Img02" />
                </Fade>
              </Grid>
              <Grid xs={12} md={5} lg={5} className="right">
                <Fade bottom>
                  <div className="text">
                    <div className="index">02 <small>PAYMENT</small></div>
                    <h2>升級常用功能與關鍵資訊呈現，更省時省力完成日常任務、掌握所需資訊</h2>
                    <p>將日常頻繁使用的收款與付款功能拉高層級，更快速找到關鍵資訊。同時轉帳新增自訂常用轉帳對象功能，讓使用者在外層即可快速轉帳。</p>
                  </div>
                </Fade>
              </Grid>
            </TwoColumnsArticle>
          </Grid>
          <Grid xs={12} className="grid" md={10} mdOffset={1}>
            <TwoColumnsArticle left>
              <Grid xs={12} md={5} lg={5} xl={5} className="left">
                <Fade bottom>
                  <div className="index">03 <small>EXPLORE</small></div>
                  <h2>提升跨產品的探索動機，啟發資金的延伸運用，讓使用者在Richart 的產品服務裡深入使用</h2>
                  <h3>重整架構後，新增了「探索」頁面，整合所有產品的最新優惠與資訊，更有利於使用者不漏接資訊，以新穎的互動體驗吸引使用者的探索動機。</h3>
                </Fade>
              </Grid>
              <Grid xs={12} md={7} lg={7} className="right">
                {windowWidth > 960 ?
                  <Fade bottom>
                    <img src={Img03} alt="Img03" />
                    <ul>
                      <li>結合社群感的限時動態整理多種優惠露出。</li>
                    </ul>
                    <Box className="second-img">
                      <img src={Img04} alt="Img04" />
                      <ul>
                        <li>透過投票等互動體驗，加深與使用者的連結，並提高跨售的機會。</li>
                      </ul>
                    </Box>
                  </Fade> :
                  <HeroSlider />
                }
              </Grid>
            </TwoColumnsArticle>
          </Grid>
          <Grid xs={12} className="grid" md={10} mdOffset={1}>
            <TwoColumnsArticle>
              <Grid xs={12} md={7} lg={7} xl={7} className="left">
                <Fade bottom>
                  <img src={Img05} alt="Img05" />
                </Fade>
              </Grid>
              <Grid xs={12} md={5} lg={5} className="right">
                <Fade bottom>
                  <div className="index">04 <small>PRODUCT</small></div>
                  <h2>重整產品頁結構，提升業務的擴充彈性，同時讓使用者更好查找產品</h2>
                  <p>以產品類別分類產品頁的架構，讓目標明確的使用者更快速查找產品。而總覽頁面承載跨產品的內容，讓無特定目標的使用者有探索產品的空間，同時增加跨售機會。架構的重整也為未來業務需求保留擴充的彈性。</p>
                </Fade>
              </Grid>
            </TwoColumnsArticle>
          </Grid>
          <Grid xs={12} className="grid" md={10} mdOffset={1}>
            <TwoColumnsArticle left>
              <Grid xs={12} md={5} lg={5} xl={5} className="left">
                <Fade bottom>
                  <div className="index">05 <small>ACCOUNT</small></div>
                  <h2>與使用者建立長期且有深度的關係，讓資深用戶想繼續與 Richart 一併前行</h2>
                  <p>整合任務活動於一頁，提升 Richart 與使用者的互動黏性，回饋更多好處給與 Richart 互動程度高的老客人，建立與使用者長久的深度關係。</p>
                </Fade>
              </Grid>
              <Grid xs={12} md={7} lg={7} className="right">
                <Fade bottom>
                  <img src={Img06} alt="Img06" />
                </Fade>
              </Grid>
            </TwoColumnsArticle>
          </Grid>
        </Grid>
      </PageWrapper>
    </ImprovingSection>
  );
}

const ImprovingSection = styled.div`
  overflow: hidden;
  .wrapper{
    max-width: 100%;
    padding: 0;
    color: ${color.White};
    background-color: ${color.DarkBlue};
    overflow: visible;
  }
  .container{
    .grid{
      max-width: 1520px;
      margin: 0 auto;
    }
  }
  .head{
    border-left: 8px solid ${color.White};
    padding-left: 48px;
    margin-bottom: 90px;
    h1{
      margin: 5px 0 0;
    }
  }
  ${media.xlarge`
    .wrapper{
      /* max-width: calc( 100vw - 80px ); */
    }
  `}
  ${media.large`
    .wrapper{
      /* max-width: calc( 100vw - 80px ); */
    }
  `}
  ${media.medium`
    .wrapper{
      max-width: initial;
      padding: 32px 20px 22px;
    }
    .head{
      margin-bottom: 32px;
      padding-left: 16px;
      h1{
        font-size: 22px;
        line-height: 33px;
      }
    }
    img[alt="Img01"]{
      margin-left: -32px;
    }
  `}
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

const TwoColumnsArticle = styled.div<{
  left?: boolean
}>`
  display: flex;
  gap: 64px;
  margin-bottom: 200px;
  /* min-height: 525px; */
  .left{
    img{
      margin-left: 0;
    }
  }
  .right{
  }
  .second-img{
    margin-top: 120px;
  }
  img{
    /* width: calc( 100% + 80px ); */
    /* max-width: 700px; */
    width: 100%;
  }
  .index{
    font-size: 150px;
    font-family :'Poppins';
    color: rgba(255,255,255, .1);
    font-weight: 500;
    line-height: 150px;
    margin-top: 58px;
    small{
      font-size: 24px;
      font-weight: 400;
      color: ${color.ConcreteGrey};
      margin-left: 126px;
      display: flex;
      margin-top: -120px;
    }
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
  ul{
    padding: 24px 0 0 20px;
    margin: 0;
    min-height: 72px;
  }
  .MuiGrid2-root{
    position: relative;
    /* flex-grow: 1;
    flex-basis: 0;
    min-width: 0; */
  }
  ${media.xlarge`
    img{
      /* width: calc( 100% + 80px ); */
    }
    .left{
      img{
        /* margin-left: -80px;
        position: absolute;
        right: 20px; */
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
    gap: 32px;
    margin-bottom: 20px;
    .left{
      order: ${prop => prop.left ? 2 : 1};
      img{
        position: relative;
        margin-left: -20px;
      }
    }
    img[alt="Img01"]{
      margin-bottom: -40px;
    }
    img[alt="Img02"]{
      margin-top: 36px;
      margin-bottom: -44px;
    }
    img[alt="Img05"]{
      margin-top: 46px;
      margin-bottom: -44px;
    }
    img[alt="Img06"]{
      margin-top: 36px;
      margin-bottom: -44px;
    }
    .right{
      order: ${prop => prop.left ? 1 : 2};
    }
    img{
      width: calc( 100% + 20px );
      max-width: initial;
    }
    .index{
      margin: 0 0 48px;
      font-size: 96px;
      height: 96px;
      small{
        font-size: 22px;
        margin: -134px 0 0 78px;
      }
    }
    h3{
      margin: 0 0 4px;
    }
    h2{
      margin-bottom: 16px;
      font-size: 20px;
      padding-bottom: 16px;
      font-weight: 400;
    }
    p{
      font-size: 14px;
    }
  `}
`

const Horizon = styled.div<{
  blackBg?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 120px 0;
  width: 100%;
  color: ${prop => (!prop.blackBg ? color.DarkBlue : color.White)};
  &::after {
    content: '';
    width: 100%;
    display: block;
    border-top: 1px solid
      ${prop => (!prop.blackBg ? color.DarkBlue : color.White)};
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
      background-color: ${prop => (!prop.blackBg ? color.DarkBlue : color.White)};
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

