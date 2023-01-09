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
import challenge1 from './assets/challenge-1.jpg'
import challenge2 from './assets/challenge-2.jpg'
import challenge3 from './assets/challenge-3.jpg'
import InfoGraph1 from './assets/info-graph-1.svg'
import InfoGraph2 from './assets/info-graph-2.svg'
import Performance from './Performance'
import StickyTemplate from './StickyTemplate'
import * as colors from 'styles/colors';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
export default function Target() {
    const ref = useRef<HTMLDivElement>(null);
    const positionRef = useRef<HTMLDivElement>(null);
    const [sticky, setSticky] = useState(false);
    const [bottomSticky, setBottomSticky] = useState(false);
    const windowWidth = useWindowSize().width
    useScrollPosition(({ prevPos, currPos }) => {
        if (
            positionRef.current!?.getBoundingClientRect().top < 120 && windowWidth > 960
        ) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    });

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
            <PageWrapper overflow={"true"} className="page-container">
                <Container maxWidth={'xl'} className="target-section">
                    <Grid container className="container">
                        <Grid xs={12} md={12}>
                            <Fade bottom>
                                <h2 className="en">
                                    設計目標
                                </h2>
                                <h1>
                                    <FeatureHead>
                                        融入品牌精神與具內涵的核心價值，建立具有一致性且 <br />令人信服、認同的品牌意象，進而提升品牌價值。
                                    </FeatureHead>
                                </h1>
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
                <Fade bottom>
                    <Subhead>為此專案目標，我們共執行了</Subhead>
                </Fade>
                <Performance
                    data={
                        [
                            {
                                count: 10,
                                eventName: 'INTERVIEWS',
                                title: '高階經營團隊訪談',
                                subtitle: '邀請 10 位高階主管與 9 個相關部門團隊分享願景、目標、過往經驗，釐清產業脈絡，聚焦內部需求。'
                            },
                            {
                                count: 18,
                                eventName: 'MEETINGS',
                                title: '設計討論會議',
                                subtitle: '7 場每週跨部門大會議，11 場細節密集討論，修提和新產出並行的精實行程。'
                            },
                            {
                                count: 150,
                                countString: '+',
                                eventName: 'PAGES',
                                title: 'UI/UX 設計產出',
                                subtitle: '三大網站全方面優化，重新梳理資訊架構、設計頁面到建立設計規範。'
                            },

                        ]
                    }
                />
                <Horizon>
                    <div className="title">
                        <div className="dot" />
                        <h4 className="eng">OUR CHALLENGE</h4>
                    </div>
                    <h4 className="eng">02</h4>
                </Horizon>
                <StickyTemplate
                    leftGrid={4}
                    rightGrid={8}
                    left={
                        <Fade bottom>
                            <div className="title">Design<br />Process</div>
                            <div className="sub">設計過程與挑戰</div>
                        </Fade>
                    }
                    right={
                        <>
                            {/* <Grid xs={12} md={6} zIndex="1">
                                <Fade bottom>
                                    <img src={challenge1} alt="challenge1" />
                                </Fade>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Fade bottom>
                                    <div className="wrapper-context">
                                        <h3>“ 我們給人老成的感覺，希望做改變，帶給人與時俱進的 message。金控集團經營一段時間了，很傳統的行業，我們接受科技、接受數位。”</h3>
                                        <Box display={"flex"}>
                                            <div className="dash" />
                                            <p>金控集團資深副總</p>
                                        </Box>
                                    </div>
                                </Fade>
                            </Grid>
                            <Grid xs={12} md={12}>
                                <Fade bottom>
                                    <h2>01. 如何透過品牌翻轉，將歷史悠久的品牌資產成為轉型上優勢？</h2>
                                    <h4>20 年悠久的品牌底蘊是大型金控集團難得的資產，在面對轉型的趨勢與挑戰，為避免成為一種包袱，因此設計上希望能將金控品牌貼近人心、穩健的形象傳遞給大眾。透過由上到下的深度訪談來了解金控內部文化、高階主管營運層面與核心價值，並搭配品牌反應卡來幫助金控在原有的品牌精神之上，強化更新品牌給用戶的形象與感受。</h4>
                                </Fade>
                            </Grid>
                            <Box display={"flex"} className="topic-1">
                                <Grid xs={12} md={6}>
                                    <Fade bottom>
                                        <img src={challenge2} alt="challenge2" />
                                        <p className='border-left'>透過內訪提問，找出內部認為金控需要具備什麼樣的品牌個性，來回應後疫情時代和金融產業數位轉型趨勢等新挑戰。</p>
                                    </Fade>
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <Fade bottom>
                                        <img src={challenge3} alt="challenge3" />
                                        <p className='border-left'>透過蘊含相似概念但強調不同面向的品牌形象反應圖卡，對高階主管發掘態度與想法上的傾向，指引設計上的方向。</p>
                                    </Fade>
                                </Grid>
                            </Box> */}
                            <Grid xs={12} md={12} className="topic-2">
                                <Fade bottom>
                                    <h2>01. 如何在同質性偏高的金融消費市場中製造品牌差異化？</h2>
                                    <h4>運用 Brand Essence Wheel 建構品牌核心精神，找出屬於金控的「品牌個性」與「品牌形象」，從中映射出品牌的 Tone & Manner 定義。將反映品牌精神、個性與形象的調性，轉換至金控網站改版中的各種體驗層面，像是視覺設計元素、影像調性、文案用語等，打造品牌獨特性的體驗。</h4>
                                </Fade>
                            </Grid>
                            <Grid xs={12} md={12} className="info-graph-1">
                                <Fade bottom>
                                    <img src={InfoGraph1} alt="InfoGraph-1" />
                                </Fade>
                            </Grid>
                            <Grid xs={12} md={12}>
                                <Fade bottom>
                                    <h2>02. 如何將功能資訊導向的內容轉化為說故事，提升網站記憶點？</h2>
                                    <h4>金控網站過去比較是單純功能、資訊傳遞導向。單向式的傳遞訴求，用戶難以從中獲得在意的資訊與留下印象，因此在設計時需要安排整體的設計主軸與氛圍塑造，拉近與消費者的距離，建立起雙向式的體驗互動，來傳遞金控品牌的形象。</h4>
                                </Fade>
                            </Grid>
                            <Grid xs={12} md={12} className="info-graph-2">
                                <Fade bottom>
                                    <img src={InfoGraph2} alt="InfoGraph-2" />
                                </Fade>
                            </Grid>
                        </>
                    }
                />
            </PageWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${color.DarkBlue};
    color: ${color.White};
    padding-bottom: 200px;
    padding-top: 120px;
    .page-container{
        max-width: 1520px;
        overflow: visible;
    }

    .target-section{
        border-left: 1px solid ${color.White};
        border-right: 1px solid ${color.White};
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
    ${media.medium`
        padding: 120px 0 96px;
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
    `}
`;

const Subhead = styled.div`
    font-size: 20px;
    line-height: 30px;
    margin: 52px auto 0;
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
        margin: 162px auto 0;
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
    
    .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 21px #0c1c24, inset 0px 54px #E73523;
    }
  `}
`