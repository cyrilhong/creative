import * as colors from 'styles/colors';
import styled from 'styled-components/macro';
import { media } from 'styles/media';

export default function WrappedButton({ link, isWhite, text }) {
const CTA = styled.a`
  width: auto;
  display: inline-flex;
  background: ${isWhite ? colors.BGGreen : colors.DarkBlue};
  border: 2px solid ${isWhite?colors.DarkBlue:colors.White};
  border-radius: 100px;
  padding: 16px ${isWhite?'32px':'48px'} 16px ${isWhite?'48px':'60px'};
  color: ${isWhite?colors.DarkBlue:colors.White};
  margin: 32px 0 0;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  path {
    transition: all 0.5s;
    stroke: ${isWhite?colors.DarkBlue:colors.White};
  }
  &:hover {
    color: ${isWhite?colors.White:colors.DarkBlue};
    path {
      stroke: ${isWhite?colors.White:colors.DarkBlue};
    }
  }
  &::before {
    -webkit-animation: move-out 0.3s;
    animation: move-out 0.3s;
    background: ${isWhite?colors.DarkBlue:colors.White};
    color: ${isWhite?colors.White:colors.DarkBlue};
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
  h4 {
    margin: 0;
    z-index: 1;
  }
  svg {
    margin-left: 4px;
    z-index: 1;
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
    /* width: 172px; */
    padding: 8px 16px 8px 32px;
  `}
`;
  return (
    <CTA href={link}>
      <h4 className="eng">{text}</h4>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.6963 20.031C25.8161 20.031 21.8397 16.0847 21.8397 11.1744"
          stroke="#0C1C24"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <path
          d="M21.8096 28.8264C21.8096 23.9463 25.7559 19.9698 30.6661 19.9698"
          stroke="#0C1C24"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <path
          d="M9.30701 20.0303H30.6952"
          stroke="#0C1C24"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
      </svg>
    </CTA>
  );
}

