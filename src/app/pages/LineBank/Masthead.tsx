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
        {windowWidth > 1439 &&
          <>
            <Title className="eng huge">
              <Fade bottom cascade duration={500} delay={100}>
                Connect with LINE Bank lets you<br />
                expand your wealth with ease
              </Fade>
            </Title>
            <div className="content">
              <h1>
                <Fade bottom duration={500} delay={100}>
                  與 LINE Bank
                  <Mark />
                  理財好朋友連線，讓有錢變簡單
                </Fade>
              </h1>
            </div>
          </>
        }
        {windowWidth > 959 && windowWidth < 1440 &&
          <>
            <Title className="eng huge">
              <Fade bottom cascade duration={500} delay={100}>
                Connect with LINE<br />
                Bank lets you expand <br />
                your wealth with ease
              </Fade>
            </Title>
            <div className="content">
              <h1>
                與 LINE Bank<div className='draw'>理財好朋友連線，讓有錢變簡單</div>
              </h1>
            </div>
          </>
        }
        {windowWidth < 960 &&
          <>
            <Title className="eng huge">
              Connect with LINE Bank lets you <br />
              expand your wealth with ease
            </Title>
            <div className="content">
              <h1>
                與 LINE Bank<div className='draw'>理財好朋友連線，讓有錢變簡單</div>
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
  padding: 180px 0 96px;
  .content {
    margin-top: 24px;
    .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 20px ${colors.BGGrey}, inset 0px 54px ${colors.LinbankMark};
    }
    .draw::after{
      content: '';
      border-bottom: 15px solid ${colors.ElectricBlue};
    }
    h1 {
      display: flex;
      margin: 0;
      span {
        position: relative;
        /* width: 514px; */
        display: block;
        position: absolute;
        top: 20px;
        height: 24px;
        /* transition: all 0.5s ease-in-out; */
        background: ${colors.LinbankMark};
        z-index: -1;
        animation: marker 1s forwards;
        animation-delay: .5s;
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
      width: 514px;
    }
  }
  @media screen and (max-width:1168px) {
    .content{
      h1{
        display: inline-block;
      }
    }
  }
  ${media.large`
    .content{
      h1{
        display: inline;
        font-size: 24px;
      }
    }
  `}
  ${media.medium`
    padding: 72px 0 32px;
    br{
      display: none;
    }
    .content{
      margin-top: 8px;
      .draw{
        box-shadow: inset 0 14px ${colors.BGGrey}, inset 0px 54px ${colors.LinbankMark};
      }
      h1{
        display: inline;
        font-size: 24px;
      }
    }

  `}
`;

const Title = styled.div`
  .react-reveal{
    height: 90px;
  }
  ${media.medium`
    font-size: 30px;
  `}
`;

