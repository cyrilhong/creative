import * as colors from 'styles/colors';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
interface Props {
  link?: string,
  isWhite?: boolean,
  text?: string,
  iconRotate?: number,
  blank?: boolean
}

export default function WrappedButton<Props>({ link = "#", isWhite = true, text = "", iconRotate = 0, blank = false }) {
  const CTA = styled.a`
  width: auto;
  display: inline-flex;
  background: ${isWhite ? colors.BGGreen : colors.DarkBlue};
  border: 2px solid ${isWhite ? colors.DarkBlue : colors.White};
  border-radius: 100px;
  padding: 16px ${isWhite ? '32px' : '48px'} 16px ${isWhite ? '48px' : '60px'};
  color: ${isWhite ? colors.DarkBlue : colors.White};
  margin: 32px 0 0;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  /* pointer-events: none; */
  path {
    transition: all 0.5s;
    stroke: ${isWhite ? colors.DarkBlue : colors.White};
  }
  &:hover {
    color: ${isWhite ? colors.White : colors.DarkBlue};
    path {
      stroke: ${isWhite ? colors.White : colors.DarkBlue};
    }
    svg{
      transform: ${iconRotate ? '' : 'translateX(10px)'};
      transition: all .2s ease-in;
    }
  }
  &::before {
    -webkit-animation: move-out 0.3s;
    animation: move-out 0.3s;
    background: ${isWhite ? colors.DarkBlue : colors.White};
    color: ${isWhite ? colors.White : colors.DarkBlue};
    content: '';
    height: 100%;
    left: -100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
  &:hover:before {
    -webkit-animation: move-in 0.3s forwards;
    animation: move-in 0.3s forwards;
  }
  h4 {
    margin: 0;
    z-index: 1;
    letter-spacing: 0.15em;
  }
  svg {
    margin-left: 4px;
    z-index: 1;
    transform: rotate(${iconRotate}deg);
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
    padding: 8px 16px 8px 32px;
    &::before {
      display: none;
    }
  `}
`;
  return (
    <CTA
      href={link}
      target={blank ? "_blank" : "_self"}
    >
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

