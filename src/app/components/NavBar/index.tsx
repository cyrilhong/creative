import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { StyleConstants } from 'styles/StyleConstants';
import { Nav } from './Nav';
import { PageWrapper } from '../PageWrapper';
import * as colors from '../../../styles/colors';
import { useNavigate } from 'react-router-dom';
export function NavBar(blackBg) {
  const navigate = useNavigate();
  const Wrapper = styled.header`
    height: ${StyleConstants.NAV_BAR_HEIGHT};
    display: flex;
    transition: all 0.5s ease-in;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${blackBg.theme ? colors.DarkBlue : colors.BGGreen};
    z-index: 2;
    color: ${blackBg.theme ? colors.DarkBlue : colors.BGGreen};
    a{
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: flex;
    }
  `;

  const Item = styled.div`
    cursor: pointer;
    color: ${blackBg.theme ? colors.ConcreteGrey : colors.ConcreteGrey};
    &.active {
      color: ${blackBg.theme ? colors.BGGreen : colors.AJABlue};
    }
  `;

  const Language = styled.div`
    font-size: 14px;
    color: ${blackBg.theme ? colors.BGGreen : colors.AJABlue};
    border-bottom: 1px solid ${blackBg.theme ? colors.BGGreen : colors.AJABlue};
    flex: 0 1 120px;
    padding: 28px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 102px;
  `;

  return (
    <Wrapper>
      <a href="/">
        <Logo isBlack={blackBg.theme} />
      </a>
      <Nav isBlack={blackBg.theme} />
      <Language className="eng">
        <Item>EN</Item>・<Item className="active">CN</Item>
      </Language>
    </Wrapper>
  );
}
