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
import * as colors from 'styles/colors';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
export default function Target() {
    const [startCount, setStartCount] = useState(false)
    const ref = useRef<HTMLDivElement>(null);
    const positionRef = useRef<HTMLDivElement>(null);
    const [sticky, setSticky] = useState(false);
    const [bottomSticky, setBottomSticky] = useState(false);
    useScrollPosition(({ prevPos, currPos }) => {
        // console.log(positionRef.current!.getBoundingClientRect().top);
        if (ref.current!.getBoundingClientRect().top < 1000) {
            setStartCount(true);
        } else {
            setStartCount(false);
        }
        if (
            positionRef.current!.getBoundingClientRect().top < 80
        ) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    });
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
            <PageWrapper overflow={"true"} className="page-container">
                <Container maxWidth={'xl'} className="target-section">
                    <Grid container className="container">
                        <Grid xs={12} md={12}>
                            <h2 className="en">
                                設計目標
                            </h2>
                            <h1>
                                <FeatureHead>
                                    融入品牌精神與具內涵的核心價值，建立「<div className='draw'>令人信服、認同</div>」的品牌意象，並提升金控集團的品牌價值。
                                </FeatureHead>
                            </h1>
                        </Grid>
                    </Grid>
                </Container>
                <Subhead>為此專案目標，我們共執行了</Subhead>
                <Performance>
                    <Grid container spacing={isDesktop() ? 5 : 0} rowSpacing={isDesktop() ? 9 : 0}>
                        <Grid xs={12} md={4} className="item">
                            <div className="super eng">
                                {startCount && <CountUp end={10} />}
                            </div>
                            <h2 className="eng">INTERVIEWS</h2>
                            <h2>高階經營團隊訪談</h2>
                            <h4>
                                邀請 10 位高階主管與 9 個相關部門團隊分享願景、目標、過往經驗，釐清產業脈絡，聚焦內部需求。
                            </h4>
                        </Grid>
                        <Grid xs={12} md={4} className="item">
                            <div className="super eng">
                                {startCount && <CountUp end={18} />}
                            </div>
                            <h2 className="eng">MEETINGS</h2>
                            <h2>設計討論會議</h2>
                            <h4>
                                7 場每週跨部門大會議，11 場細節密集討論，修提和新產出並行的精實行程。
                            </h4>
                        </Grid>
                        <Grid xs={12} md={4} className="item">
                            <div className="super eng">
                                {startCount && <CountUp end={150} />}+</div>
                            <h2 className="eng">PAGES</h2>
                            <h2>UI/UX 設計產出</h2>
                            <h4>
                                包含金控官網、美麗人生、數位轉型專區三大網站全方面優化， 重新梳理資訊架構、設計頁面到建立設計規範。
                            </h4>
                        </Grid>
                    </Grid>
                </Performance>
                <Horizon>
                    <div className="title">
                        <div className="dot" />
                        <h4 className="eng">OUR CHALLENGE</h4>
                    </div>
                    <h4 className="eng">02</h4>
                </Horizon>
                <Challenges>
                    <Grid container className="container">
                        <Grid xs={12} md={4} ref={positionRef} position="relative">
                            <div
                                className={`left ${sticky ? 'sticky-top' : ''} ${bottomSticky ? 'sticky-bottom' : ''
                                    }`}
                            >
                                <div className="title">Design<br />Process</div>
                                <div className="sub">設計過程與挑戰</div>
                            </div>
                        </Grid>
                        <Grid container spacing={4} xs={12} md={8} className="right">
                            <Grid xs={12} md={6}>
                                <img src={challenge1} alt="challenge1" />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <div className="wrapper-context">
                                    <h3>“ 我們給人老成的感覺，希望做改變，帶給人與時俱進的 message。金控集團經營一段時間了，很傳統的行業，我們接受科技、接受數位。”</h3>
                                    <Box display={"flex"}>
                                        <div className="dash" />
                                        <p>金控集團資深副總</p>
                                    </Box>
                                </div>
                            </Grid>
                            <Grid xs={12} md={12}>
                                <h2>01. 如何透過品牌翻轉，將歷史悠久的品牌資產成為轉型上優勢？</h2>
                                <h4>20 年悠久的品牌底蘊是大型金控集團難得的資產，在面對轉型的趨勢與挑戰，為避免成為一種包袱，因此設計上希望能將金控品牌貼近人心、穩健的形象傳遞給大眾。透過由上到下的深度訪談來了解金控內部文化、高階主管營運層面與核心價值，並搭配品牌反應卡來幫助金控在原有的品牌精神之上，強化更新品牌給用戶的形象與感受。</h4>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <img src={challenge2} alt="challenge2" />
                                <p className='border-left'>透過內訪提問，找出內部認為金控需要具備什麼樣的品牌個性，來回應後疫情時代和金融產業數位轉型趨勢等新挑戰。</p>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <img src={challenge3} alt="challenge3" />
                                <p className='border-left'>透過蘊含相似概念但強調不同面向的品牌形象反應圖卡，對高階主管發掘態度與想法上的傾向，指引設計上的方向。</p>
                            </Grid>
                            <Grid xs={12} md={12} className="topic-2">
                                <h2>02. 如何在同質性偏高的金融消費市場中製造品牌差異化？</h2>
                                <h4>運用 Brand Essence Wheel 建構品牌核心精神，找出屬於金控的「品牌個性」與「品牌形象」，從中映射出品牌的 Tone & Manner 定義。將反映品牌精神、個性與形象的調性，轉換至金控網站改版中的各種體驗層面，像是視覺設計元素、影像調性、文案用語等，打造品牌獨特性的體驗。</h4>
                            </Grid>
                            <Grid xs={12} md={12} className="info-graph-1">
                                <img src={InfoGraph1} alt="InfoGraph-1" />
                            </Grid>
                            <Grid xs={12} md={12}>
                                <h2>03. 如何將功能資訊導向的內容轉化為說故事，提升網站記憶點？</h2>
                                <h4>金控網站過去比較是單純功能、資訊傳遞導向。單向式的傳遞訴求，用戶難以從中獲得在意的資訊與留下印象，因此在設計時需要安排整體的設計主軸與氛圍塑造，拉近與消費者的距離，建立起雙向式的體驗互動，來傳遞金控品牌的形象。</h4>
                            </Grid>
                            <Grid xs={12} md={12} className="info-graph-2">
                                <img src={InfoGraph2} alt="InfoGraph-2" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Challenges>
            </PageWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${color.DarkBlue};
    color: ${color.White};
    padding-bottom: 200px;
    padding-top: 85px;
    .page-container{
        max-width: 1520px;
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
`

const Performance = styled.div`
  padding-bottom: 50px;
  margin-top: 74px;
  .item {
    text-align: center;
    .super {
      margin: 0;
    }
    h2 {
      margin: 48px 0 8px;
      &.eng {
        margin: -22px 0 0;
      }
    }
    h4 {
      margin: 0 auto;
      max-width: 320px;
    }
  }
  ${media.large`
    .super{
      font-size: 100px;
      line-height: 120px;
    }
  `}
  ${media.medium`
    padding: 54px 0 72px;
    .item{
      .super{
        font-size: 96px;
        line-height: 96px;
        margin-top: 48px;
      }
      h2.eng{
        font-size: 32px;
        line-height: 40px;
        margin-top: 0;
      }
      h2{
        margin-top: 24px;
      }
    }
  `}
`;

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


const Challenges = styled.div`
    .title{
        font-size: 60px;
        font-family: 'Poppins';
        line-height: 75px;
    }
    .sub{
        font-size: 36px;
        margin-top: 8px;
    }
    img{
        width: 100%;
    }
    .wrapper-context{
        margin-top: 100px;
        position: relative;
        padding-right: 60px;
        margin-bottom: 130px;
        h3{
            margin: 0 0 24px;
        }
        p{
            margin: 0;
        }
        .dash{
            border-bottom: 1px solid ${color.White};
            width: 24px;
            margin-right: 12px;
            height: 12px;
        }
        &::before{
            content: '';
            width: 180%;
            background-color: ${color.AJABlue};
            height: 306px;
            position: absolute;
            right: 0;
            z-index: -1;
            top: -60px;
        }
    }
    .border-left{
        border-left: 1px solid ${color.White};
        padding-left: 16px;
    }
    .topic-2{
        margin-top: 146px;
    }
    .info-graph-1{
        margin-top: 10px;
        margin-bottom: 162px;
    }
    .info-graph-2{
        margin-top: 10px;
    }
    .sticky-top {
        position: sticky;
        top: 80px;
        left: 40;
        width: calc( 33vw );
        /* margin-left: 0; */
        /* width: 776px; */
    }
    .sticky-bottom {
        top: initial;
        bottom: 0;
        position: absolute;
        /* max-width: calc( 100% + 20px ); */
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