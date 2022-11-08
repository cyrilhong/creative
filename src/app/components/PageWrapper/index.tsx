import React, { Children, useRef } from 'react';
import styled from 'styled-components/macro';
import { Grid, Container } from '@mui/material';
import * as colors from 'styles/colors';
import { media } from 'styles/media';
import Box from '@mui/material/Box';
export function PageWrapper(props) {
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
    /* color: ${props.color ? props.color : colors.AJABlue}; */
    ${media.large`
      padding: 0 80px
    `}
    ${media.medium`
      padding: 0 20px;
      .lines{
        display: none;
      }
    `};
  `;

  return (
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
  );
}
