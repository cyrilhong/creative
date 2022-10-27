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
            We believe a great team comes
          </Fade>
        </Title>
        <Title className="eng huge">
          <Fade bottom cascade duration={2000} delay={100}>
            with diversity&growth mindsets.
          </Fade>
        </Title>
        <div className="content">
          <h1>
            <Fade bottom duration={2000} delay={100}>
              我們來自不同領域，
              <Mark />
              形塑合拍有默契的跨職能團隊
            </Fade>
          </h1>
        </div>
      </ParallaxProvider>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  text-align: left;
  padding: 280px 0 120px;
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
        background: ${colors.Orange};
        z-index: -1;
        animation: marker 1s forwards;
        animation-delay: 2s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }
    }
  }
  @keyframes marker {
    from {
      width: 0;
    }
    to {
      width: 484px;
    }
  }
`;

const Title = styled.div``;
