import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import aja from './assets/aja-logo.svg';
import ajaWhite from './assets/aja-logo-white.svg';
import { media } from 'styles/media';
import * as colors from '../../../styles/colors';
import burger from './assets/burger.svg'
import { Link } from 'app/components/Link';
export function Logo({ color, bgColor }) {
  const [open, setOpen] = useState(false)
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${color};
    border-bottom: 1px solid ${color};
    padding: 24px;
    flex-basis: 410px;
    color: ${color};
    background-color: ${bgColor};
    img {
      /* margin-left: 24px; */
    }
    .burger{
      position: absolute;
      right: 10px;
      display: none;
    }
    .main{
      display: flex;
      align-items: center;
      a{
        display: flex;
        path{
          fill: ${color};
        }
      }
    }
    .language{
      display: flex;
      justify-content: center;
    }
    ${media.medium`
      border-right: 0;
      padding: 0;
      min-height: 60px;
      border-bottom: 0;
      &::after{
        content: '';
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: ${StyleConstants.NAV_BAR_HEIGHT};
        background: rgba(12, 28, 36, 0.5);
        z-index: -1;
        display: ${open ? 'block' : 'none'};
        pointer-events: none;
      }
      .burger{
        display: block;
        line{
          stroke: ${color};
        }
      }
      a{
        img{
          width: 64px;
        }
      }
      .main{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px 12px 10px;
        height: 60px;
        border-bottom: 1px solid ${color};
      }
    `};
  `;
  const Title = styled.div`
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 5%;
    color: ${color};
    font-weight: normal;
    margin-left: 16px;
    width: 240px;
    letter-spacing: 1px;
    ${media.medium`
      font-size: 10px;
      width: 100%;
    `};
  `;


  const Content = styled.ul`
  transition: all .5s ease-in-out;
    padding: 48px 16px;
    margin: 0;
    height: ${open ? '375px' : '0'};
    opacity: ${open ? '1' : '0'};
    display:${open ? 'block' : 'none'};
    list-style: none;
    width: 100%;
    color: ${color};
    background-color:  ${bgColor};
    text-align: center;
    font-weight: 400;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 20%);
    li{
      margin-bottom: 24px;
    }
    .language{
      margin-top: 42px;
    }
    a{
      color: inherit;
      &:hover{
        text-decoration: none;
      }
    }
  `;



  return (
    <Wrapper>
      <div className='main'>
        <a href="/">
          <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.2263 0H55.2381H49.3754H45.5973H31.9432V2.20693H33.7055C33.9926 2.20693 34.2644 2.2374 34.524 2.29984C34.7836 2.36077 35.0127 2.47957 35.2112 2.65777C35.4098 2.83597 35.5625 3.09032 35.6724 3.42387C35.7824 3.75743 35.8358 4.20369 35.8358 4.76266V20.1305C35.8358 21.5332 35.6846 22.7167 35.3853 23.6762C35.0845 24.6373 34.6874 25.4095 34.1972 25.9974C33.7055 26.5822 33.142 27.0011 32.5067 27.2539C31.8714 27.5052 31.2193 27.6331 30.5504 27.6331H29.7914C29.7716 27.627 29.7502 27.6225 29.7303 27.6164C29.4295 27.5204 29.1454 27.3773 28.8797 27.1518C28.6125 26.9264 28.3681 26.6203 28.1421 26.2319C27.9176 25.8435 27.7023 25.3561 27.4961 24.7713L18.683 0.00304912H13.0143L3.8713 24.7271C3.62543 25.3546 3.38261 25.8649 3.14438 26.2609C2.90462 26.6553 2.65264 26.9645 2.38539 27.1899C2.11967 27.4138 1.83104 27.5692 1.52561 27.6499C1.21866 27.7306 0.879632 27.7717 0.511592 27.7717H0V29.9985H10.9206V27.7717H9.15825C8.91238 27.7717 8.6772 27.7382 8.45119 27.6697C8.2267 27.6012 8.02511 27.5037 7.84644 27.3742C7.66929 27.2448 7.52574 27.0787 7.41579 26.8731C7.30583 26.669 7.25238 26.4314 7.25238 26.1588C7.25238 25.8176 7.31041 25.4201 7.42648 24.9632C7.54101 24.5078 7.65402 24.1072 7.76397 23.7676L8.97194 20.1701H19.1763L20.6515 24.3601C20.734 24.5916 20.8149 24.8642 20.8974 25.1779C20.9798 25.4917 21.0195 25.8176 21.0195 26.1588C21.0195 26.4451 20.9661 26.6888 20.8561 26.8944C20.7477 27.0985 20.6072 27.2661 20.4362 27.3955C20.2651 27.525 20.0697 27.6194 19.8513 27.6819C19.6329 27.7428 19.4221 27.7733 19.216 27.7733H17.5758V30H29.7884H31.3048H31.427C32.3402 29.9985 33.2382 29.9832 34.1209 29.8477C35.0433 29.7045 35.9168 29.4761 36.743 29.1623C37.5691 28.8486 38.3342 28.4358 39.0382 27.9256C39.7423 27.4153 40.3455 26.7878 40.851 26.0446C41.3564 25.3028 41.752 24.4408 42.0391 23.4599C42.3262 22.4791 42.4697 21.355 42.4697 20.0878V4.9241C42.4697 4.32553 42.5278 3.84881 42.6438 3.49393C42.7599 3.13906 42.9141 2.86643 43.105 2.67604C43.2959 2.48566 43.525 2.35924 43.7907 2.29832C43.9388 2.26329 46.8068 2.25111 49.3693 2.24806V2.24653H53.4224H53.6911L44.7223 29.9985H50.8461L52.9154 22.8872H63.8207L65.8762 29.9985H72L62.2263 0ZM9.85463 17.6144L12.3332 10.5442C12.4966 10.0538 12.6722 9.54206 12.8555 9.01203C13.0402 8.48048 13.225 7.94893 13.4098 7.41737C13.5946 6.88582 13.7687 6.36797 13.9321 5.86384C14.097 5.3597 14.239 4.89668 14.3627 4.47479C14.4727 4.96522 14.5979 5.4785 14.7415 6.01767C14.885 6.55684 15.0362 7.09753 15.192 7.64127C15.3493 8.18805 15.5066 8.72265 15.6639 9.24658C15.8196 9.77052 15.9739 10.2716 16.1235 10.7483L18.3364 17.6144H9.85463ZM54.4578 17.5748L55.5069 13.9727C55.5054 13.9742 55.9864 12.3186 56.0338 12.1557C56.1361 11.7962 56.4721 10.6448 56.5912 10.2016C56.7103 9.75682 57.0218 8.6404 57.1516 8.14692L58.3733 4.2113L59.6012 8.22613C59.7859 8.90085 59.8929 9.274 60.0563 9.83145C60.2197 10.3904 60.3434 10.791 60.4258 11.0362L62.3515 17.5748H54.4578Z" fill="#fff" />
          </svg>
        </a>
        <Title className="eng">
          AJA Creative, Innovative
          <br /> Practitioners in Experience Design{' '}
        </Title>
        <div className="burger" onClick={() => setOpen(!open)}>
          {open ?
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="11.161" y1="28.1317" x2="28.1316" y2="11.1612" stroke="#fff" strokeWidth="3" />
              <line x1="11.8683" y1="11.161" x2="28.8388" y2="28.1316" stroke="#fff" strokeWidth="3" />
            </svg>
            :
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="7" y1="11.5" x2="33" y2="11.5" stroke="white" strokeWidth="3" />
              <line x1="7" y1="19.5" x2="33" y2="19.5" stroke="white" strokeWidth="3" />
              <line x1="13" y1="27.5" x2="33" y2="27.5" stroke="white" strokeWidth="3" />
            </svg>


          }
        </div>
      </div>
      <Content>
        <li>
          <Link to="/case">專案實例</Link>
        </li>
        <li>
          <Link to="/service">設計服務與流程</Link>
        </li>
        <li>
          <Link to="/about-us">關於我們</Link>
        </li>
        <li>
          <Link to="/customer">客戶群</Link>
        </li>
        <li>
          <Link to="/join-us">加入我們</Link>
        </li>
        <li>
          <Link to="/contact">聯絡我們</Link>
        </li>
      </Content>
    </Wrapper>
  );
}

