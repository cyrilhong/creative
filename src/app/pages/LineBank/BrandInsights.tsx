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
import Hero from './assets/design-insights.svg'
import { Mark } from './Mark';
import arrow from './assets/arrow@2x.svg'
export default function BrandInsights() {
  const windowWidth = useWindowSize().width

  return (
    <Wrapper>
      <PageWrapper overflow={"true"} className="page-container">
        <Horizon blackBg>
          <div className="title">
            <div className="dot" />
            <h4 className="eng">BrandInsights</h4>
          </div>
          <h4 className="eng">03</h4>
        </Horizon>
        <Fade bottom>
          <div className="huge eng characteristic">
            Design <br/>Characteristic
          </div>
          <h1>設計特點</h1>
        </Fade>
      </PageWrapper>
      {windowWidth > 960 ?
        <BrandInsightImg>
          <Fade bottom>
            <img src={Hero} alt="Characteristic" />
          </Fade>
        </BrandInsightImg> :
        <div className="insights-mb characteristic">
          <div className="list">
            <div className="left">
              <div className="circle">
                <h1 className="eng">1</h1>
              </div>
              <span>獲客</span>
              <img src={arrow} alt="arrow" />
            </div>
            <Box display={"flex"} flexDirection="column" justifyContent={"start"}>
              <h1>吸睛視覺</h1>
              <h5 className="eng">延伸品牌調性增強信任新增元素引發用戶探索</h5>
            </Box>
          </div>
          <div className="list">
            <div className="left">
              <div className="circle">
                <h1 className="eng">2</h1>
              </div>
              <span>導購</span>
              <img src={arrow} alt="arrow" />
            </div>
            <Box display={"flex"} flexDirection="column" justifyContent={"start"}>
              <h1>促動轉化</h1>
              <h5 className="eng">安排適量足夠決策的資訊 <br />縮短導流轉化的流程</h5>
            </Box>
          </div>
          <div className="list">
            <div className="left">
              <div className="circle">
                <h1 className="eng">3</h1>
              </div>
              <span>迭代</span>
            </div>
            <Box display={"flex"} flexDirection="column" justifyContent={"start"}>
              <h1>延展擴充</h1>
              <h5 className="eng">以階段性、模組化設計因應多變的理財業務發展</h5>
            </Box>
          </div>
        </div>
      }
    </Wrapper>
  );
}

const BrandInsightImg = styled.div`
  display: flex;
  margin: 58px 0 186px;
  img{
    width: 100%;
  }
`
const Wrapper = styled.div`
  background-color: ${color.BGMidGrey};
  color: ${color.DarkBlue};
  overflow: hidden;
  h1{
    margin: 12px 0 0;
  }
  .insights-mb{
    margin: 66px 20px 82px;
    .list{
      display: flex;
      flex-direction: row;
      margin-bottom: 30px;
      .left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 24px;
        span{
          margin: 8px 0;
          color: #24C875;
          font-weight: 700;
        }
      }
      .circle{
        width: 64px;
        min-width: 64px;
        height: 64px;
        background-color: #9FE991;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
          margin: 0;
          font-weight: 500;
          font-size: 32px;
          color: ${color.White};
        }
      }
      h5{
        margin: 0;
        font-weight: 400;
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
      margin: 0 0 8px;
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

