import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { media } from 'styles/media';
import { useWindowSize } from '../../hooks';
import Left from './assets/left.webp';
import Right from './assets/right.webp';
import Center from './assets/center.webp';
import centerApp from './assets/parallax-center.png';

export default function ParallaxImg() {
  const { width: initialWidth } = useWindowSize();
  const [windowSize, setWindowSize] = useState(initialWidth);
  const [isDesktop, setIsDesktop] = useState(initialWidth > 960);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowSize(newWidth);
      setIsDesktop(newWidth > 960);
    };

    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <div className="center-app">
        <img src={centerApp} alt="centerApp" />
      </div>
      <Controller>
        <Scene
          // indicators={true}
          duration="300%"
          triggerHook="onEnter"
        >
          <Timeline wrapper={<div className="parallax" />}>
            <Tween
              position="0"
              from={{
                yPercent: isDesktop ? -40 : -20,
              }}
              to={{
                yPercent: 30,
              }}
            >
              <img className="left" src={Left} alt="left" />
            </Tween>
            <Tween
              position="0"
              from={{
                yPercent: 50,
              }}
              to={{
                yPercent: 0,
              }}
            >
              <img className="center" src={Center} alt="Center" />
            </Tween>
            <Tween
              position="0"
              from={{
                yPercent: -50,
              }}
              to={{
                yPercent: 20,
              }}
            >
              <img className="right" src={Right} alt="Right" />
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #0d0d0d;
  height: 880px;
  display: flex;
  justify-content: center;
  align-items: center;
  .parallax {
    gap: 35px;
    display: flex;
    flex-direction: row;
    /* height: 100%;
    width: 100%; */
  }
  .left,
  .center,
  .right {
    display: flex;
    width: calc(100vw / 3 - 22px);
  }
  .center-app {
    z-index: 1;
    display: flex;
    width: 100%;
    position: absolute;
    left: calc(50% - 188px);
    img {
      width: 370px;
      /* -webkit-filter: drop-shadow(0 0 25px #222);
      filter: drop-shadow(0 0 25px #222); */
    }
  }
  ${media.medium`
    height: 125vw;
    .center-app {
      left: calc(50% - 25vw);
      img {
        width: 50vw;
      }
    }
    .parallax {
      gap: 30px;
      .center {
        display: none;
      }
      .left,
      .right {
        width: calc(100vw / 2 - 15px);
      }
    }
  `}
`;
