import React, { useState, useEffect, useRef, createRef, Children } from 'react';
import styled from 'styled-components/macro';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Fade from 'react-reveal/Fade';
import { NavBar } from 'app/components/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { PageWrapper } from 'app/components/PageWrapper';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { Masthead } from './Masthead';
import * as color from 'styles/colors';
import mainBanner from './assets/about-us-main.jpg';
import hotBaloon from './assets/img lg_happy teams.svg';
import team1 from './assets/team-1.jpg';
import team2 from './assets/team-2.jpg';
import james from './assets/james.jpg';
import alan from './assets/alan.jpg';
import david from './assets/david.jpg';
import charles from './assets/charles.jpg';
import arrowButton from './assets/arrow-btn-round.svg';
import arrowBlack from './assets/arrow-black.svg';
import telescope from './assets/telescope.svg';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { media } from 'styles/media';

export function AboutUsPage() {
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
  return (
    <ParallaxProvider>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="About Us" />
      </Helmet>
      <NavBar />
      <div className="bg-about-us">
        <PageWrapper>
          <Masthead />
          <ParallaxImg>
            <Parallax speed={-20}>
              <img src={mainBanner} alt="main" />
            </Parallax>
          </ParallaxImg>
          <HappyTeam>
            <Grid className="text" container spacing={5} rowSpacing={9}>
              <Grid xs={10} xsOffset={1}>
                <Fade bottom cascade duration={2000} delay={100}>
                  <div className="super eng">Happy Teams</div>
                </Fade>
                <Fade bottom cascade duration={2000} delay={100}>
                  <div className="super eng">Create</div>
                </Fade>
                <Fade bottom cascade duration={2000} delay={100}>
                  <div className="super eng">Change.</div>
                </Fade>
              </Grid>
            </Grid>
            <Grid className="teams-img" container spacing={5} rowSpacing={9}>
              <Grid xs={5} className="left">
                <ParallaxImg>
                  <Parallax speed={5}>
                    <img src={team1} alt="team1" />
                  </Parallax>
                </ParallaxImg>
                <div className="hotBaloon">
                  <img src={hotBaloon} alt="hotBaloon" />
                </div>
              </Grid>
              <Grid xs={5} xsOffset={1} className="right">
                <ParallaxImg>
                  <Parallax speed={20}>
                    <img src={team2} alt="team2" />
                  </Parallax>
                </ParallaxImg>
                <div className="context">
                  <h2>專業團隊，跨領域設計經驗</h2>
                  <h4>
                    AJA
                    專注在呼應企業的商業目標，結合用戶洞見，轉化成為精采絕倫的設計方案。跨領域的設計經驗經累，讓AJA團隊有更多連結與創造的能力，能更好地協助各類型的產業與企業。
                  </h4>
                  <h2>夥伴關係、以終為始</h2>
                  <h4>
                    AJA
                    本身就是一個專業平台，在這個平台上，設計夥伴們的多元專業可以互相連結、彼此共鳴成長，而最終的設計成果將一舉超越客戶的期待。
                  </h4>
                  <h2>動靜分明，工作玩樂都專業</h2>
                  <h4>
                    我們做設計很認真，玩樂也很盡興。每年的員工旅遊，已經走訪世界各地。每季的聚餐，則吃遍台灣大街小巷。能夠熱切開心地過生活，才懂得欣賞與啟發，擁有源源不絕的創造力。
                  </h4>
                </div>
              </Grid>
            </Grid>
          </HappyTeam>
        </PageWrapper>
      </div>
      <div
        ref={colorRef}
        className="leadership-team"
        // style={{ paddingBottom: '120px' }}
      >
        <div className={blackBg ? 'bg-about-us' : 'black'}>
          <PageWrapper
            blackBg={blackBg}
            bgc={blackBg ? color.DarkBlue : color.BGGreen}
            color={blackBg ? color.White : color.DarkBlue}
            className={blackBg ? 'black' : 'white'}
          >
            <Horizon blackBg={blackBg}>
              <div className="title">
                <div className="dot" />
                <h4 className="eng">LEADERSHIP TEAM</h4>
              </div>
            </Horizon>
            <Leadership>
              <Grid container spacing={5} rowSpacing={9}>
                <Grid xs={4}>
                  <div className="huge eng">Our leadership team</div>
                  <h1>專家團隊</h1>
                </Grid>
                <Grid xs={8} padding={0}>
                  <Grid container spacing={5} rowSpacing={8}>
                    <Grid xs={6}>
                      <img src={james} alt="james" />
                      <div className="info">
                        <Box>
                          <h4 className="eng">Business Director</h4>
                          <h2 className="eng">James Chou</h2>
                        </Box>
                        <img src={arrowButton} alt="button" />
                      </div>
                    </Grid>
                    <Grid xs={6}>
                      <img src={alan} alt="alan" />
                      <div className="info">
                        <Box>
                          <h4 className="eng">Creative Director</h4>
                          <h2 className="eng">Alan Yang</h2>
                        </Box>
                        <img src={arrowButton} alt="button" />
                      </div>
                    </Grid>
                    <Grid xs={6}>
                      <img src={david} alt="david" />
                      <div className="info">
                        <Box>
                          <h4 className="eng">UX Director</h4>
                          <h2 className="eng">David Chen</h2>
                        </Box>
                        <img src={arrowButton} alt="button" />
                      </div>
                    </Grid>
                    <Grid xs={6}>
                      <img src={charles} alt="charles" />
                      <div className="info">
                        <Box>
                          <h4 className="eng">Strategy Director</h4>
                          <h2 className="eng">Charles Chen</h2>
                        </Box>
                        <img src={arrowButton} alt="button" />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Leadership>
            <Performance>
              <Grid container spacing={5} rowSpacing={9}>
                <Grid xs={4} className="item">
                  <div className="super eng">13</div>
                  <h2 className="eng">YEARS</h2>
                  <h2>體驗設計顧問經驗</h2>
                  <h4>
                    體驗設計是一段連續的過程，從探索研究、創新概念到設計落實，都應該有對應的專業能力，我們相信結合用戶需求和客戶商業價值，才能為企業落實服務創新
                  </h4>
                </Grid>
                <Grid xs={4} className="item">
                  <div className="super eng">300+</div>
                  <h2 className="eng">PROJECTS</h2>
                  <h2>多樣性專案案例</h2>
                  <h4>
                    我們重視每一位提攜與信任我們的客戶，一起攜手在金融、航空、交通、生活應用與專業領域中積累了超過300件以上饒富創意與影響力的產品
                  </h4>
                </Grid>
                <Grid xs={4} className="item">
                  <div className="super eng">45+</div>
                  <h2 className="eng">People</h2>
                  <h2>跨職能團隊成員</h2>
                  <h4>
                    隨著客戶需求在廣度與深度的增長，AJA也逐步擴張，發展出從用戶研究、資訊架構、互動與品牌設計，是國內最大、最完整的體驗設計團隊
                  </h4>
                </Grid>
              </Grid>
            </Performance>
          </PageWrapper>
          <SectionIdea>
            <div className="wrapper">
              <div className="content">
                <img className="idea" src={telescope} alt="telescope" />
                <h1 className="eng">
                Surround yourself with highly ambitious, friendly & humble people !
                </h1>
                <h2>我們深知人才是最重要的資產，一起加入改變！</h2>
                <CTA href={"#"}>
                  <h4 className="eng">JOIN US</h4>
                  <img src={arrowBlack} alt="arrow" />
                </CTA>
              </div>
            </div>
          </SectionIdea>
        </div>
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

const HappyTeam = styled.div`
  padding: 120px 0 90px;
  .super:nth-child(2) {
    margin-left: 150px;
  }
  .text {
    position: relative;
    z-index: 2;
  }
  .teams-img {
    margin-top: -150px;
    position: relative;
    z-index: 0;
    .left {
      padding-left: 60px;
    }
    img {
      width: 100%;
    }
    .right {
      margin-top: -250px;
      padding: 0 40px 0 0;
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

const Leadership = styled.div`
  img {
    width: 100%;
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    border-bottom: 1px solid ${color.White};
    align-items: center;
    padding-bottom: 24px;
    img {
      cursor: pointer;
      width: 48px;
    }
    h4 {
      margin: 0 0 4px;
      font-weight: 100;
    }
    h2 {
      margin: 0;
    }
  }
`;

const Performance = styled.div`
  padding-bottom: 200px;
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
      h2{
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

const CTA = styled.a`
  width: 242px;
  background: initial;
  border: 1px solid ${color.DarkBlue};
  border-radius: 100px;
  padding: 16px 32px;
  display: flex;
  color: ${color.DarkBlue};
  margin: 32px auto 0;
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
`;
