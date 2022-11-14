import React, { useState, useEffect, useRef, createRef, Children } from 'react';
import styled from 'styled-components/macro';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Fade from 'react-reveal/Fade';
import { NavBar } from 'app/components/NavBar';
import WrappedButton from 'app/components/WrappedButton'
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { PageWrapper } from 'app/components/PageWrapper';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { Masthead } from './Masthead';
import * as color from 'styles/colors';
import hero1 from './assets/hero-1.jpg';
import hero2 from './assets/hero-2.jpg';
import hero3 from './assets/hero-3.jpg';
import team1 from './assets/team-1.jpg';
import team2 from './assets/team-2.jpg';
import team3 from './assets/team-3.jpg';
import hotBaloon from './assets/img lg_happy teams.svg';
import arrowButton from './assets/arrow-btn-round.svg';
import arrowWhite from './assets/arrow-white.svg';
import arrowBlack from './assets/arrow-black.svg';
import telescope from './assets/telescope.svg';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { media } from 'styles/media';
import { Element, scroller } from 'react-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useWindowSize, isDesktop } from '../../hooks'
const teamSlider = [
  team1, team2, team3, team1, team2, team3
]
export function JoinUsPage() {
  const [blackBg, setBlackBg] = useState(true);
  const colorRef = useRef<HTMLDivElement>(null);
  useScrollPosition(({ prevPos, currPos }) => {
    // console.log(colorRef.current!.getBoundingClientRect().top);
    if (colorRef.current!.getBoundingClientRect().top < 550) {
      // debugger
      setBlackBg(false);
    } else {
      setBlackBg(true);
    }
  });
  const carouselRef = React.useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    slidesToShow: isDesktop()?3:1,
    cssEase: 'linear',
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <ParallaxProvider>
      <Helmet>
        <title>Join Us</title>
        <meta name="description" content="Join Us" />
      </Helmet>
      <NavBar bgColor={color.BGPeach} color={color.AJABlue}/>
      <div className="bg-join-us">
        <PageWrapper overflow="true">
          <HeroSection>
            <Grid className="text" container spacing={5} rowSpacing={9}>
              {isDesktop() ?
                <Grid xs={12}>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="sentence-1 super eng">Makes work</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="sentence-2 super eng">a real joy </div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <Box
                      display={'flex'}
                      flexDirection="row"
                      alignItems={'baseline'}
                    >
                      <div className="sentence-3 super eng">with us!</div>
                      <h1 className="sentence-4">與我們一同面向挑戰帶來改變</h1>
                    </Box>
                  </Fade>
                </Grid> :
                <Grid xs={12}>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="sentence-1 super eng">Makes</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="sentence-2 super eng">work</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="sentence-3 super eng">a real joy</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <Box
                      display={'flex'}
                      flexDirection="column"
                      alignItems={'baseline'}
                    >
                      <div className="sentence-4 super eng">with us!</div>
                      <h1 className="sentence-5">與我們一同面向挑戰帶來改變</h1>
                    </Box>
                  </Fade>
                </Grid>
              }
              <Grid xs={12} padding={'0'} marginTop={'-14px'}>
                <CTA
                  color={color.White}
                  bgc={color.DarkBlue}
                  onClick={() => {
                    scroller.scrollTo('job-list', {
                      duration: 1500,
                      delay: 100,
                      smooth: true
                    })
                  }}
                >
                  <h4 className="eng">OPEN POSITIONS</h4>
                  <img style={{ transform: "rotate(90deg)" }} src={arrowWhite} alt="arrow" />
                </CTA>
              </Grid>
            </Grid>
            <Grid className="teams-img" container spacing={5} rowSpacing={9}>
              <Grid xs={6} md={5} className="left-1">
                <ParallaxImg>
                  <Parallax speed={5}>
                    <img src={hero1} alt="hero1" />
                  </Parallax>
                </ParallaxImg>
              </Grid>
              <Grid xs={6} xsOffset={6} md={5} mdOffset={2} className="right">
                <ParallaxImg>
                  <Parallax speed={20}>
                    <img src={hero2} alt="hero2" />
                  </Parallax>
                </ParallaxImg>
              </Grid>
              <Grid xs={6} className="left-2">
                <ParallaxImg>
                  <Parallax speed={25}>
                    <img src={hero3} alt="hero3" />
                  </Parallax>
                </ParallaxImg>
              </Grid>
            </Grid>
            <Grid xs={8} xsOffset={2}>
              <Box className="amazing-teams">
                <h1 className="eng">Great people make amazing teams</h1>
                <h1>我們重視工作，也享受生活</h1>
                <h4>
                  信任團隊成員，尊重彼此差異，透過合作共創能量。願意發揮角色職責，透過向心力與凝聚力，激盪出更精彩的創意火花！打破思維框架，擴大生活經驗，接納多面向的視野觀點，與不同產業、族群、立場的人們對話，醞釀更強大的創新動能！
                </h4>
              </Box>
            </Grid>
          </HeroSection>
        </PageWrapper>
        <TeamBuilding>
          <Slider {...settings} ref={carouselRef}>
            {teamSlider.map((item, index) => {
              return (
                <SlideItem key={index}>
                  <img src={item} />
                </SlideItem>
              );
            })}
          </Slider>
        </TeamBuilding>
      </div>
      <div
        ref={colorRef}
        className="leadership-team"
      // style={{ paddingBottom: '120px' }}
      >
        <Element name="job-list">
          <div className={blackBg ? 'bg-join-us' : 'black'}>
            <PageWrapper
              blackBg={blackBg}
              bgc={blackBg ? color.DarkBlue : color.BGGreen}
              color={blackBg ? color.White : color.DarkBlue}
              className={blackBg ? 'black' : 'white'}
            >
              <Horizon blackBg={blackBg}>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">CAREERS</h4>
                </div>
              </Horizon>
              <Jobs>
                <Grid
                  container
                  spacing={5}
                  rowSpacing={9}
                  style={{ margin: 0 }}
                >
                  <Grid xs={12} md={5} className="left">
                    <div className="huge eng">
                      Join our <br />
                      team
                    </div>
                    <h2>成為我們的一員！</h2>
                  </Grid>
                  <Grid xs={12} md={7} className="job-list">
                    <ul>
                      <li>
                        <div className="info">
                          <h1 className="eng">UX Designer</h1>
                          <h4>使用體驗設計師</h4>
                        </div>
                        <WrappedButton
                          text="APPLY"
                          link="#"
                          isWhite={false}
                          iconRotate={-45}
                        />
                      </li>
                      <li>
                        <div className="info">
                          <h1 className="eng">UI Designer</h1>
                          <h4>使用介面設計師</h4>
                        </div>
                        <WrappedButton
                          text="APPLY"
                          link="#"
                          isWhite={false}
                          iconRotate={-45}
                        />
                      </li>
                      <li>
                        <div className="info">
                          <h1 className="eng">Researcher</h1>
                          <h4>研究員</h4>
                        </div>
                        <WrappedButton
                          text="APPLY"
                          link="#"
                          isWhite={false}
                          iconRotate={-45}
                        />
                      </li>
                      <li>
                        <div className="info">
                          <h1 className="eng">Front-End Dev</h1>
                          <h4>前端工程師</h4>
                        </div>
                        <WrappedButton
                          text="APPLY"
                          link="#"
                          isWhite={false}
                          iconRotate={-45}
                        />
                      </li>
                      <li>
                        <div className="info">
                          <h1 className="eng">Project Manager</h1>
                          <h4>專案經理</h4>
                        </div>
                        <CTA bgc="transparent" color={color.White}>
                          <h4 className="eng">APPLY</h4>
                          <img src={arrowWhite} alt="arrow" />
                        </CTA>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Jobs>
            </PageWrapper>
          </div>
        </Element>
      </div>
    </ParallaxProvider>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
  ${media.medium`
    height: ${StyleConstants.NAV_BAR_MOBILE_HEIGHT};
  `}
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  /* color: ${p => p.theme.text}; */
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;

const ParallaxImg = styled.div`
  overflow: hidden;
  margin: 0 -80px;
  img {
    width: 100%;
  }
`;

const HeroSection = styled.div`
  padding: 196px 0 124px;
  .text {
    position: relative;
    z-index: 2;
  }
  .sentence-1 {
    margin-left: 70px;
  }
  .sentence-2 {
    text-align: right;
    margin-right: 0;
    margin-top: -30px;
  }
  .sentence-3 {
    margin-top: -38px;
    margin-left: 138px;
  }
  .sentence-4 {
    margin-left: 50px;
  }
  .amazing-teams {
    border-left: 1px solid ${color.DarkBlue};
    border-right: 1px solid ${color.DarkBlue};
    margin: 689px -7px 0;
    padding: 24px 40px;
    text-align: center;
    h1 {
      margin-bottom: 8px;
      margin-top: 0;
    }
    h4 {
      margin-top: 15px;
    }
  }
  .teams-img {
    /* margin-top: -644px; */
    position: absolute;
    top: 295px;
    z-index: 0;
    .left-1 {
      margin-top: 16px;
      padding-right: 0;
    }
    .left-2 {
      margin-left: -80px;
      margin-top: -570px;
    }
    img {
      width: 100%;
    }
    .right {
      margin-top: 366px;
      padding: 0 20px 0 0;
    }
    .hotBaloon {
      display: flex;
      justify-content: flex-end;
      margin-top: 6px;
      img {
        width: 350px;
      }
    }
    .context {
      margin-top: 64px;
      padding: 32px 40px 1px;
      border-left: 1px solid #0c1c24;
      border-right: 1px solid #0c1c24;
      h2 {
        margin: 0 0 16px 0;
      }
      h4 {
        margin: 0 0 34px;
      }
    }
  }
  ${ParallaxImg} {
    margin: 0;
    overflow: visible;
  }
  @media screen and (max-width: 1400px) {
    .sentence-3{
      margin-left: 0;
    }
  }
  @media screen and (max-width: 1260px) {
    .super{
      font-size: 106px;
      line-height: 120px;
    }
    .sentence-4{
      max-width: 330px;
    }
    .amazing-teams{
      margin-top: 489px;
    }
  }
  ${media.medium`
    padding: 72px 0;
    .super{
      font-size: 48px;
      line-height: 60px;
    }
    .sentence-1{
      text-align: center;
      margin: 0;
    }
    .sentence-2{
      text-align: right;
      margin:0 40px 0 0;
    }
    .sentence-3{
      text-align: right;
      margin:0 58px 0 0;
    }
    .sentence-4{
      max-width: initial;
      width: 100%;
      text-align: right;
      margin: 0 58px 0 0;
    }
    .teams-img{
      top: 116px;
      .left-1{
        padding-right: 10px;
      }
      .right{
        margin-top: 14px;
        margin-right: 25px;
        padding-right: 0;
        padding-left: 10px;
      }
      .left-2{
        margin-top: -58px;
        margin-left: -20px;
        padding: 0;
      }
    }
    .amazing-teams{
      margin-top: 108px;
    }
  `}
`;

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
    }
  }
`;

const Jobs = styled.div`
  padding-bottom: 172px;
  margin-top: -40px;
  .item {
    text-align: center;
    .super {
      margin: 0;
    }
    h2 {
      margin: 48px 0 8px;
      &.eng {
        margin: -22px 0 0;
      }
    }
    h4 {
      margin: 0 auto;
      max-width: 320px;
    }
  }
  .left {
    padding: 0;
    h2 {
      margin-top: 16px;
    }
  }
  .job-list {
    border-left: 1px solid rgba(162, 170, 164, 0.5);
    border-right: 1px solid rgba(162, 170, 164, 0.5);
    padding: 0 32px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin: 0;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid rgba(162,170,164,0.5);
        padding: 32px 0;
        justify-content: space-between;
        align-items: center;
        &:nth-last-child(1) {
          border-bottom: 0;
        }
        .info {
          display: flex;
          flex-direction: column;
          h1 {
            margin: 0;
          }
          h4 {
            margin: 0;
          }
        }
      }
    }
    a {
      width: 206px;
      margin: 0;
      img {
        transform: rotate(-45deg);
      }
    }
  }
  ${media.medium`
    padding-bottom: 72px;
    .left{
      h2{
        margin: 8px 0 48px;
      }
      br{
        display: none;
      }
    }
    .job-list{
      padding: 0 20px;
      ul{
        li{
          flex-direction: column;
          h1{
            margin-bottom: 8px;
          }
          .info{
            text-align: center;
            h4{
              margin: 0 0 24px;
            }
          }
          a{
            max-width: 140px;
            height: 56px;
          }
        }
      }
    }
  `}
`;

const SectionIdea = styled.div`
  padding: 96px 0;
  display: flex;
  text-align: center;
  background-color: ${color.White};
  .wrapper {
    margin: 0 auto;
    width: 100%;
    padding: 0 80px;
    .content {
      margin: 0 auto;
      max-width: 1760px;
      padding: 0 80px 30px;
      box-sizing: content-box;
      border-left: 1px solid ${color.DarkBlue};
      border-right: 1px solid ${color.DarkBlue};
      h1 {
        margin-top: 40px;
        color: ${color.DarkBlue};
      }
      h2 {
        color: ${color.DarkBlue};
      }
      ${media.large`
        padding: 0 60px
      `}
      ${media.medium`
        padding: 0 20px;
      `};
    }
  }
`;

const CTA = styled.a<{
  bgc?: string;
  color?: string;
}>`
  width: 302px;
  background: ${prop => (prop.bgc ? prop.bgc : 'initial')};
  border: 1px solid ${prop => (prop.color ? prop.color : color.DarkBlue)};
  border-radius: 100px;
  padding: 16px 32px;
  display: flex;
  color: ${prop => (prop.color ? prop.color : color.DarkBlue)};
  margin: 0 auto;
  letter-spacing: 1px;
  font-weight: 100;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  h4 {
    margin: 0;
  }
  img {
    margin-left: 4px;
  }
  ${media.medium`
    margin-top: 116px;
  `}
`;

const TeamBuilding = styled.div`
  max-width: 1920px;
  margin: 0 auto 120px;
  .slick-track{
    display: flex;
    align-items: baseline;
  }
  .slick-slide {
      margin: 0 20px;
  }
  .slick-list {
      margin: 0 -20px;
  }
  .grid {
    align-items: end;
  }
  img {
    width: 100%;
  }
  ${media.medium`
    margin-bottom: 72px;
    .slick-slide {
      margin: 0 10px;
    }
    .slick-list {
      margin: 0 -10px;
    }
  `}
`;

const SlideItem = styled.div`
  img {
    width: 100%;
    &:hover{
      filter: brightness(0.5);
    }
  }
`;
