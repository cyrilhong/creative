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
import skfh from './assets/img_skfh.jpg';
import yoxi from './assets/yoxi.jpg';
import lineBank from './assets/line-bank.jpg';
import richart from './assets/img_richart.jpg';
import fetnet from './assets/img_fetnet.jpg';
import starlux from './assets/img_starlux.jpg';
import cnParenting from './assets/img_ct-parenting.jpg';
import ctbc from './assets/img_ctbc.jpg';
import cathay from './assets/img_cathay.jpg';
import chinaAirlines from './assets/img_china-airlines.jpg';
import cloudGate from './assets/img_cloud-gate.jpg';
import delta from './assets/img_delta.jpg';
import * as color from '../../../styles/colors';
import Richart from './assets/richart.jpg';
import { Grid, Container } from '@mui/material';
import RoundButton from 'app/components/RoundButton'
import { media } from 'styles/media';
export default function CaseStudy() {
  return (
    <ParallaxProvider>
      <Wrapper>
        <Grid container spacing={0} rowSpacing={0} width="100%" m="0">
          <Grid item xs={12} md={4}>
            <a href="https://www.aja-creative.com/case/line-bank" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <div className="img-wrapper">
                  <img src={lineBank} alt="line-bank" />
                </div>
                <Fade bottom delay={-500} cascade>
                  <h4 className="type">金融理財</h4>
                  <h2 className="title">
                    LINE Bank 理財網｜建立品牌溝通策略，吸引年輕用戶與專業投資者理財
                  </h2>
                  <div className="pills eng">
                    <div className="pill">BRANDING</div>
                    <div className="pill">EXPERIENCE</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://www.aja-creative.com/case/line-bank"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <a href="https://yoxi-case-study.aja.com.tw/" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <div className="img-wrapper">
                  <img src={yoxi} alt="和泰派遣" />
                </div>
                <Fade bottom delay={-500} cascade>
                  <h4 className="type">交通與運輸</h4>
                  <h2 className="title">
                    和泰移動派遣服務｜yoxi 美好出行體驗
                  </h2>
                  <div className="pills eng">
                    <div className="pill">STRATEGY</div>
                    <div className="pill">EXPERIENCE</div>
                    <div className="pill">BRANDING</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://yoxi-case-study.aja.com.tw/"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <a href="https://www.aja-creative.com/case/skfh" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <div className="img-wrapper">
                  <img src={skfh} alt="台新銀行" />
                </div>
                <Fade bottom delay={-500} cascade>
                  <h4 className="type">金融與保險</h4>
                  <h2 className="title">
                    新光金控｜翻轉悠久品牌形象，定義與時俱進的溝通策略
                  </h2>
                  <div className="pills eng">
                    <div className="pill">EXPERIENCE</div>
                    <div className="pill">BRANDING</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://www.aja-creative.com/aja_before/zh_tw/case_taishinbank_richart.html"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <a href="https://fetnet-revision.aja.com.tw/" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <Fade bottom delay={-500}>
                  <div className="img-wrapper">
                    <img src={fetnet} alt="遠傳" />
                  </div>
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
                </Fade>
                <RoundButton
                  link={"https://fetnet-revision.aja.com.tw/"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <a href="https://www.aja-creative.com/aja_before/zh_tw/case_taishinbank_richart.html" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <div className="img-wrapper">
                  <img src={richart} alt="台新Richart" />
                </div>
                <Fade bottom delay={-500} cascade>
                  <h4 className="type">金融與保險</h4>
                  <h2 className="title">
                    台新 Richart 數位銀行｜和你站在同一邊，最懂你的銀行
                  </h2>
                  <div className="pills eng">
                    <div className="pill">EXPERIENCE</div>
                    <div className="pill">RESEARCH</div>
                    <div className="pill">BRANDING</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://www.aja-creative.com/aja_before/zh_tw/case_taishinbank_richart.html"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <a href="https://aja.com.tw/starlux-case-study/index.html" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <Fade bottom delay={-500}>
                  <div className="img-wrapper">
                    <img src={starlux} alt="星宇" />
                  </div>
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
                </Fade>
                <RoundButton
                  link={"https://aja.com.tw/starlux-case-study/index.html"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <a href="https://aja.com.tw/portfolio/ctbc-parent-child/index.html" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <Fade bottom delay={-500}>
                  <div className="img-wrapper">
                    <img src={cnParenting} alt="中國信託親子銀行" />
                  </div>
                  <h4 className="type">金融與保險</h4>
                  <h2 className="title">
                    中國信託親子銀行｜超前部署的親子金融體驗
                  </h2>
                  <div className="pills eng">
                    <div className="pill">EXPERIENCE</div>
                    <div className="pill">RESEARCH</div>
                    <div className="pill">BRANDING</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://aja.com.tw/portfolio/ctbc-parent-child/index.html"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <a href="https://aja.com.tw/portfolio/ctbc-sme/index.html" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <Fade bottom delay={-500}>
                  <div className="img-wrapper">
                    <img src={ctbc} alt="中國信託e-Cash" />
                  </div>
                  <h4 className="type">金融與保險</h4>
                  <h2 className="title">
                    中國信託 e-Cash｜專為中小企業設計的數位金融服務
                  </h2>
                  <div className="pills eng">
                    <div className="pill">EXPERIENCE</div>
                    <div className="pill">RESEARCH</div>
                    <div className="pill">BRANDING</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://aja.com.tw/portfolio/ctbc-sme/index.html"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid> */}
          <Grid item xs={12} md={4}>
            <a href="https://www.aja-creative.com/aja_before/zh_tw/case_cathay_hospital.html" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <Fade bottom delay={-500}>
                  <div className="img-wrapper">
                    <img src={cathay} alt="國泰醫院" />
                  </div>
                  <h4 className="type">醫療與健康</h4>
                  <h2 className="title">
                    國泰醫院｜安心、暖心的醫病橋樑
                  </h2>
                  <div className="pills eng">
                    <div className="pill">EXPERIENCE</div>
                    <div className="pill">RESEARCH</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://www.aja-creative.com/aja_before/zh_tw/case_cathay_hospital.html"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <a href="https://aja.com.tw/portfolio/delta-biczone/index.html" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <Fade bottom delay={-500}>
                  <div className="img-wrapper">
                    <img src={delta} alt="台達電" />
                  </div>
                  <h4 className="type">電信媒體與科技</h4>
                  <h2 className="title">
                    台達電｜建構跨領域的設計系統
                  </h2>
                  <div className="pills eng">
                    <div className="pill">EXPERIENCE</div>
                    <div className="pill">BRANDING</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://aja.com.tw/portfolio/delta-biczone/index.html"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <a href="https://aja.com.tw/portfolio/elearning/index.html" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <Fade bottom delay={-500}>
                  <div className="img-wrapper">
                    <img src={cloudGate} alt="雲門舞集" />
                  </div>
                  <h4 className="type">教育與娛樂</h4>
                  <h2 className="title">
                    雲門舞集｜後疫情時代，數位學習趨勢研究
                  </h2>
                  <div className="pills eng">
                    <div className="pill">RESEARCH</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://aja.com.tw/portfolio/elearning/index.html"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
          </Grid> */}
          <Grid item xs={12} md={4}>
            <a href="https://www.aja-creative.com/aja_before/zh_tw/case_china_airlines.html" target={"_blank"} style={{ textDecoration: 'none' }}>
              <Case>
                <Fade bottom delay={-500}>
                  <div className="img-wrapper">
                    <img src={chinaAirlines} alt="華航" />
                  </div>
                  <h4 className="type">交通與運輸</h4>
                  <h2 className="title">
                    中華航空｜帶著走的旅遊行動助理
                  </h2>
                  <div className="pills eng">
                    <div className="pill">EXPERIENCE</div>
                    <div className="pill">BRANDING</div>
                  </div>
                </Fade>
                <RoundButton
                  link={"https://www.aja-creative.com/aja_before/zh_tw/case_china_airlines.html"}
                  isWhite={false}
                  text="CASE STUDY"
                />
              </Case>
            </a>
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
  flex: 1 1 30%;
  margin-bottom: 0;
  min-height: 560px;
  position: relative;
  cursor: pointer;
  .img-wrapper{
    width: 100%;
    overflow: hidden;
  }
  img {
    width: 100%;
    /* filter: brightness(0.3); */
    transition: all .2s ease-in;
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
      letter-spacing: 1px;
      background-color: ${colors.BGMidGrey};
      color: ${colors.ConcreteGrey};
      display: inline-block;
      padding: 4px 16px;
      font-size: 12px;
      font-weight: 300;
      color: #979ea0;
      cursor: default;
    }
  }
  .type, .title{
    font-weight: 400;
    margin: 24px 0 8px;
  }
  h2.title{
    margin: 0 0 24px;
    font-weight: 300;
    color:${color.AJABlue};
  }
  h4{
    color:${color.AJABlue};
  }
  &:hover{
    img{
      transform: scale(1.05);
    }
    a{
      .wrapper{
        color: ${colors.White};
        path {
          stroke: ${colors.White};
        }
        &:before {
          -webkit-animation: move-in 0.3s forwards;
          animation: move-in 0.3s forwards;
        }
      }
      @keyframes move-in {
        0% {
          transform: translateX(0);
        }
        to {
          transform: translateX(100%);
        }
      }
    }
  }
  ${media.medium`
    min-height: 560px;
    .type{
      margin: 16px 0 8px;
    }
    h2.title{
      margin-bottom:16px;
    }
    .pills{
      min-height: auto;
      padding-bottom: 0;
    }
    a{
      position: relative;
      margin: 10px 0 0;

    }
    &:hover{
      a{
        .wrapper{
          path {
            stroke: ${colors.DarkBlue};
          }
        }
      }
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
