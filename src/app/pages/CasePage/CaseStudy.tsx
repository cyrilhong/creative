import * as React from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as colors from '../../../styles/colors';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import img01 from './assets/01.jpg';
import img02 from './assets/02.jpg';
import img03 from './assets/03.jpg';
import img04 from './assets/04.jpg';
import img05 from './assets/05.jpg';
import * as color from '../../../styles/colors';
import arrow from './assets/button-black.svg';
import { Grid, Container } from '@mui/material';
import RoundButton from 'app/components/RoundButton'
import { media } from 'styles/media';
export default function CaseStudy() {
  return (
    <ParallaxProvider>
      <Wrapper>
        <Grid container spacing={0} rowSpacing={0} width="100%" m="0">
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img01} alt="" />
                <h4 className="type">金融與保險</h4>
                <h2 className="title">
                  台新 Richart 數位銀行｜和你站在同一邊，最懂你的銀行
                </h2>
                <div className="pills eng">
                  <div className="pill">EXPERIENCE</div>
                  <div className="pill">RESEARCH</div>
                  <div className="pill">BRANDING</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img02} alt="" />
                <h4 className="type">電信媒體與科技</h4>
                <h2 className="title">
                  遠傳電信官網｜不只是電信，替未來生活提案
                </h2>
                <div className="pills eng">
                  <div className="pill">STRATEGY</div>
                  <div className="pill">EXPERIENCE</div>
                  <div className="pill">RESEARCH</div>
                  <div className="pill">BRANDING</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img03} alt="" />
                <h4 className="type">交通與運輸</h4>
                <h2 className="title">
                  星宇航空｜打造精品航空獨到的數位體驗
                </h2>
                <div className="pills eng">
                  <div className="pill">STRATEGY</div>
                  <div className="pill">EXPERIENCE</div>
                  <div className="pill">RESEARCH</div>
                  <div className="pill">BRANDING</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img04} alt="" />
                <h4 className="type">金融與保險</h4>
                <h2 className="title">
                  中國信託親子銀行｜超前部署的親子金融體驗
                </h2>
                <div className="pills eng">
                  <div className="pill">EXPERIENCE</div>
                  <div className="pill">RESEARCH</div>
                  <div className="pill">BRANDING</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img05} alt="" />
                <h4 className="type">金融與保險</h4>
                <h2 className="title">
                  中國信託 SME｜專為中小企業設計的數位金融服務
                </h2>
                <div className="pills eng">
                  <div className="pill">EXPERIENCE</div>
                  <div className="pill">RESEARCH</div>
                  <div className="pill">BRANDING</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img02} alt="" />
                <h4 className="type">醫療與健康</h4>
                <h2 className="title">
                  國泰醫院｜安心、暖心的醫病橋樑
                </h2>
                <div className="pills eng">
                  <div className="pill">EXPERIENCE</div>
                  <div className="pill">RESEARCH</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img03} alt="" />
                <h4 className="type">交通與運輸</h4>
                <h2 className="title">
                  中華航空｜帶著走的旅遊行動助理
                </h2>
                <div className="pills eng">
                  <div className="pill">EXPERIENCE</div>
                  <div className="pill">BRANDING</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img04} alt="" />
                <h4 className="type">教育與娛樂</h4>
                <h2 className="title">
                  雲門舞集｜後疫情時代，數位學習趨勢研究
                </h2>
                <div className="pills eng">
                  <div className="pill">RESEARCH</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img04} alt="" />
                <h4 className="type">電信媒體與科技</h4>
                <h2 className="title">
                  台達電｜建構跨領域的設計系統
                </h2>
                <div className="pills eng">
                  <div className="pill">EXPERIENCE</div>
                  <div className="pill">BRANDING</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
          <Grid item xs={12} md={4}>
            <Case>
              <Fade bottom delay={-500}>
                <img src={img04} alt="" />
                <h4 className="type">金融與保險</h4>
                <h2 className="title">
                  新光銀行｜數位品牌形象傳達，展現金控品牌厚實底蘊
                </h2>
                <div className="pills eng">
                  <div className="pill">EXPERIENCE</div>
                  <div className="pill">RESEARCH</div>
                  <div className="pill">BRANDING</div>
                </div>
                <RoundButton
                  link={"#"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Fade>
            </Case>
          </Grid>
        </Grid>
      </Wrapper>
    </ParallaxProvider>
  );
}

const Wrapper = styled.div`
  background-color: ${colors.BGGrey};
  padding-top: 96px;
  padding-bottom: 128px;
  margin: 0 -41px;
  .MuiGrid-item {
    margin: 0 0 72px;
    padding: 0 40px;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    &:nth-child(2n) {
      border-left: 1px solid ${color.DarkBlue};
      border-right: 1px solid ${color.DarkBlue};
    }
    &:nth-child(4) {
      border-left: 0;
    }
    &:nth-child(7) {
      border-left: 0;
    }
    &:nth-child(10) {
      border-left: 0;
    }
    &:nth-child(11) {
      border-right: 1px solid ${color.DarkBlue};
    }
    &:nth-child(3n) {
      border-right: 0;
      /* padding-left: 40px; */
      /* padding-right: 0; */
    }
  }
  ${media.medium`
    padding: 64px 0 36px;
    margin: 0;
    .MuiGrid-item{
      margin: 0 0 36px;
      padding: 0 0 24px;
      border-bottom: 1px solid ${color.DarkBlue};
      &:nth-child(2n) {
        border-left: 0;
        border-right: 0;
      }
    }
  `}
`;
const Case = styled.div`
  flex: 1 1 30%; /*grow | shrink | basis */
  /* height: 100px; */
  /* min-height: 628px; */
  /* padding: 0 40px 0 0; */
  margin-bottom: 0;
  position: relative;
  img {
    width: 100%;
    filter: brightness(0.3);
  }
  a {
    position: absolute;
    bottom: 0;
    img {
      width: 60px;
    }
  }
  .pills {
    padding-bottom: 80px;
    min-height: 156px;
    .pill {
      margin-right: 12px;
      margin-bottom: 12px;
      border-radius: 100px;
      background-color: ${colors.BGMidGrey};
      color: ${colors.ConcreteGrey};
      display: inline-block;
      padding: 4px 16px;
      font-size: 12px;
      font-weight: 300;
      color: #979ea0;
    }
  }
  .type, .title{
    font-weight: 400;
  }
  ${media.medium`
    .pills{
      min-height: auto;
      padding-bottom: 0;
    }
    a{
      position: relative;
      margin: 10px 0 0;
    }
  `}
`;

const CaseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 -40px 0;
  padding-bottom: 200px;
  ${Case} {
  }
`;

const Button = styled.a`
  background: initial;
  border: 0;
  padding: 0;
  display: flex;
  color: ${colors.DarkBlue};
  margin-top: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    margin-right: 24px;
  }
`;
