
import styled from 'styled-components/macro';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { media } from 'styles/media';
import brickImg from './assets/brick-img.jpg'
import { height } from '@mui/system';
export default function ParallaxImg({ img = "", alt = "", height = 0 }) {
  const Img = styled.div`
    overflow: hidden;
    /* margin: 0 -80px; */
    max-height: ${height+'px'};
    img {
      width: 100%;
      object-fit: cover;
    }
    ${media.medium`
      margin: 0 -20px;
    `}
  `;
  return (
    <ParallaxProvider>
      <Img>
        <Parallax speed={-16}>
          <img src={img} alt={alt} />
        </Parallax>
      </Img>
    </ParallaxProvider>
  );
}

