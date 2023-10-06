import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import Grid from '@mui/material/Unstable_Grid2';
import { media } from 'styles/media';
import Fade from 'react-reveal/Fade';
import { useWindowSize, isDesktop } from '../../hooks'
import CountUp from 'react-countup';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
export default function Performance({ data }) {
    const ref = useRef<HTMLDivElement>(null);
    const windowWidth = useWindowSize().width
    const [startCount, setStartCount] = useState(false)
    useScrollPosition(({ prevPos, currPos }) => {
        if (ref.current!.getBoundingClientRect().top < 2000) {
            setStartCount(true);
        } else {
            setStartCount(false);
        }
    });
    return (
        <Wrapper ref={ref}>
            <Grid container spacing={isDesktop() ? 5 : 0} rowSpacing={isDesktop() ? 9 : 0}>
                {data.map(item => {
                    return (
                        <Grid xs={12} md={4} className="item" key={item.title}>
                            <Fade bottom>
                                <div className="super eng">
                                    {startCount && <CountUp end={item?.count} />}{item?.countString}
                                </div>
                                <h2 className="eng">{item?.eventName}</h2>
                                <h2>{item?.title}</h2>
                                <h4>{item?.subtitle}</h4>
                            </Fade>
                        </Grid>
                    )
                })}
            </Grid>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  padding-bottom: 50px;
  margin-top: 74px;
  .item {
    text-align: center;
    .super {
      margin: 0;
    }
    h2 {
      margin: 48px 0 8px;
      &.eng {
        margin: -22px 0 0;
      }
    }
    h4 {
      margin: 0 auto;
      max-width: 320px;
    }
  }
  ${media.large`
    .super{
      font-size: 100px;
      line-height: 120px;
    }
  `}
  ${media.medium`
    padding: 0 0 100px;
    margin-top: 0;
    .item{
      .super{
        font-size: 96px;
        line-height: 96px;
        margin-top: 64px;
      }
      h2.eng{
        font-size: 32px;
        line-height: 40px;
        margin-top: 0;
      }
      h2{
        margin-top: 24px;
      }
    }
  `}
`;