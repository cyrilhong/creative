import React, { useState, useEffect, useRef, createRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import WrappedButton from 'app/components/WrappedButton'
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';
import RoundButton from 'app/components/RoundButton'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components/macro';
import * as colors from 'styles/colors';
import Yoxi from './assets/yoxi.jpg';
import arrow from './assets/button.svg';
import arrowBlack from './assets/arrow-black.svg';
import Fade from 'react-reveal/Fade';
import CaseStudy from './CaseStudy';
import Idea from './assets/idea.svg';
import { media } from 'styles/media';
import { Box } from '@mui/system';

const CaseSlider = [
  {
    title: '和泰移動派遣服務｜yoxi 美好出行體驗',
    content:
      '和泰集團作為 TOYOTA 台灣區總代理，2020 年在全球戰略指導與支持下，宣布加入移動事業，企圖打造全新的叫車服務首選品牌。',
    type: '交通與運輸',
    tag: ['UI / UX', 'WEBSITE', 'DESIGN SYSTEM'],
    link: '#',
    img: {
      src: Yoxi,
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
      src: Yoxi,
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
      src: Yoxi,
      alt: 'Yoxi',
    },
  },
];
export function CasePage() {
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
    setActiveSlide(index);
    carouselRef.current?.slickGoTo(index);
  };
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <div className="bg-case">
        <PageWrapper>
          <Masthead />
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
          <CaseStudy />
        </PageWrapper>
      </div>
      <SectionIdea>
        <div className="wrapper">
          <div className="content">
            <img className="idea" src={Idea} alt="idea" />
            <h1 className="eng">
              Serving 100+ top companies with diverse cross-field experience
            </h1>
            <h2>我們用心協助客戶創造價值，進而形塑共好的長期夥伴關係</h2>
            <Box display={"flex"} justifyContent="center">
              <WrappedButton
                text="OUR CLIENTS"
                link="#"
                isWhite={true}
              />
            </Box>
          </div>
        </div>
      </SectionIdea>
    </>
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

const Button = styled.a`
  background: initial;
  border: 0;
  padding: 0;
  display: flex;
  color: #fff;
  margin-top: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    margin-right: 24px;
  }
`;
const CTA = styled.a`
  width: 242px;
  background: initial;
  border: 1px solid ${colors.DarkBlue};
  border-radius: 100px;
  padding: 16px 32px;
  display: flex;
  color: ${colors.DarkBlue};
  margin: 32px auto 0;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  h4 {
    margin: 0;
  }
  img {
    margin-left: 4px;
  }
`;

const SectionIdea = styled.div`
  padding: 96px 0;
  display: flex;
  text-align: center;
  background-color: ${colors.White};
  .wrapper {
    margin: 0 auto;
    width: 100%;
    padding: 0 80px;
    a{
      background-color: ${colors.White};
    }
    .content {
      margin: 0 auto;
      max-width: 1760px;
      padding: 0 80px 30px;
      box-sizing: content-box;
      border-left: 1px solid ${colors.DarkBlue};
      border-right: 1px solid ${colors.DarkBlue};
      h1 {
        margin-top: 40px;
      }
    }
  }
  ${media.large`
    .content {
      padding: 0 60px
    }
  `}
  ${media.medium`
    padding: 48px 0;
    .wrapper{
      padding: 0 20px;
      .content {
        padding: 0 20px;
        .idea{
          width: 160px;
        }
        h1{
          margin: 24px 0 8px;
        }
        h2{
          margin: 0;
        }
      }
    }
  `};
`;
