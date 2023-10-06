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
export default function BrandInsights() {
  const windowWidth = useWindowSize().width

  return (
    <Wrapper>
      <PageWrapper overflow={"true"} className="page-container">
        <Horizon blackBg>
          <div className="title">
            <div className="dot" />
            <h4 className="eng">BRAND INSIGHTS</h4>
          </div>
          <h4 className="eng">05</h4>
        </Horizon>
        <Fade bottom>
          <div className="huge eng characteristic">
            New brand attributes <br />from Richart
          </div>
          <h1>品牌個性聚焦</h1>
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
            <div className="circle">
              <h1 className="en">01</h1>
            </div>
            <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
              <h1>前瞻不設限</h1>
              <h5 className="eng">勇於挑戰、破框架的精神，比起跟隨潮流，更能創造潮流。</h5>
            </Box>
          </div>
          <div className="list">
            <div className="circle">
              <h1 className="en">02</h1>
            </div>
            <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
              <h1>真誠坦率</h1>
              <h5 className="eng">不做作、不浮誇、對事情有開放的心態，對人總是真誠以待。</h5>
            </Box>
          </div>
          <div className="list">
            <div className="circle">
              <h1 className="en">03</h1>
            </div>
            <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
              <h1>自信成熟</h1>
              <h5 className="eng">有自己的想法、喜歡自己的樣子，熱愛生活並散發出正能量進而影響周遭的人。</h5>
            </Box>
          </div>
        </div>
      }
    </Wrapper>
  );
}

const BrandInsightImg = styled.div`
  display: flex;
  margin: 58px -148px 168px;
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
  .characteristic{
    br{
      /* display: none; */
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

