import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import Grid from '@mui/material/Unstable_Grid2';
import { media } from 'styles/media';
import Fade from 'react-reveal/Fade';
import { useWindowSize, isDesktop } from '../../hooks'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import challenge1 from './assets/challenge-1.jpg'
import challenge2 from './assets/challenge-2.jpg'
import challenge3 from './assets/challenge-3.jpg'
import InfoGraph1 from './assets/info-graph-1.svg'
import InfoGraph2 from './assets/info-graph-2.svg'
import { Box } from '@mui/system';
import * as color from 'styles/colors';
export default function Performance(props) {
    const positionRef = useRef<HTMLDivElement>(null);
    const [sticky, setSticky] = useState(false);
    const [bottomSticky, setBottomSticky] = useState(false);
    const windowWidth = useWindowSize().width
    useScrollPosition(({ prevPos, currPos }) => {
        if (
            positionRef.current!.getBoundingClientRect().top < 120 && windowWidth > 960
        ) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    });
    return (
        <Challenges>
            <Grid container className="container">
                <Grid xs={12} md={props.leftGrid} ref={positionRef} position="relative">
                    <div
                        className={`left ${sticky ? 'sticky-top' : ''} ${bottomSticky ? 'sticky-bottom' : ''
                            }`}
                    >
                        {props.left}
                    </div>
                </Grid>
                <Grid container spacing={4} xs={12} md={props.rightGrid} className="right">
                    {props.right}
                </Grid>
            </Grid>
        </Challenges>
    );
}

const Challenges = styled.div`
    .title{
        font-size: 60px;
        font-family: 'Poppins';
        line-height: 75px;
        font-weight: 500;
    }
    .sub{
        font-size: 36px;
        margin-top: 8px;
    }
    img{
        width: 100%;
    }
    .wrapper-context{
        margin-top: 100px;
        position: relative;
        padding-right: 60px;
        margin-bottom: 130px;
        h3{
            margin: 0 0 24px;
        }
        p{
            margin: 0;
        }
        .dash{
            border-bottom: 1px solid ${color.White};
            width: 24px;
            margin-right: 12px;
            height: 12px;
        }
        &::before{
            content: '';
            width: 180%;
            background-color: ${color.AJABlue};
            height: 306px;
            position: absolute;
            right: 0;
            z-index: -1;
            top: -60px;
        }
    }
    .border-left{
        border-left: 1px solid ${color.White};
        padding-left: 16px;
    }
    
    .sticky-top {
        position: sticky;
        top: 120px;
        left: 40;
        width: calc( 33vw );
        /* margin-left: 0; */
        /* width: 776px; */
    }
    .sticky-bottom {
        top: initial;
        bottom: 0;
        position: absolute;
        /* max-width: calc( 100% + 20px ); */
    }
    ${media.medium`
        .title{
            font-size: 32px;
            line-height: 40px;
            br{
                display: none;
            }
        }
        .sub{
            font-size: 24px;
            line-height: 36px;
        }
        .left{
            margin: 0 0 48px;
        }
        img[alt="challenge1"]{
            padding: 0 20px;
        }
        .wrapper-context{
            margin: -32px 0 14px;
            padding: 20px;
            background-color: ${color.AJABlue};
            .dash{
                width: 40px;
            }
            &::before{
                height: 100%;
                width: 100%;
            }
        }
        h2{
            margin-bottom: 16px;
        }
        h4{
            margin: 16px 0 0;
        }
        .border-left{
            margin: 24px 0 0;
        }
    `}
`