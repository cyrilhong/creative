import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import * as colors from 'styles/colors';
import { useWindowSize } from '../../hooks'
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
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
        {windowWidth > 1245 &&
          <>
            <Title className="eng huge">
              <Fade bottom cascade duration={1000} delay={100}>
                We combine strategic design <br />
                and product experience.
              </Fade>
            </Title>
            <div className="content">
              <h1>
                <Fade bottom duration={1000} delay={100}>
                  每個案例都是獨一無二的，我們
                  <Mark />
                  運用策略與設計的跨領域經驗，
                </Fade>
              </h1>
            </div>
          </>
        }
        {windowWidth > 960 && windowWidth < 1245 &&
          <>
            <Title className="eng huge">
              <Fade bottom cascade duration={1000} delay={100}>
                We combine strategic <br />
                design and product <br />experience.
              </Fade>
            </Title>
            <div className="content">
              <h1>
                <Fade bottom duration={1000} delay={100}>
                  每個案例都是獨一無二的，我們
                  <Mark />
                  運用策略與設計的跨領域經驗，
                </Fade>
              </h1>
            </div>
          </>
        }
        {windowWidth < 960 &&
          <>
            <Title className="eng huge">
              We combine strategic design and product experience.
            </Title>
            <div className="content">
              <h1>
                每個案例都是獨一無二的，我們<div className='draw'>運用策略與設計的跨領域經驗</div>，為企業量身打造獨特體驗
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
  padding: 200px 0 102px;
  .content {
    margin-top: 24px;
    h1 {
      margin: 0;
      display: flex;
      .draw::after{
        content: '';
        border-bottom: 15px solid ${colors.ElectricBlue};
      }
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
  @media screen and (max-width:1168px) {
    .content{
      h1{
        display: inline-block;
      }
    }
  }
  ${media.medium`
    padding: 72px 0 110px;
    .content{
      h1{
        display: inline-block;
      }
    }
    .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 21px ${colors.BGGrey}, inset 0px 54px #FF977C;
    }
  `}
`;

const Title = styled.div`
  .react-reveal{
    height: 90px;
  }
`;
