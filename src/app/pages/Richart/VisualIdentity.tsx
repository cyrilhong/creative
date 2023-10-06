import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
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
        <Horizon>
          <div className="title">
            <div className="dot" />
            <h4 className="eng">VISUAL IDENTITY</h4>
          </div>
          <h4 className="eng">06</h4>
        </Horizon>
        <StickyTemplate
          leftGrid={4}
          rightGrid={8}
          left={
            <Fade bottom>
              <div className="title">Visual <br />Identity</div>
              <div className="sub">視覺識別</div>
              <h2 className="content">依循價值主張，系統性建構豐富的數位介面視覺元素</h2>
              <p>我們延伸了一套完整的視覺識別系統，透過多元豐富的視覺元素，建構出產品形象的基本輪廓，完整呈現改版後 Richart 想傳達給用戶的品牌調性。</p>
            </Fade>
          }
          right={
            <>
              <Grid xs={12} md={12} className="topic-1">
                <Fade bottom>
                  <h2> <div className="eng">Symbol</div> 識別符號</h2>
                  <hr />
                  <p>將領結轉化為「無限、放大、向上」的符號意象，符號由左到右的放大與斜角向上的漸變，象徵著透過 Richart 金融產品，放大你的財富、創造更多可能，邁向更好的生活。</p>
                  <img className="symbol" src={Symbol} alt="Symbol" />
                </Fade>
              </Grid>
              <Grid xs={12} md={12} className="topic-2">
                <Fade bottom>
                  <h2 style={{ marginTop: 0 }}> <div className="eng">Typography</div> 字型</h2>
                  <hr />
                  <p>字型的選用需兼顧應用環境，並與其他視覺元素相輔相成，因此應用上分成標準字跟裝飾字。裝飾字因為閱讀性比較弱，用法會是視覺風格的呈現或輔助，並且以英文或數字呈現，重要的資訊溝通以標準字為主，確保瀏覽裝置的易讀性。</p>
                  <img className="Typo" src={windowWidth > 960 ? Typo : TypoMb} alt="Typo" />
                </Fade>
              </Grid>
              <Grid xs={12} md={12} className="topic-3">
                <Fade bottom>
                  <h2 style={{ marginTop: 0 }}> <div className="eng">Color</div> 色彩計畫</h2>
                  <hr />
                  <p>色彩的部分，我們重新定義出使用上的比重。白色、黑色、品牌湖水藍這三個會是最主要的印象。而輔助色則是透過鮮明的撞色與螢光色搭配，呼應前瞻不設限的品牌個性，以點綴去輔助運用，不會搶過品牌的色彩印象。</p>
                  <img className="Colors" src={Colors} alt="Colors" />
                </Fade>
              </Grid>

              <Grid xs={12} md={12} className="topic-4">
                <Fade bottom>
                  <h2 style={{ marginTop: 0 }}> <div className="eng">Iconography</div> 數位圖標</h2>
                  <hr />
                  <p>數位圖標的原則應簡化輪廓，確保微小尺寸也能清晰明瞭，Icon 圖標繪製延伸原有線條手法，並搭配色塊強調，定調出一套兼具品牌個性與互動引導的圖標系統，讓未來 App 有擴充與延伸的準則，也維持產品的設計一致性。</p>
                  <img className="Icons" src={Icons} alt="Icons" />
                </Fade>
              </Grid>

              <Grid xs={12} md={12} className="topic-5">
                <Fade bottom>
                  <h2 style={{ marginTop: 0 }}> <div className="eng">Illustration</div> 插畫</h2>
                  <hr />
                  <p>插畫的部分延伸手繪風格並調整筆觸手法，是以更流暢、精練的筆觸呈現，並且讓這個筆畫跟其他視覺元素都能搭配。將線條與品牌色彩組合，呈現輕鬆有趣的品牌風格，幫助資訊溝通，插圖依據使用情境定義不同，使用不同層級繪製規範。</p>
                  <img className="Illustrators" src={Illustrators} alt="Illustration" />
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
    background-color: ${color.DarkBlue};
    color: ${color.White};
    padding-bottom: 208px;
    /* padding-top: 120px; */
    .page-container{
        max-width: 1520px;
        overflow: visible;
        position: relative;
        /* height: 1400px; */
    }
    .content{
      font-size: 36px;
      margin: 64px 0 32px;
      font-weight: bold;
      line-height: initial;
    }
    .right{
      padding-left: 64px;
      img{
        margin-bottom: 120px;
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
