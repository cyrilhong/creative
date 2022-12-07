import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
import { media } from './media';
import * as colors from './colors';
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  #root{
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
  }

  body {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 300;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    color: ${colors.DarkBlue};
    background-color: ${colors.BGGrey};
    ${media.medium`
      padding-top: ${StyleConstants.NAV_BAR_MOBILE_HEIGHT};
    `}
  }

  body.fontLoaded {
    font-family: 'Noto Sans TC', sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .eng{
    font-family: 'Poppins';
    font-weight: 500;
  }

  .super{
    font-size: 150px;
    line-height: 188px;
    font-weight: 500;
    font-family: 'Poppins';
    ${media.medium`
      font-size: 48px;
      line-height: 60px;
    `};
  }
  .huge{
    font-size: 72px;
    line-height: 90px;
    font-family: 'Poppins';
    font-weight: 500;
    ${media.medium`
        font-size: 32px;
        line-height: 40px;
    `};
  }
  h1{
    font-size: 36px;
    line-height: 54px;
    font-weight: 300;
    letter-spacing: .02em;
    ${media.medium`
        font-size: 24px;
        line-height: 36px;
    `};
  }
  h2{
    font-size: 28px;
    line-height: 35px;
    font-weight: 300;
    ${media.medium`
        font-size: 22px;
        line-height: 33px;
    `};
  }
  h3{
    font-size: 20px;
    line-height: 30px;
    font-weight: 300;
    &.eng{
      letter-spacing: 0.05em;
    }
    ${media.medium`
        font-size: 16px;
        line-height: 24px;
    `};
  }
  h4{
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    &.eng{
      letter-spacing: 0.05em;
    }
    ${media.medium`
        font-size: 14px;
        line-height: 24px;
    `};
  }
  h5{
    font-size: 14px;
    line-height: 21px;
    font-weight: 300;
    &.eng{
      letter-spacing: 0.05em;
    }
  }
  caption{
    font-size: 12px;
    line-height: 18px;
    ${media.medium`
        font-size: 10px;
        line-height: 15px;
    `};
  }


  .black{
    background-color: ${colors.DarkBlue};
    color: ${colors.White};
    transition: all .25s ease-in;
    overflow: hidden;
    .lines {
      .line {
        border-right: 1px solid #f3f3eb0d;
      }
    }
  }
  .white{
    background-color: ${colors.BGGreen};
    color: ${colors.AJABlue};
    transition: all .25s ease-in;
    overflow: hidden;
    .lines {
      .line {
        border-right: 1px solid rgba(12,28,36,.03);
      }
    }
  }
  .bg-case{
    background-color: ${colors.BGGrey};
    color: ${colors.AJABlue};
    transition: all .5s ease-in;
    .lines {
      .line {
        border-right: 1px solid rgba(12,28,36,.03);
      }
    }
  }
  .bg-service{
    background-color: ${colors.BGGreen};
    color: ${colors.DarkBlue};
    transition: all .5s ease-in;
    .lines {
      .line {
        border-right: 1px solid rgba(12,28,36,.03);
      }
    }
  }
  .bg-customer{
    background-color: ${colors.BGPink};
    color: ${colors.DarkBlue};
    transition: all .5s ease-in;
    .lines {
      .line {
        border-right: 1px solid rgba(12,28,36,.03);
      }
    }
  }
  .bg-about-us{
    background-color: ${colors.BGIvory};
    color: ${colors.DarkBlue};
    transition: all .5s ease-in;
    .lines {
      .line {
        border-right: 1px solid rgba(12,28,36,.03);
      }
    }
  }
  .bg-FAQ{
    background-color: ${colors.White};
    color: ${colors.DarkBlue};
    transition: all .5s ease-in;
    .lines {
      .line {
        border-right: 1px solid rgba(12,28,36,.03);
      }
    }
  }
  .bg-join-us{
    background-color: ${colors.BGPeach};
    color: ${colors.DarkBlue};
    transition: all .5s ease-in;
    overflow: hidden;
    .lines {
      .line {
        border-right: 1px solid rgba(12,28,36,.03);
      }
    }
  }
  .bg-contact-us{
    background-color: ${colors.BGMidGrey};
    color: ${colors.DarkBlue};
    transition: all .5s ease-in;
    .lines {
      .line {
        border-right: 1px solid rgba(12,28,36,.03);
      }
    }
  }
  .service-second-section{
    background-color: ${colors.BGBeige};
    color: ${colors.DarkBlue};
    transition: all .5s ease-in;
    .lines {
      .line {
        border-right: 1px solid rgba(12,28,36,.03);
      }
    }
  }
  .leadership-team{
    .bg-about-us{
      .line{
        border-width: 0;
      }
    }
    .black{
      .line{
        border-width: 0;
      }
    }
  }
  .MuiContainer-root{
    padding: 0 80px!important;
    max-width: 1920px!important;
  }
  .MuiPaper-root{
    width: 100%;
    height: 100%;
    margin: 75px 0 0;
  }
  ${media.medium`
    .MuiContainer-root{
      padding: 0 20px!important;
    }
  `}
  .MuiPaper-root .MuiDialogTitle-root{
    height: 44px;
    padding: 0;
    width: 100%;
    justify-content: end;
    display: flex;
    border-bottom: 1px solid #EDEFED;
    position: fixed;
    z-index: 10;
    background: ${colors.White};
    border-radius: 10px 10px 0 0;
    margin-top: -44px;
    button{
      width: 43px;
    }
  }
  .MuiPaper-root.MuiDialog-paper{
    top: 16px;
    margin: 44px 0 0;
    border-radius: 16px 16px 0 0;
    max-height: calc(100% - 76px);
    border-radius: 0 0 16px 16px;
  }
`;

