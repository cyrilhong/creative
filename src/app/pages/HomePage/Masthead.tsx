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
        {windowWidth > 1178 &&
          <>
            <Title className="eng huge">
              <Fade bottom cascade duration={1000} delay={100}>
                We put insight and
              </Fade>
            </Title>
            <Title className="eng huge">
              <Fade bottom cascade duration={1000} delay={100}>
                imagination at the center of
              </Fade>
            </Title>
            <Title className="eng huge">
              <Fade bottom cascade duration={1000} delay={100}>
                everything we do.
              </Fade>
            </Title>
            <div className="content">
              <h1>
                <Fade bottom duration={1000} delay={100}>
                  體驗創新就是巧妙地
                  <Mark />
                  連結商業目標和用戶需求，淬鍊價值
                </Fade>
              </h1>
            </div>
          </>
        }
        {windowWidth > 960 && windowWidth < 1178 &&
          <>
            <Title className="eng huge">
              <Fade bottom cascade duration={1000} delay={100}>
                We put insight and
              </Fade>
            </Title>
            <Title className="eng huge">
              <Fade bottom cascade duration={1000} delay={100}>
                imagination at the
              </Fade>
            </Title>
            <Title className="eng huge">
              <Fade bottom cascade duration={1000} delay={100}>
                center of everything
              </Fade>
              <Fade bottom cascade duration={1000} delay={100}>
                we do.
              </Fade>
            </Title>
            <div className="content">
              <h1>
                <Fade bottom duration={1000} delay={100}>
                  體驗創新就是巧妙地
                  <Mark />
                  連結商業目標和用戶需求，淬鍊價值
                </Fade>
              </h1>
            </div>
          </>
        }
        {windowWidth < 960 &&
          <>
            <Title className="eng huge">
              <Fade bottom duration={1000} delay={100}>
                We put insight and imagination at the center of everything we do.
              </Fade>
            </Title>
            <div className="content">
              <h1>
                體驗創新就是巧妙地<div className='draw'>連結商業目標和用戶需求，淬鍊價值</div>
                {/* <Fade bottom duration={1000} delay={100}>
              </Fade> */}
              </h1>
            </div>
          </>

        }
      </ParallaxProvider>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  text-align: left;
  padding: 200px 0 74px;
  .content {
    margin-top: 24px;
  }
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
      background: ${colors.ElectricBlue};
      z-index: -1;
      animation: marker 1s forwards;
      animation-delay: 2s;
      animation-timing-function: cubic-bezier(.17,.67,.83,.67);
    }
  }
  .draw::after{
    content: '';
    border-bottom: 15px solid ${colors.ElectricBlue};
  }
  @keyframes marker {
    from {
      width: 0;
    }
    to {
      width: 576px;
    }
  }
  ${media.large`
    h1{
      display: block;
    }
  `}

  ${media.medium`
    padding: 72px 0 24px;
    h1{
      display: block;
    }
    .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 21px #0c1c24, inset 0px 54px #0931e1;
    }
  `}
  ${media.small`
    h1{
        display: block;
    }
    .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 21px #0c1c24, inset 0px 54px #0931e1;
    }
  `}
`;

const Title = styled.div``;
