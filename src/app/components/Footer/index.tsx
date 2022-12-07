import React, { useRef, useState } from 'react';
import * as colors from 'styles/colors';
import Grid from '@mui/material/Unstable_Grid2';
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
import { useWindowSize } from '../../hooks'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { isDesktop } from 'react-device-detect';
export default function footer() {
  const target = useRef(null);
  const ref = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowSize().width
  const [active, setActive] = useState(false)
  const [zIndex, setZIndex] = useState(false)
  useScrollPosition(({ prevPos, currPos }) => {
    if (windowWidth > 960) {
      if (ref.current!.getBoundingClientRect().top < 700) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  });
  const Footer = styled.div`
  /* position: relative; */
  display: flex;
  background-color: ${color.AJABlue};
  padding: 0;
  z-index: ${active ? '0' : '-1'};
  .page-wrapper{
    width: 100%;
  }
  .lines {
    .line {
      border-right: 1px solid #f3f3eb0d;
    }
  }
  .get-in-touch{
    .lottie{
      display: none;
    }
  }
  ${media.large`
    .get-in-touch{
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
    button{
      display: inline-flex;
      flex-direction: row;
    }
  `}
  ${media.medium`
    .right{
      display: none;
    }
    .get-in-touch{
      .lottie{
        display: block;
        width: 240px;
      }
    }
  `}
  ${media.small`
    .get-in-touch{
      .lottie{
        display: block;
        width: 118px;
      }
    }
  `}
`;

  return (
    <Footer ref={ref}>
      <PageWrapper className="page-wrapper" overflow={'false'} blackBg={true} bgc={color.AJABlue} color={color.White}>
        <ParallaxProvider>
          <Wrapper>
            <Parallax speed={windowWidth > 960 ? (active ? -25 : 45) : 0}>
              <Fade bottom={windowWidth > 960}>
                <Main>
                  <div className="left">
                    {windowWidth > 640 ?
                      <div className="huge eng">
                        Let's make something
                        <br /> great together.
                      </div> :
                      <div className="huge eng">
                        Let's make <br />
                        something great<br />
                        together.
                      </div>
                    }
                    <h2>有新的商業與產品體驗需求嗎？<br />與我們聊聊吧</h2>
                    <div className='get-in-touch'>
                      <Button href={'/contact'}>
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

                      <div className="lottie">
                        <Lottie animationData={touch} loop={false} />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <Lottie animationData={touch} loop={false} />
                  </div>
                </Main>
              </Fade>
              <Fade bottom={windowWidth > 960}>
                <Info>
                  <Grid className="container" container spacing={windowWidth > 960 ? 8 : 0}>
                    <Grid xs={0} md={3}>
                      <div className="main-link link">
                        <a href="/case">
                          <h3 className="eng">WORK</h3>
                        </a>
                        <a href="/service">
                          <h3 className="eng">SERVICES</h3>
                        </a>
                        <a href="/about-us">
                          <h3 className="eng">ABOUT</h3>
                        </a>
                        <a href="/contact">
                          <h3 className="eng">CONTACT</h3>
                        </a>
                      </div>
                    </Grid>
                    <Grid xs={0} md={3}>
                      <div className="social-meoda link eng">
                        <div>
                          <h3>A Day In The Life . </h3>
                        </div>
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/AJA.Creative" target={"_blank"}>
                              <h5 className="eng">FACEBOOK</h5>
                            </a>
                          </li>
                          <li>
                            <a href="/join-us">
                              <h5 className="eng">JOIN US</h5>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Grid>
                    <Grid xs={12} md={3}>
                      <div className="link eng">
                        <div>
                          <h3>Let’s Chat . </h3>
                        </div>
                        <h5 className="eng">TEL . +886-2-85029135 <br />FAX. +886-2-85029151 <br />MOBILE. +886-922-083-876</h5>
                      </div>
                    </Grid>
                    <Grid xs={12} md={3}>
                      <div className="link">
                        <div className="eng">
                          <h3>Have A Meet . </h3>
                        </div>
                        <h5>台北市中山區樂群二路 187 號 6 樓之 2（大直豐滙）</h5>
                        <h5 className="eng">
                          6F.-2, No.187, Lequn 2nd Rd., Zhongshan Dist., Taipei City
                          104 (Da Zhi Feng Hui)
                        </h5>
                      </div>
                    </Grid>
                  </Grid>
                </Info>
              </Fade>
              <Fade bottom={windowWidth > 960}>
                <Bottom>
                  <small className="eng">
                    © Copyright 2022 AJA Creative Co., Ltd. All rights reserved.
                  </small>
                  <img src={aja} alt="aja" />
                </Bottom>
              </Fade>
            </Parallax>
          </Wrapper>
        </ParallaxProvider>
      </PageWrapper>
    </Footer>
  );
}




const Wrapper = styled.div`
  color: #fff;
  padding-top: 106px;
  /* height: 790px; */
  /* overflow: hidden; */
  ${media.medium`
    padding: 0 0 16px;
    height: auto;
  `}
`;

const Main = styled.div`
  display: flex;
  gap: 34px;
  justify-content: space-between;
  br{
    /* display: none; */
  }
  .left {
    flex: 0 1 auto;
    h2 {
      position: relative;
    }
  }
  .right {
    flex-basis: 400px;
    min-width: 400px;
    margin-top: 20px;
  }
  ${media.medium`
    display: block;
    margin-top: 48px;
    .left{
      h2{
        margin: 8px 0;
      }
    }
    br{
      display: block;
    }
  `}
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
  text-decoration: none;
  align-items: center;
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
  ${media.medium`
    margin-top: 20px;
    .wrapper{
      margin-right: 12px;
      width: 40px;
      height: 40px;
    }
    h4{
      font-size: 22px;
    }
  `}
`;

const Info = styled.div`
  display: block;
  margin-top: 74px;
  margin-bottom: 0px;
  .link {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    h5 {
      margin: 0 0 14px;
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
        font-size: 14px;
      }
    }
  }
  .main-link {
    gap: 24px;
  }
  a{
    text-decoration: none;
    color:${color.White};
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  h3 {
    margin: 0;
  }
  ${media.medium`
    flex-direction: column;
    margin-top: 16px;
    .main-link,.social-meoda{
      display: none;
    }
    .container{
      flex-direction: column;
    }
    .link{
      margin-bottom: 32px;
      h5{
        margin-bottom: 0;
      }
    }
  `}
`;

const Bottom = styled.div`
  padding: 70px 16px 26px;
  margin-right: -40px;
  align-items: end;
  display: flex;
  justify-content: end;
  small {
    font-size: 12px;
    margin-right: 12px;
    font-weight: 300;
  }
  ${media.medium`
    margin: 0;
    padding: 0;
    justify-content: start;
    img{
      display: none;
    }
  `}
`;
