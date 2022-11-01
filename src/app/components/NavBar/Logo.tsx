import React, { useState } from 'react';
import styled from 'styled-components/macro';
import aja from './assets/aja-logo.svg';
import ajaWhite from './assets/aja-logo-white.svg';
import { media } from 'styles/media';
import * as colors from '../../../styles/colors';
import burger from './assets/burger.svg'
import { Link } from 'app/components/Link';
export function Logo(blackBg) {
  const [open, setOpen] = useState(false)
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    .main{
      display: flex;
      align-items: center;
      a{
        display: flex;
      }
    }
    .language{
      display: flex;
      justify-content: center;
    }
    ${media.medium`
      border-right: 0;
      padding: 0;
      min-height: 60px;
      border-bottom: 0;
      .burger{
        display: block;
        img{
          filter: ${blackBg.isBlack ? 'brightness(1)' : 'brightness(0)'};
        }
      }
      a{
        img{
          width: 64px;
        }
      }
      .main{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px 12px 10px;
        height: 60px;
        border-bottom: 1px solid ${blackBg.isBlack ? colors.White : colors.AJABlue};
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

  const Content = styled.ul<{
    open: boolean;
  }>`
    transition: all .5s ease-in-out;
    padding: 48px 16px;
    margin: 0;
    height: ${prop => prop.open ? '423px' : '0'};
    opacity: ${prop => prop.open ? '1' : '0'};
    display:${prop => prop.open ? 'block' : 'none'};
    list-style: none;
    width: 100%;
    background-color:  ${blackBg.isBlack ? colors.DarkBlue : colors.BGGreen};
    text-align: center;
    font-weight: 400;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 20%);
    li{
      margin-bottom: 24px;
    }
    .language{
      margin-top: 42px;
    }
    a{
      color: inherit;
      &:hover{
        text-decoration: none;
      }
    }
  `

  const Item = styled.div`
    cursor: pointer;
    color: ${blackBg.isBlack ? colors.ConcreteGrey : colors.ConcreteGrey};
    &.active {
      color: ${blackBg.isBlack ? colors.BGGreen : colors.AJABlue};
    }
  `;

  return (
    <Wrapper>
      <div className='main'>
        <a href="/"><img src={blackBg.isBlack ? ajaWhite : aja} alt="AJA" /></a>
        <Title className="eng">
          AJA Creative, innovative
          <br /> practitioners in Experience design.{' '}
        </Title>
        <div className="burger" onClick={() => setOpen(!open)}>
          <img src={burger} alt="burger" />
        </div>
      </div>
      <Content open={open}>
        <li>
          <Link to="/case">專案實例</Link>
        </li>
        <li>
          <Link to="/service">設計服務與流程</Link>
        </li>
        <li>
          <Link to="/about-us">關於我們</Link>
        </li>
        <li>
          <Link to="/customer">客戶群</Link>
        </li>
        <li>
          <Link to="/join-us">加入我們</Link>
        </li>
        <li>
          <Link to="/contact">聯絡我們</Link>
        </li>
        <div className="language">
          <Item>EN</Item>・<Item className="active">CN</Item>
        </div>
      </Content>
    </Wrapper>
  );
}
