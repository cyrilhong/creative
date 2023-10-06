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
import Fade from 'react-reveal/Fade';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import Hero from './assets/design-insights.svg'
import { Mark } from './Mark';
export default function DesignConcept() {
  const windowWidth = useWindowSize().width

  return (
    <Wrapper>
      <PageWrapper overflow={"true"} className="page-container">
        <Horizon blackBg>
          <div className="title">
            <div className="dot" />
            <h4 className="eng">DESIGN CONCEPT</h4>
          </div>
        </Horizon>
        <Fade bottom>
          <div className="huge eng characteristic">
            Make it Simple, Make it Big
          </div>
          <h1>
            {windowWidth < 1114 ? <>
              Richart 不再侷限於最能幫年輕人存到錢的銀行，而是<div className='draw'>放大格局</div>，我們要幫助用戶<div className='draw'>掌握致富的藝術</div>。
            </>
              :
              <>
                Richart 不再侷限於最能幫年輕人存到錢的銀行，而是
                <Mark color={color.RichartBlue}>放大格局</Mark>，我們要幫助用戶<Mark color={color.RichartBlue}>掌握致富的藝術</Mark>。
              </>}

          </h1>
          <p>
            過去的 Richart 主打幫年輕人存錢，但隨著數位時代推進，大眾對於數位銀行有更多的了解和期待，全新的品牌精神「All in Richart」用更直率、更簡約的方式，全部都能在 Richart 中獲得滿足，放大你的財富，輕鬆實踐更有態度的率性生活。
          </p>
        </Fade>
      </PageWrapper>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${color.DarkBlue};
  overflow: hidden;
  padding-bottom: 184px;
  .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 20px ${color.BGGrey}, inset 0px 54px ${color.RichartBlue};
    }
    .draw::after{
      content: '';
      border-bottom: 15px solid ${color.ElectricBlue};
    }
  h1{
    margin: 12px 0 0;
    max-width: 1170px;
  }
  p{
    margin: 0;
    max-width: 1170px;
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
    padding-bottom: 72px;
    br{
      display: none;
    }
    h1{
      margin: 8px 0 24px;
    }
    p{
      font-size: 14px;
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
    padding: 72px 0 72px;
  `}
`;

