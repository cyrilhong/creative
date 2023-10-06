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
import Hero from './assets/design-system.jpg'
import HeroMb from './assets/design-system-mb.jpg'
import { Mark } from './Mark';
export default function DeisgnSystem() {
  const windowWidth = useWindowSize().width

  return (
    <Wrapper>
      <PageWrapper overflow={"true"} className="page-container">
        <Horizon blackBg={false}>
          <div className="title">
            <div className="dot" />
            <h4 className="eng">DESIGN SYSTEM</h4>
          </div>
        </Horizon>
        <Fade bottom>
          <div className="content">
            <h1>為金融服務打造具獨特且一致性的數位品牌體驗</h1>
            <p>透過建置設計系統、可重複利用的設計資產：色彩、元件、輔助圖形及圖標等，以及制定運用這些設計資產的原則，並首次導入 Design token 來協助產品團隊能夠更快、更有效率的延續嶄新的金融品牌形象。</p>
          </div>
        </Fade>
        <img className='hero-mb' src={HeroMb} alt="HeroMb" />
      </PageWrapper>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${color.White};
  background-image: url(${Hero});
  background-size: cover;
  background-color: ${color.DarkBlue};
  overflow: hidden;
  height: 1304px;
  h1{
    margin: 0;
  }
  .content{
    text-align: center;
    max-width: 832px;
    margin: 0 auto;
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
  .hero-mb{
    display: none;
  }
  ${media.medium`
    height: auto;
    background-image: none;
    br{
      display: none;
    }
    h1{
      margin: 8px 0 0;
      text-align: left;
    }
    .characteristic{
      br{
        display: block;
      }
    }
    .content{
      p{
        font-size: 14px;
        margin: 24px 0 64px;
        text-align: left;
      }
    }
    .hero-mb{
      display: block;
      width: calc( 100% + 40px );
      margin: 0 -20px;
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
    padding: 72px 0;
  `}
`;

