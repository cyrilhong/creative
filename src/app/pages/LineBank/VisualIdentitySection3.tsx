import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import * as color from 'styles/colors';
import CountUp from 'react-countup';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useWindowSize, isDesktop } from '../../hooks'
import { PageWrapper } from 'app/components/PageWrapper';
import Performance from './Performance'
import StickyTemplate from './StickyTemplate'
import * as colors from 'styles/colors';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import Column05 from './assets/column-img-05.jpg'
import Column06 from './assets/column-img-06.jpg'
export default function VisualIdentity() {
  const ref = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);
  const [bottomSticky, setBottomSticky] = useState(false);
  const windowWidth = useWindowSize().width
  useScrollPosition(({ prevPos, currPos }) => {
    if (
      positionRef.current!?.getBoundingClientRect().top < 120 && windowWidth > 960
    ) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  function Mark(props) {
    const { ref } = useParallax<HTMLDivElement>({
      scaleX: [0, 1],
      rootMargin: { top: 0, right: 0, bottom: -600, left: 0 },
    });
    const color = props.color ? props.color : colors.ElectricBlue;
    return (
      <span style={{ height: windowWidth > 960 ? 'auto' : '24px', display: windowWidth > 960 ? 'inline-block' : 'inline-block' }}>
        <div style={{ zIndex: 1, position: 'relative' }}>{props.children}</div>
        <span
          style={{
            position: 'relative',
            display: 'block',
            bottom: '30px',
            height: '24px',
            backgroundColor: color,
            zIndex: 0,
            transformOrigin: 'left',
          }}
          ref={ref}
        ></span>
      </span>
    );
  }
  return (
    <Wrapper ref={ref}>
      <PageWrapper overflow={"true"} className="page-container">
        <StickyTemplate
          leftGrid={4}
          rightGrid={8}
          left={
            <Fade bottom>
              <div className="text">
                <div className="index">03 <small>迭代：延展擴充</small></div>
                <h2>考量未來擴充與維運需求，制定多樣化元件讓業務拓展更彈性</h2>
                <p>理財網作為投資的介紹平台，需要承載多個合作品牌及考量未來業務擴展，因此設計上皆提前考量可增減品牌的 佈局方式及元件，以因應業務上的彈性</p>
              </div>
            </Fade>
          }
          right={
            <>
              <Grid xs={12} md={12} className="topic-1">
                <Fade bottom>
                  <img className="Column05" src={Column05} alt="Column05" />
                  <p>基金、證券券商等品牌露出，皆考量品牌可擴充的佈局形式讓業務發展有彈性空間</p>
                </Fade>
              </Grid>
              <Grid xs={12} md={12} className="topic-2">
                <Fade bottom>
                  <img className="Column06" src={Column06} alt="Column06" />
                  <p>建立設計系統，讓未來的業務延展有脈絡也維持品牌調性</p>
                </Fade>
              </Grid>


            </>
          }
        />
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    background-color: ${color.BGGrey};
    color: ${color.DarkBlue};
    padding: 190px 0 168px;
    /* padding-top: 120px; */
    .page-container{
        max-width: 1520px;
        overflow: visible;
        position: relative;
        /* height: 1400px; */
        h1{
          font-size: 36px;
          line-height: 50px;
          font-weight: 600;
          margin: 182px 0 38px;
          text-align: center;
          color: ${colors.LineBankGreen};
        }
        .subtitle{
          font-size: 20px;
          font-weight: 300;
          line-height: 30px;
          margin: 0 auto;
          letter-spacing: 0.05em;
          text-align: center;
          max-width: 830px;
        }
    }
    .content{
      font-size: 36px;
      margin: 64px 0 32px;
      font-weight: bold;
      line-height: initial;
    }
    .text{
      .index{
        font-size: 200px;
        font-family :'Poppins';
        color: #EBF0F5;
        font-weight: 500;
        line-height: 150px;
        margin-top: 58px;
        margin-bottom: 26px;
        small{
          font-size: 28px;
          font-weight: 600;
          color: ${color.LineBankGreen};
          margin-left: 98px;
          display: flex;
          margin-top: -140px;
        }
      }
      h3{
        margin: 8px 0;
        /* max-width: 526px; */
      }
      h2{
        margin: 0 0 32px;
        padding-top: 60px;
        border-top: 4px solid ${color.LineBankGreen};
        color: ${color.LineBankGreen};
        font-weight: 500;
        line-height: 41px;
      }
    }
    .right{
      padding-left: 150px;
      margin-top: 112px;
      p{
        border-left: 1px solid #0C1C24;
        padding-left: 16px;
        margin: 28px 0;
        font-size: 14px;
      }
      img{
        /* margin-bottom: 120px; */
      }
      h2{
        display: inline-flex;
        margin: 0;
      }
      .eng{
        margin-right: 16px;
      }
      hr{
        margin: 16px 0 42px;
        border-top: 1px solid ${color.White};
        border-bottom: 0;
      }
    }

    .target-section{
        border-left: 1px solid ${color.White};
        border-right: 1px solid ${color.White};
        text-align: center;
        h1{
           max-width: 1060px;
           margin: 0 auto 62px;
        }
        h2{
            margin: 32px 0 20px;
        }
    }
    .border-left{
        border-left: 1px solid ${color.White};
        padding-left: 16px;
    }
    .topic-1{
      margin-bottom: 30px;
      h2{
        margin-top: 30px;
      }
    }
    .topic-3{
      img{
        margin-top: 64px;
      }
    }
    .Icons{
      margin-top: 48px;
    }
    .Illustrators{
      margin-top: 34px;
    }
    .symbol{
      margin: 36px 0 120px;
    }
    /* .topic-2{
        margin-top: 146px;
    } */
    .info-graph-1{
        margin-top: 10px;
        margin-bottom: 162px;
    }
    .info-graph-2{
        margin-top: 10px;
    }
    ${media.medium`
      overflow: hidden;
      padding: 0;
      .content{
        margin-bottom: 16px;
        margin-top: 48px;
        font-size: 24px;
      }
      .left{
        margin-bottom: 8px;
        .index{
          font-size: 120px;
          line-height: 188px;
          font-weight: 500;
          display: grid;
          height: 160px;
          margin-bottom: 0;
          margin-top: 12px;
          small{
            font-size: 24px;
            line-height: 36px;
            font-weight: 600;
            margin-top: -111px;
            margin-left: 44px;
          }
        }
        p{
          font-size: 14px;
        }
        h2{
          border-width: 1.5px;
          font-weight: 500;
          margin: 0 0 16px;
          font-size: 22px;
          line-height: 33px;
          padding-top: 38px;
        }
      }
      p{
        font-size: 14px;
      }
      .target-section{
          h2{
              font-size: 16px;
              line-height: 24px;
              margin: 16px 0 22px;
          }
          h1{
              font-size: 22px;
              line-height: 33px;
              margin: 0 0 16px;
          }
      }
      .topic-2{
        margin-bottom: 50px;
      }
      .topic-3{
        margin-bottom: 36px;
      }
      .right{
        padding-left: 0;
        margin-top: 0;
        img[alt="Symbol"]{
          margin: 0 -24px 24px;
          width: calc( 100% + 48px );
        }
        img[alt="Icons"]{
          margin: 32px -24px 24px;
          width: calc( 100% + 48px );
        }
        img{
          margin-bottom: 0;
        }
        p{
          margin: 16px 0 12px;
        }
      }
      .symbol{
        margin: 30px 0 72px;
      }
  `}
`;


const Horizon = styled.div<{
  blackBg?: boolean;
}>`
    display: flex;
    justify-content: space-between;
    padding: 120px 0;
    color: ${prop => (!prop.blackBg ? color.White : color.DarkBlue)};
    &::after {
      content: '';
      width: 100%;
      display: block;
      border-top: 1px solid
        ${prop => (!prop.blackBg ? color.White : color.DarkBlue)};
      position: absolute;
    }
    h4 {
      margin: 20px 0 0;
      font-weight: 300;
    }
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 20px 0 0;
      .dot {
        width: 16px;
        height: 16px;
        margin-bottom: 2px;
        border-radius: 100%;
        background-color: ${prop =>
    !prop.blackBg ? color.BGGrey : color.DarkBlue};
        margin-right: 8px;
      }
      h4 {
        margin: 0;
        letter-spacing: 0.1rem;
      }
    }
    ${media.medium`
      padding: 64px 0 72px;
    `}
  `;
