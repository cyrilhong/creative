import React from 'react';
import styled from 'styled-components/macro';
import { Grid } from '@mui/material';
import { useWindowSize } from '../../hooks'
import { media } from 'styles/media';
import Box from '@mui/material/Box';
import {
  isMobile,
} from 'react-device-detect';
export function PageWrapper(props) {
  const windowWidth = useWindowSize().width
  return (
    <>
      {!isMobile || windowWidth > 960 ?
        <Wrapper overflow={props.overflow} className={props.className}>
          <Box position={'relative'} zIndex="1">
            {props.children}
          </Box>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={0}
            height="100%"
            position={'absolute'}
            className="lines"
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={1} height="100%">
              <Box
                className="line"
                // borderRight={'1px solid rgba(243, 243, 235, .5)'}
                // borderRight={'1px solid red'}
                height="100%"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} height="100%">
              <Box
                // borderRight={'1px solid rgba(243, 243, 235, .5)'}
                className="line"
                height="100%"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} height="100%">
              <Box
                // borderRight={'1px solid rgba(243, 243, 235, .5)'}
                className="line"
                height="100%"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} height="100%">
              <Box
                // borderRight={'1px solid rgba(243, 243, 235, .5)'}
                className="line"
                height="100%"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} height="100%">
              <Box
                // borderRight={'1px solid rgba(243, 243, 235, .5)'}
                className="line"
                height="100%"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} height="100%">
              <Box
                // borderRight={'1px solid rgba(243, 243, 235, .5)'}
                className="line"
                height="100%"
              />
            </Grid>
          </Grid>
        </Wrapper>
        :
        <WrapperMb className={props.className}>
          <Box overflow={props.overflow==='true'?'hidden':'visible'} position={'relative'} zIndex="1">
            {props.children}
          </Box>
        </WrapperMb>
      }
    </>
  );
}

export function PageWrapperMb(props) {
  return (
    <WrapperMb>
      <Box position={'relative'} zIndex="1">
        {props.children}
      </Box>
    </WrapperMb>
  );

}

const Wrapper = styled.div<{
  blackBg?: boolean;
  bgc?: string;
  color?: string;
  overflow?: string;
}>`
    margin: 0 auto;
    padding: 0 80px;
    box-sizing: content-box;
    max-width: 1920px;
    height: 100%;
    position: relative;
    overflow: ${prop => prop.overflow === 'true' ? 'hidden' : 'initial'};
    .lines{
      max-width: 1920px;
      padding: 0 80px;
      display: flex;
      position: absolute;
      left: 0;
      height: 100%;
      bottom: 0;
      z-index: 0;
      transition: all .5s ease-in-out;
      .MuiGrid-item{
        padding-top: 0;
      }
    }
    .line{
      top: 0;
    }
    ${media.large`
      padding: 0 40px
    `}
    ${media.medium`
      padding: 0 20px;
      .lines{
        display: none;
      }
    `};
  `;

const WrapperMb = styled.div`
  margin: 0 auto;
  padding: 0 80px;
  box-sizing: content-box;
  max-width: 1920px;
  height: 100%;
  position: relative;
  overflow: initial;
  .lines{
    max-width: 1920px;
    padding: 0 80px;
    display: flex;
    position: absolute;
    left: 0;
    height: 100%;
    bottom: 0;
    z-index: 0;
    transition: all .5s ease-in-out;
    .MuiGrid-item{
      padding-top: 0;
    }
  }
  .line{
    top: 0;
  }
  ${media.large`
    padding: 0 40px
  `}
  ${media.medium`
    padding: 0 20px;
    .lines{
      display: none;
    }
  `};
`;