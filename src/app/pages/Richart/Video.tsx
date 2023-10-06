import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import * as color from 'styles/colors';
import { useWindowSize } from '../../hooks'
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import VideoJS from './VideoJS';
import stopVideo from './assets/stop-video.svg';
import playVideo from './assets/play-video.svg';
import {
  isMobile,
  isDesktop
} from 'react-device-detect';
export default function Tone() {
  const windowWidth = useWindowSize().width
  const [isBlackBg, setIsBlackBg] = useState(true);
  const playerRef = React.useRef(null);
  const [videoOpen, setVideoOpen] = useState(false)
  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    muted: true,
    loop: true,
    sources: [
      {
        src: 'http://aja-creative-video.s3.ap-southeast-1.amazonaws.com/richart.mp4',
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = player => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      // videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      // videojs.log('player will dispose');
    });

    player.on('click', () => {
      const paused = player.paused();
      if (player.isFullscreen()) {
        setVideoOpen(false);
        // player.src({ type: 'video/mp4', src: 'https://aja-creative-video.s3.ap-southeast-1.amazonaws.com/showreel-short.mp4' });
        // console.log('click');
        // player.exitFullscreen();
        player.pause();
        // player.muted(true);
        if (paused) {
          player.play();
          setVideoOpen(true);
        }
      } else {
        setVideoOpen(true);
        // player.src({ type: 'video/mp4', src: 'https://aja-creative-video.s3.ap-southeast-1.amazonaws.com/showreel.mp4' });
        // console.log('click');
        player.requestFullscreen();
        player.play();
        player.muted(false);
      }
    });
    player.on('fullscreenchange', function () {
      if (player.isFullscreen()) {
        // player.pause();
      } else {
        player.pause();
        // player.src({ type: 'video/mp4', src: 'https://aja-creative-video.s3.ap-southeast-1.amazonaws.com/showreel-short.mp4' });
        // player.muted(true);
        setVideoOpen(false);
      }
    });
  };


  return (
    <div style={{ position: 'relative' }} className={isBlackBg ? 'black' : 'white'}>
      <VideoWrapper className={`${videoOpen ? 'open' : ''}`}>
        {!isMobile ? (
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            style={{ width: '100%' }}
          >
            <source src='http://aja-creative-video.s3.ap-southeast-1.amazonaws.com/richart.mp4' />
            <img src="image.gif" />
          </video>
        )}
        <div className="hover-player">
          {/* <img src={playVideo} alt="playReel" /> */}
        </div>
      </VideoWrapper>
    </div>
  );
}

const VideoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  /* height: 720px;
  max-width: calc( 100% - 160px ); */
  padding: 0 80px;
  margin: 0 auto;
  &.open:hover{
    cursor: url(${stopVideo}) 45 45,auto;
  }
  .hover-player{
    display: flex;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;;
    align-items: center;
    justify-content: center;
    transition: all .5s ease-in;
    pointer-events: none;
    top: 0;
    left: 0;
  }
  &:hover{
    /* cursor: pointer; */
    cursor: url(${playVideo}) 45 45,auto;
    .hover-player{
      opacity: 1;
    }
  }
  ${media.large`
    max-width: calc( 100% - 80px );
  `}
  ${media.medium`
    max-width: 100%;
    height: auto;
    padding: 0 20px;
    .hover-player{
      display: none;
    }
  `}
`;
