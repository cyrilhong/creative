import React, { Component } from 'react'
import styled from 'styled-components'
import { media } from 'styles/media';
import { PageWrapper } from 'app/components/PageWrapper';
import Grid from '@mui/material/Unstable_Grid2';
import Fade from 'react-reveal/Fade';
import * as color from 'styles/colors';
import experienceImg from './assets/experience.jpg'
import WrappedButton from 'app/components/WrappedButton'
export default class Experience extends Component {
  render() {
    return (
      <Wrapper>
        <PageWrapper overflow={"true"} className="page-container">
          <Horizon blackBg>
            <div className="title">
              <div className="dot" />
              <h4 className="eng">Experience</h4>
            </div>
          </Horizon>
          <Grid container className="container">
            <Grid xs={12} md={8} mdOffset={2}>
              <Fade bottom>
                <h1>
                  連線財富，把有錢變簡單，需要理財神隊友！
                </h1>
                吸睛視覺協助聚焦與快速理解服務優勢，延續品牌印象，引導用戶與財富連線
              </Fade>
            </Grid>
          </Grid>
        </PageWrapper>
        {/* <img src={guidelineImg} alt="guidelineImg" /> */}
        <img src={experienceImg} alt="experienceImg" />
        <div className="gotoLineBank">
          <h1>前往 LINE Bank 理財網</h1>
          <WrappedButton
            link={"https://www.linebank.com.tw/wealth-investment"}
            isWhite={true}
            text="VISIT WEBSITE"
          />
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: ${color.BGGreen};
  .container{
    text-align: center;
    h1{
      font-weight: 300;
    }
  }
  img{
    padding-top: 144px;
    width: 100%;
  }
  .gotoLineBank{
    padding: 162px 0 200px;
    text-align: center;
    h1{
      font-size: 28px;
      font-weight: 300;
      line-height: 35px;
      text-align: center;
      margin: 0 0 8px;
    }
  }
  ${media.medium`
    .container{
      text-align: left;
      font-size: 14px;
      h1{
        font-size: 24px;
        line-height: 36px;
        margin: 0 0 24px;
      }
    }
    a{
      margin-top: 6px;
    }
    img{
      padding: 44px 0 0;
    }
    .gotoLineBank{
        padding: 64px 0 80px;
        h1{
          font-size: 14px;
        }
      }
  `}
`
const Horizon = styled.div<{
  blackBg?: boolean;
}>`
    display: flex;
    justify-content: space-between;
    padding: 120px 0 120px;
    color: ${prop => (!prop.blackBg ? color.White : color.DarkBlue)};
    &::after {
      content: '';
      width: 100%;
      display: block;
      border-top: 1px solid
        ${prop => (!prop.blackBg ? color.White : color.DarkBlue)};
      position: absolute;
    }
    h4 {
      margin: 20px 0 0;
      font-weight: 300;
    }
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 20px 0 0;
      .dot {
        width: 16px;
        height: 16px;
        margin-bottom: 2px;
        border-radius: 100%;
        background-color: ${prop =>
    !prop.blackBg ? color.BGGrey : color.DarkBlue};
        margin-right: 8px;
      }
      h4 {
        margin: 0;
        letter-spacing: 0.1rem;
      }
    }
    ${media.medium`
      padding: 32px 0 72px;
    `}
  `;
