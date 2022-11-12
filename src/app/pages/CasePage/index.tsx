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
export function CasePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <div className="bg-case">
        <PageWrapper overflow={"true"}>
          <Masthead />
          <Case />
          <CaseStudy />
        </PageWrapper>
      </div>
      <SectionIdea>
        <div className="wrapper">
          <div className="content">
            <Box width={'220px'} m="0 auto">
              <Fade>
                <Lottie animationData={lottieClient} loop={true} />
              </Fade>
            </Box>
            <h1 className="eng">
              Serving 100+ top companies with diverse cross-field experience
            </h1>
            <h2>我們用心協助客戶創造價值，進而形塑共好的長期夥伴關係</h2>
            <Box display={"flex"} justifyContent="center">
              <WrappedButton
                text="OUR CLIENTS"
                link="#"
                isWhite={true}
              />
            </Box>
          </div>
        </div>
      </SectionIdea>
    </>
  );
}



const SectionIdea = styled.div`
  padding: 96px 0;
  display: flex;
  text-align: center;
  background-color: ${colors.White};
  .wrapper {
    margin: 0 auto;
    width: 100%;
    padding: 0 80px;
    a{
      background-color: ${colors.White};
    }
    .content {
      margin: 0 auto;
      max-width: 1760px;
      padding: 0 80px 30px;
      box-sizing: content-box;
      border-left: 1px solid ${colors.DarkBlue};
      border-right: 1px solid ${colors.DarkBlue};
      h1 {
        margin-top: 40px;
      }
    }
  }
  ${media.large`
    .content {
      padding: 0 60px
    }
  `}
  ${media.medium`
    padding: 48px 0;
    .wrapper{
      padding: 0 20px;
      .content {
        padding: 0 20px;
        .idea{
          width: 160px;
        }
        h1{
          margin: 24px 0 8px;
        }
        h2{
          margin: 0;
        }
      }
    }
  `};
`;
