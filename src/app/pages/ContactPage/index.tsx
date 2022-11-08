import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useWindowSize, isDesktop } from '../../hooks'
import * as colors from 'styles/colors';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components/macro';
import { useForm, ValidationError } from '@formspree/react';
import Box from '@mui/material/Box';
import { Grid, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import arrowBtn from './assets/arrowBtn.svg';
import formBg from './assets/form-bg.jpg';
import StickyBox from 'react-sticky-box';
import { Controller, Scene } from 'react-scrollmagic';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import arrowWhite from './assets/arrow.svg';
import roundArrowBtn from './assets/round-arrow-btn.svg';
import location from './assets/location.jpg';
import pin from './assets/pin.jpg';
import Map from './map'
import { media } from 'styles/media';

export function ContactPage() {
  const [state, handleSubmit] = useForm('mdojganb');
  const [serviceType, setServiceType] = useState(0);
  const [time, setTime] = useState(0);
  const [coopTime, setCoopTime] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  if (state.succeeded) {
    // setSubmitted(true);
    return <p>Thanks for joining!</p>;
  } else {
    // console.log('error');
  }
  function Mark() {
    const { ref } = useParallax<HTMLDivElement>({});
    return <span ref={ref} />;
  }
  const [sticky, setSticky] = useState(false);
  const [bottomSticky, setBottomSticky] = useState(false);
  const positionRef = useRef<HTMLDivElement>(null);
  const FaqPositionRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowSize().width
  useScrollPosition(({ prevPos, currPos }) => {
    if (
      positionRef.current!.getBoundingClientRect().top < 0 &&
      FaqPositionRef.current!.getBoundingClientRect().top > 1100
    ) {
      setSticky(true);
    } else {
      setSticky(false);
    }
    if (FaqPositionRef.current!.getBoundingClientRect().top < 1100) {
      setBottomSticky(true);
    } else {
      setBottomSticky(false);
    }
  });
  return (
    <ParallaxProvider>
      <Controller>
        <Helmet>
          <title>Contact Us</title>
          <meta
            name="description"
            content="Let’s talk about what we can make, build, design together."
          />
        </Helmet>
        <NavBar />
        <div className="bg-contact-us">
          <PageWrapper>
            <Intro>
              <Grid container>
                {windowWidth > 1054 && <Grid item xs={12}>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="huge eng">Let’s talk about what we </div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="huge eng">can make, build, design</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="huge eng">together.</div>
                  </Fade>
                  <div className="content">
                    <h1 style={{ display: 'flex' }}>
                      <Fade bottom duration={500} delay={100}>
                        有所
                        <Mark />
                        行動才能創造改變，就從與我們聊聊開始！
                      </Fade>
                    </h1>
                  </div>
                </Grid>}
                {windowWidth < 1055 && windowWidth > 959 && <Grid item xs={12}>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="huge eng">Let’s talk about what</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="huge eng">we can make, build,</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="huge eng">design together.</div>
                  </Fade>
                  <div className="content">
                    <h1 style={{ display: 'flex' }}>
                      <Fade bottom duration={500} delay={100}>
                        有所
                        <Mark />
                        行動才能創造改變，就從與我們聊聊開始！
                      </Fade>
                    </h1>
                  </div>
                </Grid>}
                {windowWidth < 960 && <Grid item xs={12}>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="huge eng">Let’s talk about what</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="huge eng">we can make, build,</div>
                  </Fade>
                  <Fade bottom cascade duration={500} delay={100}>
                    <div className="huge eng">design together.</div>
                  </Fade>
                  <div className="content">
                    <FeatureHead>
                    有所
                      <div className='draw'>行動才能創造改變</div>，就從與我們聊聊開始！
                    </FeatureHead>
                  </div>
                </Grid>}
                <GetInTouch>
                  <Box>
                    <h2>專案詢問</h2>
                    <h5 className="eng">GET IN TOUCH</h5>
                  </Box>
                  <img src={arrowBtn} alt="arrow" />
                </GetInTouch>
                {/* <Grid item xs={3}>
                  <GetInTouch>
                    <Box>
                      <h2>專案詢問</h2>
                      <h5 className="eng">GET IN TOUCH</h5>
                    </Box>
                    <img src={arrowBtn} alt="arrow" />
                  </GetInTouch>
                </Grid> */}
                <Grid item xs={12}>
                  <Divider>
                    <div className="title">
                      <div className="dot" />
                      <h2>有系統地了解您的設計顧問需求</h2>
                    </div>
                  </Divider>
                </Grid>
              </Grid>
              <StepList>
                <Grid container spacing={0}>
                  <Grid item className="step-1" xs={12} md={6} lg={3}>
                    <Step>
                      <div className="head">
                        <div className="huge eng">01</div>
                        <h3>初步需求對焦</h3>
                      </div>
                      <div className="horizon" />
                      <h4>
                        初步了解您的需求，對焦專案服務內容、時程要求、設計資源等是否有合作的機會。
                      </h4>
                    </Step>
                  </Grid>
                  <Grid item className="step-2" xs={12} md={6} lg={3}>
                    <Step>
                      <div className="head">
                        <div className="huge eng">02</div>
                        <h3>需求溝通</h3>
                      </div>
                      <div className="horizon" />
                      <h4>
                        大予向您做公司簡介並溝通專案需求，客戶可提供需求說明書
                        (RFP) 或其他有助於專案範圍評估的資料。
                      </h4>
                    </Step>
                  </Grid>
                  <Grid item className="step-3" xs={12} md={6} lg={3}>
                    <Step>
                      <div className="head">
                        <div className="huge eng">03</div>
                        <h3>服務建議及報價</h3>
                      </div>
                      <div className="horizon" />
                      <h4>
                        依據客戶提供的資訊果，提出服務規劃、專案時程、報價等，讓您對內呈報並進行選商決策。
                      </h4>
                    </Step>
                  </Grid>
                  <Grid item className="step-4" xs={12} md={6} lg={3}>
                    <Step>
                      <div className="head">
                        <div className="huge eng">04</div>
                        <h3>簽約及開案</h3>
                      </div>
                      <div className="horizon" />
                      <h4>
                        客戶確認專案報價與範圍 (SOW)
                        之後，即可進行簽約，簽約完成後即可開案。
                      </h4>
                    </Step>
                  </Grid>
                </Grid>
              </StepList>
            </Intro>
          </PageWrapper>
        </div>
        <FormSection className="service-second-section">
          <PageWrapper
            overflow={false}
            className="form-section"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <Grid container spacing={8}>
              <Grid item xs={5} ref={positionRef} position="relative">
                <div
                  className={`left ${sticky ? 'sticky-top' : ''} ${bottomSticky ? 'sticky-bottom' : ''
                    }`}
                >
                  <div className="huge eng">
                    Let's Do <br /> This.
                  </div>
                  <h1>專案諮詢</h1>
                  <h3>
                    您可以透過此份表單讓我們理解您的需求，也同時釐清您所需要的協助！{' '}
                    <br /> 也歡迎您隨時來電洽詢：886-2-85029135
                  </h3>
                </div>
              </Grid>
              <Grid item xs={7}>
                <div className="right">
                  <FormDivider />
                  <form onSubmit={handleSubmit}>
                    <FormTitle>
                      <div className="title">
                        <div className="dot" />
                        <h2>您需要的服務類型是？</h2>
                      </div>
                    </FormTitle>
                    <RadioGroup>
                      <div
                        className={`radio ${serviceType === 0 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={0}
                            checked={serviceType === 0}
                            onChange={() => setServiceType(0)}
                          />
                          <h3>創新服務設計</h3>
                          <hr />
                          <p>
                            從企業以及使用者/消費者的角度，透過定義線上及線下的服務價值、規劃服務藍圖，打造創新且獨特的服務體驗
                          </p>
                        </label>
                      </div>
                      <div
                        className={`radio ${serviceType === 1 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={1}
                            checked={serviceType === 1}
                            onChange={() => setServiceType(1)}
                          />
                          <h3>網站規劃與設計</h3>
                          <hr />
                          <p>
                            從企業以及使用者/消費者的角度，透過定義線上及線下的服務價值、規劃服務藍圖，打造創新且獨特的服務體驗
                          </p>
                        </label>
                      </div>
                      <div
                        className={`radio ${serviceType === 2 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={2}
                            checked={serviceType === 2}
                            onChange={() => setServiceType(2)}
                          />
                          <h3>App軟體規劃設計</h3>
                          <hr />
                          <p>
                            從企業以及使用者/消費者的角度，透過定義線上及線下的服務價值、規劃服務藍圖，打造創新且獨特的服務體驗
                          </p>
                        </label>
                      </div>
                      <div
                        className={`radio ${serviceType === 3 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={3}
                            checked={serviceType === 3}
                            onChange={() => setServiceType(3)}
                          />
                          <h3>使用者研究 / 體驗策略</h3>
                          <hr />
                          <p>
                            透過量化或質化的使用者研究，找出使用者的需求、痛點、爽點，訂定產品與服務的體驗策略。
                          </p>
                        </label>
                      </div>
                      <div
                        className={`radio ${serviceType === 4 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={4}
                            checked={serviceType === 4}
                            onChange={() => setServiceType(4)}
                          />
                          <h3>APP 規劃與設計</h3>
                          <hr />
                          <p>
                            手機或平板APP的建置或改版，包含概念設計、、資訊架構規劃、互動設計、視覺設計。
                          </p>
                        </label>
                      </div>
                      <div
                        className={`radio ${serviceType === 5 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={5}
                            checked={serviceType === 5}
                            onChange={() => setServiceType(5)}
                          />
                          <h3>教育訓練</h3>
                          <hr />
                          <p>
                            使用者體驗或介面設計專業諮詢、內部創新設計團隊顧問服務、體驗設計工作坊。
                          </p>
                        </label>
                      </div>
                      <div
                        className={`radio ${serviceType === 6 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={6}
                            checked={serviceType === 6}
                            onChange={() => setServiceType(6)}
                          />
                          <h3>體驗優化健檢</h3>
                          <hr />
                          <p>
                            檢視現有的產品服務流程與顧客旅程地圖，以專家評估或易用性測試等方法，找出服務的斷點與優化的機會點，並提出優化方向建議。
                          </p>
                        </label>
                      </div>
                      <div
                        className={`radio ${serviceType === 7 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={7}
                            checked={serviceType === 7}
                            onChange={() => setServiceType(7)}
                          />
                          <h3>其他服務</h3>
                          <hr />
                          <p>若有項目以外的其他需求，請於下方欄位留下需求。</p>
                        </label>
                      </div>
                    </RadioGroup>
                    <FormTitle>
                      <div className="title">
                        <div className="dot" />
                        <h2>您預計的開案時間？</h2>
                      </div>
                    </FormTitle>
                    <SmallRadioGroup>
                      <div className={`radio ${time === 0 ? 'active' : ''}`}>
                        <label>
                          <input
                            type="radio"
                            value={0}
                            checked={time === 0}
                            onChange={() => setTime(0)}
                          />
                          <h3>三周內</h3>
                        </label>
                      </div>
                      <div className={`radio ${time === 1 ? 'active' : ''}`}>
                        <label>
                          <input
                            type="radio"
                            value={1}
                            checked={time === 1}
                            onChange={() => setTime(1)}
                          />
                          <h3>一個月內</h3>
                        </label>
                      </div>
                      <div className={`radio ${time === 2 ? 'active' : ''}`}>
                        <label>
                          <input
                            type="radio"
                            value={2}
                            checked={time === 2}
                            onChange={() => setTime(2)}
                          />
                          <h3>二個月內</h3>
                        </label>
                      </div>
                      <div className={`radio ${time === 3 ? 'active' : ''}`}>
                        <label>
                          <input
                            type="radio"
                            value={3}
                            checked={time === 3}
                            onChange={() => setTime(3)}
                          />
                          <h3>沒有或不確定</h3>
                        </label>
                      </div>
                    </SmallRadioGroup>
                    <FormTitle>
                      <div className="title">
                        <div className="dot" />
                        <h2>您預計的合作時程？</h2>
                      </div>
                    </FormTitle>
                    <SmallRadioGroup>
                      <div
                        className={`radio ${coopTime === 0 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={0}
                            checked={coopTime === 0}
                            onChange={() => setCoopTime(0)}
                          />
                          <h3>三個月內</h3>
                        </label>
                      </div>
                      <div
                        className={`radio ${coopTime === 1 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={1}
                            checked={coopTime === 1}
                            onChange={() => setCoopTime(1)}
                          />
                          <h3>半年內</h3>
                        </label>
                      </div>
                      <div
                        className={`radio ${coopTime === 2 ? 'active' : ''}`}
                      >
                        <label>
                          <input
                            type="radio"
                            value={2}
                            checked={coopTime === 2}
                            onChange={() => setCoopTime(2)}
                          />
                          <h3>一年</h3>
                        </label>
                      </div>
                    </SmallRadioGroup>
                    <FormTitle>
                      <div className="title">
                        <div className="dot" />
                        <h2>聯絡方式</h2>
                      </div>
                    </FormTitle>
                    <InputForm>
                      <label htmlFor="email">聯絡人</label>
                      <div className="input-group">
                        <input
                          id="name"
                          required
                          name="name"
                          placeholder="名字 *"
                        />
                        <input
                          id="company"
                          required
                          name="company"
                          placeholder="公司名稱 *"
                        />
                      </div>
                      <div className="input-group">
                        <input
                          id="phone"
                          required
                          name="phone"
                          placeholder="聯絡電話"
                        />
                        <input
                          id="email"
                          required
                          type="email"
                          name="email"
                          placeholder="電子郵件 *"
                        />
                      </div>
                      <FormTitle>
                        <div className="title">
                          <div className="dot" />
                          <h2>其他想法</h2>
                        </div>
                      </FormTitle>
                      <div className="input-group">
                        <textarea
                          id="comment"
                          name="comment"
                          placeholder=""
                          rows={5}
                        />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </InputForm>
                    <Box width={'100%'} textAlign="center">
                      <RoundButton type="submit" disabled={state.submitting}>
                        <h4 className="">送出表單</h4>
                        <img src={arrowWhite} alt="arrow" />
                      </RoundButton>
                    </Box>
                  </form>
                </div>
              </Grid>
            </Grid>
          </PageWrapper>
          <FAQ ref={FaqPositionRef} className="bg-FAQ">
            <PageWrapper>
              <Horizon>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">LEARN MORE</h4>
                </div>
                <h4 className="eng">03</h4>
              </Horizon>
              <Grid container spacing={8}>
                <Grid item xs={12} md={5}>
                  <Box>
                    <div className="huge eng">FAQ</div>
                    <h1>常見問題</h1>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <FaqGroup>
                    <h3 className="title">服務項目</h3>
                    <ul>
                      <li>
                        <div className="collapse">
                          <h3>什麼專案找大予做最適合？</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </div>
                      </li>
                      <li>
                        <div className="collapse">
                          <h3>大予有包含程式開發嗎？</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </div>
                      </li>
                    </ul>
                  </FaqGroup>
                  <FaqGroup>
                    <h3 className="title">合作方式</h3>
                    <ul>
                      <li>
                        <div className="collapse">
                          <h3>在產品/服務開發的哪個階段找大予比較合適？</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </div>
                      </li>
                      <li>
                        <div className="collapse">
                          <h3>
                            是否可以請大予先提案比稿，再決定是否外包給你們？
                          </h3>
                          <img src={roundArrowBtn} alt="button" />
                        </div>
                      </li>
                      <li>
                        <div className="collapse">
                          <h3>專案進行時，客戶要如何和大予配合？</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </div>
                      </li>
                      <li>
                        <div className="collapse">
                          <h3>專案結束後，後續的改版或更新怎麼辦？</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </div>
                      </li>
                    </ul>
                  </FaqGroup>
                  <FaqGroup>
                    <h3 className="title">報價相關</h3>
                    <ul>
                      <li>
                        <div className="collapse">
                          <h3>價格怎麼算？</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </div>
                      </li>
                      <li>
                        <div className="collapse">
                          <h3>如果預算有限，要如何合作？</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </div>
                      </li>
                      <li>
                        <div className="collapse">
                          <h3>通常一個案子會做多久？</h3>
                          <img src={roundArrowBtn} alt="button" />
                        </div>
                        <p>
                          從用戶洞見出發，制定體驗策略規劃落實設計創新，建立以使用者中心的使用經驗，從用戶洞見出發，制定體驗策略規劃落實設計創新，建立以使用者中心的使用經驗。
                        </p>
                      </li>
                    </ul>
                  </FaqGroup>
                </Grid>
              </Grid>
              <Horizon>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">CONTACT</h4>
                </div>
                <h4 className="eng">04</h4>
              </Horizon>
              <Contact>
                <Grid container spacing={isDesktop()?8:0}>
                  <Grid item xs={12} md={5}>
                    <Box>
                      <div className="title eng">Where we are</div>
                      <h1>聯繫我們</h1>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3} className="eng">
                    <h4 className="eng">Contact Us.</h4>
                    <h5>
                      TEL . +886-2-85029135 <br />
                      FAX. +886-2-85029151 <br />
                      MOBILE. +886-922-083-876
                    </h5>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <h4 className="eng">Find Us.</h4>
                    <h5 className='addr'>台北市中山區樂群二路 187 號 6 樓之 2 <br /> (大直豐匯）</h5>
                  </Grid>
                </Grid>
                <Grid className="map" container>
                  <Grid item xs={12} md={5}>
                    <img src={location} alt="" />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    {/* <img src={pin} alt="" /> */}
                    <div style={{ height: isDesktop()?'400px':'240px'}}>
                      {/* <iframe style={{width: '100%', height: '100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.630963869905!2d121.55583181577032!3d25.080494183950655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa33e89a7453%3A0x49bc12e190a1a6fd!2z5aSn5LqI5Ym15oSP6Kit6KiI6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1666725553062!5m2!1szh-TW!2stw" /> */}
                      <Map />
                    </div>
                  </Grid>
                </Grid>
              </Contact>
            </PageWrapper>
          </FAQ>
        </FormSection>
      </Controller>
    </ParallaxProvider>
  );
}

const RoundButton = styled.button`
  background: initial;
  border: 0;
  padding: 0;
  display: flex;
  color: #fff;
  display: inline-flex;
  padding: 16px 48px;
  align-items: center;
  text-decoration: none;
  border-radius: 100px;
  border: 2px solid ${colors.White};
  background-color: #fff;
  background: #0c1c24;
  border: 2px solid #0c1c24;
  border-radius: 100px;
  width: 230px;
  margin-top: 54px;
  h4 {
    margin: 0 0 0 12px;
  }
`;

const Intro = styled.div`
  padding: 200px 0 126px;
  .content {
    margin-top: 24px;
    h1 {
      margin: 0;
      display: flex;
      span {
        position: relative;
        /* width: 467px; */
        display: block;
        position: absolute;
        top: 20px;
        height: 24px;
        /* transition: all 0.5s ease-in-out; */
        background: ${colors.Yellow};
        z-index: -1;
        animation: marker 1s forwards;
        animation-delay: 2s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }
    }
  }
  @keyframes marker {
    from {
      width: 0;
    }
    to {
      width: 300px;
    }
  }
  ${media.medium`
    padding: 72px 0 20px;
    .content{
      margin-top: 8px;
    }
  `}
`;

const GetInTouch = styled.div`
  /* position: relative; */
  position: absolute;
  margin-top: 40px;
  right: 0;
  color: ${colors.White};
  width: 310px;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    width: 310px;
    height: 186px;
    background: ${colors.DarkBlue};
    border: 1px solid rgba(162, 170, 164, 0.5);
    box-shadow: 4px 4px 15px rgb(0 0 0 / 50%);
    border-radius: 100%;
    transform: rotate(-15deg);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  h2,
  h5 {
    margin: 0;
  }
  h5 {
    letter-spacing: 0.05em;
  }
  @media screen and (max-width: 1360px) {
    position: fixed;
    right: 8px;
    bottom: -20px;
    z-index: 3;
    width: 168px;
    gap: 8px;
    &::after {
      width: 168px;
      height: 100px;
      top: 40px;
    }
    h5{
      font-size: 10px;
    }
    img{
      width: 24px;
      transform: rotate(-90deg);
    }
  }
`;

const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 115px 0 24px;
  color: ${colors.DarkBlue};
  position: relative;
  h4 {
    margin: 20px 0 0;
    font-weight: 300;
  }
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    .dot {
      width: 16px;
      height: 16px;
      margin-bottom: 2px;
      border-radius: 100%;
      background-color: ${colors.DarkBlue};
      margin-right: 24px;
    }
    h2 {
      margin: 0;
    }
  }
  ${media.medium`
    margin: 72px 0 20px;
    padding: 32px 0 0;
    border-top: 1px solid ${colors.DarkBlue};
    .title{
      .dot{
        width: 12px;
        height: 12px;
        margin-right: 12px;
      }
    }
  `}
`;

const FormDivider = styled.div`
  display: flex;
  position: relative;
  border-top: 3px solid ${colors.DarkBlue};
  &::after {
    content: '';
    width: 100%;
    border-top: 1px solid ${colors.DarkBlue};
    top: 4px;
    position: absolute;
  }
`;
const FormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 0 24px;
  color: ${colors.DarkBlue};
  position: relative;
  h4 {
    margin: 20px 0 0;
    font-weight: 300;
  }
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    .dot {
      width: 16px;
      height: 16px;
      margin-bottom: 2px;
      border-radius: 100%;
      background-color: ${colors.DarkBlue};
      margin-right: 24px;
    }
    h2 {
      margin: 0;
    }
  }
`;

const StepList = styled.div`
  position: relative;
  .MuiGrid-container {
    border-left: 1px solid ${colors.DarkBlue};
    border-right: 1px solid ${colors.DarkBlue};
    padding-right: 40px;
  }
  @media screen and (max-width: 900px) {
    .MuiGrid-container {
      border-left: 0;
      border-right: 0;
      padding-right: 0;
      .MuiGrid-item{
        padding-bottom: 24px;
      }
    }
    &::after{
      content: '';
      width: 1px;
      height: 56px;
      border-right: 1px dashed ${colors.DarkBlue};
      position: absolute;
      left: 36px;
      top: 0;
      height: 432px;
      z-index: -1;
    }
  }

`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0px 32px 40px;
  .head {
    display: flex;
    align-items: baseline;
    h3 {
      margin: 0 0 0 8px;
    }
  }
  h4 {
    margin: 24px 0 0;
  }
  .horizon {
    background-image: linear-gradient(
      to right,
      ${colors.DarkBlue} 40%,
      rgba(255, 255, 255, 0) 20%
    );
    background-position: top;
    background-size: 8px 1px;
    background-repeat: repeat-x;
    height: 1px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: 0;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      border: 1px solid ${colors.DarkBlue};
      top: -5px;
      background-color: ${colors.BGMidGrey};
    }
  }
  ${media.medium`
    padding: 0;
    min-height: 114px;
    .head{
      align-items: flex-start;
      .huge{
        width: 62px;
        font-size: 48px;
        text-align: center;
        background-color: ${colors.BGMidGrey};
        padding: 12px 0;
      }
      h3{
        margin: 12px 0 0 24px;
      }
    }
    .horizon{
      display: none;
    }
    h4{
      margin: -16px 0 0 86px;
    }
  `}
`;

const FormSection = styled.div`
  position: relative;
  z-index: 0;
  .scrollmagic-pin-spacer {
    height: 100% !important;
    /* overflow: hidden; */
  }
  .left {
    /* position: fixed; */
    /* left: 0; */
    /* height: calc( 100vh - 100px ); */
    /* margin-left: 0; */
    height: 100vh;
    background: url(${formBg});
    background-size: cover;
    /* width: 592px; */
    /* top: 0; */
    padding: 120px 110px 0 82px;
    color: ${colors.White};
    margin-left: -80px;
    height: 100vh;
    /* width: 776px; */
    position: absolute;
    top: 64px;
  }
  .sticky-top {
    position: sticky;
    top: 0;
    left: 0;
    /* margin-left: 0; */
    /* width: 776px; */
  }
  .sticky-bottom {
    top: initial;
    bottom: 0;
  }
  .right {
    /* height: 1000px; */
    /* flex: 1 1 100%; */
    padding: 128px 0 160px 40px;
  }
  ${media.medium`
    .form-section{
      display: none;
    }
  `}
`;

const RadioGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 72px;
  .radio {
    background-color: ${colors.BGBeige};
    border: 1px solid rgba(162, 170, 164, 0.5);
    box-shadow: 4px 4px 10px rgba(162, 170, 164, 0.1);
    border-radius: 2px;
    width: 100%;
    padding: 20px;
    min-height: 210px;
    position: relative;
    transition: all 0.5s ease-in;
    h3 {
      margin: 0;
    }
    hr {
      border-top: 1px solid rgba(162, 170, 164, 0.5);
      margin: 12px 0;
    }
    p {
      margin: 0;
    }
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .active {
    background-color: ${colors.DarkBlue};
    color: ${colors.White};
    box-shadow: 4px 4px 10px rgba(162, 170, 164, 0.5);
  }
`;
const SmallRadioGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 72px;
  .radio {
    background-color: ${colors.BGBeige};
    border: 1px solid rgba(162, 170, 164, 0.5);
    box-shadow: 4px 4px 10px rgba(162, 170, 164, 0.1);
    border-radius: 2px;
    text-align: center;
    width: 100%;
    padding: 20px;
    position: relative;
    transition: all 0.5s ease-in;
    h3 {
      margin: 0;
    }
    hr {
      border-top: 1px solid rgba(162, 170, 164, 0.5);
      margin: 12px 0;
    }
    p {
      margin: 0;
    }
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .active {
    background-color: ${colors.DarkBlue};
    color: ${colors.White};
    box-shadow: 4px 4px 10px rgba(162, 170, 164, 0.5);
  }
`;

const InputForm = styled.div`
  label {
    width: 100%;
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }
  .input-group {
    display: flex;
    gap: 24px;
    margin-bottom: 40px;
  }
  input {
    flex: 1 1 50%;
    height: 62px;
    padding: 16px 12px;
    background-color: initial;
    border: 0;
    border-bottom: 1px solid ${colors.DarkBlue};
    font-size: 20px;
    &:focus-visible {
      /* border: 0; */
      outline: 0;
      background-color: #f8f2ec;
    }
  }
  textarea {
    padding: 16px 12px;
    font-size: 20px;
    resize: none;
    width: 100%;
    background-color: #f8f2ec;
    border: 0;
    /* border-bottom: 1px solid ${colors.DarkBlue}; */
    font-size: 20px;
  }
`;

const Horizon = styled.div<{
  blackBg?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 120px 0;
  color: ${prop => (prop.blackBg ? colors.White : colors.DarkBlue)};
  &::after {
    content: '';
    width: 100%;
    display: block;
    border-top: 1px solid
      ${prop => (prop.blackBg ? colors.White : colors.DarkBlue)};
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
    prop.blackBg ? colors.BGGrey : colors.DarkBlue};
      margin-right: 8px;
    }
    h4 {
      margin: 0;
    }
  }
  ${media.medium`
    padding: 64px 0 72px;
  `}
`;

const FAQ = styled.div`
  h1 {
    margin: 0;
  }
`;
const FaqGroup = styled.div`
  margin-bottom: 72px;
  .title {
    font-weight: bold;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    /* display: flex; */
    justify-content: space-between;
    border-top: 1px solid ${colors.DarkBlue};
    padding: 22px 0;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    .collapse {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      margin: 0;
      padding-right: 82px;
    }
    h3 {
      margin: 0;
    }
    &:nth-last-child(1) {
      border-bottom: 1px solid ${colors.DarkBlue};
    }
  }
`;

const Contact = styled.div`
  .title {
    font-size: 60px;
  }
  .map {
    margin: 48px 0 78px;
    img {
      object-fit: cover;
      height: 400px;
      display: flex;
      width: 100%;
      object-position: left;
    }
  }
  .addr{
    br{
      display: none;
    }
  }
  ${media.medium`
    .title{
      font-size: 32px;
      margin: 0 0 8px;
    }
    h1{
      margin-bottom: 24px;
    }
    h4{
      margin: 24px 0 0;
    }
    h5{
      margin: 0;
    }
    .map{
      img{
        height: 240px;
      }
    }
    .addr{
      br{
        display: block;
      }
    }
  `}
`;

const FeatureHead = styled.h2`
  display: flex;
  justify-content: end;
  .draw::after{
    content: '';
    border-bottom: 15px solid ${colors.Yellow};
  }
  ${media.medium`
    display: block;
    margin-bottom: 0;
    margin-top: 8px;
    span{
      display: inline-block;
      height: 35px;
    }
    .draw{
      display: inline;
      background-size: 1px 16px;
      box-shadow: inset 0 4px ${colors.BGGreen}, inset 0px 54px ${colors.Yellow};
    }
  `}
`
