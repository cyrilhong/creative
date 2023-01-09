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
                How could a long-established <br />
                financial brand transform its<br />
                image into a fresh one?
              </Fade>
            </Title>
            <div className="content">
              <h1>
                <Fade bottom duration={500} delay={100}>
                我們如何運用品牌重塑，讓
                  <Mark />
                  底蘊悠久的金控品牌展現全新的品牌形象？
                </Fade>
              </h1>
            </div>
          </>
        }
        {windowWidth > 959 && windowWidth < 1440 &&
          <>
            <Title className="eng huge">
              <Fade bottom cascade duration={500} delay={100}>
                How could a <br />
                long-established <br />
                financial brand <br />
                transform its image <br />
                into a fresh one
              </Fade>
            </Title>
            <div className="content">
              <h1>
                我們如何運用品牌重塑，讓<div className='draw'>底蘊悠久的金控品牌展現全新的品牌形象？</div>
              </h1>
            </div>
          </>
        }
        {windowWidth < 960 &&
          <>
            <Title className="eng huge">
            How could a long-established financial brand transform its image into a fresh one
            </Title>
            <div className="content">
              <h1>
                我們如何運用品牌重塑，讓<div className='draw'>底蘊悠久的金控品牌展現全新的品牌形象？</div>
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
      box-shadow: inset 0 20px ${colors.BGGrey}, inset 0px 54px #FF977C;
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
        /* width: 467px; */
        display: block;
        position: absolute;
        top: 20px;
        height: 24px;
        /* transition: all 0.5s ease-in-out; */
        background: #ff8262;
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
      width: 663px;
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
      }
    }
  `}
  ${media.medium`
    padding: 72px 0 24px;
    .content{
      margin-top: 8px;
      .draw{
        box-shadow: inset 0 14px ${colors.BGGrey}, inset 0px 54px #FF977C;
      }
      h1{
        display: inline;
      }
    }
    
  `}
`;

const Title = styled.div`
  .react-reveal{
    height: 90px;
  }
`;

