import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import WrappedButton from 'app/components/WrappedButton'
import * as color from 'styles/colors';
import { PageWrapper } from 'app/components/PageWrapper';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { Box } from '@mui/system';
import { useWindowSize, useWindowPosition } from '../../hooks'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fade from 'react-reveal/Fade';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Masthead } from '../Richart/Masthead';
import AboutTheCase from './AboutTheCase'
import Target from './Target'
import Strategy from './Strategy'
import DesignCharacteristic from './DesignCharacteristic'
import BrandInsights from './BrandInsights'
import DesignConcept from './DesignConcept'
import VisualIdentity from './VisualIdentity'
import Tone from './Tone'
import Video from './Video'
import DesignSystem from './DesignSystem'
import ParallaxImg from './ParallaxImg'
import heroImg from './assets/hero-img.jpg'
import heroImgMb from './assets/hero-img-mb.jpg'
import brickImg from './assets/brick-img.png'
export function Richart() {
  const windowWidth = useWindowSize().width
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <Helmet>
        <title>台新 Richart 數位銀行｜和你站在同一邊，最懂你的銀行</title>
      </Helmet>
      <NavBar bgColor={color.BGGrey} color={color.DarkBlue} />
      <ParallaxProvider>
        <div>
          <PageWrapper overflow={"true"} className="page-container">
            <Masthead />
          </PageWrapper>
          <Hero src={windowWidth > 959 ? heroImg : heroImgMb} />
          <AboutTheCase />
          <ParallaxImg img={brickImg} alt="brickImg" height={windowWidth > 959 ? windowWidth*4/7 : 420} />
          <Target />
          <Strategy />
          <DesignCharacteristic />
          <BrandInsights />
          <DesignConcept />
          <VisualIdentity />
          <Tone />
          <Video />
          <DesignSystem />
        </div>
      </ParallaxProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .page-container{
    max-width: 1520px;
  }
  .slider-wrapper{
    padding: 0;
  }
`

const Hero = styled.img`
  /* height: 600px; */
  width: 100%;
  object-fit: contain;
  display: flex;
`
