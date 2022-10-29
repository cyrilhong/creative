import * as React from 'react';
import styled from 'styled-components/macro';
import aja from './assets/aja-logo.svg';
import ajaWhite from './assets/aja-logo-white.svg';
import { media } from 'styles/media';
import * as colors from '../../../styles/colors';
import burger from './assets/burger.svg'
export function Logo(blackBg) {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px solid ${blackBg.isBlack ? colors.White : colors.AJABlue};
    border-bottom: 1px solid ${blackBg.isBlack ? colors.White : colors.AJABlue};
    padding: 24px;
    flex-basis: 410px;
    color: ${blackBg.isBlack ? '#fff' : 'black'};
    img {
      /* margin-left: 24px; */
    }
    .burger{
      position: absolute;
      right: 10px;
      display: none;
    }
    ${media.medium`
      border-right: 0;
      padding: 16px;
      height: 60px;
      .burger{
        display: block;
      }
      a{
        img{
          width: 64px;
        }
      }
    `};
  `;
  const Title = styled.div`
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 5%;
    color: ${blackBg.isBlack ? colors.White : colors.AJABlue};
    font-weight: normal;
    margin-left: 16px;
    width: 240px;
    letter-spacing: 1px;
    ${media.large`
      font-size: 10px;
      width: 206px;
    `}
    ${media.medium`
      font-size: 10px;
      width: 100%;
    `};
  `;

  return (
    <Wrapper>
      <a href="/"><img src={blackBg.isBlack ? ajaWhite : aja} alt="AJA" /></a>
      <Title className="eng">
        AJA Creative, innovative
        <br /> practitioners in Experience design.{' '}
      </Title>
      <div className="burger">
        <img src={burger} alt="burger" />
      </div>
    </Wrapper>
  );
}
