import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as colors from 'styles/colors';
import { useWindowSize } from '../../hooks'
import { media } from 'styles/media';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PageWrapper } from 'app/components/PageWrapper';
import WrappedButton from 'app/components/WrappedButton'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import * as color from 'styles/colors';
export default function AboutTheCase() {
  const ideaRef = useRef<any>(null);
  const [ideaActive, setIdeaActive] = useState(false)
  useScrollPosition(({ prevPos, currPos }) => {
    if (ideaRef.current!.getBoundingClientRect().top < 1000) {
      setIdeaActive(true)
    } else {
      setIdeaActive(false)
    }
  });
  return (
    <Wrapper ref={ideaRef}>
      <PageWrapper overflow={"true"} className="page-container">
        <Horizon>
          <div className="title">
            <div className="dot" />
            <h4 className="eng">INTRODUCTION</h4>
          </div>
          <h4 className="eng">01</h4>
        </Horizon>
        <Grid container className="container">
          <Grid xs={12} md={4}>
            <Fade bottom>
              <div className="title">Project <br /> Overview</div>
              <div className="sub">專案背景</div>
            </Fade>
          </Grid>
          <Grid xs={12} md={8}>
            <Fade bottom>
              <h3>LINE Bank 理財網的建立為輔助銀行金融產品功能新上線，規劃導流目標用戶使用產品與開拓投資市場 ，聚焦強化數位品牌競爭優勢，思考用戶易懂的理財教育溝通策略，延續回訪查詢的動能，讓理財網成為在做投資決策前具有關鍵影響力的平台。</h3>
              <h4 className="">OUR ROLE</h4>
              <div className="pills">
                <div className="pill eng">UI / UX</div>
                <div className="pill eng">WEBSITE</div>
                <div className="pill eng">DESIGN SYSTEM</div>
                <div className="pill eng">STRATEGY</div>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </PageWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 92px 0 174px;
  /* margin-bottom: -100px; */
  display: flex;
  text-align: center;
  background-color: ${colors.DarkBlue};
  color: ${color.White};
  text-align: left;
  .wrapper {
    padding: 16px 84px;
  }
  .title{
    font-size: 60px;
    font-family: 'Poppins';
    line-height: 75px;
    font-weight: 500;
    color: ${color.White};
  }
  .sub{
    font-size: 36px;
  }
  h2 {
    font-size: 24px;
    margin: 8px 0 16px;
    color: ${colors.White};
  }
  h3{
    /* color: ${colors.White}; */
    margin-bottom: 48px;
    margin-top: 0;
    font-weight: 300;
  }
  h4{
    margin: 0 0 24px;
    font-weight: 400;
  }
  a {
    margin: 32px auto 0;
    /* background-color: #fff; */
    min-width: 215px;
  }
  .pills {
    margin-bottom: 36px;
    .pill {
      margin-right: 12px;
      margin-bottom: 12px;
      border-radius: 100px;
      background-color: #2E3C42;
      letter-spacing: 0.15em;
      color: #969DA0;
      display: inline-block;
      padding: 4px 16px;
      font-size: 12px;
      line-height: 24px;
      font-weight: 300;
      &:hover{
        cursor: default;
      }
    }
  }
  ${media.large`
    a{
      margin-top: 16px;
    }
  `}
  ${media.medium`
    padding: 12px 0 24px;
    margin-bottom: 0;
    .container{
      flex-direction: column;
      /* border-right: 1px solid ${colors.DarkBlue};
      border-left: 1px solid ${colors.DarkBlue}; */
      gap: 48px;
      .title{
        font-size: 32px;
        line-height: 40px;
        br{
          display: none;
        }
      }
      .sub{
        font-size: 24px;
        line-height: 36px;
      }
      h3{
        font-size:16px;
        margin-bottom: 32px;
      }
    }
    .border {
      border-right: 0;
    }
    h1{
      margin-top: 24px;:
    }
    h2{
      margin: 8px 0 16px;
      font-size: 18px;
    }
    a{
      min-width: 172px;
    }
  `}
`;

const Horizon = styled.div<{
  pt?: string;
}>`
  /* border-top: 1px solid ${colors.White}; */
  display: flex;
  justify-content: space-between;
  padding-bottom: 120px;
  padding-top: ${prop => prop.pt ? prop.pt : '120px'};
  position: relative;
  padding-top: 26px;
  color: ${color.White};
  .page-container{
    max-width: 1520px;
  }
  &::after {
    content: '';
    width: 100%;
    display: block;
    border-top: 1px solid ${color.White};
    position: absolute;
  }
  h4 {
    margin: 20px 0 0;
    font-weight: 300;
    letter-spacing: 0.1rem;
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
      background-color: ${color.White};
      color: ${colors.DarkBlue};
      margin-right: 8px;
    }
    h4 {
      margin: 0;
    }
  }
  ${media.large`
    padding-top: 90px;
  `}
  ${media.medium`
    padding: 32px 0 72px;
  `}
`;
