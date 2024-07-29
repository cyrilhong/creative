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
import Column01 from './assets/column-img-01.jpg'
import Column02 from './assets/column-img-02.jpg'
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
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
                <div className="index">01 <small>獲客：吸睛視覺</small></div>
                <h2>為新手打造的吸睛入門教學，透過故事性的體驗設計協助聚焦與快速理解</h2>
                <p>資訊架構規劃引導初次投資的新手瀏覽投資領域的教育內容，設計時思考新手入門需要讓年輕用戶願意讀、對他們有吸引力，同時也需要梳理複雜的金融資訊，提供「吸睛」、「輕量」的方式呈現年輕人可以快速理解專業的理財內容</p>
                <p>因此以一頁式漫畫「條漫」的溝通方式來聚焦資訊，協助目標用戶容易理解定期定額、投資理財的重要性。</p>
              </div>
            </Fade>
          }
          right={
            <>
              <Grid xs={12} md={12} className="topic-1">
                <Fade bottom>
                  <img className="Column01" src={Column01} alt="Column01" />
                  <p>條漫是手機一頁式漫畫，符合年輕人手機閱讀的行為下，市場規模高度成長，對品牌、企業、組織來說，故事性的體驗設計讓目標用戶更容易理解要傳遞的訊息</p>
                </Fade>
              </Grid>
              <Grid xs={12} md={12} className="topic-2">
                <Fade bottom>
                  <img className="Column02" src={Column02} alt="Column02" />
                  <p>目前主要用戶為生活在科技進步的 YZ 世代，數位金融服務已融入日常，理財網站內容需輕量化，讓 YZ 世代用戶快速獲得各自重點需求，導流開戶</p>
                </Fade>
              </Grid>


            </>
          }
        />
        <h1>以時下流行用語引發 YZ 世代共鳴，拉近理財與用戶的距離</h1>
        <p className='subtitle'>數位銀行用戶年輕、有屬於自己的語氣跟調調，透過趣味的時下流行用語包裝 KYC 測驗，創造年輕用戶之間的社群效應，進而提升 LINE Bank 理財網的認同感與導購機會</p>
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    background-color: ${color.BGGrey};
    color: ${color.DarkBlue};
    padding: 190px 0 180px;
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
        font-size: 150px;
        font-family :'Poppins';
        color: #EBF0F5;
        font-weight: 500;
        line-height: 150px;
        margin-top: 58px;
        small{
          font-size: 28px;
          font-weight: 600;
          color: ${color.LineBankGreen};
          margin-left: 80px;
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
        padding-top: 32px;
        border-top: 4px solid ${color.LineBankGreen};
        color: ${color.LineBankGreen};
        font-weight: 600;
        line-height: 41px;
        /* max-width: 526px; */
      }
    }
    .right{
      padding-left: 150px;
      p{
        border-left: 1px solid #0C1C24;
        padding-left: 16px;
        margin: 28px 0;
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
      margin-bottom: 0;
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
        margin-bottom: 0;
      }
      .topic-3{
        margin-bottom: 36px;
      }
      .left{
        margin-bottom: 24px;
        .index{
          font-size: 120px;
          line-height: 188px;
          font-weight: 500;
          display: grid;
          height: 160px;
          small{
            font-size: 24px;
            line-height: 36px;
            font-weight: 600;
            margin-top: -111px;
            margin-left: 44px;
          }
        }
        h2{
          border-width: 1.5px;
          font-weight: 500;
          margin: 38px 0 16px;
        }
      }
      .right{
        padding-left: 0;
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
      }
      .symbol{
        margin: 30px 0 72px;
      }
      .page-container{
        h1{
          font-size: 22px;
          line-height: 32px;
          margin: 54px 0 24px;
          text-align: left;
        }
        .subtitle{
          font-size: 14px;
          line-height: 21px;
          margin-bottom: 36px;
        }
      }
  `}
`;

