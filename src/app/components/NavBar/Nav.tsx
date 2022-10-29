import * as React from 'react';
import styled from 'styled-components/macro';
import * as colors from '../../../styles/colors';
import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';

export function Nav({ isBlack }) {
  const Wrapper = styled.nav`
    display: flex;
    gap: 48px;
    padding: 28px 52px;
    /* margin-right: -1rem; */
    border-right: 1px solid ${isBlack ? colors.White : colors.AJABlue};
    border-bottom: 1px solid ${isBlack ? colors.White : colors.AJABlue};
    flex: 1 1 auto;
  `;

  const Item = styled.a`
    color: ${isBlack ? colors.White : colors.AJABlue};
    cursor: pointer;
    text-decoration: none;
    display: flex;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: normal;
    align-items: center;
    line-height: 24px;

    &.hover,
    .hover *,
    .hover :after,
    .hover :before,
    .hover:after,
    .hover:before {
      border: 0 solid;
      box-sizing: border-box;
    }
    &.hover {
      -webkit-tap-highlight-color: transparent;
      -webkit-appearance: button;
      background-color: #000;
      background-image: none;
      color: ${isBlack ?colors.White:colors.AJABlue};
      cursor: pointer;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
      font-size: 100%;
      line-height: 1.5;
      margin: 0;
      -webkit-mask-image: -webkit-radial-gradient(#000, ${colors.AJABlue});
      padding: 0;
    }
    &.hover:disabled {
      cursor: default;
    }
    &.hover:-moz-focusring {
      outline: auto;
    }
    &.hover svg {
      display: block;
      vertical-align: middle;
    }
    &.hover [hidden] {
      display: none;
    }
    &.hover {
      --thickness: 2px;
      background: none;
      box-sizing: border-box;
      -webkit-clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% + var(--thickness)),
        0 calc(100% + var(--thickness))
      );
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% + var(--thickness)),
        0 calc(100% + var(--thickness))
      );
      display: block;
      /* font-weight: 900; */
      -webkit-mask-image: none;
      padding: 2px 0;
      position: relative;
      text-transform: uppercase;
    }
    &.hover:before {
      background: ${colors.AJABlue};
      bottom: calc(var(--thickness) * -1);
      content: '';
      display: block;
      opacity: 0;
      height: var(--thickness);
      left: 0;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }
    &.hover:hover:before {
      -webkit-animation: slide 0.5s ease;
      animation: slide 0.5s ease;
      opacity: 1;
    }
    @-webkit-keyframes slide {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(100%);
      }
      51% {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(100%);
      }
      51% {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
  `;

  return (
    <Wrapper>
      <Item className="hover" href="/case" title="專案實例" rel="專案實例">
        專案實例
      </Item>
      <Item
        className="hover"
        href="/service"
        title="設計服務與流程"
        rel="設計服務與流程"
      >
        設計服務與流程
      </Item>
      <Item className="hover" href="/about-us" title="關於我們" rel="關於我們">
        關於我們
      </Item>
      <Item className="hover" href="/customer" title="客戶群" rel="客戶群">
        客戶群
      </Item>
      <Item className="hover" href="/join-us" title="加入我們" rel="加入我們">
        加入我們
      </Item>
      <Item className="hover" href="/contact" title="聯絡我們" rel="聯絡我們">
        聯絡我們
      </Item>
    </Wrapper>
  );
}
