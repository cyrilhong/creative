import React, { useState } from 'react';
import * as colors from 'styles/colors';
import styled from 'styled-components/macro';
import RoundButton from 'app/components/RoundButton'
import { media } from 'styles/media';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yoxi from './assets/yoxi.jpg';

const CaseSlider = [
  {
    title: '和泰移動派遣服務｜yoxi 美好出行體驗',
    content:
      '和泰集團作為 TOYOTA 台灣區總代理，2020 年在全球戰略指導與支持下，宣布加入移動事業，企圖打造全新的叫車服務首選品牌。',
    type: '交通與運輸',
    tag: ['UI / UX', 'WEBSITE', 'DESIGN SYSTEM'],
    link: '#',
    img: {
      src: yoxi,
      alt: 'Yoxi',
    },
  },
  {
    title: '2和泰移動派遣服務｜yoxi 美好出行體驗',
    content:
      '和泰集團作為 TOYOTA 台灣區總代理，2020 年在全球戰略指導與支持下，宣布加入移動事業，企圖打造全新的叫車服務首選品牌。',
    type: '交通與運輸',
    tag: ['a', 'b', 'c'],
    link: '#',
    img: {
      src: yoxi,
      alt: 'Yoxi',
    },
  },
  {
    title: '3和泰移動派遣服務｜yoxi 美好出行體驗',
    content:
      '和泰集團作為 TOYOTA 台灣區總代理，2020 年在全球戰略指導與支持下，宣布加入移動事業，企圖打造全新的叫車服務首選品牌。',
    type: '交通與運輸',
    tag: ['UI / UX', 'WEBSITE', 'DESIGN SYSTEM'],
    link: '#',
    img: {
      src: yoxi,
      alt: 'Yoxi',
    },
  },
];

export default function Case() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = React.useRef<Slider>(null);
  const sliderRef = React.createRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: activeSlide,
    afterChange: e => {
      // if (!sliderRef.current) return;
      Slider.current?.slickGoTo(e);
      setActiveSlide(e);
    },
  };

  const gotoSlick = index => {
    console.log(carouselRef.current);
    // setActiveSlide(index);
    carouselRef.current?.slickGoTo(index);
  };
  return (
    <Cases>
      <div className="left">
        <div className="case-info">
          <div className="pills">
            {CaseSlider[activeSlide].tag.map(item => {
              return (
                <div key={item} className="pill eng">
                  {item}
                </div>
              );
            })}
          </div>
          <h4 className="subtitle">{CaseSlider[activeSlide].type}</h4>
          <h2 className="title">{CaseSlider[activeSlide].title}</h2>
          <h4 className="content">{CaseSlider[activeSlide].content}</h4>
          <RoundButton
            link={CaseSlider[activeSlide].link}
            isWhite={true}
            text="CASE STUDY"
          />
          <div className="dots">
            {CaseSlider.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`dot ${activeSlide === index && 'active'}`}
                  onClick={() => gotoSlick(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="right">
        <Slider {...settings} ref={carouselRef}>
          {CaseSlider.map(item => {
            return (
              <SlideItem key={item.title}>
                <img src={item.img.src} alt={item.img.alt} />
              </SlideItem>
            );
          })}
        </Slider>
      </div>
    </Cases>
  );
}

const Cases = styled.div`
  background-color: ${colors.DarkBlue};
  color: ${colors.White};
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-bottom: 44px;
  position: relative;
  z-index: 1;
  &::before{
    content: '';
    height: 100%;
    background-color: ${colors.DarkBlue};
    width: 500px;
    right: -10%;
    position: absolute;
    z-index: 0;
  }
  .left {
    flex: 1 1 100%;
    padding: 48px 0 100px 60px;
    .pills {
      margin-bottom: 32px;
      .pill {
        margin-right: 12px;
        border-radius: 100px;
        background-color: #2e3c42;
        color: ${colors.White};
        display: inline-block;
        padding: 7px 16px;
        font-size: 12px;
        font-weight: 300;
        color: #979ea0;
      }
    }
    h4 {
      margin-bottom: 8px;
      margin-top: 0;
    }
    h2 {
      margin-bottom: 16px;
    }
    .content {
      margin-bottom: 32px;
      max-width: 450px;
    }
    .dots {
      display: flex;
      flex-direction: row;
      margin-top: 48px;
      cursor: pointer;
      .dot {
        opacity: 0.5;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #fff;
        margin-right: 8px;
      }
      .active {
        opacity: 1;
      }
    }
  }
  .right {
    flex: 1 1 100%;
    max-width: 620px;
    margin-top: -60px;
    margin-right: 0;
    max-width: 50%;
  }
  ${media.medium`
    flex-direction: column;
    gap: 24px;
    padding-bottom: 40px;
    &::before{
      width: 100vw;
      left: -20px;
    }
    .left{
     order: 2;
     padding: 0;
     z-index: 1;
     .title{
        margin: 8px 0;
      }
      .dots{
        margin-top: 40px
      }
    }
    .right{
      margin-top: -56px;
      max-width: 100%;
    }
    .pills {
      margin-bottom: 24px;
    }
  `}
`;

const SlideItem = styled.div`
  img {
    width: 100%;
  }
`;
