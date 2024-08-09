
import styled from 'styled-components/macro';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { media } from 'styles/media';
import { useWindowSize, isDesktop } from '../../hooks'
import Left from './assets/left.png'
import Right from './assets/right.png'
import Center from './assets/center.png'
import centerApp from './assets/parallax-center.png'
export default function ParallaxImg() {
  const windowWidth = useWindowSize().width
  return (
    <Wrapper>
      <div className="center-app">
        <img src={centerApp} alt="centerApp" />
      </div>
      <Controller>
        <Scene
          // indicators={true}
          duration="200%"
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className="parallax" />}
          >
            <Tween
              position="0"
              from={{
                yPercent: isDesktop() ? -40 : -10,
              }}
              to={{
                yPercent: 0,
              }}
            >
              <img className='left' src={Left} alt="left" />
            </Tween>
            <Tween
              position="0.5"
              from={{
                yPercent: 0,
              }}
              to={{
                yPercent: -10,
              }}

            >
              <img className='center' src={Center} alt="Center" />
            </Tween>
            <Tween
              position="0"
              from={{
                yPercent: isDesktop() ? -40 : 5,
              }}
              to={{
                yPercent: isDesktop() ? 5 : -5,
              }}
            >
              <img className='right' src={Right} alt="Right" />
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  background-color: #0D0D0D;
  height: 880px;
  display: flex;
  justify-content: center;
  align-items: center;
  .parallax{
    gap: 35px;
    display: flex;
    flex-direction: row;
    /* height: 100%;
    width: 100%; */
  }
  .left, .center, .right{
    display: flex;
    width: calc( 100vw/3 - 22px );
  }
  .center-app{
    z-index: 10;
    display: flex;
    width: 100%;
    position: absolute;
    left: calc( 50% - 188px );
    img{
      width: 370px;
      -webkit-filter: drop-shadow(0 0 25px #222);
      filter: drop-shadow(0 0 25px #222);
    }
  }
  ${media.medium`
    height: 125vw;
    .center-app{
      left: calc( 50% - 25vw );
      img{
        width: 50vw;
      }
    }
    .parallax{
      gap: 30px;
      .center{
        display: none;
      }
      .left,.right{
        width: calc( 100vw/2 - 15px )
      }
    }
  `}
`
