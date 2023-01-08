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
            <h4 className="eng">INTERDUCTION</h4>
          </div>
          <h4 className="eng">01</h4>
        </Horizon>
        <Grid container className="container">
          <Grid xs={12} md={4}>
            <div className="title">Project <br /> Overview</div>
            <div className="sub">專案背景</div>
          </Grid>
          <Grid xs={12} md={8}>
            <h3>20 年來金控品牌秉持著「光無所不在，心與你同在」的品牌精神，在銀行、人壽、證券等金融服務持續耕耘，在廣大的客戶心中樹立了良好優質的品牌形象。在迎來 20 週年之際，藉由這次官網的改版，希望在品牌原有的扎實基礎之上，刻畫出一個金控品牌的全新氣象，來面對後疫情時代和金融產業數位轉型的全新挑戰。</h3>
            <h4 className="eng">OUR ROLE</h4>
            <div className="pills">
              <div className="pill eng">UI / UX</div>
              <div className="pill eng">WEBSITE</div>
              <div className="pill eng">DESIGN SYSTEM</div>
              <div className="pill eng">STRATEGY</div>
            </div>
          </Grid>
        </Grid>
      </PageWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 92px 0 192px;
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
    color: ${colors.White};
    margin-bottom: 48px;
    margin-top: 0;
  }
  h4{
    margin: 0 0 24px;
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
      background-color: #2e3c42;
      letter-spacing: 0.15em;
      color: ${colors.White};
      display: inline-block;
      padding: 4px 16px;
      font-size: 12px;
      line-height: 24px;
      font-weight: 300;
      color: #979ea0;
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
    padding: 48px 0;
    .container{
      flex-direction: column;
      border-right: 1px solid ${colors.DarkBlue};
      border-left: 1px solid ${colors.DarkBlue};
      gap: 48px;
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
  color: ${colors.DarkBlue};
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
    border-top: 1px solid ${colors.White};
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
      background-color: ${colors.White};
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
