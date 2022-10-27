import React, { useRef } from 'react';
import * as colors from 'styles/colors';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Lottie from 'lottie-react';
import * as color from './../../../styles/colors';
import Fade from 'react-reveal/Fade';
import arrow from './assets/button.svg';
import { PageWrapper } from '../PageWrapper';
import aja from './assets/aja-logo.svg';
import touch from './assets/get-in-touch.json';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
export default function footer() {
  const target = useRef(null);
  function Component() {
    const { ref } = useParallax<HTMLDivElement>({
      // translateY: [100, 0],
      // startScroll: 500,
      // speed: 10,
      // rotateY: [0, 360]
    });
    return (
      <div ref={ref}>
        <div className="huge eng">
          Let's make something
          <br /> great together.
        </div>
      </div>
    );
  }
  function Mark() {
    const { ref } = useParallax<HTMLDivElement>({
      // scaleX: [0, 1],
      opacity: [0, 100],
      startScroll: 1000,
      endScroll: 2000,
      shouldAlwaysCompleteAnimation: true,
      // speed: 10,
      // rotateY: [0, 360]
    });
    return <Marker ref={ref} />;
  }
  return (
    <Footer>
      <div style={{ backgroundColor: color.AJABlue }}>
        <PageWrapper blackBg={true} bgc={color.AJABlue} color={color.White}>
          <ParallaxProvider>
            <Wrapper>
              <Parallax speed={-20}>
                <Main>
                  <div className="left">
                    <div className="huge eng">
                      Let's make something
                      <br /> great together.
                    </div>
                    <h2>有新的商業與產品體驗需求嗎？與我們聊聊吧</h2>
                    <Button href={'#'}>
                      <div className="wrapper">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30.6963 20.031C25.8161 20.031 21.8397 16.0847 21.8397 11.1744"
                            stroke="#fff"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M21.8096 28.8264C21.8096 23.9463 25.7559 19.9698 30.6661 19.9698"
                            stroke="#fff"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M9.30701 20.0303H30.6952"
                            stroke="#fff"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </div>
                      <h4 className="eng">GET IN TOUCH</h4>
                    </Button>
                    {/* <Button>
                      <img src={arrow} alt="arrow" />
                      <h4 className="eng">GET IN TOUCH</h4>
                    </Button> */}
                  </div>
                  <div className="right">
                    {/* <img src={touch} alt="get in touch" /> */}
                    <Fade>
                      <Lottie animationData={touch} loop={2} />
                    </Fade>
                  </div>
                </Main>
                <Info>
                  <div className="main-link link">
                    <a className="eng">
                      <h3>WORK</h3>
                    </a>
                    <a className="eng">
                      <h3>SERVICES</h3>
                    </a>
                    <a className="eng">
                      <h3>ABOUT</h3>
                    </a>
                    <a className="eng">
                      <h3>CONTACT</h3>
                    </a>
                  </div>
                  <div className="link eng">
                    <div>
                      <h3>A Day In The Life . </h3>
                    </div>
                    <ul>
                      <li>FACEBOOK</li>
                      <li>JOIN US</li>
                    </ul>
                  </div>
                  <div className="link eng">
                    <div>
                      <h3>Let’s Chat . </h3>
                    </div>
                    <p>TEL . +886-2-85029135</p>
                    <p>FAX. +886-2-85029151</p>
                    <p>MOBILE. +886-922-083-876</p>
                  </div>
                  <div className="link">
                    <div className="eng">
                      <h3>Have A Meet . </h3>
                    </div>
                    <p>台北市中山區樂群二路 187 號 6 樓之 2 (大直豐匯）</p>
                    <p className="eng">
                      6F.-2, No.187, Lequn 2nd Rd., Zhongshan Dist., Taipei City
                      104 (Da Zhi Feng Hui)
                    </p>
                  </div>
                </Info>
                <Bottom>
                  <small className="eng">
                    © Copyright 2020 AJA Creative Co., Ltd. All rights reserved.
                  </small>
                  <img src={aja} alt="aja" />
                </Bottom>
              </Parallax>
            </Wrapper>
          </ParallaxProvider>
        </PageWrapper>
      </div>
    </Footer>
  );
}

const Footer = styled.div`
  position: relative;
  padding: 0;
  z-index: 0;
  /* background-color: ${color.AJABlue}; */
  .lines {
    .line {
      border-right: 1px solid #f3f3eb0d;
    }
  }
`;

const Marker = styled.div`
  position: relative;
  width: 467px;
  display: block;
  position: absolute;
  top: 20px;
  height: 24px;
  transition: all 0.5s ease-in-out;
  background: #ff8262;
  z-index: -1;
`;


const Wrapper = styled.div`
  color: #fff;
  padding-top: 106px;
  height: 790px;
  overflow: hidden;
  /* background-color: #fff; */
`;

const Main = styled.div`
  display: flex;
  gap: 34px;
  justify-content: start;
  .left {
    flex: 0 1 auto;
    h2 {
      position: relative;
    }
  }
  .right {
    flex-basis: 400px;
    /* background-color: #ffffff4c; */
  }
`;

const Button = styled.a`
  background: initial;
  border: 0;
  padding: 0;
  display: flex;
  color: #fff;
  margin-top: 32px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  svg {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  h4 {
    text-decoration: none;
  }
  .wrapper {
    border: 2px solid ${colors.White};
    margin-right: 24px;
    display: flex;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in;
    path {
      transition: all 0.5s;
    }
    &:hover {
      color: ${colors.White};
      path {
        stroke: ${colors.DarkBlue};
      }
    }
    &::before {
      -webkit-animation: move-out 0.3s;
      animation: move-out 0.3s;
      background: ${colors.White};
      color: ${colors.DarkBlue};
      content: '';
      height: 100%;
      left: -100%;
      position: absolute;
      top: 0;
      width: 100%;
      will-change: transform;
    }
    &:hover:before {
      -webkit-animation: move-in 0.3s forwards;
      animation: move-in 0.3s forwards;
    }
  }
`;

const Info = styled.div`
  display: flex;
  margin-top: 74px;
  margin-bottom: 40px;
  .link {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      margin: 0;
      line-height: 21px;
      font-weight: 300;
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        padding: 0;
        margin-bottom: 8px;
        list-style: none;
        text-decoration: underline;
      }
    }
  }
  .main-link {
    gap: 24px;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  h3 {
    margin: 0;
  }
`;

const Bottom = styled.div`
  padding: 0 40px 26px;
  align-items: end;
  display: flex;
  justify-content: end;
  small {
    font-size: 12px;
    margin-right: 12px;
    font-weight: 300;
  }
`;
