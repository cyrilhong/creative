import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { StyleConstants } from 'styles/StyleConstants';
import { Nav } from './Nav';
import { PageWrapper } from '../PageWrapper';
import * as colors from '../../../styles/colors';
import { media } from 'styles/media';
export function NavBar({ blackBg = '', bgColor, color }) {
  const Language = styled.div`
    font-size: 14px;
    color: ${color};
    border-bottom: 1px solid ${color};
    flex: 0 1 120px;
    padding: 28px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 102px;
  `;
  const Wrapper = styled.header`
    height: ${StyleConstants.NAV_BAR_HEIGHT};
    display: flex;
    transition: all 0.5s ease-in;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${bgColor};
    z-index: 2;
    color: ${color};
    .logo{
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: flex;
    }
    ${media.medium`
      height: ${StyleConstants.NAV_BAR_MOBILE_HEIGHT};
      width: 100vw;
      .logo{
        width: 100%;
        display: block;
      }
      nav{
        display: none;
      }
      ${Language}{
        display: none;
      }
    `}
  `;

  const Item = styled.div`
    cursor: pointer;
    color: ${color};
    &.active {
      color: ${bgColor};
    }
  `;



  return (
    <Wrapper>
      <div className='logo'>
        {color}
        {bgColor}
        <Logo color={color} bgColor={bgColor} />
      </div>
      <Nav color={color} bgColor={bgColor} />
      {/* <Language className="eng">
        <Item>EN</Item>・<Item className="active">CN</Item>
      </Language> */}
    </Wrapper>
  );
}
