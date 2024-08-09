import React, { useState } from 'react'
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { useWindowSize, isDesktop } from '../../hooks'
import { PageWrapper } from 'app/components/PageWrapper';
import * as color from 'styles/colors';
import Grid from '@mui/material/Unstable_Grid2';
import homeFund from './assets/home-fund.json'
import homeMarket from './assets/home-market.json'
import homeExchange from './assets/home-exchange.json'
import { Box } from '@mui/system';
import Lottie from 'lottie-react';
import Fade from 'react-reveal/Fade';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Connect() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = React.useRef<Slider>(null);
  const sliderRef = React.createRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
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
    <Wrapper>
      <PageWrapper overflow={"true"} className="page-container">
        <Fade cascade delay={300}>
          <h1 className='eng'>Connect with LINE Bank</h1>
          <h2>與 LINE Bank 理財神隊友「連線」引導用戶一起變有錢</h2>
          <p>
            運用與品牌高度連結的溝通主軸-連線，傳遞服務亮點、投資情報<br />
            帶動用戶加入連線銀行一起理財!
          </p>
        </Fade>

        {isDesktop() ? <Controller>
          <Scene
            // indicators={true}
            duration="50%"
            triggerHook="onEnter"
          >
            <Timeline >
              <Grid className="container" container spacing={8}>
                <Grid xs={0} md={4}>
                  <Tween
                    position="0"
                    from={{
                      xPercent: 100,
                    }}
                    to={{
                      xPercent: 0,
                    }}
                    duration={1}
                  >
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

                      <Lottie animationData={homeFund} loop={true} />
                      <div className="content">
                        基金全面 0 手續費
                      </div>
                    </Box>
                  </Tween>
                </Grid>
                <Grid xs={0} md={4}>
                  <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Lottie animationData={homeMarket} loop={true} />
                    <div className="content">
                      證券券商任你選
                    </div>
                  </Box>
                </Grid>
                <Grid xs={0} md={4}>
                  <Tween
                    position="0"
                    from={{
                      xPercent: -100,
                    }}
                    to={{
                      xPercent: 0,
                    }}
                  >
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

                      <Lottie animationData={homeExchange} loop={true} />
                      <div className="content">
                        外匯優利輕鬆換
                      </div>
                    </Box>
                  </Tween>
                </Grid>
              </Grid>
            </Timeline>
          </Scene>
        </Controller>
          :
          <Slider {...settings} ref={carouselRef}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

              <Lottie animationData={homeFund} loop={true} />
              <div className="content">
                基金全面 0 手續費
              </div>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Lottie animationData={homeMarket} loop={true} />
              <div className="content">
                證券券商任你選
              </div>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

              <Lottie animationData={homeExchange} loop={true} />
              <div className="content">
                外匯優利輕鬆換
              </div>
            </Box>
          </Slider>
        }
      </PageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #0D0D0D;
  color: ${color.White};
  overflow: hidden;
  padding: 90px 0 100px;
  h1{
    margin: 0;
    font-size: 72px;
    text-align: center;
  }
  h2{
    font-size: 36px;
    font-weight: 300;
    text-align: center;
    margin: 56px 0 36px;
  }
  p{
    font-size: 20px;
    text-align: center;
    margin: 0 0 110px;
  }
  .container{
    img{
      width: 100%;
    }
  }
  .content{
    font-size: 28px;
    text-align: center;
    font-weight: 600;
    margin-top: 28px;
  }
  ${media.medium`
    padding: 60px 0 100px;
    .page-container{
      padding: 0;
    }
    h1{
      font-size: 32px;
      line-height: 40px;
      margin: 0 auto;
      max-width: 200px;
    }
    h2{
      font-size: 24px;
      line-height: 36px;
      margin: 20px 20px;
    }
    p{
      font-size: 14px;
      line-height: 21px;
      margin: 0 20px;

    }
    .content{
      font-size: 22px;
      font-weight: 300;
    }
    .slick-dots{
      display: flex;
      bottom: 42px;
      li{
        height: 4px;
        width: 10px;
        border-radius: 8px;
        display: inline-block;
        background-color: #E7E9F1;
        margin: 0 4px 0 0;
        transition: all .2s ease-in;
      }
      .slick-active{
        background-color: #00B8C5;
        width: 22px;
      }
    }
  `}
`
