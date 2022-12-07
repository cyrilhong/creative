import React, { useState, useEffect, useRef, createRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import WrappedButton from 'app/components/WrappedButton'
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';
import styled from 'styled-components/macro';
import * as colors from 'styles/colors';;
import CaseStudy from './CaseStudy';
import Idea from './assets/idea.svg';
import { media } from 'styles/media';
import { Box } from '@mui/system';
import Case from './Case'
import Lottie from 'lottie-react';
import lottieClient from './assets/client.json';
import Fade from 'react-reveal/Fade';
import SectionIdea from './SectionIdea'
export function CasePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>專案實例</title>
        <meta
          name="description"
          content="We combine strategic design and product experience."
        />
      </Helmet>
      <NavBar bgColor={colors.BGGrey} color={colors.DarkBlue} />
      <div className="bg-case">
        <PageWrapper overflow={"true"}>
          <Masthead />
          <Case />
          <CaseStudy />
        </PageWrapper>
      </div>
      <SectionIdea />
    </>
  );
}



