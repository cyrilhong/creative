import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as colors from 'styles/colors';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { useWindowSize } from '../../hooks'
import { media } from 'styles/media';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Lottie from 'lottie-react';
import lottie1 from './assets/lottie-01.json';
import lottie2 from './assets/lottie-02.json';
import lottie3 from './assets/lottie-03.json';

export default function ServiceList() {
    const windowWidth = useWindowSize().width
    const lottie1Position = useRef<HTMLDivElement>(null);
    const lottie2Position = useRef<HTMLDivElement>(null);
    const lottie3Position = useRef<HTMLDivElement>(null);
    const lottieRef1 = useRef<any>(null);
    const lottieRef2 = useRef<any>(null);
    const lottieRef3 = useRef<any>(null);
    const [lottie1Active, setLottie1Active] = useState(false)
    const [lottie2Active, setLottie2Active] = useState(false)
    const [lottie3Active, setLottie3Active] = useState(false)

    useScrollPosition(({ prevPos, currPos }) => {
        if (lottie1Position.current!.getBoundingClientRect().top < 1100) {
            setLottie1Active(true)
        } else {
            setLottie1Active(false)
        }
        if (lottie2Position.current!.getBoundingClientRect().top < 1100) {
            setLottie2Active(true)
        } else {
            setLottie2Active(false)
        }
        if (lottie3Position.current!.getBoundingClientRect().top < 1100) {
            setLottie3Active(true)
        } else {
            setLottie3Active(false)
        }
    });

    return (
        <Wrapper>
            <Grid container spacing={0} rowSpacing={9}>
                <Grid xs={0} md={4}>
                    <div className="super eng title">
                        <Fade bottom>
                            01.
                        </Fade>
                    </div>
                </Grid>
                <Grid xs={12} md={8} ref={lottie1Position}>
                    <Box display={'flex'} className="right">
                        <Box
                            className="lottie"
                            onMouseEnter={() => {
                                if (lottieRef1.current !== null) {
                                    lottieRef1.current.goToAndPlay(1);
                                }
                            }}
                            onMouseLeave={() => {
                                if (lottieRef1.current !== null) {
                                    // lottieRef1.current.pause();
                                }
                            }}
                        >
                            <Fade>
                                <Lottie animationData={lottie1} loop={lottie1Active ? 0 : false} lottieRef={lottieRef1} />
                            </Fade>
                        </Box>
                        <Box>
                            <h1>研究與體驗策略</h1>
                            <h4>
                                分析脈絡趨勢、挖掘使用者需求，提供全方位體驗設計諮詢服務，為您的產品服務制訂體驗策略方針
                            </h4>
                            <ul>
                                <li>
                                    <h4>市場研究與競爭分析</h4>
                                </li>
                                <li>
                                    <h4>產品定位與價值主張</h4>
                                </li>
                                <li>
                                    <h4>使用者研究</h4>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={0} md={4}>
                    <div className="super eng title">
                        <Fade bottom>
                            02.
                        </Fade>
                    </div>
                </Grid>
                <Grid xs={12} md={8} ref={lottie2Position}>
                    <Box display={'flex'} className="right">
                        <Box
                            className="lottie"
                            onMouseEnter={() => {
                                if (lottieRef2.current !== null) {
                                    lottieRef2.current.goToAndPlay(1);
                                }
                            }}
                            onMouseLeave={() => {
                                if (lottieRef2.current !== null) {
                                    // lottieRef2.current.pause();
                                }
                            }}
                        >
                            <Fade>
                                <Lottie animationData={lottie2} loop={lottie2Active ? 0 : false} lottieRef={lottieRef2} />
                            </Fade>
                        </Box>
                        <Box>
                            <h1>核心體驗規劃</h1>
                            <h4>
                                以用戶洞見為聚焦點，制訂整體的體驗設計架構，營造以使用者為中心的體驗創新
                            </h4>
                            <ul>
                                <li>
                                    <h4>體驗流程規劃</h4>
                                </li>
                                <li>
                                    <h4>設計概念驗證</h4>
                                </li>
                                <li>
                                    <h4>易用性測試與需求驗證</h4>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={0} md={4}>
                    <div className="super eng title">
                        <Fade bottom>03.
                        </Fade>
                    </div>
                </Grid>
                <Grid xs={12} md={8} ref={lottie3Position}>
                    <Box display={'flex'} className="right">
                        <Box
                            className="lottie"
                            onMouseEnter={() => {
                                if (lottieRef3.current !== null) {
                                    lottieRef3.current.goToAndPlay(1);
                                }
                            }}
                            onMouseLeave={() => {
                                if (lottieRef3.current !== null) {
                                    // lottieRef3.current.pause();
                                }
                            }}
                        >
                            <Fade>
                                <Lottie animationData={lottie3} loop={lottie3Active ? 0 : false} lottieRef={lottieRef3} />
                            </Fade>
                        </Box>
                        <Box>
                            <h1>跨渠道設計落地</h1>
                            <h4>
                                將核心體驗延伸至各數位接觸點，深入場景，跨域整合品牌、創意、互動設計，落實跨渠道體驗設計
                            </h4>
                            <ul>
                                <li>
                                    <h4> App 規劃與設計</h4>
                                </li>
                                <li>
                                    <h4>網站規劃與設計</h4>
                                </li>
                                <li>
                                    <h4>數位品牌設計</h4>
                                </li>
                                <li>
                                    <h4>設計系統</h4>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Wrapper>
    );
}
const Wrapper = styled.div`
  padding: 120px 0 200px;
  .title {
    padding: 0 40px;
    border-left: 1px solid #5A6869;
    border-right: 1px solid #5A6869;
    height: 100%;
  }
  .right {
    border-right: 1px solid #5A6869;
    height: 100%;
    padding: 0 70px 50px 70px;
    svg {
      /* padding-right: 40px; */
      max-width: 290px;
    }
    h1 {
      margin: 0 0 4px;
    }
    h4 {
      margin: 0 0 32px;
    }
    ul {
      padding: 0;
      list-style: none;
      li {
        display: flex;
        margin-bottom: 16px;
        align-items: center;
        &::before {
          display: block;
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 100%;
          border: 1px solid ${colors.White};
        }
        h4 {
          margin: 0 0 0 16px;
        }
      }
    }
  }
  .lottie{
    min-width: 290px;
    margin-right: 40px;
    cursor: pointer;
  }
  ${media.large`
    padding: 72px 0;

    .title{
      /* text-align: center; */
      padding: 0 20px;
    }
  `}
  @media screen and (max-width: 1279px) {
    .right{
      flex-direction: column;
      border-right: 0;
      text-align: center;
      border-right: 1px solid ${colors.White};
      border-left: 1px solid ${colors.White};
      padding: 0 60px 50px;
      .lottie{
        margin-right: 0;
        min-width: auto;
      }
      ul{
        display: flex;
        flex-direction: column;
        li{
          justify-content: center;
          display: inline-block;
          h4{
            margin: 0;
          }
          &::before{
            display: inline-block;
          }
        }
      }
      h4{
        margin: 0;
        padding-top: 16px;
        font-size: 16px;
      }
      h1{
        margin: 32px 0 24px;
      }
    }
  }
  ${media.medium`
    .title{
        display: none;
      }
    .right{
      h4{
        padding-top: 0px;
      }
      h1{
        margin: 32px 0 8px;
      }
    }
  `}
`;

