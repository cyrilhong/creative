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
import Symbol from './assets/symbol.svg'
import Typo from './assets/typo.svg'
import TypoMb from './assets/typo-mb.svg'
import Colors from './assets/colors.svg'
import Icons from './assets/icons.svg'
import Illustrators from './assets/illustrators.svg'
import Column03 from './assets/column-img-03.jpg'
import Column04 from './assets/column-img-04.jpg'
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
                <div className="index">02 <small>導購：促動轉化</small></div>
                <h2>明確簡潔的引導，減少思考時間與互動步驟以加速導流轉化</h2>
                <p>思考每個頁面目的，從引導用戶決策→導流重點這段流程，怎麼安排適量但足夠決策的資訊、減少選擇互動上的路徑，讓導流轉化更加流暢</p>
              </div>
            </Fade>
          }
          right={
            <>
              <Grid xs={12} md={12} className="topic-1">
                <Fade bottom>
                  <img className="Column03" src={Column03} alt="Column03" />
                  <p>證券、基金、產品業主頁皆安排主要亮點作為第一步重點資訊傳遞，接著以優惠資訊引導至站內文章閱讀或下單金融產品</p>
                </Fade>
              </Grid>
              <Grid xs={12} md={12} className="topic-2">
                <Fade bottom>
                  <img className="Column04" src={Column04} alt="Column04" />
                  <p>試算工具左右滑動可快速選擇理財目標，透過共同理財經驗安排存款年數、報酬率選項結合感受、互動上預設點擊結果加速輸入過程，導流基金標的結果頁瀏覽</p>
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
    padding: 190px 0 0;
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
      margin-bottom: 58px;
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
        margin-bottom: 36px;
      }
      .topic-3{
        margin-bottom: 36px;
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
