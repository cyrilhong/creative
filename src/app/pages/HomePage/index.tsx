import React, { useState, useMemo, useEffect, useRef, createRef, Children } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { useWindowSize, useWindowPosition } from '../../hooks'
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
import stopVideo from './assets/stop-video.svg';
import playVideo from './assets/play-video.svg';
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
import Richart from './assets/richart.jpg';
import Starlux from './assets/img_starlux.jpg';
import Fetnet from './assets/img_fetnet.jpg';
import wall1 from './assets/wall-1.jpg';
import wall2 from './assets/wall-2.jpg';
import wall3 from './assets/wall-3.jpg';
import wall4 from './assets/wall-4.jpg';
import wall5 from './assets/wall-5.jpg';
import wall6 from './assets/wall-6.jpg';
import wall1Mb from './assets/wall-1-mb.jpg';
import wall2Mb from './assets/wall-2-mb.jpg';
import wall3Mb from './assets/wall-3-mb.jpg';
import wall4Mb from './assets/wall-4-mb.jpg';
import wall5Mb from './assets/wall-5-mb.jpg';
import wall6Mb from './assets/wall-6-mb.jpg';
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
import SectionIdea from './SectionIdea'
import ServiceList from './ServiceList'
import {
  isMobile,
  isDesktop
} from 'react-device-detect';

const CaseSlider = [
  {
    content:
      '“ AJA 具備創新思維的設計能力，能協助客戶推出市場創新的產品，深入探究細節的設計態度，搭配實事求是的精神，令人讚賞。”',
    name: '<b>中國信託 數位營運規劃部</b>',
    link: '#',
    img: {
      src: ctbaLogo,
      alt: 'ctbaLogo',
    },
  },
  {
    content:
      '“ 團隊分工清楚且合作接軌，學習力強能掌握客戶之作業細節。能接地氣聆聽使用者之心聲，回應快能接受客戶回饋及調整為適妥解決方案，是客戶喜歡的合作團隊。”',
    name: '<b>南山人壽 業務通路</b>',
    link: '#',
    img: {
      src: NanShan,
      alt: 'NanShan',
    },
  },
  {
    content:
      '“ 在內部訪談時，平衡來自不同部門間的不同意見、甚至是矛盾與互相衝突的需求，不是一般設計公司做得到的。”',
    name: '<b>KKBOX 產品開發部</b>',
    link: '#',
    img: {
      src: kkboxLogo,
      alt: 'kkboxLogo',
    },
  },
  {
    content:
      '“ 大予或許是你為了特定需求而找上的公司，然後在這過程中相信你也會感受到，你得到的是：「一間陪著你成長茁壯的公司、多個陪著你打怪破關的團隊夥伴。」共勉之。”',
    name: '<b>台新銀行 數位金融處生態圈發展部</b>',
    link: '#',
    img: {
      src: tsBankLogo,
      alt: 'tsBankLogo',
    },
  },
  {
    content:
      '“ 專業度令人印象深刻，不只是前進 UX/UI 的最佳夥伴，從合作中更激發對使用者及設計的創新想像。”',
    name: '<b>台灣設計研究院 產業創新組</b>',
    link: '#',
    img: {
      src: tdriLogo,
      alt: 'tdriLogo',
    },
  },
  {
    content:
      '“ 有人曾經跟我介紹大予是豪宅等級的顧問，合作以來覺得形容的真好！專案期間感受到大予的嚴謹及產出的專業性，過程中亦非常有收穫。”',
    name: '<b>台北富邦銀行 數位金融處</b>',
    link: '#',
    img: {
      src: fbLogo,
      alt: 'fbLogo',
    },
  },
  {
    content:
      '“ 大予團隊可提供超乎顧客需求的服務，服務跟呈現都令人滿意。”',
    name: '<b>中華汽車 新創小組</b>',
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
  const [isBlackBg, setIsBlackBg] = useState(true);
  const windowWidth = useWindowSize().width
  const settings = {
    dots: true,
    infinite: false,
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const gotoSlick = index => {
    // console.log(carouselRef.current);
    setActiveSlide(index);
    carouselRef.current?.slickGoTo(index);
  };

  const themeColorRef = useRef<HTMLDivElement>(null);
  const helpColorRef = useRef<HTMLDivElement>(null);
  const imgWall = useRef<any>(null);
  const [imgWallHeight, setImgWallHeight] = useState(0)

  useScrollPosition(({ prevPos, currPos }) => {
    // console.log(lottie2Position.current!.getBoundingClientRect().top)
    setImgWallHeight(imgWall.current!.getBoundingClientRect().height - (windowWidth > 960 ? 0 : 150))
    if (themeColorRef.current!.getBoundingClientRect().top < 440) {
      // debugger
      setTimeout(() => {
        setIsBlackBg(false);
      }, 200);
    } else {
      setTimeout(() => {
        setIsBlackBg(true);
      }, 200);

    }
  });

  const playerRef = React.useRef(null);
  const [videoOpen, setVideoOpen] = useState(false)

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    muted: true,
    loop: true,
    sources: [
      {
        src: 'https://aja-creative-video.s3.ap-southeast-1.amazonaws.com/showreel-short.mp4',
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
      const paused = player.paused();
      if (player.isFullscreen()) {
        setVideoOpen(false);
        // player.src({ type: 'video/mp4', src: 'https://aja-creative-video.s3.ap-southeast-1.amazonaws.com/showreel-short.mp4' });
        // console.log('click');
        // player.exitFullscreen();
        player.pause();
        // player.muted(true);
        if (paused) {
          player.play();
          setVideoOpen(true);
        }
      } else {
        setVideoOpen(true);
        player.src({ type: 'video/mp4', src: 'https://aja-creative-video.s3.ap-southeast-1.amazonaws.com/showreel.mp4' });
        // console.log('click');
        player.requestFullscreen();
        player.play();
        player.muted(false);
      }
    });
    player.on('fullscreenchange', function () {
      if (player.isFullscreen()) {
        // player.pause();
      } else {
        player.pause();
        // player.src({ type: 'video/mp4', src: 'https://aja-creative-video.s3.ap-southeast-1.amazonaws.com/showreel-short.mp4' });
        // player.muted(true);
        setVideoOpen(false);
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

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "play",
        frames: [0, 45]
      }
    ]
  }


  return (
    <ParallaxProvider>
      <NavBar bgColor={isBlackBg ? colors.DarkBlue : colors.BGGreen} color={isBlackBg ? colors.BGGreen : colors.DarkBlue} />
      <div className={'black'}>
        <PageWrapper>
          <Masthead />
        </PageWrapper>
      </div>
      <div style={{ position: 'relative' }} className={isBlackBg ? 'black' : 'white'}>
        <VideoWrapper className={`${videoOpen ? 'open' : ''}`}>
          <Parallax
            scale={windowWidth > 960 ? [1, 1.2] : [1, 1]} speed={windowWidth > 960 ? -10 : 0}
          >
            {!isMobile ? (
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                style={{ width: '100%' }}
              >
                <source src='https://aja-creative-video.s3.ap-southeast-1.amazonaws.com/showreel.mp4' />
                <img src="image.gif" />
              </video>
            )}
          </Parallax>
          <div className="hover-player">
            {/* <img src={playVideo} alt="playReel" /> */}
          </div>
        </VideoWrapper>
      </div>
      <div className={isBlackBg ? 'black' : 'white'}>
        <PageWrapper>
          <Horizon isBlackBg>
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
            {windowWidth < 1114 ?
              <>
                我們透過量身定制的解決方案來應對不同商業需求的關鍵情境
              </>
              :
              <>
                我們透過
                <Mark>量身定制的解決方案</Mark>，來應對<Mark>不同商業需求</Mark>的關鍵情境
              </>
            }
          </FeatureHead>
          <WrappedButton
            text="OUR WORKS"
            link="/case"
            isWhite={false}
          />
          <CaseList>
            <Grid container>
              <Grid xs={12} md={7} className="case" onClick={() => window.open('https://yoxi-case-study.aja.com.tw/')}>
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
                    link=""
                    isWhite={true}
                    text="CASE STUDY"
                  />
                </Fade>
              </Grid>
              <Grid xs={12} md={5} lg={4} className="case" onClick={() => window.open('case/richart')}>
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <img src={Richart} alt="richart" />
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
                    link=""
                    isWhite={true}
                    text="CASE STUDY"
                  />
                </Fade>
              </Grid>
              <Grid xs={12} md={5} mdOffset={2} className="case" onClick={() => window.open('https://fetnet-revision.aja.com.tw/')}>
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
                    link=""
                    isWhite={true}
                    text="CASE STUDY"
                  />
                </Fade>
              </Grid>
              <Grid xs={12} md={5} className="case" onClick={() => window.open('https://aja.com.tw/starlux-case-study/index.html')}>
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
                    link=""
                    isWhite={true}
                    text="CASE STUDY"
                  />
                </Fade>
              </Grid>
            </Grid>
          </CaseList>
        </PageWrapper>
      </div>
      <div className={isBlackBg ? 'black' : 'white'}>
        <PageWrapper
          isBlackBg={isBlackBg}
          bgc={isBlackBg ? colors.DarkBlue : colors.BGGreen}
          color={isBlackBg ? colors.White : colors.DarkBlue}
        >
          <OurServices isBlackBg={isBlackBg} ref={themeColorRef}>
            <Horizon isBlackBg={isBlackBg}>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">OUR SERVICES</h4>
              </div>
              <h4 className="eng">02</h4>
            </Horizon>
            <div className="content" style={{ minHeight: imgWallHeight }}>
              {!isBlackBg &&
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
                      {windowWidth < 976 ?
                        <>
                          我們不斷累積跨領域經驗創新能量轉化為客戶價值
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
                        link="/customer"
                        isWhite={true}
                      />
                    </div>
                  </Grid>
                  {!isBlackBg &&
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
            {/* <h1>imgWallHeight: {imgWallHeight}</h1> */}
            <div className="img-wall" ref={imgWall}>
              <Grid container spacing={0} rowSpacing={0}>
                <Grid xs={3} md={3}>
                  <Parallax
                    className="wall1"
                    speed={windowWidth > 960 ? 20 : 10}
                    scale={windowWidth > 960 ? [1.5, 0] : [1, 1]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={windowWidth > 960 ? wall1 : wall1Mb} alt="wall1" />
                  </Parallax>
                </Grid>
                <Grid xs={6} xsOffset={6} md={4} mdOffset={5}>
                  <Parallax
                    className="wall3"
                    speed={windowWidth > 960 ? 18 : 9}
                    scale={windowWidth > 960 ? [1.5, 0] : [1, 1]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={windowWidth > 960 ? wall3 : wall3Mb} alt="wall3" />
                  </Parallax>
                </Grid>
                <Grid xs={6} md={3}>
                  <Parallax
                    className="wall4"
                    speed={windowWidth > 960 ? 16 : 8}
                    scale={windowWidth > 960 ? [1.5, 0] : [1, 1]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={windowWidth > 960 ? wall4 : wall4Mb} alt="wall4" />
                  </Parallax>
                </Grid>
                <Grid xs={3} xsOffset={2} md={3} mdOffset={3}>
                  <Parallax
                    className="wall5"
                    speed={windowWidth > 960 ? 23 : 12}
                    scale={windowWidth > 960 ? [1.5, 0] : [1, 1]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={windowWidth > 960 ? wall5 : wall5Mb} alt="wall5" />
                  </Parallax>
                </Grid>
                <Grid xs={3} md={3} mdOffset={2}>
                  <Parallax
                    className="wall6"
                    speed={windowWidth > 960 ? 20 : 10}
                    scale={windowWidth > 960 ? [1.5, 0] : [1.1, 1]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={windowWidth > 960 ? wall6 : wall6Mb} alt="wall6" />
                  </Parallax>
                </Grid>
                <Grid xs={4} xsOffset={2} md={2} mdOffset={3}>
                  <Parallax
                    className="wall2"
                    speed={windowWidth > 960 ? 40 : 10}
                    scale={windowWidth > 960 ? [1.5, 0] : [1, 1]}
                    rootMargin={{ top: 0, right: 0, bottom: 800, left: 0 }}
                  >
                    <img src={windowWidth > 960 ? wall2 : wall2Mb} alt="wall2" />
                  </Parallax>
                </Grid>

              </Grid>
            </div>
            <Horizon isBlackBg={isBlackBg}>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">OUR IMPACT</h4>
              </div>
              <h4 className="eng">03</h4>
            </Horizon>
            <div className="impact-title huge eng">
              We partner with our clients <br />
              to create value.
            </div>
            {windowWidth > 961 ? <h1 className="impact-subtitle">
              我們協助
              <Mark color={colors.Yellow}>客戶創造價值</Mark>
              ，進而形塑共好的長期夥伴關係
            </h1> :
              <h1 className="impact-subtitle">
                我們協助客戶創造價值，進而形塑共好的長期夥伴關係
              </h1>
            }
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
            speed={windowWidth > 960 ? 15 : 3}
          >
            {windowWidth > 960 ? <img src={dedicationBg} alt="dedicationBg" /> : <img src={dedicationBgMb} alt="dedicationBg" />}
          </Parallax>
        </div>
        <Parallax translateX={windowWidth > 640 ? [30, -55] : [1, 1]}>
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
        {/* <div className={isBlackBg ? 'black' : 'white'}> */}
        <div className={'black'}>
          <PageWrapper
            isBlackBg={true}
            bgc={colors.DarkBlue}
            color={colors.White}
            className={'black'}
          >
            <Horizon isBlackBg={true}>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">HOW WE CAN HELP</h4>
              </div>
              <h4 className="eng">04</h4>
            </Horizon>
            {windowWidth > 960 ? <div className="huge eng">
              What you can <br />
              expect from us
            </div> :
              <div className="huge eng">
                What you can expect from us
              </div>
            }
            <FeatureHead>
              {windowWidth < 960 ?
                <Fade>
                  我們來自不同的專業領域，用
                  多元的觀點碰撞出好的體驗
                </Fade> :
                <>
                  我們來自不同的專業領域，用多元的觀點碰撞出好的體驗
                </>

              }

            </FeatureHead>
            <WrappedButton
              text="OUR SERVICES"
              link="/service"
              isWhite={false}
            />
            <ServiceList />
          </PageWrapper>
        </div>
      </div>
      <SectionIdea />
    </ParallaxProvider >
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
const Horizon = styled.div < {
  isBlackBg?: boolean;
} > `
  display: flex;
  justify-content: space-between;
  padding: 120px 0;
  color: ${prop => (prop.isBlackBg ? colors.White : colors.DarkBlue)};
  &::after {
    content: '';
    width: 100%;
    display: block;
    border-top: 1px solid
      ${prop => (prop.isBlackBg ? colors.White : colors.DarkBlue)};
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
      background-color: ${prop =>
    prop.isBlackBg ? colors.BGGrey : colors.DarkBlue};
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


const CaseList = styled.div`
  display: flex;
  margin: 118px 0 0;
  /* padding-bottom: 124px; */
  flex-direction: column;
  .case {
    padding: 0 40px;
    margin-bottom: 48px;
    cursor: pointer;
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
          stroke: ${colors.White};
        }
        &:hover {

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

        h4{
          font-weight: 500;
        }
      }

      h4{
        margin: 0;
      }
      img {
        width: 60px;
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
    @keyframes move-out {
      0% {
        transform: translateX(100%);
      }
      to {
        transform: translateX(200%);
      }
    }

    &:hover{
      img{
        transform: scale(1.05);
      }
      a{
        .wrapper{
          path {
            stroke: ${colors.DarkBlue};
          }
          &:before {
            -webkit-animation: move-in 0.3s forwards;
            animation: move-in 0.3s forwards;
          }
        }
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
      font-weight: 300;
      color: #979ea0;
      &:hover{
        cursor: default;
      }
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
  ${media.large`
    p{
      height: auto;
    }
  `}
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

const OurServices = styled.div < {
  isBlackBg: boolean;
} > `
  padding: 0 0 96px;
  transition: all 1s ease-in;
  /* background-color: ${prop =>
    prop.isBlackBg ? colors.DarkBlue : colors.BGGreen}; */
  color: ${prop => (prop.isBlackBg ? colors.BGGreen : colors.DarkBlue)};
  position: relative;
  .content {
    z-index: 1;
    position: relative;
    color: ${prop => (prop.isBlackBg ? colors.BGGreen : colors.DarkBlue)};
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
      margin-left: 0px;
    }
    .wall2 {
      /* width: 288px; */
      /* margin-left: 30%; */
      width: 100%;
      margin-top: 58%;
      padding-right: 0;
    }
    .wall3 {
      /* width: 398px; */
      width: 100%;
      /* margin-left: 70%; */
      margin-top: 6%;
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
  ${media.large`
    .content {
      margin-bottom: 0;
      .super{
        font-size: 100px;
        line-height: 132px;
      }
    }
    .impact-title{
      br{
        display: none;
      }
    }
  `}
  ${media.medium`
    padding-bottom: 73px;
    // overflow: hidden;
    .content{
      margin-top: 42px;
      min-height: 428px;
      margin-bottom: 43px;
      ${CTA}{
        display: none;
      }
      .super{
        font-size: 48px;
        line-height: 60px;
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
      top: 0;
      .wall1{
        margin-top: 100px;
        margin-left: 0px;
      }
      .wall4{
        margin-top: 65px
      }
      .wall5{
        margin-top: 100px;
        padding: 0;
      }
      .wall6{
        margin-top: 100px;
      }
      .wall2 {
        margin-top: 100px;
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
    .slick-slide{
      padding-right:40px;
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
      width: 84%;
    }
  `}
  ${media.small`
    .img-wall{
      top: 80px;
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
  &.open:hover{
    cursor: url(${stopVideo}) 45 45,auto;
  }
  .hover-player{
    display: flex;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;;
    align-items: center;
    justify-content: center;
    transition: all .5s ease-in;
    pointer-events: none;
    top: 0;
    left: 0;
  }
  &:hover{
    /* cursor: pointer; */
    cursor: url(${playVideo}) 45 45,auto;
    .hover-player{
      opacity: 1;
    }
  }
  ${media.large`
    max-width: calc( 100% - 80px );
  `}
  ${media.medium`
    max-width: 100%;
    height: auto;
    padding: 0 20px;
    .hover-player{
      display: none;
    }
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
  ${media.small`
    .marquee{
      height: auto;
      width: 100%;
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


const FeatureHead = styled.h1`
  display: flex;
  .draw::after{
    content: '';
    border-bottom: 15px solid ${colors.ElectricBlue};
  }
  ${media.large`
    margin-bottom: -8px;
  `}
  ${media.medium`
    display: block;
    margin-bottom: -8px;
    /* max-width: 320px; */
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

const Button = styled.a`
  background: initial;
  border: 0;
  padding: 0;
  display: flex;
  color: ${colors.White};
  margin-top: 32px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  svg {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`
