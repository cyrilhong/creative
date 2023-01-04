import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import hero1 from './assets/hero-1.jpg'
import hero2 from './assets/hero-2.jpg'
import arrowLeft from './assets/arrow-left.svg';
import arrowRight from './assets/arrow-right.svg';
import arrowHollow from './assets/arrow-hollow-left.svg';
import arrowHollowRight from './assets/arrow-hollow-right.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export function HeroSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        // centerMode: true,
        centerPadding: '80px',
        initialSlide: 0,
        afterChange: e => {
          Slider.current?.slickGoTo(e);
          // console.log(e);
          setActiveSlide(e);
        },
      };
      const carouselRef = React.useRef<Slider>(null);
      const CaseSlider = [
        hero1, hero2
      ]
    return (
        <Wrapper>
            <Pagination>
                {activeSlide + 1} / {CaseSlider.length}
            </Pagination>
            <PageController>
                <button
                    onClick={() => {
                        // console.log(carouselRef.current);
                        carouselRef.current?.slickPrev();
                    }}
                >
                    <img src={arrowLeft} alt="left" />
                </button>
                <button
                    onClick={() => {
                        // console.log(carouselRef.current);
                        carouselRef.current?.slickNext();
                    }}
                >
                    <img src={arrowRight} alt="right" />
                </button>
            </PageController>
            <Slider {...settings} ref={carouselRef}>
                {CaseSlider.map((item, index) => {
                    return (
                        <SlideItem key={index}>
                            <img src={item} alt={index.toString()} />
                            {/* <h1>{index}</h1> */}
                        </SlideItem>
                    );
                })}
            </Slider>
        </Wrapper>
    );
}

const PageController = styled.div`
  position: absolute;
  top: 0%;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 0 48px;
  display: flex;
  gap: 24px;
  z-index: 11;
  button{
    cursor: pointer;
    border: 0;
    background: none;
    margin: 0;
    padding: 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  margin: 0 -80px;
  .slick-arrow{
    z-index: 10;
    opacity: 0;
  }
  .slick-slider{
    max-height: 600px;
  }
  .slick-dots.slick-thumb{
    margin-top: 48px;
  }
  .slick-prev{
    display: none!important;
    /* display: block; */
    position: absolute;
    width: 50vw;
    height: 100%;
    left: 0;
    cursor: url(${arrowHollow}), auto;
  }
  .slick-next{
    /* display: block; */
    display: none!important;
    position: absolute;
    width: 50vw;
    height: 100%;
    right: 0;
    cursor: url(${arrowHollowRight}), auto;
  }
  ${media.large`
    margin: 0 -40px;
  `}
`

const Pagination = styled.div`
  font-size: 72px;
  font-weight: 500;
  position: absolute;
  right: 80px;
  top: 40px;
  z-index: 10;
  color: #0C1C24;
  font-family: 'Poppins';
`

const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  img {
    max-height: 600px;
    width: 100%;
    object-fit: cover;
  }
  p {
    font-size: 20px;
    margin: 48px 0;
    height: 120px;
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }
  ${media.large`
    p{
      height: auto;
    }
  `}
  ${media.medium`
    p{
      margin: 32px 0;
      font-size: 16px;
    }
  `}
`;