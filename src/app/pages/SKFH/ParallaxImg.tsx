
import styled from 'styled-components/macro';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { media } from 'styles/media';
import { useWindowSize } from '../../hooks'
export default function ParallaxImg({ img = "", alt = "", height = 0 }) {
  const windowWidth = useWindowSize().width
  const Img = styled.div`
    overflow: hidden;
    /* margin: 0 -80px; */
    max-height: ${height + 'px'};
    img {
      width: 100%;
      object-fit: cover;
    }
    ${media.medium`
      margin: 0 auto;
      overflow: hidden;
      width: 100%;
      img{
        width: 100%;
        object-position: left top;
        margin-top: -40px;
      }
    `}
  `;
  return (
    <ParallaxProvider>
      <Img>
        <Parallax
          speed={windowWidth > 960 ? -16 : -8}
          rootMargin={{ top: windowWidth > 1439 ? -600 : 100, right: 0, bottom: 500, left: 0 }}
        >
          <img src={img} alt={alt} />
        </Parallax>
      </Img>
    </ParallaxProvider>
  );
}

