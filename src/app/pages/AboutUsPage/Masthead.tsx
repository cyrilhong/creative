import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as colors from 'styles/colors';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { useWindowSize } from '../../hooks'
import { media } from 'styles/media';
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
  const windowWidth = useWindowSize().width
  return (
    <Wrapper>
      <ParallaxProvider>
        {windowWidth > 1320 &&
          <>
            <Title className="eng huge">
              <Fade bottom cascade duration={500} delay={100}>
                We believe a great team comes
              </Fade>
            </Title>
            <Title className="eng huge">
              <Fade bottom cascade duration={500} delay={100}>
                with diversity&growth mindsets.
              </Fade>
            </Title>
          </>
        }
        {windowWidth > 959 && windowWidth < 1320 &&
          <>
            <Title className="eng huge">
              <Fade bottom cascade duration={500} delay={100}>
                We believe a great
              </Fade>
            </Title>
            <Title className="eng huge">
              <Fade bottom cascade duration={500} delay={100}>
                team comes with
              </Fade>
            </Title>
            <Title className="eng huge">
              <Fade bottom cascade duration={500} delay={100}>
                diversity&growth
              </Fade>
            </Title>
            <Title className="eng huge">
              <Fade bottom cascade duration={500} delay={100}>
                mindsets.
              </Fade>
            </Title>
          </>
        }
        {windowWidth < 960 &&
          <>
            <Title className="eng huge">
              <Fade bottom duration={500} delay={100}>
                We believe a great team comes with diversity&growth mindsets.
              </Fade>
            </Title>
          </>
        }
        <div className="content">
          {windowWidth > 959 ?
            <h1>
              <Fade bottom duration={500} delay={100}>
                我們來自不同領域，
                <Mark />
                形塑合拍有默契的跨職能團隊
              </Fade>
            </h1> :
            <h1>
              <Fade bottom duration={500} delay={100}>
                我們來自不同領域，形塑合拍有默契的跨職能團隊
              </Fade>
            </h1>
          }
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
        animation-delay: .6s;
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
  ${media.large`
    padding: 72px 0 48px;
  `}
`;

const Title = styled.div``;
