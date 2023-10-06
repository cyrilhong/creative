import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import WrappedButton from 'app/components/WrappedButton'
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
import Photos from './assets/photos.jpg'
import Website from './assets/website.png'
import Colors from './assets/colors.svg'
import Icons from './assets/icons.svg'
import Illustrators from './assets/illustrators.svg'
export default function Tone() {
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
              <div className="title">Tone of<br /> Voice</div>
              <div className="sub">品牌調性</div>
              <h2 className="content">整合不同管道接觸點，由內而外展現品牌溝通的一致性</h2>
              <p>從品牌形象、影像調性、文案溝通，到最終呈現於用戶的 APP 與官網，期許用戶能感受 Richart 打破框架並創造潮流的精神，進而產生新品牌印象與體驗。</p>
            </Fade>
          }
          right={
            <>
              <Grid xs={12} md={12} className="topic-1">
                <Fade bottom>
                  <h2 style={{ marginTop: 0 }}> <div className="eng">Copywriting</div> 品牌語調</h2>
                  <hr />
                  <p>Richart 的品牌溝通語調需掌握以下原則作為依據：</p>
                  <div className="copyright">
                    <ul>
                      <li>
                        <div className="title">前瞻不設限</div>
                        <div className="content">態度輕鬆不嚴肅且直接的溝通，不誇飾、不情緒化，用詞精準直切重點，勇於表達自我。</div>
                      </li>
                      <li>
                        <div className="title">正面友善的</div>
                        <div className="content">像朋友般剛剛好的距離與溫度，不會太熱情、但相處起來輕鬆自在且互相關心的朋友。</div>
                      </li>
                      <li>
                        <div className="title">幽默有趣的</div>
                        <div className="content">以幽默詼諧但不刻意搞笑的態度看待事物，能夠用貼近日常、時事等特別的視角或用語溝通，讓人會心一笑。</div>
                      </li>
                    </ul>
                  </div>
                </Fade>
              </Grid>
              <Grid xs={12} md={12} className="topic-2">
                <Fade bottom>
                  <h2 style={{ marginTop: 0 }}> <div className="eng">Photography</div> 影像調性</h2>
                  <hr />
                  <p>影像比起插圖更能乘載情緒，呈現真實的樣貌，我們的影像以使用者為中心，透過影像的氛圍鋪成引起使用者共感，展現出品牌個性與氛圍，畫面呈現的人物形象是暸解自己，率性的態度，在生活中實踐自我的剪影。</p>
                  <img className="Photos" src={Photos} alt="Photos" />
                </Fade>
              </Grid>
              <Grid xs={12} md={12} className="topic-3">
                <Fade bottom>
                  <h2 style={{ marginTop: 0 }}> <div className="eng">Website</div> 官網</h2>
                  <hr />
                  <p>結合識別符號、語調與影像等品牌元素，轉化為與使用者溝通的視覺表現，全新改版後於不同的數位媒介載體上都能保持清楚明瞭且對外一致溝通方式。</p>
                  <img className="Website" src={Website} alt="Website" />
                  <Box display={"flex"} justifyContent={"center"}>
                    <WrappedButton
                      text="VISIT WEBSITE"
                      link="https://richart.tw/TSDIB_RichartWeb/RC00/RC000000"
                      isWhite={false}
                      blank
                    />
                  </Box>
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
    .copyright{
      margin: 62px 0 104px;
      ul{
        padding: 0 24px;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        gap:48px;
      }
      .title{
        font-size: 28px;
        margin: 0 0 32px;
      }
      .content{
        margin: 0;
        font-size: 14px;
        font-weight: 300;
        color: #fff;
        opacity: .8;
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
    .Photos{
      margin-top: 50px;
    }
    .border-left{
        border-left: 1px solid ${color.White};
        padding-left: 16px;
    }
    .topic-1{
        /* margin: 146px 0; */
    }
    .topic-3{
      img{
        margin-top: 64px;
        margin-bottom: 56px;
      }
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
      padding: 72px 0;
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
      .content{
        font-size: 24px;
        margin-bottom: 24px;
      }
      .right{
        padding-left: 0;
        hr{
          margin: 16px 0 24px;
        }
      }
      .left{
        margin-bottom: 64px;
        .content{
          margin-top: 48px;
        }
      }
      .copyright{
        margin: 32px 0 40px 0;
        ul{
          flex-direction: column;
          padding: 0;
          gap: 24px;
          .title{
            margin-bottom: 4px;
            font-size: 18px;
          }
          .content{
            font-size: 10px;
            color: ${color.White};
            opacity: .8;
            font-weight: 300;
          }
        }
      }
      .Photos{
        margin: 32px 0 40px!important;
      }
      .topic-3{
        img{
          margin: 32px -20px 48px;
          width: calc( 100% + 48px );
        }
      }
  `}
`;
