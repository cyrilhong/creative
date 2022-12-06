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
import arrowHollow from './assets/arrow-hollow-left.svg';
import arrowHollowRight from './assets/arrow-hollow-right.svg';
import Collapse from './collapse'
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
    slidesToShow: isDesktop() ? 3 : 1,
    cssEase: 'linear',
    slidesToScroll: 1,
    arrows: true,
  };
  const windowWidth = useWindowSize().width
  return (
    <ParallaxProvider>
      <Helmet>
        <title>Join Us</title>
        <meta name="description" content="Join Us" />
      </Helmet>
      <NavBar bgColor={color.BGPeach} color={color.AJABlue} />
      <div className="bg-join-us">
        <PageWrapper overflow="true">
          <HeroSection>
            <Grid className="text" container spacing={5} rowSpacing={9}>
              {windowWidth > 1439 &&
                <Grid xs={12}>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="sentence-1 super eng">Makes work</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="sentence-2 super eng">a real joy </div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <Box className="sentence-3-wrapper"
                    >
                      <div className="sentence-3 super eng">with us!</div>
                      <h1 className="sentence-4">與我們一同面向挑戰帶來改變</h1>
                    </Box>
                  </Fade>
                </Grid>}

              {windowWidth > 959 && windowWidth < 1440 && <Grid xs={12}>
                <Fade bottom cascade duration={500} delay={100}>
                  <div className="sentence-1 super eng">Makes work</div>
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
              {windowWidth < 960 && <Grid xs={12}>
                <div className="sentence-1 super eng">Makes work with us!</div>
                <h1 className="sentence-5">與我們一同面向挑戰帶來改變</h1>
              </Grid>
              }
              {windowWidth > 960 && <Grid xs={12} padding={'0'} marginTop={'-14px'}>
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
              </Grid>}
            </Grid>
            <Grid className="teams-img" container spacing={5} rowSpacing={9}>
              <Grid xs={12} md={4} className="left-1">
                <ParallaxImg>
                  <Parallax speed={5}>
                    <img src={hero1} alt="hero1" />
                  </Parallax>
                </ParallaxImg>
              </Grid>
              <Grid xs={6} xsOffset={5} md={5} mdOffset={3} className="right">
                <ParallaxImg>
                  <Parallax speed={20}>
                    <img src={hero2} alt="hero2" />
                  </Parallax>
                </ParallaxImg>
              </Grid>
              <Grid xs={8} md={7} className="left-2">
                <ParallaxImg>
                  <Parallax speed={windowWidth>960?25:10}>
                    <img src={hero3} alt="hero3" />
                  </Parallax>
                </ParallaxImg>
              </Grid>
            </Grid>
            {windowWidth < 960 && <Grid xs={12}>
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
            </Grid>}
            <Grid container>
              <Grid xs={12} xsOffset={0} mdOffset={1} md={10}>
                <Box className="amazing-teams">
                  <h1 className="eng">Great people make amazing teams</h1>
                  <h1>我們重視工作，也享受生活</h1>
                  <h4>
                    信任團隊成員，尊重彼此差異，透過合作共創能量。願意發揮角色職責，透過向心力與凝聚力，激盪出更精彩的創意火花！打破思維框架，擴大生活經驗，接納多面向的視野觀點，與不同產業、族群、立場的人們對話，醞釀更強大的創新動能！
                  </h4>
                </Box>
              </Grid>
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
              className={blackBg ? 'white' : 'black'}
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
                    <WrappedButton
                      text="APPLY"
                      link="https://www.104.com.tw/company/b88c8k8"
                      isWhite={false}
                      iconRotate={-45}
                    />
                  </Grid>
                  <Grid xs={12} md={7} className="job-list">
                    <ul>
                      <li>
                        <Collapse list={
                          [{
                            title: "User Researcher",
                            name: "使用者研究員",
                            answer: `擁有扎實的研究方法與科學認識論基礎，能夠整合實踐與理論，且勇於面對多元的體驗設計挑戰，了解問題背後並非一蹴可幾，願意透過反覆試做來回應複雜社會與技術改變所形成的體驗問題。`,
                            expanded: false
                          }]} />
                      </li>
                      <li>
                        <Collapse list={
                          [{
                            title: "UX Designer",
                            name: "使用者經驗設計師",
                            answer: `對於周圍變化具有敏銳的觀察力，能夠洞悉問題跟脈絡；有清楚的邏輯思維與創意，來設計具架構性與延展性的解決方案；並且具有開放的心胸，來聆聽、溝通、與內外部成員團隊合作。`,
                            expanded: false
                          }]} />
                      </li>
                      <li>
                        <Collapse list={
                          [{
                            title: "UI Desinger",
                            name: "介面設計師",
                            answer: `對於視覺設計有獨到的見解，及對各種人事物充滿好奇心，能夠將心中感性與美學素養，藉由自身對於事物的觀察與體悟，巧妙地轉化成理性的介面呈現，並和夥伴一同參與使用者研究、腦力激盪、規劃產品畫面與流程。`,
                            expanded: false
                          }]} />
                      </li>
                      <li>
                        <Collapse list={
                          [{
                            title: "Project Manager",
                            name: "專案經理",
                            answer: `能夠獨立掌控與執行設計專案規劃，並與 UX/UI 學習專業知識及累積各產業的 know-how。對內，需能協助團隊有效率地管理專案執行並產出成果；對外，則需要對應客戶業務窗口多樣態的商業問題及設計需求，綜合客戶多元考量，並有能力做出適當且正確的回應。`,
                            expanded: false
                          }]} />
                      </li>
                      <li>
                        <Collapse list={
                          [{
                            title: "Front-End Dev",
                            name: "前端工程師",
                            answer: `能具備豐富的前端工程知識與能力，並能夠探索、啟發與指導設計師關於技術的可能性，成為團隊中的技術專家 ; 同時具備良好的思考表達能力，協助專案經理評估可行性、工作時程等規劃，共同為專案完成絕佳的使用者經驗與介面設計。`,
                            expanded: false
                          }]} />
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
  db
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
  padding: 196px 0 109px;
  a{
    border: 0;
  }
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
  .sentence-3-wrapper{
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .amazing-teams {
    border-left: 1px solid ${color.DarkBlue};
    border-right: 1px solid ${color.DarkBlue};
    margin: 40vw -7px 0;
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
      margin-top: 8px;
      padding-right: 0;
      margin-left: 0;
    }
    .left-2 {
      margin-left: -80px;
      margin-top: -570px;
    }
    img {
      width: 100%;
    }
    .right {
      margin-top: 410px;
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
  /* @media screen and (max-width: 1400px) {
    .sentence-3{
      margin-left: 0;
    }
  } */
  /* @media screen and (max-width: 1260px) {
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
  } */
  ${media.large`
    padding-top: 90px;
    .super{
      font-size: 100px;
      line-height: 136px;
    }
    .sentence-3-wrapper{
      flex-direction: column;
    }
    .sentence-4{
      max-width: 100%;
      margin: 24px auto 6px;
      text-align: center;
    }
    .sentence-1,.sentence-2,.sentence-3{
      margin: 0 auto;
      text-align: center;
    }
    .teams-img{
      top: 160px;
      .left-1{
        /* padding-left: 0; */
      }
      .left-2{
        margin-top: -544px;
        margin-left: -40px;
        padding-right: 40px;
      }
      .right{
        margin-top: 458px;
        padding-right: 40px;
      }
    }
    .amazing-teams{
      margin-top: 42vw;
    }

    .sentence-5{
      margin: 0 auto;
    }
  `}
  ${media.medium`
    padding: 72px 0;
    .super{
      font-size: 48px;
      line-height: 60px;
    }
    .sentence-1{
      text-align: left;
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
      top: 0;
      position: relative;
      .left-1{
        padding: 0 20px 0 80px;
      }
      .right{
        margin-top: 14px;
        margin-right: 25px;
        padding-right: 0;
        padding-left: 10px;
      }
      .left-2{
        margin: 0 0 0 20px;
        padding: 0;
        position: absolute;
        bottom: -40px;
      }
    }
    .amazing-teams{
      margin: 72px 0 0 0;
    }
    .right{
      display: none;
    }
    .sentence-5{
     margin-bottom: 30px; 
    }
    .right{
      display: none;
    }
  `}
  ${media.small`
    .right{
      display: none;
    }
    .teams-img{
      .left-2{
        /* bottom: -10px; */
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
        .accordion__panel{
          padding-right: 82px;
        }
        &:nth-last-child(1) {
          border-bottom: 0;
        }
        .head{
          h1{
            margin: 0;
          }
          h3{
            font-weight: 300;
          }
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
        margin: 8px 0 0;
      }
      br{
        display: none;
      }
      a{
        margin-bottom: 32px;
      }
    }
    .job-list{
      padding: 0 20px;
      ul{
        li{
          flex-direction: column;
          .accordion__button{
            h1{
              margin-bottom: 10px;
            }
          }
          .accordion__panel{
            padding-right: 0;
          }
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
    margin-top: 165px;
  `}
  ${media.small`
    margin-top: 105px;
  `}
`;

const TeamBuilding = styled.div`
  max-width: 1920px;
  margin: 0 auto 120px;

  .slick-slider{
    .slick-arrow{
      pointer-events: none;
      z-index: 10;
      opacity: 0;
    }
  }
  .slick-prev{
    /* pointer-events: none; */
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
  ${media.large`
    .slick-list {
      margin: 0 -10px;
      max-width: 80vw;
      overflow: visible;
    }
  `}
  ${media.medium`
    margin-bottom: 72px;
    .slick-slide {
      margin: 0 10px;
    }
    .slick-list {
      margin: 0 auto;
      max-width: 68vw;
    }
  `}
`;

const SlideItem = styled.div`
  border: 0!important;
  outline: 0!important;
  img {
    width: 100%;
    filter: grayscale(1);
    transition: all .2s ease-in;
    &:hover{
      filter: grayscale(0);
    }
  }
`;
