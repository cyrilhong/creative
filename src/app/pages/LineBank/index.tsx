import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import * as color from 'styles/colors';
import { PageWrapper } from 'app/components/PageWrapper';
import styled from 'styled-components/macro';
import { useWindowSize } from '../../hooks'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Masthead } from '../LineBank/Masthead';
import AboutTheCase from './AboutTheCase'
import Target from './Target'
import BrandInsights from './BrandInsights'
import VisualIdentity from './VisualIdentity'
import VisualIdentitySection2 from './VisualIdentitySection2'
import VisualIdentitySection3 from './VisualIdentitySection3'
import ParallaxColumns from './ParallaxColumns'
import heroImg from './assets/hero-img.jpg'
import lineUp from './assets/sec-2.jpg'
import DesignChallenge from './DesignChallenge';
import Connect from './Connect';
import Experience from './Experience';
import LineUp from './LineUp';
export function LineBank() {
  const windowWidth = useWindowSize().width
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <Helmet>
        <title>Line Bank 理財網</title>
      </Helmet>
      <NavBar bgColor={color.BGGrey} color={color.DarkBlue} />
      <ParallaxProvider>
        <div>
          <PageWrapper overflow={"true"} className="page-container">
            <Masthead />
          </PageWrapper>
          <Hero src={windowWidth > 959 ? heroImg : heroImg} />
          <AboutTheCase />
          <LineUp />
          <Target />
          <DesignChallenge />
          <BrandInsights />
          <Connect />
          <VisualIdentity />
          <ParallaxColumns />
          <VisualIdentitySection2 />
          <VisualIdentitySection3 />
          <Experience />
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
