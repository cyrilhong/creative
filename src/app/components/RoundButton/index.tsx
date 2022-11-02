import React, { useRef } from 'react';
import * as colors from 'styles/colors';
import styled from 'styled-components/macro';
import { media } from 'styles/media';

export default function RoundButton({ link, isWhite, text }) {
  const Button = styled.a`
  background: initial;
  border: 0;
  padding: 0;
  display: flex;
  color: ${isWhite ? colors.White : colors.DarkBlue};
  margin-top: 32px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  svg {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .wrapper {
    border: 2px solid ${isWhite ? colors.White : colors.DarkBlue};
    margin-right: 24px;
    display: flex;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in;
    path {
      transition: all 0.5s;
      stroke: ${isWhite ? colors.White : colors.DarkBlue};
    }
    &:hover {
      color: ${isWhite ? colors.DarkBlue : colors.White};
      path {
        stroke: ${isWhite ? colors.DarkBlue : colors.White};
      }
    }
    &::before {
      -webkit-animation: move-out 0.3s;
      animation: move-out 0.3s;
      background: ${isWhite ? colors.White : colors.DarkBlue};
      color: ${isWhite ? colors.DarkBlue : colors.White};
      content: '';
      height: 100%;
      left: -100%;
      position: absolute;
      top: 0;
      width: 100%;
      will-change: transform;
    }
    &:hover:before {
      -webkit-animation: move-in 0.3s forwards;
      animation: move-in 0.3s forwards;
    }
    h4{
      font-weight: 500;
    }
  }
  @keyframes move-in {
    0% {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
  @keyframes move-out {
    0% {
      transform: translateX(100%);
    }
    to {
      transform: translateX(200%);
    }
  }
  ${media.medium`
    .wrapper{
      margin-right: 12px;
      width: 40px;
      height: 40px;
    }
  `}
`;

  return (
    <Button href={link}>
      <div className="wrapper">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.6963 20.031C25.8161 20.031 21.8397 16.0847 21.8397 11.1744"
            stroke="#fff"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M21.8096 28.8264C21.8096 23.9463 25.7559 19.9698 30.6661 19.9698"
            stroke="#fff"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M9.30701 20.0303H30.6952"
            stroke="#fff"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
      <h4 className="eng">{text}</h4>
    </Button>
  );
}

