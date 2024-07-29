import React, { Component } from 'react'
import lineUpApp from './assets/line-up-app.png'
import lineUpBg from './assets/ling-up-bg.jpg'
import styled from 'styled-components/macro';
import Lottie from 'lottie-react';
import beRich from './assets/be-rich.json'
import Fade from 'react-reveal/Fade';
export default class LineUp extends Component {
  render() {
    return (
      <Wrapper>
        <Fade delay={200}>
          <img className='bg' src={lineUpBg} alt="lineUpBg" />
        </Fade>
        <Fade delay={200}>
          <img className='app' src={lineUpApp} alt="lineUpApp" />
        </Fade>
        <Fade delay={600}>
          <div className="lottie">
            <Lottie animationData={beRich} loop={true} />
          </div>
        </Fade>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  /* display: flex;
  width: 100%;
  height: auto;
  position: relative; */
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .app{
    width: 16vw;
    z-index: 1;
    position: absolute;
    right: 7.2vw;
    top: -6%;
    -webkit-filter: drop-shadow(0 0 25px #222);
    filter: drop-shadow(0 0 25px #222);
  }
  .bg{
    z-index: 0;
    width: 100%;
  }
  .lottie{
    position: absolute;
    bottom: 0;
    /* width: 936px; */
    width: 65vw;
    max-width: 100%;
  }
`
