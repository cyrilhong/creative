import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import Grid from '@mui/material/Unstable_Grid2';
import { media } from 'styles/media';
import Fade from 'react-reveal/Fade';
import { PageWrapper } from 'app/components/PageWrapper';
import { useWindowSize, isDesktop } from '../../hooks'
import CountUp from 'react-countup';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import improving1 from './assets/improving-1.jpg'
import improving2 from './assets/improving-2.jpg'
import improving3 from './assets/improving-3.jpg'
import improving4 from './assets/improving-4.jpg'
import improving5 from './assets/improving-5.jpg'
import improving6 from './assets/improving-6.jpg'
import * as color from 'styles/colors';
import { Mark } from '../HomePage/Mark';
export default function Article({ data }) {
    const windowWidth = useWindowSize().width
    return (
        <ImprovingSection>
            <PageWrapper overflow={"true"} className="wrapper">
                <Grid container className="container">
                    <Grid xs={12} className="grid" md={10} mdOffset={1}>
                        <Fade bottom>
                            <div className="head">
                                <div className="huge en">Improving the Mobility <br />Experience</div>
                                <h1>
                                    <FeatureHead>
                                        {windowWidth > 960 ?
                                            <Mark color="#E73523">
                                                提升行動體驗
                                            </Mark> :
                                            <div className="draw">
                                                提升行動體驗
                                            </div>
                                        }
                                    </FeatureHead>
                                </h1>
                            </div>
                        </Fade>
                    </Grid>
                    <Grid xs={12} className="grid">
                        <TwoColumnsArticle left>
                            <Grid xs={12} md={5} mdOffset={1} lg={4} lgOffset={1} xl={5} xlOffset={1} className="left">
                                <Fade bottom>
                                    <div className="text">
                                        <div className="index">01</div>
                                        <h3>資訊內容呈現</h3>
                                        <h2>重新建構資訊佈局，讓資訊更清晰閱讀</h2>
                                        <h3>官網中有多種顯示不同資訊的列表跟表格，我們將資訊列表做詳細的盤點，明確地劃分資訊間的層級關係去提高資訊的清晰度，來符合手機瀏覽體驗的特性，讓使用者可以上下捲動來查閱繁複的資訊。</h3>
                                    </div>
                                </Fade>
                            </Grid>
                            <Grid xs={12} md={6} lg={6} lgOffset={1} xl={5} xlOffset={1} className="right">
                                <Fade bottom>
                                    <img src={improving1} alt="improving1" />
                                </Fade>
                            </Grid>
                        </TwoColumnsArticle>
                    </Grid>
                    <Grid xs={12} className="grid">
                        <TwoColumnsArticle>
                            <Grid xs={12} md={6} lg={6} xl={5} xlOffset={1} className="left">
                                <Fade bottom>
                                    <img src={improving2} alt="improving2" />
                                </Fade>
                            </Grid>
                            <Grid xs={12} md={5} lg={4} lgOffset={1} className="right">
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
                    </Grid>
                </Grid>
            </PageWrapper>
        </ImprovingSection>
    );
}

const ImprovingSection = styled.div`
  overflow: hidden;
  .wrapper{
    max-width: calc( 100vw - 80px );
    padding: 130px 0 40px;
    color: ${color.White};
    background-color: #3C4851;
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
    gap: 40px;
    margin-bottom: 120px;
    min-height: 525px;
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
          right: 20px;
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
      margin-bottom: 64px;
      .left{
        order: ${prop => prop.left ? 2 : 1};
        img{
          position: relative;
          margin-left: -20px;
        }
      }
      .right{
        order: ${prop => prop.left ? 1 : 2};
      }
      img{
        width: calc( 100% + 20px );
        max-width: initial;
      }
      .index{
        display: none;
      }
      h3{
        margin: 0 0 4px;
      }
      h2{
        margin-bottom: 16px;
        padding-bottom: 16px;
      }
    `}
  `