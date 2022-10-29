import React, { useState, useEffect, useRef, createRef, Children } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { useWindowSize } from '../../hooks'
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components/macro';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import * as colors from 'styles/colors';
import Yoxi from './assets/yoxi.jpg';
import arrow from './assets/button.svg';
import arrowBlack from './assets/arrow-black.svg';
import arrowWhite from './assets/arrow.svg';
import arrowHollow from './assets/arrow-hollow-left.svg';
import arrowHollowRight from './assets/arrow-hollow-right.svg';
import Fade from 'react-reveal/Fade';
import CaseStudy from './CaseStudy';
import Idea from './assets/idea.svg';
import { media } from 'styles/media';
import CathaiCase from './assets/cathai-case.jpg';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import VideoJS from './VideoJS';
import videojs from 'video.js';
import CTBC from './assets/ctbc.jpg';
import Starlux from './assets/starlux.jpg';
import Fetnet from './assets/fetnet.jpg';
import wall1 from './assets/wall-1.jpg';
import wall2 from './assets/wall-2.jpg';
import wall3 from './assets/wall-3.jpg';
import wall4 from './assets/wall-4.jpg';
import wall5 from './assets/wall-5.jpg';
import wall6 from './assets/wall-6.jpg';
import ctbaLogo from './assets/ctbc-logo.png';
import dedicationWording from './assets/dedication.svg';
import dedicationBg from './assets/dedication.jpg';
import work01 from './assets/work-01.svg';
import work02 from './assets/work-02.svg';
import work03 from './assets/work-03.svg';
import hiveFive from './assets/hiveFive.svg';
import InfuseAI from './assets/InfuseAI.svg';
import FetnetLogo from './assets/fetnet-logo.svg';
import showreel from './assets/showreel.mp4';
import Lottie from 'lottie-react';
import lottie1 from './assets/lottie-01.json';
import lottie2 from './assets/lottie-02.json';
import lottie3 from './assets/lottie-03.json';
import lottieJoinUs from './assets/join-us.json';
import lottieClient from './assets/client.json';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

const CaseSlider = [
  {
    content:
      '“ 金融業接觸較多是設計廠商，或是商管顧問；比較少遇到這種從研究出發又能考量業態情境的設計顧問公司，雖然與過去廠商互動習慣不同，但值得一試。“',
    name: '中國信託銀行, Kage',
    link: '#',
    img: {
      src: ctbaLogo,
      alt: 'ctbaLogo',
    },
  },
  {
    content:
      '“ 大予設計是一間品質很好穩定度又高的設計顧問公司，業界經驗豐富，是很好的合作夥伴。“',
    name: '遠傳電信, Joart',
    link: '#',
    img: {
      src: FetnetLogo,
      alt: 'FetnetLogo',
    },
  },
  {
    content:
      '“ 跟 AJA 合作非常棒，他們把客戶的需求放在第一優先，提供我們無可挑剃的成果。“',
    name: 'InfuseAI 共同創辦人兼營運長, 薛良斌',
    link: '#',
    img: {
      src: InfuseAI,
      alt: 'InfuseAI',
    },
  },
  {
    content:
      '“ 金融業接觸較多是設計廠商，或是商管顧問；比較少遇到這種從研究出發又能考量業態情境的設計顧問公司，雖然與過去廠商互動習慣不同，但值得一試。“',
    name: '中國信託銀行, Kage',
    link: '#',
    img: {
      src: Yoxi,
      alt: 'Yoxi',
    },
  },
  {
    content:
      '“ 金融業接觸較多是設計廠商，或是商管顧問；比較少遇到這種從研究出發又能考量業態情境的設計顧問公司，雖然與過去廠商互動習慣不同，但值得一試。“',
    name: '中國信託銀行, Kage',
    link: '#',
    img: {
      src: Yoxi,
      alt: 'Yoxi',
    },
  },
];
export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = React.useRef<Slider>(null);
  const sliderRef = React.createRef();
  const [blackBg, setBlackBg] = useState(true);
  const windowWidth = useWindowSize().width
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
    centerPadding: '80px',
    initialSlide: 0,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb"
    // afterChange: e => {
    //   // if (!sliderRef.current) return;
    //   Slider.current?.slickGoTo(e);
    //   setActiveSlide(e);
    // },
  };
  const gotoSlick = index => {
    // console.log(carouselRef.current);
    setActiveSlide(index);
    carouselRef.current?.slickGoTo(index);
  };

  const themeColorRef = useRef<HTMLDivElement>(null);
  const helpColorRef = useRef<HTMLDivElement>(null);

  useScrollPosition(({ prevPos, currPos }) => {
    // console.log(currPos.x)
    // console.log(Math.abs(currPos.y));
    // console.log(themeColorRef.current!.getBoundingClientRect().top);
    // console.log(themeColorRef.current!.getBoundingClientRect().y);
    // console.log(helpColorRef.current!.getBoundingClientRect().top);

    if (themeColorRef.current!.getBoundingClientRect().top < 100) {
      // debugger
      setBlackBg(false);
    } else {
      setBlackBg(true);
    }
    if (
      helpColorRef.current!.getBoundingClientRect().top < 100 &&
      Math.abs(currPos.y) > 7000
    ) {
      // debugger
      setBlackBg(true);
    }
    // if (Math.abs(currPos.y) > 7000) {
    //   // debugger
    //   setBlackBg(true);
    // } else {
    //   setBlackBg(false);
    // }
  });

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    muted: true,
    loop: true,
    sources: [
      {
        src: showreel,
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = player => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      // videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      // videojs.log('player will dispose');
    });

    player.on('click', () => {
      // console.log('click');
      player.requestFullscreen();
      player.muted(false);
    });
    player.on('fullscreenchange', function () {
      if (player.isFullscreen()) {
      } else {
        player.muted(true);
      }
    });
  };

  const target = useRef(null);
  function Mark(props) {
    const { ref } = useParallax<HTMLDivElement>({
      scaleX: [0, 1],
      rootMargin: { top: 0, right: 0, bottom: -600, left: 0 },
    });
    const color = props.color ? props.color : colors.ElectricBlue;
    return (
      <span>
        <div style={{ zIndex: 1, position: 'relative' }}>{props.children}</div>
        <span
          style={{
            position: 'relative',
            display: 'block',
            bottom: '30px',
            height: '24px',
            backgroundColor: color,
            zIndex: 0,
            transformOrigin: 'left',
          }}
          ref={ref}
        ></span>
      </span>
    );
  }

  return (
    <ParallaxProvider>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar theme={blackBg} />
      <div className={blackBg ? 'black' : 'white'}>
        <PageWrapper>
          <Masthead />
          <VideoWrapper>
            <Parallax scale={[1, 1.5]} speed={-10}>
              {!isMobile ? (
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%' }}
                >
                  <source src={showreel} />
                  <img src="image.gif" />
                </video>
              )}
            </Parallax>
          </VideoWrapper>
          <Horizon blackBg>
            <div className="title">
              <div className="dot" />
              <h4 className="eng">FEATURED WORKS</h4>
            </div>
            <h4 className="eng">01</h4>
          </Horizon>
          {windowWidth > 960 ? <div className="huge eng">
            <Fade bottom cascade duration={1000} delay={100}>
              We meet each business critical
            </Fade>
            <Fade bottom cascade duration={1000} delay={100}>
              situation with a tailored
            </Fade>
            <Fade bottom cascade duration={1000} delay={100}>
              solution.
            </Fade>
          </div> :
            <div className="huge eng">
              <Fade bottom duration={1000} delay={100}>
                We meet each
              </Fade>
              <Fade bottom cascade duration={1000} delay={100}>
                business critical
              </Fade>
              <Fade bottom cascade duration={1000} delay={100}>
                situation with a
              </Fade>
              <Fade bottom cascade duration={1000} delay={100}>
                tailored solution.
              </Fade>
            </div>
          }
          <FeatureHead>
            {windowWidth < 960 ?
              <>
                我們透過
                <Mark>量身定制的解決方案</Mark>，來應對不同商業需求的關鍵情境
              </> :
              <>
                我們透過
                <div className='draw'>量身定制的解決方案</div>，來應對不同商業需求的關鍵情境
              </>
            }
          </FeatureHead>
          <RoundButton href={'#'}>
            <h4 className="eng">OUR WORKS</h4>
            {/* <img src={arrowWhite} alt="arrow" /> */}
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
          </RoundButton>
          <CaseList>
            <Grid container>
              <Grid xs={12} md={7} className="case">
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <img src={Yoxi} alt="Yoxi" />
                </div>
                <Fade bottom>
                  <h4>交通與運輸</h4>
                  <h2>和泰移動派遣服務｜yoxi 美好出行體驗</h2>
                  <div className="pills">
                    <div className="pill eng">BRANDING</div>
                    <div className="pill eng">EXPERIENCE</div>
                  </div>
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
                    <h4 className="eng">CASE STUDY</h4>
                  </Button>
                </Fade>
              </Grid>
              <Grid xs={12} md={4} className="case">
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <img src={CTBC} alt="ctbc" />
                </div>
                <Fade bottom>
                  <h4>金融與保險</h4>
                  <h2>中國信託親子銀行｜玩轉青少年儲蓄觀念的社群產品</h2>
                  <div className="pills">
                    <div className="pill eng">BRANDING</div>
                    <div className="pill eng">EXPERIENCE</div>
                  </div>
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
                    <h4 className="eng">CASE STUDY</h4>
                  </Button>
                </Fade>
              </Grid>
              <Grid xs={12} md={5} mdOffset={2} className="case">
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <img src={Fetnet} alt="Fetnet" />
                </div>
                <Fade bottom>
                  <h4>電信媒體與科技</h4>
                  <h2>遠傳電信官網｜不只是電信，替未來生活提案</h2>
                  <div className="pills">
                    <div className="pill eng">BRANDING</div>
                    <div className="pill eng">EXPERIENCE</div>
                  </div>
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
                    <h4 className="eng">CASE STUDY</h4>
                  </Button>
                </Fade>
              </Grid>
              <Grid xs={12} md={5} className="case">
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <img src={Starlux} alt="Starlux" />
                </div>
                <Fade bottom>
                  <h4>交通與運輸</h4>
                  <h2>星宇航空｜打造精品航空獨到的數位體驗</h2>
                  <div className="pills">
                    <div className="pill eng">BRANDING</div>
                    <div className="pill eng">EXPERIENCE</div>
                  </div>
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
                    <h4 className="eng">CASE STUDY</h4>
                  </Button>
                </Fade>
              </Grid>
            </Grid>
          </CaseList>
        </PageWrapper>
      </div>
      <div className={blackBg ? 'black' : 'white'}>
        <PageWrapper
          blackBg={blackBg}
          bgc={blackBg ? colors.DarkBlue : colors.BGGreen}
          color={blackBg ? colors.White : colors.DarkBlue}
        >
          <OurServices blackBg={blackBg} ref={themeColorRef}>
            <Horizon blackBg={blackBg}>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">OUR SERVICES</h4>
              </div>
              <h4 className="eng">02</h4>
            </Horizon>
            <div className="content">
              {!blackBg &&
                <Grid container spacing={0} rowSpacing={0}>
                  <Grid xs={9} xsOffset={3}>
                    <Fade bottom duration={1000} delay={100}>
                      <div className="super eng head-1">Problems</div>
                    </Fade>
                  </Grid>
                  <Grid xs={6} xsOffset={6}>
                    <Fade bottom duration={1000} delay={100}>
                      <div className="super eng head-2">Solved.</div>
                    </Fade>
                  </Grid>
                  <Grid className="sub-head" xs={9} xsOffset={2}>
                    <h2>我們不斷累積跨領域經驗，將創新能量轉化為客戶價值</h2>
                    <div style={{ display: 'inline-flex' }}>
                      <CTA href={'#'}>
                        <h4 className="eng">OUR CLIENTS</h4>
                        {/* <img src={arrowBlack} alt="arrow" /> */}
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30.6963 20.031C25.8161 20.031 21.8397 16.0847 21.8397 11.1744"
                            stroke="#0C1C24"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M21.8096 28.8264C21.8096 23.9463 25.7559 19.9698 30.6661 19.9698"
                            stroke="#0C1C24"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M9.30701 20.0303H30.6952"
                            stroke="#0C1C24"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </CTA>
                    </div>
                  </Grid>
                  {!blackBg &&
                    <>
                      <Grid xs={8} xsOffset={1}>
                        <div className="super eng head-3">Experience</div>
                      </Grid>
                      <Grid xs={10} xsOffset={1}>
                        <div className="super eng head-4">Transformed. </div>
                      </Grid>
                    </>
                  }
                </Grid>
              }

            </div>
            <div className="img-wall">
              <Grid container spacing={0} rowSpacing={0}>
                <Grid xs={3}>
                  <Parallax
                    className="wall1"
                    speed={20}
                    scale={[1.5, 0]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={wall1} alt="wall1" />
                  </Parallax>
                </Grid>
                <Grid xs={3}>
                  <Parallax
                    className="wall2"
                    speed={30}
                    scale={[1.5, 0]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={wall2} alt="wall2" />
                  </Parallax>
                </Grid>
                <Grid xs={4} xsOffset={2}>
                  <Parallax
                    className="wall3"
                    speed={18}
                    scale={[1.5, 0]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={wall3} alt="wall3" />
                  </Parallax>
                </Grid>
                <Grid xs={4}>
                  <Parallax
                    className="wall4"
                    speed={16}
                    scale={[1.5, 0]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={wall4} alt="wall4" />
                  </Parallax>
                </Grid>
                <Grid xs={3} xsOffset={3}>
                  <Parallax
                    className="wall5"
                    speed={23}
                    scale={[1.5, 0]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={wall5} alt="wall5" />
                  </Parallax>
                </Grid>
                <Grid xs={3} xsOffset={2}>
                  <Parallax
                    className="wall6"
                    speed={20}
                    scale={[1.5, 0]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={wall6} alt="wall6" />
                  </Parallax>
                </Grid>
              </Grid>
            </div>
            <Horizon blackBg={blackBg}>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">OUR IMPACT</h4>
              </div>
              <h4 className="eng">03</h4>
            </Horizon>
            <div className="huge eng">
              We partner with our clients <br />
              to create value
            </div>
            <h1 style={{ display: 'flex', marginBottom: '120px' }}>
              我們協助
              <Mark color={colors.Yellow}>客戶創造價值</Mark>
              ，進而形塑共好的長期夥伴關係
            </h1>
            <Slider {...settings} ref={carouselRef}>
              {CaseSlider.map(item => {
                return (
                  <SlideItem>
                    <img src={item.img.src} alt={item.img.alt} />
                    <p>{item.content}</p>
                    <span>{item.name}</span>
                    {/* <Fade bottom>
                    </Fade> */}
                  </SlideItem>
                );
              })}
            </Slider>
            {/* <SliderWrapper>
              {CaseSlider.map((item, index) => {
                return (
                  <SlideItem key={index}>
                    <Fade bottom>
                      <img src={item.img.src} alt={item.img.alt} />
                      <p>{item.content}</p>
                      <span>{item.name}</span>
                    </Fade>
                  </SlideItem>
                );
              })}
            </SliderWrapper> */}
          </OurServices>
        </PageWrapper>
      </div>
      <Dedication>
        <div className="bg">
          <Parallax
            speed={8}
          >
            <img src={dedicationBg} alt="dedicationBg" />
          </Parallax>
        </div>
        <Parallax translateX={[30, -55]}>
          <img src={dedicationWording} alt="Dedication beyond the expected" />
        </Parallax>
        <Fade bottom>
          <h1>我們的方法靈活多變，但專注的設計能量始終不變</h1>
        </Fade>
      </Dedication>
      <div
        className="help-section"
        ref={helpColorRef}
      // style={{ paddingBottom: '120px' }}
      >
        <div className={blackBg ? 'black' : 'white'}>
          <PageWrapper
            blackBg={blackBg}
            bgc={blackBg ? colors.DarkBlue : colors.BGGreen}
            color={blackBg ? colors.White : colors.DarkBlue}
            className={blackBg ? 'black' : 'white'}
          >
            <Horizon blackBg={blackBg}>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">HOW WE CAN HELP</h4>
              </div>
              <h4 className="eng">04</h4>
            </Horizon>
            <div className="huge eng">
              What you can <br />
              expect from us
            </div>
            <h1 style={{ display: 'flex' }}>
              我們來自不同的專業領域，用
              <Mark>多元的觀點碰撞出好的體驗</Mark>
            </h1>
            <RoundButton href={'#'}>
              <h4 className="eng">OUR WORKS</h4>
              {/* <img src={arrowWhite} alt="arrow" /> */}
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
            </RoundButton>
            <ServiceList>
              <Grid container spacing={0} rowSpacing={9}>
                <Grid xs={4}>
                  <div className="super eng title">01.</div>
                </Grid>
                <Grid xs={8}>
                  <Box display={'flex'} className="right">
                    <Box minWidth={'290px'} mr="40px">
                      <Fade>
                        <Lottie animationData={lottie1} loop={false} />
                      </Fade>
                    </Box>
                    <Box>
                      <h1>研究與策略方針</h1>
                      <h4>
                        分析脈絡趨勢、挖掘使用者需求，提供全方位體驗設計諮詢服務，為您的產品服務制定體驗策略方針
                      </h4>
                      <ul>
                        <li>
                          <h4>市場研究與競爭分析</h4>
                        </li>
                        <li>
                          <h4>產品定位與價值主張</h4>
                        </li>
                        <li>
                          <h4>使用者研究</h4>
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={4}>
                  <div className="super eng title">02.</div>
                </Grid>
                <Grid xs={8}>
                  <Box display={'flex'} className="right">
                    <Box minWidth={'290px'} mr="40px">
                      <Fade>
                        <Lottie animationData={lottie2} loop={false} />
                      </Fade>
                    </Box>
                    <Box>
                      <h1>核心體驗規劃</h1>
                      <h4>
                        以用戶洞見為聚焦點，制定整體的體驗設計架構，營造以使用者為中心的體驗創新
                      </h4>
                      <ul>
                        <li>
                          <h4>體驗流程規劃</h4>
                        </li>
                        <li>
                          <h4>設計概念驗證</h4>
                        </li>
                        <li>
                          <h4>概念測試與需求驗證</h4>
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={4}>
                  <div className="super eng title">03.</div>
                </Grid>
                <Grid xs={8}>
                  <Box display={'flex'} className="right">
                    <Box minWidth={'290px'} mr="40px">
                      <Fade>
                        <Lottie animationData={lottie3} loop={false} />
                      </Fade>
                    </Box>
                    <Box>
                      <h1>跨渠道設計落地</h1>
                      <h4>
                        將核心體驗延伸至各數位接觸點，深入場景，跨域整合品牌、創意、互動設計，落實跨渠道體驗設計
                      </h4>
                      <ul>
                        <li>
                          <h4> App 規劃與設計</h4>
                        </li>
                        <li>
                          <h4>網站規劃與設計</h4>
                        </li>
                        <li>
                          <h4>網站規劃與設計</h4>
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </ServiceList>
          </PageWrapper>
        </div>
      </div>
      <SectionIdea>
        <Container maxWidth={'xl'}>
          <Grid container>
            <Grid xs={6}>
              <div className="wrapper border">
                {/* <img className="idea" src={Idea} alt="idea" /> */}
                <Box width={'220px'} m="0 auto">
                  <Fade>
                    <Lottie animationData={lottieClient} loop={2} />
                  </Fade>
                </Box>
                <h1 className="eng">Happy teams create change.</h1>
                <h2>我們用心生活，賦予多變創意能量</h2>
                <CTA href={'#'}>
                  <h4 className="eng">ABOUT US</h4>
                  {/* <img src={arrowBlack} alt="arrow" /> */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6963 20.031C25.8161 20.031 21.8397 16.0847 21.8397 11.1744"
                      stroke="#0C1C24"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M21.8096 28.8264C21.8096 23.9463 25.7559 19.9698 30.6661 19.9698"
                      stroke="#0C1C24"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M9.30701 20.0303H30.6952"
                      stroke="#0C1C24"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </CTA>
              </div>
            </Grid>
            <Grid xs={6}>
              <div className="wrapper">
                {/* <img className="idea" src={hiveFive} alt="idea" /> */}
                <Box width={'220px'} m="0 auto">
                  <Fade>
                    <Lottie animationData={lottieJoinUs} loop={2} />
                  </Fade>
                </Box>
                <h1 className="eng">Let’s makes work a real joy.</h1>
                <h2>與我們一起加入改變的行列！</h2>
                <CTA href={'#'}>
                  <h4 className="eng">JOIN US</h4>
                  {/* <img src={arrowBlack} alt="arrow" /> */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6963 20.031C25.8161 20.031 21.8397 16.0847 21.8397 11.1744"
                      stroke="#0C1C24"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M21.8096 28.8264C21.8096 23.9463 25.7559 19.9698 30.6661 19.9698"
                      stroke="#0C1C24"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M9.30701 20.0303H30.6952"
                      stroke="#0C1C24"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </CTA>
              </div>
            </Grid>
          </Grid>
        </Container>
      </SectionIdea>
    </ParallaxProvider>
  );
}

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  white-space: nowrap;
  overflow: auto;
  margin: 0 -60px;
  padding: 0 60px 120px;
  border-bottom: 1px solid ${colors.DarkBlue};
  &:hover{
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${colors.DarkBlue};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  &::-webkit-scrollbar {
    height: 5px;
  }
  p {
    white-space: normal;
  }
`;
const SectionIdea = styled.div`
  padding: 96px 0;
  display: flex;
  text-align: center;
  background-color: ${colors.White};
  .wrapper {
    padding: 16px 40px;
  }
  .border {
    border-right: 1px solid ${colors.DarkBlue};
  }
  h1 {
    margin: 16px 0 0;
  }
  h2 {
    margin: 8px 0 32px;
  }
  a {
    background-color: #fff;
  }
`;

const CaseList = styled.div`
  display: flex;
  margin: 118px 0 0;
  /* padding-bottom: 124px; */
  flex-direction: column;
  .case {
    padding: 0 40px;
    margin-bottom: 48px;
    &:nth-child(1) {
      border-left: 1px solid rgba(162, 170, 164, 0.5);
      border-right: 1px solid rgba(162, 170, 164, 0.5);
    }
    &:nth-child(2) {
      border-right: 1px solid rgba(162, 170, 164, 0.5);
    }
    &:nth-child(3) {
      border-left: 1px solid rgba(162, 170, 164, 0.5);
      border-right: 1px solid rgba(162, 170, 164, 0.5);
    }
    &:nth-child(4) {
      border-right: 1px solid rgba(162, 170, 164, 0.5);
    }
    img {
      width: 100%;
      transition: all .5s ease-in-out;
    }
    a {
      text-decoration: none;
      h4{
        margin: 0;
      }
      img {
        width: 60px;
      }
    }
    &:hover{
      img{
        transform: scale(1.2);
      }
    }
    h4{
      letter-spacing: 2px;
      margin: 32px 0 8px;
    }
    h2{
      margin: 0 0 24px;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    margin-bottom: 52px;
    &:nth-child(1) {
      .case {
        img {
          width: 100%;
        }
        a {
          img {
            width: 60px;
          }
        }
        &:nth-child(1) {
          flex: 1 0 730px;
          padding: 0 40px;
          border-left: 1px solid rgba(162, 170, 164, 0.5);
          border-right: 1px solid rgba(162, 170, 164, 0.5);
        }
        &:nth-child(2) {
          padding: 0 40px 0 40px;
          margin-right: 112px;
          border-right: 1px solid rgba(162, 170, 164, 0.5);
        }
      }
    }
    &:nth-child(2) {
      .case {
        img {
          width: 100%;
        }
        a {
          img {
            width: 60px;
          }
        }
        &:nth-child(1) {
          flex: 1 0 400px;
          padding: 0 40px 0 40px;
          margin-left: 330px;
          border-right: 1px solid rgba(162, 170, 164, 0.5);
          border-left: 1px solid rgba(162, 170, 164, 0.5);
        }
        &:nth-child(2) {
          padding: 0 40px 0 40px;
          border-right: 1px solid rgba(162, 170, 164, 0.5);
        }
      }
    }
  }
  .pills {
    margin-bottom: 48px;
    .pill {
      margin-right: 12px;
      border-radius: 100px;
      background-color: #2e3c42;
      color: ${colors.White};
      display: inline-block;
      padding: 4px 16px;
      font-size: 12px;
      font-weight: 300;
      color: #979ea0;
    }
  }
  ${media.medium`
    margin-top: 48px;
    .case{
      padding: 0 0 48px;
      border-bottom: 1px solid rgba(162, 170, 164, 0.5);
      &:nth-child(1){
        border-left: 0;
        border-right: 0;
      }
      &:nth-child(2){
        border-right: 0;
      }
      &:nth-child(3){
        border-left: 0;
        border-right: 0;
      }
      &:nth-child(4){
        border-right: 0;
      }
    }
  `}
`;

const Cases = styled.div`
  background-color: ${colors.DarkBlue};
  color: ${colors.White};
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-bottom: 44px;
  margin-bottom: 96px;
  .left {
    flex: 1 1 100%;
    padding: 48px 0 100px 60px;
    .pills {
      margin-bottom: 32px;
      .pill {
        margin-right: 12px;
        border-radius: 100px;
        background-color: #2e3c42;
        color: ${colors.White};
        display: inline-block;
        padding: 4px 16px;
        font-size: 12px;
        font-weight: 300;
        color: #979ea0;
      }
    }
    h4 {
      margin-bottom: 8px;
      margin-top: 0;
    }
    h2 {
      margin-bottom: 16px;
    }
    .content {
      margin-bottom: 32px;
    }
    .dots {
      display: flex;
      flex-direction: row;
      margin-top: 48px;
      cursor: pointer;
      .dot {
        opacity: 0.5;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #fff;
        margin-right: 8px;
      }
      .active {
        opacity: 1;
      }
    }
  }
  .right {
    flex: 1 1 100%;
    max-width: 620px;
    margin-top: -60px;
    margin-right: 80px;
  }
`;

const SlideItem = styled.div`
  /* min-width: 480px; */
  display: flex;
  flex-direction: column;
  align-items: baseline;
  img {
    height: 40px;
    object-fit: contain;
    /* width: auto; */
  }
  p {
    font-size: 20px;
    margin: 48px 0;
    height: 120px;
  }
  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

const RoundButton = styled.a`
  background: initial;
  border: 0;
  padding: 0;
  display: flex;
  color: #fff;
  display: inline-flex;
  padding: 16px 48px;
  align-items: center;
  text-decoration: none;
  border-radius: 100px;
  border: 2px solid ${colors.White};
  position: relative;
  overflow: hidden;
  svg{
    transition: all .5s ease-in-out;
  }
  h4 {
    margin: 0 0 0 12px;
    z-index: 1;
    letter-spacing: 1px;
  }
  svg {
    z-index: 1;
  }
  path {
    transition: all 0.5s;
  }
  &:hover {
    color: ${colors.DarkBlue};
    svg{
      transform: translateX(20px);
    }
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
  svg {
    margin-left: 4px;
    z-index: 1;
  }
  @keyframes move-in {
    0% {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
  @keyframes move-out {
    0% {
      transform: translateX(100%);
    }
    to {
      transform: translateX(200%);
    }
  }
  ${media.medium`
    padding: 8px 16px;
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
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
    z-index: 1;
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
      color: ${colors.DarkBlue};
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
const CTA = styled.a`
  width: 242px;
  background: ${colors.BGGreen};
  border: 2px solid ${colors.DarkBlue};
  border-radius: 100px;
  padding: 16px 32px;
  display: flex;
  color: ${colors.DarkBlue};
  margin: 32px auto 0;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  path {
    transition: all 0.5s;
  }
  &:hover {
    color: ${colors.White};
    path {
      stroke: #fff;
    }
  }
  &::before {
    -webkit-animation: move-out 0.3s;
    animation: move-out 0.3s;
    background: ${colors.DarkBlue};
    color: ${colors.White};
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
  h4 {
    margin: 0;
    z-index: 1;
  }
  svg {
    margin-left: 4px;
    z-index: 1;
  }
  @keyframes move-in {
    0% {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
  @keyframes move-out {
    0% {
      transform: translateX(100%);
    }
    to {
      transform: translateX(200%);
    }
  }
`;

const OurServices = styled.div<{
  blackBg: boolean;
}>`
  padding: 0 0 96px;
  transition: all 1s ease-in;
  /* background-color: ${prop =>
    prop.blackBg ? colors.DarkBlue : colors.BGGreen}; */
  color: ${prop => (prop.blackBg ? colors.BGGreen : colors.DarkBlue)};
  position: relative;
  .content {
    z-index: 1;
    position: relative;
    color: ${prop => (prop.blackBg ? colors.BGGreen : colors.DarkBlue)};
    text-align: left;
    /* max-width: 1086px; */
    margin: 0 auto 210px;
    min-height: 100vh;
    .super {
      display: inline-block;
      &.head-1 {
        /* margin-right: 284px; */
        margin-left: -40px;
      }
      &.head-2 {
        /* margin-right: 124px; */
        /* margin-bottom: 16px; */
      }
      &.head-3 {
        /* margin-right: 314px; */
        margin-top: 256px;
        margin-left: 20px;
      }
      &.head-4 {
        margin-left: 50px;
        margin-top: 10px;
        /* margin-right: 124px;
        margin-bottom: 300px; */
      }
    }
    .sub-head{
      text-align: right;
    }
    h2 {
      margin: 28px 0 12px;
    }
    ${CTA} {
      /* margin: 0 124px 234px; */
    }
  }
  .img-wall {
    position: absolute;
    top: 280px;
    z-index: 0;
    left: 0;
    width: 100%;
    .wall1 {
      /* width: 337px; */
      width: 100%;
      margin-left: -80px;
    }
    .wall2 {
      /* width: 288px; */
      /* margin-left: 30%; */
      width: 100%;
      margin-top: 17%;
      padding-right: 40px;
    }
    .wall3 {
      /* width: 398px; */
      width: 100%;
      /* margin-left: 70%; */
      margin-top: 19%;
    }
    .wall4 {
      /* width: 400px; */
      width: 100%;
      /* margin-left: 8%; */
      margin-top: 210px;
      /* padding-right: 40px; */
    }
    .wall5 {
      /* width: 290px; */
      width: 100%;
      /* margin-left: 62%; */
      margin-top: 317px;
      padding-right: 40px;
    }
    .wall6 {
      width: 100%;
      /* width: 290px; */
      /* margin-left: 32%; */
      margin-top: 176px;
      /* padding-right: 40px; */
    }
    img {
      width: 100%;
    }
  }
  .slick-track {
    /* display: flex; */
    /* gap: 80px; */
  }
  .slick-slide{
    padding-right: 80px;
  }
  .slick-arrow{
    z-index: 10;
    opacity: 0;
  }
  .slick-list{
    overflow: visible;
  }
  .slick-prev{
    display: block;
    position: absolute;
    width: 50vw;
    height: 100%;
    left: 0;
    cursor: url(${arrowHollow}), auto;
  }
  .slick-next{
    display: block;
    position: absolute;
    width: 50vw;
    height: 100%;
    right: 0;
    cursor: url(${arrowHollowRight}), auto;
  }
  .slick-dots {
    display: flex!important;
    align-items: baseline;
    margin-top: 100px;
    position: relative;
    /* position: relative; */
    /* margin-bottom: 120px; */
    /* display: inline-block; */
  }
  .slick-dots.slick-thumb {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 5px;
  }

  .slick-dots.slick-thumb li {
    /* width: 6px; */
    height: 1px;
    /* margin: 0 3px; */
    flex: 1 1 auto;
    margin: 0;
    transition: all 0.5s ease-in-out;
    /* will-change: width; */
    background-color: ${colors.DarkBlue};
  }

  .slick-dots.slick-thumb li.slick-active {
    background-color: ${colors.DarkBlue};
    /* width: 24px; */
    height: 5px;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 720px;
  ${media.medium`
    height: auto;
  `}
`;

const Horizon = styled.div<{
  blackBg?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 120px 0;
  color: ${prop => (prop.blackBg ? colors.White : colors.DarkBlue)};
  &::after {
    content: '';
    width: 100%;
    display: block;
    border-top: 1px solid
      ${prop => (prop.blackBg ? colors.White : colors.DarkBlue)};
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
    prop.blackBg ? colors.BGGrey : colors.DarkBlue};
      margin-right: 8px;
    }
    h4 {
      margin: 0;
    }
  }
  ${media.medium`
    padding: 64px 0 72px;
  `}
`;

const Dedication = styled.div`
  /* background-image: url(${dedicationBg}); */
  height: 720px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  z-index: 1;
  position: relative;
  .bg{
    position: absolute;
    left: 0;
    img{
      width: 100%;
      margin-top: -20px;
    }
  }
  h1 {
    color: ${colors.White};
    margin: 0;
  }
`;

const ServiceList = styled.div`
  padding: 120px 0 200px;
  .title {
    padding: 0 40px;
    border-left: 1px solid ${colors.White};
    border-right: 1px solid ${colors.White};
    height: 100%;
  }
  .right {
    border-right: 1px solid ${colors.White};
    height: 100%;
    padding: 0 70px 50px 70px;
    svg {
      /* padding-right: 40px; */
      max-width: 290px;
    }
    h1 {
      margin: 0 0 4px;
    }
    h4 {
      margin: 0 0 32px;
    }
    ul {
      padding: 0;
      list-style: none;
      li {
        display: flex;
        margin-bottom: 16px;
        align-items: center;
        &::before {
          display: block;
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 100%;
          border: 1px solid ${colors.White};
        }
        h4 {
          margin: 0 0 0 16px;
        }
      }
    }
  }
`;

const FeatureHead = styled.h1`
  display: flex;
  .draw::after{
    content: '';
    border-bottom: 15px solid ${colors.ElectricBlue};
  }
  ${media.medium`
    display: block;
    margin-bottom: 24px;
    span{
      display: inline-block;
      height: 35px;
    }
    .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 21px #0c1c24, inset 0px 54px #0931e1;
    }
  `}
`
