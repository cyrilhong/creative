import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as colors from 'styles/colors';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
export function Masthead() {
  const target = useRef(null);
  function Mark() {
    const { ref } = useParallax<HTMLDivElement>({
      // scaleX: [0, 1],
      // opacity: [0, 1],
      // endScroll: 1000,
      // speed: 10,
      // rotateY: [0, 360]
    });
    return <span ref={ref} />;
  }
  return (
    <Wrapper>
      <ParallaxProvider>
        <Title className="eng huge">
          <Fade bottom cascade duration={2000} delay={100}>
            We combine strategic design <br />
            and product experience.
          </Fade>
        </Title>
        <div className="content">
          <h1>
            <Fade bottom duration={2000} delay={100}>
              每個案例都是獨一無二的，我們
              <Mark />
              運用策略與設計的跨領域經驗，
            </Fade>
          </h1>
          <h1>
            <Fade bottom duration={2000} delay={100}>
              為企業量身打造獨特體驗
            </Fade>
          </h1>
        </div>
      </ParallaxProvider>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  text-align: left;
  padding: 200px 0 102px;
  .content {
    margin-top: 24px;
    h1 {
      margin: 0;
      display: flex;
      span {
        position: relative;
        /* width: 467px; */
        display: block;
        position: absolute;
        top: 20px;
        height: 24px;
        /* transition: all 0.5s ease-in-out; */
        background: #ff8262;
        z-index: -1;
        animation: marker 1s forwards;
        animation-delay: 2s;
        animation-timing-function: cubic-bezier(.17,.67,.83,.67);
      }
    }
  }
  br.react-reveal{
    display: contents;
  }
  @keyframes marker {
    from {
      width: 0;
    }
    to {
      width: 467px;
    }
  }
`;

const Title = styled.div``;
