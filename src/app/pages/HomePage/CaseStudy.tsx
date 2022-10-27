import * as React from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as colors from '../../../styles/colors';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Fetnet from './assets/fetnet.jpg';
import * as color from '../../../styles/colors';
import arrow from './assets/button-black.svg';
export default function CaseStudy() {
  return (
    <ParallaxProvider>
      <CaseList>
        <Case>
          <Fade bottom cascade>
            <img src={Fetnet} alt="" />
            <h4 className="type">電信媒體與科技</h4>
            <h2 className="title">遠傳電信官網｜不只是電信，替未來生活提案</h2>
            <div className="pills eng">
              <div className="pill">STRATEGY</div>
              <div className="pill">EXPERIENCE</div>
              <div className="pill">RESEARCH</div>
              <div className="pill">BRANDING</div>
            </div>
            <Button href={'#'}>
              <img src={arrow} alt="arrow" />
              <h4 className="eng">CASE STUDY</h4>
            </Button>
          </Fade>
        </Case>
        <Case>
          <Fade bottom cascade>
            <img src={Fetnet} alt="" />
            <h4 className="type">電信媒體與科技</h4>
            <h2 className="title">遠傳電信官網｜不只是電信，替未來生活提案</h2>
            <div className="pills eng">
              <div className="pill">STRATEGY</div>
              <div className="pill">EXPERIENCE</div>
              <div className="pill">RESEARCH</div>
            </div>
            <Button href={'#'}>
              <img src={arrow} alt="arrow" />
              <h4 className="eng">CASE STUDY</h4>
            </Button>
          </Fade>
        </Case>
        <Case>
          <Fade bottom cascade>
            <img src={Fetnet} alt="" />
            <h4 className="type">電信媒體與科技</h4>
            <h2 className="title">遠傳電信官網｜不只是電信，替未來生活提案</h2>
            <div className="pills eng">
              <div className="pill">STRATEGY</div>
              <div className="pill">EXPERIENCE</div>
              <div className="pill">RESEARCH</div>
            </div>
            <Button href={'#'}>
              <img src={arrow} alt="arrow" />
              <h4 className="eng">CASE STUDY</h4>
            </Button>
          </Fade>
        </Case>

        <Case>
          <Fade bottom cascade>
            <img src={Fetnet} alt="" />
            <h4 className="type">電信媒體與科技</h4>
            <h2 className="title">遠傳電信官網｜不只是電信，替未來生活提案</h2>
            <div className="pills eng">
              <div className="pill">STRATEGY</div>
              <div className="pill">EXPERIENCE</div>
              <div className="pill">RESEARCH</div>
              <div className="pill">BRANDING</div>
            </div>
            <Button href={'#'}>
              <img src={arrow} alt="arrow" />
              <h4 className="eng">CASE STUDY</h4>
            </Button>
          </Fade>
        </Case>
        <Case>
          <Fade bottom cascade>
            <img src={Fetnet} alt="" />
            <h4 className="type">電信媒體與科技</h4>
            <h2 className="title">遠傳電信官網｜不只是電信，替未來生活提案</h2>
            <div className="pills eng">
              <div className="pill">STRATEGY</div>
              <div className="pill">EXPERIENCE</div>
              <div className="pill">RESEARCH</div>
            </div>
            <Button href={'#'}>
              <img src={arrow} alt="arrow" />
              <h4 className="eng">CASE STUDY</h4>
            </Button>
          </Fade>
        </Case>
        <Case>
          <Fade bottom cascade>
            <img src={Fetnet} alt="" />
            <h4 className="type">電信媒體與科技</h4>
            <h2 className="title">遠傳電信官網｜不只是電信，替未來生活提案</h2>
            <div className="pills eng">
              <div className="pill">STRATEGY</div>
              <div className="pill">EXPERIENCE</div>
              <div className="pill">RESEARCH</div>
            </div>
            <Button href={'#'}>
              <img src={arrow} alt="arrow" />
              <h4 className="eng">CASE STUDY</h4>
            </Button>
          </Fade>
        </Case>

        <Case>
          <Fade bottom cascade>
            <img src={Fetnet} alt="" />
            <h4 className="type">電信媒體與科技</h4>
            <h2 className="title">遠傳電信官網｜不只是電信，替未來生活提案</h2>
            <div className="pills eng">
              <div className="pill">STRATEGY</div>
              <div className="pill">EXPERIENCE</div>
              <div className="pill">RESEARCH</div>
              <div className="pill">BRANDING</div>
            </div>
            <Button href={'#'}>
              <img src={arrow} alt="arrow" />
              <h4 className="eng">CASE STUDY</h4>
            </Button>
          </Fade>
        </Case>
        <Case>
          <Fade bottom cascade>
            <img src={Fetnet} alt="" />
            <h4 className="type">電信媒體與科技</h4>
            <h2 className="title">遠傳電信官網｜不只是電信，替未來生活提案</h2>
            <div className="pills eng">
              <div className="pill">STRATEGY</div>
              <div className="pill">EXPERIENCE</div>
              <div className="pill">RESEARCH</div>
            </div>
            <Button href={'#'}>
              <img src={arrow} alt="arrow" />
              <h4 className="eng">CASE STUDY</h4>
            </Button>
          </Fade>
        </Case>
        <Case>
          <Fade bottom cascade>
            <img src={Fetnet} alt="" />
            <h4 className="type">電信媒體與科技</h4>
            <h2 className="title">遠傳電信官網｜不只是電信，替未來生活提案</h2>
            <div className="pills eng">
              <div className="pill">STRATEGY</div>
              <div className="pill">EXPERIENCE</div>
              <div className="pill">RESEARCH</div>
            </div>
            <Button href={'#'}>
              <img src={arrow} alt="arrow" />
              <h4 className="eng">CASE STUDY</h4>
            </Button>
          </Fade>
        </Case>

      </CaseList>
    </ParallaxProvider>
  );
}

const Case = styled.div``;

const CaseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 -40px 200px;
  ${Case} {
    flex: 1 1 30%; /*grow | shrink | basis */
    /* height: 100px; */
    min-height: 628px;
    padding: 0 40px;
    margin-bottom: 72px;
    position: relative;
    img {
      width: 100%;
    }
    a {
      position: absolute;
      bottom: 0;
      img {
        width: 60px;
      }
    }
    .pills {
      margin-bottom: 36px;
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
    &:nth-child(2n) {
      /* padding: 0 40px; */
      border-left: 1px solid ${color.DarkBlue};
      border-right: 1px solid ${color.DarkBlue};
    }
    &:nth-child(4) {
      border-left: 0;
    }
    &:nth-child(7) {
      border-left: 0;
    }
    &:nth-child(3n) {
      border-right: 0;
      /* padding-left: 40px; */
      /* padding-right: 0; */
    }
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
