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
import BgImg from './assets/strategy-bg.jpg'
import BusinessLevel from './assets/business-level.svg'
import UserLevel from './assets/user-level.svg'
export default function Strategy() {
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
        <Horizon>
          <div className="title">
            <div className="dot" />
            <h4 className="eng">DESIGN PROCESS</h4>
          </div>
          <h4 className="eng">03</h4>
        </Horizon>
        <StickyTemplate
          leftGrid={4}
          rightGrid={8}
          left={
            <Fade bottom>
              <div className="title">Design<br /> Strategy</div>
              <div className="sub">設計方向</div>
            </Fade>
          }
          right={
            <>
              <Grid xs={12} md={12} className="topic-1">
                <Fade bottom>
                  <Box display={"flex"}><h2>Business</h2><h2>商業層面</h2></Box>
                  <hr />
                  <h4>Richart 需要更好的維運與溝通模式，在產品、行銷、營運層面都需要建立新的架構，來面對產品成長期的挑戰。</h4>
                  {/* <img src={BusinessLevel} alt="BusinessLevel" className="business-level" /> */}

                  {windowWidth > 960 ?
                    <BrandInsightImg>
                      <Fade bottom>
                        <img src={BusinessLevel} alt="BusinessLevel" className="business-level" />
                      </Fade>
                    </BrandInsightImg> :
                    <div className="insights-mb characteristic">
                      <div className="list">
                        <div className="circle">
                          <h1 className="en">01</h1>
                        </div>
                        <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                          <h5>產品面</h5>
                          <h1 className="eng">新產品上架 擴充不易</h1>
                        </Box>
                      </div>
                      <div className="list">
                        <div className="circle">
                          <h1 className="en">02</h1>
                        </div>
                        <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                          <h5>行銷面</h5>
                          <h1 className="eng">行銷溝通管道資訊分散</h1>
                        </Box>
                      </div>
                      <div className="list">
                        <div className="circle">
                          <h1 className="en">03</h1>
                        </div>
                        <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                          <h5>營運面</h5>
                          <h1 className="eng">產品銷售跨售不易</h1>
                        </Box>
                      </div>
                    </div>
                  }
                </Fade>
              </Grid>
              <Grid xs={12} md={12} className="topic-2">
                <Fade bottom>
                  <h2>User 使用者層面</h2>
                  <hr />
                  <h4>使用者需要學習成本更低、整合性更強、能協助完成金融大小事的理財工具。</h4>
                  {windowWidth > 960 ?
                    <BrandInsightImg>
                      <Fade bottom>
                        <img src={UserLevel} alt="user-level" className="user-level" />
                      </Fade>
                    </BrandInsightImg> :
                    <div className="insights-mb characteristic">
                      <div className="list">
                        <div className="circle">
                          <h1 className="en">01</h1>
                        </div>
                        <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                          <h5>申購前</h5>
                          <h1 className="eng">瀏覽/挑選產品學習成本高</h1>
                        </Box>
                      </div>
                      <div className="list">
                        <div className="circle">
                          <h1 className="en">02</h1>
                        </div>
                        <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                          <h5>申購後</h5>
                          <h1 className="eng">已購產品的管理/查詢不易</h1>
                        </Box>
                      </div>
                      <div className="list">
                        <div className="circle">
                          <h1 className="en">03</h1>
                        </div>
                        <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                          <h5>申購外</h5>
                          <h1 className="eng">常用功能入口深不易操作</h1>
                        </Box>
                      </div>
                    </div>
                  }
                </Fade>
              </Grid>
            </>
          }
        />
      </PageWrapper>
    </Wrapper>
  );
}
const BrandInsightImg = styled.div`
  display: flex;
  /* margin: 58px -148px 168px; */
  img{
    width: 100%;
  }
`

const Wrapper = styled.div`
    color: ${color.DarkBlue};
    background-color: ${color.White};
    background-image: url(${BgImg});
    padding-bottom: 16px;
    /* padding-top: 120px; */
    background-size: cover;
    .insights-mb{
      margin: 40px 20px 48px;
      .list{
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
        .circle{
          width: 64px;
          min-width: 64px;
          height: 64px;
          background-color: #E73523;
          border-radius: 100%;
          margin-right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          h1{
            margin: 0 0 4px;
            font-weight: bold;
            color: ${color.White};
          }
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
    .page-container{
        max-width: 1520px;
        overflow: visible;
    }

    .target-section{
        border-left: 1px solid ${color.DarkBlue};
        border-right: 1px solid ${color.DarkBlue};
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
        border-left: 1px solid ${color.DarkBlue};
        padding-left: 16px;
    }
    .topic-1{
      background-color: ${color.DarkBlue};
      color:${color.White};
      padding: 60px 40px;
      .insights-mb.characteristic .circle{
        background-color: #17B6C9;
      }
      h2{
        font-weight: 400;
        margin-right: 16px;
        margin-top: 0;
      }
      h4{
        margin-top: 36px;
      }
    }
    .topic-2{
      color: ${color.DarkBlue};
      background-color:${color.White};
      padding: 60px 40px;
      .insights-mb.characteristic .circle{
        background-color: #CD9453;
      }
      h2{
        font-weight: 400;
      }
    }
    .info-graph-1{
        margin-top: 10px;
        margin-bottom: 162px;
    }
    .info-graph-2{
        margin-top: 10px;
    }
    .business-level{
      margin: 120px -40px 200px;
      width: calc( 100% + 80px );
    }
    .user-level{
      margin: 120px -40px 200px;
      width: calc( 100% + 80px );
    }
    ${media.medium`
      padding: 0;
      background-size: contain;
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
      .insights-mb{
        margin-left: 0;
        margin-right: 0;
        h1{
          margin: 0;
        }
      }
      .right{
        margin: 0 -20px;
        width: calc( 100% + 40px );
      }
  `}
`;

const Subhead = styled.div`
    font-size: 20px;
    line-height: 30px;
    margin: 120px auto 0;
    text-align: center;
    max-width: 360px;
    position: relative;
    &::before{
        content: '';
        width: 40px;
        height: 1px;
        border-bottom: 1px solid ${color.DarkBlue};
        position: absolute;
        left: -40px;
        top: 13px
    }
    &::after{
        content: '';
        width: 40px;
        height: 1px;
        border-bottom: 1px solid ${color.DarkBlue};
        position: absolute;
        right: -40px;
        top: 13px;
    }
    ${media.medium`
        margin: 96px auto 0;
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
        background-color: ${color.DarkBlue};
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
