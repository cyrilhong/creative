
import styled from 'styled-components/macro';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { media } from 'styles/media';
import { useWindowSize } from '../../hooks'
export default function ParallaxImg({ img = "", alt = "", height = 0 }) {
  const windowWidth = useWindowSize().width
  const Img = styled.div`
    background: rgb(250,250,250);
    background: linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(239,239,239,1) 100%);
    overflow: hidden;
    /* margin: 0 -80px; */
    max-height: ${height + 'px'};
    z-index: 1;
    position: relative;
    overflow: visible;
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
        margin-top: 0px;
      }
    `}
  `;
  return (
    <ParallaxProvider>
      <Img>
        <Parallax
          speed={windowWidth > 959 ? 30 : 8}
          easing="easeIn"
          rootMargin={{ top: windowWidth > 959 ? 600 : 1200, right: 0, bottom: windowWidth > 959 ? 120 : 600, left: 0 }}
        >
          <img src={img} alt={alt} />
        </Parallax>
      </Img>
    </ParallaxProvider>
  );
}

