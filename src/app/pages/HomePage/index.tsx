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
import RoundButton from 'app/components/RoundButton'
import WrappedButton from 'app/components/WrappedButton'
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
import dedicationBgMb from './assets/dedication-mb.jpg';
import work01 from './assets/work-01.svg';
import work02 from './assets/work-02.svg';
import work03 from './assets/work-03.svg';
import hiveFive from './assets/hiveFive.svg';
import InfuseAI from './assets/InfuseAI.svg';
import FetnetLogo from './assets/fetnet-logo.svg';
import NanShan from './assets/nan-shan.svg';
import cmcLogo from './assets/cmc.svg';
import fbLogo from './assets/fb-bank.svg';
import kkboxLogo from './assets/kkbox.svg';
import nanshanLogo from './assets/nan-shan.svg';
import tdriLogo from './assets/TDRI.svg';
import tsBankLogo from './assets/ts-bank.svg';
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
      '“ AJA 具備創新思維的設計能力，能協助客戶推出市場創新的產品，深入探究細節的設計態度，搭配實事求是的精神，令人讚賞。”',
    name: '<b>中國信託,</b> Karl',
    link: '#',
    img: {
      src: ctbaLogo,
      alt: 'ctbaLogo',
    },
  },
  {
    content:
      '“ 團隊分工清楚且合作接軌，學習力強能掌握客戶之作業細節。能接地氣聆聽使用者之心聲，回應快能接受客戶回饋及調整為適妥解決方案，是客戶喜歡的合作團隊。”',
    name: '<b>南山人壽業務通路</b>, 劉桂如 副總經理',
    link: '#',
    img: {
      src: NanShan,
      alt: 'NanShan',
    },
  },
  {
    content:
      '“ 在內部訪談時，平衡來自不同部門間的不同意見、甚至是矛盾與互相衝突的需求，不是一般設計公司做得到的。”',
    name: '<b>KKBOX,</b> 桂國泰',
    link: '#',
    img: {
      src: kkboxLogo,
      alt: 'kkboxLogo',
    },
  },
  {
    content:
      '“ 大予或許是你為了特定需求而找上的公司，然後在這過程中相信你也會感受到，你得到的是：「一間陪著你成長茁壯的公司、多個陪著你打怪破關的團隊夥伴。」共勉之。”',
    name: '<b>台新銀行數位金融處生態圈發展部,</b> 林晟 副理 ',
    link: '#',
    img: {
      src: tsBankLogo,
      alt: 'tsBankLogo',
    },
  },
  {
    content:
      '“ 專業度令人印象深刻，不只是前進 UX/UI 的最佳夥伴，從合作中更激發對使用者及設計的創新想像。”',
    name: '<b>台灣設計研究院,</b> 王翊任',
    link: '#',
    img: {
      src: tdriLogo,
      alt: 'tdriLogo',
    },
  },
  {
    content:
      '“ 有人曾經跟我介紹大予是豪宅等級的顧問，合作以來覺得形容的真好！專案期間感受到大予的嚴謹及產出的專業性，過程中亦非常有收穫。”',
    name: '<b>台北富邦銀行數位金融處,</b> 盧湞',
    link: '#',
    img: {
      src: fbLogo,
      alt: 'fbLogo',
    },
  },
  {
    content:
      '“ 大予團隊可提供超乎顧客需求的服務，服務跟呈現都令人滿意。”',
    name: '<b>中華汽車新創小組,</b> 郭怡欣',
    link: '#',
    img: {
      src: cmcLogo,
      alt: 'cmcLogo',
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
    slidesToShow: windowWidth > 960 ? 2 : 1,
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
  const lottieRef1 = useRef<any>(null);;
  const lottieRef2 = useRef<any>(null);;
  const lottieRef3 = useRef<any>(null);;

  useScrollPosition(({ prevPos, currPos }) => {
    // console.log(currPos.x)
    // console.log(Math.abs(currPos.y));
    // console.log(themeColorRef.current!.getBoundingClientRect().top);
    // console.log(themeColorRef.current!.getBoundingClientRect().y);
    // console.log(helpColorRef.current!.getBoundingClientRect().top);
    // console.log(helpColorRef.current!.getBoundingClientRect().y);

    if (themeColorRef.current!.getBoundingClientRect().top < 140) {
      // debugger
      setTimeout(() => {
        setBlackBg(false);
      }, 300);
    } else {
      setTimeout(() => {
        setBlackBg(true);
      }, 300);

    }
    // if (
    //   helpColorRef.current!.getBoundingClientRect().y < 100
    // ) {
    //   // debugger
    //   setBlackBg(true);
    // }
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
    controls: true,
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
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });

    player.on('click', () => {
      console.log('click');
      console.log(document.fullscreenEnabled);
      player.requestFullscreen();
      player.play();
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
      <span style={{ height: windowWidth > 960 ? 'auto' : '24px', display: windowWidth > 960 ? 'block' : 'inline-block' }}>
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
        </PageWrapper>
      </div>
      <div className={blackBg ? 'black' : 'white'}>
        <VideoWrapper>
          <Parallax
            scale={[1, 1.2]} speed={-10}
          >
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
      </div>
      <div className={blackBg ? 'black' : 'white'}>
        <PageWrapper>
          <Horizon blackBg>
            <div className="title">
              <div className="dot" />
              <h4 className="eng">FEATURED WORKS</h4>
            </div>
            <h4 className="eng">01</h4>
          </Horizon>
          {windowWidth > 1300 &&
            <div className="huge eng">
              <Fade bottom cascade duration={1000} delay={100}>
                We meet each business critical
              </Fade>
              <Fade bottom cascade duration={1000} delay={100}>
                situation with a tailored
              </Fade>
              <Fade bottom cascade duration={1000} delay={100}>
                solution.
              </Fade>
            </div>
          }
          {windowWidth > 960 && windowWidth < 1300 && <div className="huge eng">
            <Fade bottom cascade duration={1000} delay={100}>
              We meet each business
            </Fade>
            <Fade bottom cascade duration={1000} delay={100}>
              critical situation with
            </Fade>
            <Fade bottom cascade duration={1000} delay={100}>
              a tailored solution.
            </Fade>
          </div>
          }
          {windowWidth < 960 && <div className="huge eng">
            <Fade bottom duration={1000} delay={100}>
              We meet each business critical situation with a tailored solution.
            </Fade>
          </div>}
          <FeatureHead>
            {windowWidth < 960 ?
              <>
                我們透過
                <div className='draw'>量身定制的解決方案</div>，來應對不同商業需求的關鍵情境
              </>
              :
              <>
                我們透過
                <Mark>量身定制的解決方案</Mark>，來應對不同商業需求的關鍵情境
              </>
            }
          </FeatureHead>
          <WrappedButton
            text="OUR WORKS"
            link="#"
            isWhite={false}
          />
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
                    <div className="pill eng">STRATEGY</div>
                    <div className="pill eng">EXPERIENCE</div>
                    <div className="pill eng">BRANDING</div>
                  </div>
                  <RoundButton
                    link="#"
                    isWhite={true}
                    text="CASE STUDY"
                  />
                </Fade>
              </Grid>
              <Grid xs={12} md={4} className="case">
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <img src={CTBC} alt="ctbc" />
                </div>
                <Fade bottom>
                  <h4>金融與保險</h4>
                  <h2>台新 Richart 數位銀行｜和你站在同一邊，最懂你的銀行</h2>
                  <div className="pills">
                    <div className="pill eng">EXPERIENCE</div>
                    <div className="pill eng">RESEARCH</div>
                    <div className="pill eng">BRANDING</div>
                  </div>
                  <RoundButton
                    link="#"
                    isWhite={true}
                    text="CASE STUDY"
                  />
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
                    <div className="pill eng">STRATEGY</div>
                    <div className="pill eng">EXPERIENCE</div>
                    <div className="pill eng">RESEARCH</div>
                    <div className="pill eng">BRANDING</div>
                  </div>
                  <RoundButton
                    link="#"
                    isWhite={true}
                    text="CASE STUDY"
                  />
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
                    <div className="pill eng">STRATEGY</div>
                    <div className="pill eng">EXPERIENCE</div>
                    <div className="pill eng">RESEARCH</div>
                    <div className="pill eng">BRANDING</div>
                  </div>
                  <RoundButton
                    link="#"
                    isWhite={true}
                    text="CASE STUDY"
                  />
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
                  {windowWidth > 960 ?
                    <>
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
                    </> :
                    <>
                      <Grid xs={9} xsOffset={3}>
                        <div className="super eng head-1">Problems</div>
                      </Grid>
                      <Grid xs={6} xsOffset={6}>
                        <div className="super eng head-2">Solved.</div>

                      </Grid>
                    </>
                  }
                  <Grid className="sub-head" xs={12} md={9} mdOffset={2} xsOffset={0}>
                    <FeatureHeadYellow>
                      {windowWidth < 960 ?
                        <>
                          我們不斷累積跨領域經驗，將
                          <div className='draw'>創新能量轉化為客戶價值</div>
                        </>
                        :
                        <>
                          我們不斷累積跨領域經驗，將
                          <Mark color={colors.Yellow}>創新能量轉化為客戶價值</Mark>
                        </>
                      }
                    </FeatureHeadYellow>
                    <div style={{ display: 'inline-flex' }}>
                      <WrappedButton
                        text="OUR CLIENTS"
                        link="#"
                        isWhite={true}
                      />
                    </div>
                  </Grid>
                  {!blackBg &&
                    <>
                      <Grid xs={12} md={8} mdOffset={1} xsOffset={0}>
                        <div className="super eng head-3">Experience</div>
                      </Grid>
                      <Grid xs={12} md={10} mdOffset={1} xsOffset={0}>
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
            <div className="impact-title huge eng">
              We partner with our clients <br />
              to create value
            </div>
            <h1 className="impact-subtitle">
              我們協助
              <Mark color={colors.Yellow}>客戶創造價值</Mark>
              ，進而形塑共好的長期夥伴關係
            </h1>
            <Slider {...settings} ref={carouselRef}>
              {CaseSlider.map(item => {
                return (
                  <SlideItem key={item.name}>
                    <img src={item.img.src} alt={item.img.alt} />
                    <p>{item.content}</p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.name
                      }}
                    />
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
            speed={windowWidth > 960 ? 15 : 7}
          >
            {windowWidth > 960 ? <img src={dedicationBg} alt="dedicationBg" /> : <img src={dedicationBgMb} alt="dedicationBg" />}
          </Parallax>
        </div>
        <Parallax translateX={[30, -55]}>
          <img className="marquee" src={dedicationWording} alt="Dedication beyond the expected" />
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
        {/* <div className={blackBg ? 'black' : 'white'}> */}
        <div className={'black'}>
          <PageWrapper
            blackBg={true}
            bgc={colors.DarkBlue}
            color={colors.White}
            className={'black'}
          >
            <Horizon blackBg={true}>
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
            <FeatureHead>
              {windowWidth < 960 ?
                <Fade>
                  我們來自不同的專業領域，用
                  多元的觀點碰撞出好的體驗
                </Fade> :
                <>
                  我們來自不同的專業領域，用
                  <Mark>多元的觀點碰撞出好的體驗</Mark>
                </>

              }

            </FeatureHead>
            <WrappedButton
              text="OUR SERVICES"
              link="#"
              isWhite={!blackBg}
            />
            <ServiceList>
              <Grid container spacing={0} rowSpacing={9}>
                <Grid xs={0} md={4}>
                  <div className="super eng title">
                    <Fade bottom>
                      01.
                    </Fade>
                  </div>
                </Grid>
                <Grid xs={12} md={8}>
                  <Box display={'flex'} className="right">
                    <Box
                      className="lottie"
                      onMouseEnter={() => {
                        if (lottieRef1.current !== null) {
                          lottieRef1.current.goToAndPlay(1);
                        }
                      }}
                      onMouseLeave={() => {
                        if (lottieRef1.current !== null) {
                          lottieRef1.current.pause();
                        }
                      }}
                    >
                      <Fade>
                        <Lottie animationData={lottie1} loop={false} lottieRef={lottieRef1} />
                      </Fade>
                    </Box>
                    <Box>
                      <h1>研究與體驗策略</h1>
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
                <Grid xs={0} md={4}>
                  <div className="super eng title">
                    <Fade bottom>
                      02.
                    </Fade>
                  </div>
                </Grid>
                <Grid xs={12} md={8}>
                  <Box display={'flex'} className="right">
                    <Box
                      className="lottie"
                      onMouseEnter={() => {
                        if (lottieRef2.current !== null) {
                          lottieRef2.current.goToAndPlay(1);
                        }
                      }}
                      onMouseLeave={() => {
                        if (lottieRef2.current !== null) {
                          lottieRef2.current.pause();
                        }
                      }}
                    >
                      <Fade>
                        <Lottie animationData={lottie2} loop={false} lottieRef={lottieRef2} />
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
                <Grid xs={0} md={4}>

                  <div className="super eng title">
                    <Fade bottom>03.
                    </Fade>
                  </div>
                </Grid>
                <Grid xs={12} md={8}>
                  <Box display={'flex'} className="right">
                    <Box
                      className="lottie"
                      onMouseEnter={() => {
                        if (lottieRef3.current !== null) {
                          lottieRef3.current.goToAndPlay(1);
                        }
                      }}
                      onMouseLeave={() => {
                        if (lottieRef3.current !== null) {
                          lottieRef3.current.pause();
                        }
                      }}
                    >
                      <Fade>
                        <Lottie animationData={lottie3} loop={false} lottieRef={lottieRef3} />
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
          <Grid container className="container">
            <Grid xs={12} md={6}>
              <div className="wrapper border">
                <Box width={'220px'} m="0 auto">
                  <Fade>
                    <Lottie animationData={lottieClient} loop={2} />
                  </Fade>
                </Box>
                <h1 className="eng">Happy teams create change.</h1>
                <h2>我們用心生活，賦予多變創意能量</h2>
                <WrappedButton
                  text="ABOUT US"
                  link="#"
                  isWhite={true}
                />
              </div>
            </Grid>
            <Grid xs={12} md={6}>
              <div className="wrapper">
                {/* <img className="idea" src={hiveFive} alt="idea" /> */}
                <Box width={'220px'} m="0 auto">
                  <Fade>
                    <Lottie animationData={lottieJoinUs} loop={2} />
                  </Fade>
                </Box>
                <h1 className="eng">Let’s makes work a real joy.</h1>
                <h2>與我們一起加入改變的行列！</h2>
                <WrappedButton
                  text="JOIN US"
                  link="#"
                  isWhite={true}
                />
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
    font-size: 24px;
    margin: 8px 0 32px;
  }
  a {
    margin: 32px auto 0;
    background-color: #fff;
    min-width: 215px;
  }
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
      margin: 8px 0 24px;
    }
    a{
      min-width: 172px;
    }
  `}
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
        transform: scale(1.05);
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
    margin-bottom: 36px;
    .case{
      padding: 0 0 32px;
      border-bottom: 1px solid rgba(162, 170, 164, 0.5);
      margin-bottom: 32px;
      h4{
        margin: 16px 0 8px;
      }
      h2{
        margin-bottom: 16px;
      }
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
    .pills{
      margin-bottom: 0;
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
    font-weight: 400;
  }
  ${media.medium`
    p{
      margin: 32px 0;
      font-size: 16px;
    }
  `}
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
  ${media.medium`
    width: 172px;
    padding: 8px 16px;
  `}
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
      margin: 28px 0 -12px;
    }
    ${CTA} {
      /* margin: 0 124px 234px; */
    }
  }
  ${Horizon}{
    z-index: 2;
    position: relative;
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
  .impact-subtitle{
    display: flex;
    margin-bottom: 120px;
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
    width: 80%;
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
  ${media.medium`
    padding-bottom: 73px;
    overflow: hidden;
    .content{
      margin-top: 42px;
      min-height: 428px;
      margin-bottom: 43px;
      ${CTA}{
        display: none;
      }
      .super.head-1{
        margin-left: 0;
      }
      h2{
        font-size: 24px;
        line-height: 36px;
        letter-spacing: .05em;
        margin: 16px 0 0;
      }
      .sub-head{
        max-width: 323px;
        margin: 0 auto;
      }
      .super.head-3{
        margin: 72px auto 4px;
        text-align: center;
        width: 100%;
      }
      .super.head-4{
        margin: 0;
        text-align: center;
        width: 100%;
      }
    }
    .img-wall{
      top: 80px;
      .wall1{
        margin-top: 100px;
        margin-left: -40px;
      }
      .wall4{
        margin-top: 65px
      }
      .wall5{
        margin-top: 100px;
      }
      .wall6{
        margin-top: 114px;
      }
    }
    .impact-title{
      br{
        display: none;
      }
    }
    .impact-subtitle{
      display: inline-block;
      margin: 8px 0 48px;
    }
    .slick-slider{
      .slick-arrow{
        pointer-events: none;
      }
    }
    .slick-dots.slick-thumb{
      margin-top: 48px;
    }
    .slick-list{
      width: 100%;
    }
  `}
`;

const VideoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 720px;
  max-width: calc( 100% - 160px );
  /* padding: 0 80px; */
  margin: 0 auto;
  ${media.medium`
    max-width: calc( 100% - 40px );
    height: auto;
    padding: 0 20px;
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
    width: 100%;
    img{
      width: 100%;
      margin-top: -20px;
    }
  }
  h1 {
    color: ${colors.White};
    margin: 0;
  }
  ${media.medium`
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    height: 372px;
    .marquee{
      height: 50px;
    }
  `}
  /* @media screen and (max-width:400px) {
    .bg{
      img{
        height: 440px;
        width: auto;
      }
    }
  } */
`;

const ServiceList = styled.div`
  padding: 120px 0 200px;
  .title {
    padding: 0 40px;
    border-left: 1px solid #5A6869;
    border-right: 1px solid #5A6869;
    height: 100%;
  }
  .right {
    border-right: 1px solid #5A6869;
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
  .lottie{
    min-width: 290px;
    margin-right: 40px;
  }
  ${media.medium`
    padding: 72px 0;
    .title{
      display: none;
    }
    .right{
      flex-direction: column;
      border-right: 0;
      text-align: center;
      border-right: 1px solid ${colors.White};
      border-left: 1px solid ${colors.White};
      .lottie{
        margin-right: 0;
        min-width: auto;
      }
      ul{
        display: flex;
        flex-direction: column;
        li{
          justify-content: center;
          display: inline-block;
          &::before{
            display: inline-block;
          }
        }
      }
      h4{
        margin: 0;
        padding-top: 16px;
      }
      h1{
        margin: 32px 0 8px;
      }
    }
  `}
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
    max-width: 320px;
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
const FeatureHeadYellow = styled.h2`
  display: flex;
  justify-content: end;
  .draw::after{
    content: '';
    border-bottom: 15px solid ${colors.Yellow};
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
      box-shadow: inset 0 21px ${colors.BGGreen}, inset 0px 54px ${colors.Yellow};
    }
  `}
`
