import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useWindowSize, isDesktop } from '../../hooks'
import * as colors from 'styles/colors';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components/macro';
import { useForm as formspreeUseForm, ValidationError } from '@formspree/react';
import { Box, Checkbox, TextField, Alert } from '@mui/material';
import SliderBar from './Slider';
import { Grid, Container } from '@mui/material';
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
import Dialog from '@mui/material/Dialog';
import { Element, scroller } from 'react-scroll';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import closeIcon from './assets/close-icon.svg';
import { useForm, Controller as FormController, FormProvider } from 'react-hook-form';
import Collapse from 'app/components/Collapse'
import ajax from 'ajax';
const Services = [
  {
    "title": "創新服務設計",
    "content": "從企業以及用戶角度，透過定義線上及線下的服務價值、規劃服務藍圖，打造創新且獨特的服務體驗。"
  },
  {
    "title": "網站規劃與設計",
    "content": "大型官網、功能型網站、電商網站的建置或改版，包含概念設計、資訊架構規劃、互動設計、視覺設計與前端開發。"
  },
  {
    "title": "App 軟體規劃設計",
    "content": "手機或平板 App 的建置或改版，包含概念設計、資訊架構規劃、互動設計、視覺設計。"
  },
  {
    "title": "使用者研究 / 體驗策略",
    "content": "透過量化或質化的使用者研究，找出使用者的需求、痛點、爽點，訂定產品與服務的體驗策略。"
  },
  {
    "title": "體驗優化健檢",
    "content": "檢視現有的產品服務流程與顧客旅程地圖，以專家評估或易用性測試等方法，找出服務的斷點與優化的機會點，並提出優化方向建議。"
  },
  {
    "title": "教育訓練",
    "content": "使用者體驗或介面設計專業諮詢、內部創新設計團隊顧問服務、體驗設計工作坊。"
  }
]
export function ContactPage() {
  function Mark() {
    const { ref } = useParallax<HTMLDivElement>({});
    return <span ref={ref} />;
  }
  const [sticky, setSticky] = useState(false);
  const [bottomSticky, setBottomSticky] = useState(false);
  const positionRef = useRef<HTMLDivElement>(null);
  const FaqPositionRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowSize().width
  const [enterForm, setEnterForm] = useState(false)

  const [state, formSubmit] = formspreeUseForm('mrgvzjnr');
  useScrollPosition(({ prevPos, currPos }) => {
    if (windowWidth > 960) {
      // console.log(positionRef.current!.getBoundingClientRect().top);
      if (
        positionRef.current!.getBoundingClientRect().top < 680 &&
        positionRef.current!.getBoundingClientRect().top > -2012
      ) {
        setEnterForm(true)
      } else {
        setEnterForm(false)
      }
    }
    if (
      positionRef.current!.getBoundingClientRect().top < 16 &&
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
  const [open, setOpen] = React.useState(false);
  const [commentVal, setCommentVal] = React.useState('');
  const handleClose = () => {
    setOpen(false);
  };
  const [openNotification, setOpenNotification] = useState(false)

  const methods = useForm()
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
    getValues,
    setValue,
    trigger,
    register,
    watch
  } = methods

  const _onSubmit = async (data) => {
    // console.log(data);
    let service: string[] = []
    for (let property in data) {
      // console.log('key:' + property, 'value:' + data[property]);
      // console.log(typeof(property));
      const name = property
      if (data[property] === true) {
        service.push(property)
      }
    }
    // console.log(service);
    const timeName = ["三週內", "一個月內", "二個月內", "沒有或不確定"]
    const coopTimeName = ["三個月內", "半年內", "一年"]

    const budgeArr = ["0萬", "100萬", "200萬", "300萬", "400萬", "500萬", "600萬", "700萬", "800萬以上"]
    let budgeText = ''
    data.budge.map((item, index) => {
      budgeText += (budgeArr[(item / 12.5)] + (index == 0 ? '至' : ''))
    })
    // console.log(budgeText);

    let body = {
      "method": "write",
      "name": data.name,
      "company": data.company,
      "phone": data.phone,
      "email": data.email,
      "service": service,
      "startTime": timeName[data.time],
      "coopTime": coopTimeName[data.coopTime],
      "budge": budgeText,
      "comment": data?.comment?data.comment:''
    }
    let formSpreeBody = {
      "聯絡人": data.name,
      "公司名稱": data.company,
      "聯絡電話": data.phone,
      "電子郵件": data.email,
      "需要的服務類型": service,
      "預計的開案時間": timeName[data.time],
      "合作時程": coopTimeName[data.coopTime],
      "預算": budgeText,
      "專案細節": data?.comment?data.comment:''
    }
    // console.log(body);

    formSubmit(formSpreeBody);
    ajax.post('https://script.google.com/macros/s/AKfycbwoQO9zYA7Z5LsvZ46taKVMc_yZkItma5ykVzm4STyWCrLtBQkvyNAYLWiQZhZCSxzrnA/exec', body);
    setOpenNotification(true)
    setTimeout(() => {
      setOpenNotification(false);
    }, 3000);
  }

  const _onError = (error) => {
    console.log(error);
    const element = document.getElementById(Object.keys(error)[0]);
    // console.log(element);
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }
  useEffect(() => {
    setValue(Services[0].title, true);
    setValue('time', 0);
    setValue('coopTime', 0);
  }, [])

  const getTime = watch('time')
  const getCoopTime = watch('coopTime')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <ParallaxProvider>
      <Controller>
        <Helmet>
          <title>聯絡我們</title>
          <meta
            name="description"
            content="Let’s talk about what we can make, build, design together."
          />
        </Helmet>
        <Notification open={openNotification}>
          <Alert severity="success">表單已送出，我們會盡快與您聯繫！</Alert>
          <Fade top>
          </Fade>
        </Notification>
        <Dialog
          open={open}
          // TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <IconButton onClick={() => setOpen(false)}
            >
              <img src={closeIcon} alt="close" />
            </IconButton>
          </DialogTitle>
          <MbForm>
            <div className="huge eng">Want to do good thing?</div>
            <h1>專案諮詢</h1>
            <h5>您可以透過此份表單讓我們理解您的需求，也同時釐清您所需要的協助！<br />
              也歡迎您隨時來電洽詢：886-2-85029135
            </h5>
            <div className="horizon" />
            <form onSubmit={handleSubmit(_onSubmit, _onError)}>
              <FormTitle>
                <div className="title">
                  <div className="dot" />
                  <h2>您需要的服務類型是？</h2>
                  <h5 style={{ margin: '0 0 0 4px', display: 'flex', alignItems: "end" }}>（可複選）</h5>
                </div>
              </FormTitle>
              <RadioGroup>
                {Services.map((item, index) => {
                  return (
                    <FormController
                      name={item.title}
                      control={control}
                      key={index}
                      render={({ field, fieldState: { invalid } }) => (
                        <CustomCheckbox className={`${field.value === true ? 'active' : ''} radio`} onClick={() => setValue(item.title, !field.value)}>
                          <label>
                            <Checkbox
                              name={field.name}
                              color="primary"
                              checked={field.value === true}
                              style={{
                                padding: '0 8px 0 0',
                                ...(invalid ? { color: '#FF0000' } : {}),
                              }}
                            />
                            <h3>{item.title}</h3>
                            <hr />
                            <p>
                              {item.content}
                            </p>
                          </label>
                        </CustomCheckbox>
                      )}
                    />
                  )
                })}
              </RadioGroup>
              <FormTitle>
                <div className="title">
                  <div className="dot" />
                  <h2>您預計的開案時間？</h2>
                </div>
              </FormTitle>
              <FormController
                name="time"
                control={control}
                render={({ field, fieldState: { invalid } }) => (

                  <SmallRadioGroup>
                    <div className={`radio ${getTime === 0 ? 'active' : ''}`}>
                      <label>
                        <input
                          type="radio"
                          value={0}
                          checked={getTime === 0}
                          onChange={() => setValue('time', 0)}
                        />
                        <h3>三週內</h3>
                      </label>
                    </div>
                    <div className={`radio ${getTime === 1 ? 'active' : ''}`}>
                      <label>
                        <input
                          type="radio"
                          value={1}
                          checked={getTime === 1}
                          onChange={() => setValue('time', 1)}
                        />
                        <h3>一個月內</h3>
                      </label>
                    </div>
                    <div className={`radio ${getTime === 2 ? 'active' : ''}`}>
                      <label>
                        <input
                          type="radio"
                          value={2}
                          checked={getTime === 2}
                          onChange={() => setValue('time', 2)}
                        />
                        <h3>二個月內</h3>
                      </label>
                    </div>
                    <div className={`radio ${getTime === 3 ? 'active' : ''}`}>
                      <label>
                        <input
                          type="radio"
                          value={3}
                          checked={getTime === 3}
                          onChange={() => setValue('time', 3)}
                        />
                        <h3>沒有或不確定</h3>
                      </label>
                    </div>
                  </SmallRadioGroup>
                )}
              />
              <FormTitle>
                <div className="title">
                  <div className="dot" />
                  <h2>您預計的合作時程？</h2>
                </div>
              </FormTitle>
              <FormController
                name="coopTime"
                control={control}
                defaultValue={0}
                render={({ field, fieldState: { invalid } }) => (
                  <SmallRadioGroup>
                    <div
                      className={`radio ${getCoopTime === 0 ? 'active' : ''}`}
                    >
                      <label>
                        <input
                          type="radio"
                          value={0}
                          checked={getCoopTime === 0}
                          onChange={() => {
                            setValue('coopTime', 0);
                          }}
                        />
                        <h3>三個月內</h3>
                      </label>
                    </div>
                    <div
                      className={`radio ${getCoopTime === 1 ? 'active' : ''}`}
                    >
                      <label>
                        <input
                          type="radio"
                          value={1}
                          checked={getCoopTime === 1}
                          onChange={() => setValue('coopTime', 1)}
                        />
                        <h3>半年內</h3>
                      </label>
                    </div>
                    <div
                      className={`radio ${getCoopTime === 2 ? 'active' : ''}`}
                    >
                      <label>
                        <input
                          type="radio"
                          value={2}
                          checked={getCoopTime === 2}
                          onChange={() => setValue('coopTime', 2)}
                        />
                        <h3>一年</h3>
                      </label>
                    </div>
                  </SmallRadioGroup>
                )}
              />
              <FormTitle>
                <div className="title">
                  <div className="dot" />
                  <Box display={'flex'} flexDirection={windowWidth > 960 ? "row" : "column"} alignContent={"baseline"}>
                    <h2>您設想的預算大約是？</h2>
                    <h5 style={{ margin: windowWidth > 960 ? '0 0 0 4px' : '0 0 0 -12px', display: 'flex', alignItems: "end" }}>（拖曳選擇範圍）</h5>
                  </Box>
                </div>
              </FormTitle>
              <Box width={"100%"} padding="0 40px 0 12px">
                <FormController
                  name="budge"
                  control={control}
                  // defaultValue={0}
                  render={({ field, fieldState: { invalid } }) => (
                    <SliderBar sendBudge={(val) => {
                      // console.log(val);
                      setValue('budge', val)
                    }} />
                  )}
                />
              </Box>

              <FormTitle>
                <div className="title">
                  <div className="dot" />
                  <Box display={'flex'} flexDirection="row" alignContent={"baseline"}>
                    <h2>您的聯絡方式</h2>
                    <h5 style={{ margin: '0 0 0 4px', display: 'flex', alignItems: "end" }}>（＊必填）</h5>
                  </Box>
                </div>
              </FormTitle>
              <InputForm>
                <div className="input-group">
                  <Element id="name" name="name">
                    <FormController
                      name="name"
                      control={control}
                      rules={{
                        required: '請填寫您的姓名'
                      }}
                      render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                          {...field}
                          type="text"
                          variant="filled"
                          label="聯絡人 *"
                          fullWidth
                          error={invalid}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Element>
                  <Element id="company" name="company">
                    <FormController
                      name="company"
                      control={control}
                      rules={{
                        required: '請填寫您的公司名稱'
                      }}
                      render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                          {...field}
                          type="text"
                          variant="filled"
                          label="公司名稱 *"
                          fullWidth
                          error={invalid}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Element>
                </div>
                <div id="phone" className="input-group">
                  <Element  name="phone">
                    <FormController
                      name="phone"
                      control={control}
                      rules={{
                        required: '請填寫您的聯絡電話'
                      }}
                      render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                          {...field}
                          label="聯絡電話 *"
                          type="text"
                          variant="filled"
                          fullWidth
                          error={invalid}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Element>
                  <Element id="email" name="email">
                    <FormController
                      name="email"
                      control={control}
                      rules={{
                        required: "請填寫您的電子郵件",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: '請填寫有效的電子郵件'
                        }
                      }}
                      render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                          {...field}
                          type="text"
                          variant="filled"
                          label="電子郵件 *"
                          fullWidth
                          error={invalid}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Element>
                </div>
                <FormTitle>
                  <div className="title">
                    <div className="dot" />
                    <h2>告訴我們更多關於您的專案細節吧！</h2>
                  </div>
                </FormTitle>
                <div className="input-group">
                  <FormController
                    name="comment"
                    control={control}
                    // rules={{
                    //   required: true
                    // }}
                    render={({ field, fieldState: { error, invalid } }) => (
                      <TextField
                        {...field}
                        type="text"
                        variant="filled"
                        multiline
                        rows={5}
                        placeholder=""
                        fullWidth
                        error={invalid}
                        helperText={error?.message}
                      />
                    )}
                  />
                </div>
              </InputForm>
              <Box width={'100%'} textAlign="center">
                <RoundButton type="submit" disabled={false}>
                  <h4 className="">立即送出</h4>
                  <img src={arrowWhite} alt="arrow" />
                </RoundButton>
              </Box>
            </form>
          </MbForm>
        </Dialog>
        <NavBar bgColor={colors.BGMidGrey} color={colors.DarkBlue} />
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
                <GetInTouch show={!enterForm} onClick={() => {
                  windowWidth > 960 ? scroller.scrollTo('form', {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                    offset: -208
                  }) : setOpen(true)
                }}>
                  <Box className='get-in-touch-wrapper'>
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
                        AJA 向您做公司簡介並溝通專案需求，客戶可提供需求說明書（RFP）或其他有助於專案範圍評估的資料。
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
                        依據客戶提供的資訊提出服務規劃、專案時程、報價等，讓您對內呈報並進行選商決策。
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
                        客戶確認專案報價與範圍（SOW）之後，即可進行簽約，簽約完成後即可開案。
                      </h4>
                    </Step>
                  </Grid>
                </Grid>
              </StepList>
            </Intro>

          </PageWrapper>
        </div>
        <FormSection className="service-second-section">
          <div className="form-section">
            <PageWrapper
              overflow={'false'}
            >
              <Grid container spacing={8}>
                <Grid item xs={4} ref={positionRef} position="relative">
                  <div
                    className={`left ${sticky ? 'sticky-top' : ''} ${bottomSticky ? 'sticky-bottom' : ''
                      }`}
                  >
                    <div className="huge eng">
                      Let's Do <br /> This.
                    </div>
                    <h1>專案諮詢</h1>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className="right">
                    <FormDivider />
                    <h3>
                      已經有具體的設計需求嗎？您可以透過此份表單告訴我們您的專案細節，<br />
                      或歡迎來電洽詢 +886-2-8502-9135 。
                    </h3>
                    <Element name='form' >
                      <form onSubmit={handleSubmit(_onSubmit, _onError)}>
                        <FormTitle>
                          <div className="title">
                            <div className="dot" />
                            <Box display={'flex'} flexDirection="row" alignContent={"baseline"}>
                              <h2>您需要的服務類型是？</h2>
                              <h5 style={{ margin: '0 0 0 4px', display: 'flex', alignItems: "end" }}>（可複選）</h5>
                            </Box>
                          </div>
                        </FormTitle>
                        <RadioGroup>
                          {Services.map((item, index) => {
                            return (
                              <FormController
                                name={item.title}
                                control={control}
                                key={index}
                                render={({ field, fieldState: { invalid } }) => (
                                  <CustomCheckbox className={`${field.value === true ? 'active' : ''} radio`} onClick={() => setValue(item.title, !field.value)}>
                                    <label>
                                      <Checkbox
                                        name={field.name}
                                        color="primary"
                                        checked={field.value === true}
                                        style={{
                                          padding: '0 8px 0 0',
                                          ...(invalid ? { color: '#FF0000' } : {}),
                                        }}
                                      />
                                      <h3>{item.title}</h3>
                                      <hr />
                                      <p>
                                        {item.content}
                                      </p>
                                    </label>
                                  </CustomCheckbox>
                                )}
                              />
                            )
                          })}
                        </RadioGroup>
                        <FormTitle>
                          <div className="title">
                            <div className="dot" />
                            <h2>您預計的開案時間？</h2>
                          </div>
                        </FormTitle>
                        <FormController
                          name="time"
                          control={control}
                          render={({ field, fieldState: { invalid } }) => (

                            <SmallRadioGroup>
                              <div className={`radio ${getTime === 0 ? 'active' : ''}`}>
                                <label>
                                  <input
                                    type="radio"
                                    value={0}
                                    checked={getTime === 0}
                                    onChange={() => setValue('time', 0)}
                                  />
                                  <h3>三週內</h3>
                                </label>
                              </div>
                              <div className={`radio ${getTime === 1 ? 'active' : ''}`}>
                                <label>
                                  <input
                                    type="radio"
                                    value={1}
                                    checked={getTime === 1}
                                    onChange={() => setValue('time', 1)}
                                  />
                                  <h3>一個月內</h3>
                                </label>
                              </div>
                              <div className={`radio ${getTime === 2 ? 'active' : ''}`}>
                                <label>
                                  <input
                                    type="radio"
                                    value={2}
                                    checked={getTime === 2}
                                    onChange={() => setValue('time', 2)}
                                  />
                                  <h3>二個月內</h3>
                                </label>
                              </div>
                              <div className={`radio ${getTime === 3 ? 'active' : ''}`}>
                                <label>
                                  <input
                                    type="radio"
                                    value={3}
                                    checked={getTime === 3}
                                    onChange={() => setValue('time', 3)}
                                  />
                                  <h3>沒有或不確定</h3>
                                </label>
                              </div>
                            </SmallRadioGroup>
                          )}
                        />
                        <FormTitle>
                          <div className="title">
                            <div className="dot" />
                            <h2>您預計的合作時程？</h2>
                          </div>
                        </FormTitle>
                        <FormController
                          name="coopTime"
                          control={control}
                          render={({ field, fieldState: { invalid } }) => (
                            <SmallRadioGroup>
                              <div
                                className={`radio ${getCoopTime === 0 ? 'active' : ''}`}
                              >
                                <label>
                                  <input
                                    type="radio"
                                    value={0}
                                    checked={getCoopTime === 0}
                                    onChange={() => {
                                      setValue('coopTime', 0);
                                    }}
                                  />
                                  <h3>三個月內</h3>
                                </label>
                              </div>
                              <div
                                className={`radio ${getCoopTime === 1 ? 'active' : ''}`}
                              >
                                <label>
                                  <input
                                    type="radio"
                                    value={1}
                                    checked={getCoopTime === 1}
                                    onChange={() => setValue('coopTime', 1)}
                                  />
                                  <h3>半年內</h3>
                                </label>
                              </div>
                              <div
                                className={`radio ${getCoopTime === 2 ? 'active' : ''}`}
                              >
                                <label>
                                  <input
                                    type="radio"
                                    value={2}
                                    checked={getCoopTime === 2}
                                    onChange={() => setValue('coopTime', 2)}
                                  />
                                  <h3>一年</h3>
                                </label>
                              </div>
                            </SmallRadioGroup>
                          )}
                        />

                        <FormTitle>
                          <div className="title">
                            <div className="dot" />
                            <Box display={'flex'} flexDirection="row" alignContent={"baseline"}>
                              <h2>您設想的預算大約是？</h2>
                              <h5 style={{ margin: '0 0 0 4px', display: 'flex', alignItems: "end" }}>（拖曳選擇範圍）</h5>
                            </Box>
                          </div>
                        </FormTitle>
                        {/* {JSON.stringify(watch('budge'))} */}
                        <Box width={"100%"} padding="0 40px 0 12px">
                          <FormController
                            name="budge"
                            control={control}
                            defaultValue={[12.5, 37.5]}
                            render={({ field, fieldState: { invalid } }) => (
                              <SliderBar sendBudge={(val) => {
                                console.log(val);
                                setValue('budge', val)
                              }} />
                            )}
                          />
                        </Box>
                        <FormTitle>
                          <div className="title">
                            <div className="dot" />
                            <Box display={'flex'} flexDirection="row" alignContent={"baseline"}>
                              <h2>您的聯絡方式</h2>
                              <h5 style={{ margin: '0 0 0 4px', display: 'flex', alignItems: "end" }}>（＊必填）</h5>
                            </Box>
                          </div>
                        </FormTitle>
                        <InputForm>
                          <div className="input-group">
                            <FormController
                              name="name"
                              control={control}
                              rules={{
                                required: '請填寫您的姓名'
                              }}
                              render={({ field, fieldState: { error, invalid } }) => (
                                <TextField
                                  {...field}
                                  type="text"
                                  variant="filled"
                                  label="聯絡人 *"
                                  fullWidth
                                  error={invalid}
                                  helperText={error?.message}
                                />
                              )}
                            />
                            <FormController
                              name="company"
                              control={control}
                              rules={{
                                required: '請填寫您的公司名稱'
                              }}
                              render={({ field, fieldState: { error, invalid } }) => (
                                <TextField
                                  {...field}
                                  type="text"
                                  variant="filled"
                                  label="公司名稱 *"
                                  fullWidth
                                  error={invalid}
                                  helperText={error?.message}
                                />
                              )}
                            />
                          </div>
                          <div className="input-group">
                            <FormController
                              name="phone"
                              control={control}
                              rules={{
                                required: '請填寫您的聯絡電話'
                              }}
                              render={({ field, fieldState: { error, invalid } }) => (
                                <TextField
                                  {...field}
                                  label="聯絡電話 *"
                                  type="text"
                                  variant="filled"
                                  fullWidth
                                  error={invalid}
                                  helperText={error?.message}
                                />
                              )}
                            />
                            <FormController
                              name="email"
                              control={control}
                              rules={{
                                required: "請填寫您的電子郵件",
                                pattern: {
                                  value: /\S+@\S+\.\S+/,
                                  message: '請填寫有效的電子郵件'
                                }
                              }}
                              render={({ field, fieldState: { error, invalid } }) => (
                                <TextField
                                  {...field}
                                  type="text"
                                  variant="filled"
                                  label="電子郵件 *"
                                  fullWidth
                                  error={invalid}
                                  helperText={error?.message}
                                />
                              )}
                            />
                          </div>
                          <FormTitle>
                            <div className="title">
                              <div className="dot" />
                              <h2>告訴我們更多關於您的專案細節吧！</h2>
                            </div>
                          </FormTitle>
                          {/* {watch('comment')} */}
                          <div className="input-group">
                            <FormController
                              name="comment"
                              control={control}
                              // rules={{
                              //   required: true
                              // }}
                              render={({ field, fieldState: { error, invalid } }) => (
                                <TextField
                                  {...field}
                                  type="text"
                                  variant="filled"
                                  multiline
                                  rows={5}
                                  placeholder="寫下更多關於產品或專案的想法，幫助我們更理解您的需求。"
                                  fullWidth
                                />
                              )}
                            />
                          </div>
                        </InputForm>
                        <Box width={'100%'} textAlign="center">
                          <RoundButton type="submit" disabled={false}>
                            <h4 className="">立即送出</h4>
                            <img src={arrowWhite} alt="arrow" />
                          </RoundButton>
                        </Box>
                      </form>
                    </Element>
                  </div>
                </Grid>
              </Grid>
            </PageWrapper>
          </div>
          <FAQ ref={FaqPositionRef} className="bg-FAQ">
            <PageWrapper>
              <Horizon>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">LEARN MORE</h4>
                </div>
                <h4 className="eng">01</h4>
              </Horizon>
              <Grid container spacing={8}>
                <Grid item xs={12} md={4}>
                  <Box>
                    <div className="huge eng">FAQ</div>
                    <h1>常見問題</h1>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FaqGroup>
                    <h3 className="title">服務項目</h3>
                    <Collapse list={[
                      {
                        title: "什麼專案找 AJA 做最適合？",
                        answer: `<ul><li>服務/功能型網站、大型官網、行動裝置 App、系統軟體等數位介面的規劃與設計。</li><li>想優化產品或服務的使用者體驗，積極尋求創新並提升競爭力。</li><li>貴公司想進行數位轉型，期待從使用者的角度出發訂定使用者體驗的策略。</li><li>常被客訴貴公司的數位服務或產品的介面不好看、不好用、流程卡關。</li><li>貴公司投資大筆預算提升資訊系統，但操作複雜、效率不彰。</li></ul>`,
                        expanded: true
                      },
                      {
                        title: "除了 UX/UI 設計，AJA 能協助程式開發嗎？",
                        answer: `<b>AJA 專注於 Web 前端開發，並不提供中、後台程式開發的服務。</b>因為程式開發和 UX/UI 設計的職能屬性大不相同。UX 與 UI 設計著重在優化使用者體驗、規劃產品該提供的功能、協助流程操作順暢、設計令人喜愛的視覺表現等。我們希望把心力放在做對的事情，發揮最大的合作成效。AJA 的客戶大多都有自己的 IT 或合作開發廠商，因此擁有許多與開發團隊配合的經驗。我們能提供完整規格文件，能與貴公司內外部的開發團隊合作無礙，讓設計與最終產品的結果一致。<br/><br/>若是 Web-based 的 UI ，我們會負責前端的 HTML 頁面和 CSS 程式碼。RD 只要依據我們前面跟貴公司確認的規格文件與設計圖，聚焦在完成程式功能並提升效能即可。若貴公司沒有內部開發團隊，我們也可以跟您指定的開發廠商合作，或由我們為您介紹合適的程式開發商。`,
                        expanded: false
                      },
                    ]} />
                  </FaqGroup>
                  <FaqGroup>
                    <h3 className="title">合作方式</h3>
                    <Collapse list={[
                      {
                        title: "該在產品/服務開發的哪個階段，讓 AJA 開始參與？",
                        answer: `<b>建議在產品的初期規劃階段或進行軟體改版計畫之前，就讓 AJA 加入專案。</b>我們希望盡早理解貴公司的商業策略與目標，會針對公司內相關部門的需求進行訪談，研究終端使用者或消費者的潛在需求或痛點，找到產品或服務的改善點或機會點。這樣不但可節省內部人力資源，更可善用 AJA 在各產業專案累積的經驗，提昇產品/服務的成功率與競爭力。<br/><br/>若貴公司產品都已經規劃完成，規格也已制定，我們的工作重點則會放在強化改善 UI 設計，並透過易用性測試或設計驗證，確保產品與服務的體驗。`,
                        expanded: false
                      },
                      {
                        title: "是否可以請 AJA 先提案比稿，再決定是否外包給你們？",
                        answer: `<b>我們理解大型專案仍需經過必要的選商流程，但我們更相信，一個好設計，必須對要解決的問題有相當程度了解之後，才更有機會達成。</b>對於每個專案，AJA 會先投入相當的人力與時間，淬鍊出最好的設計。AJA 對於每個客戶的專案，是完全客製且獨特的，沒有模版也沒有捷徑，只有日積月累的專業能力和經驗。我們可先向您展示過去類似的案例作品，並協助您做內部溝通，說明我們會如何進行專案、預計交付的成果，及可能的設計方向。在一定的預算規模前提下，我們仍可依據客戶提供的邀稿/需求說明書（RFP）並與客戶充分溝通之後，提供服務建議書並參與選商。`,
                        expanded: false
                      },
                      {
                        title: "專案時程需花費多久？",
                        answer: `<b>視專案的規模與內容，以及當時人力狀況而定。平均約為 3~6 個月。</b>一般而言，一個中型規模以上的 App 或網站專案，需要 4~6 週進行研究規劃，4~6 週完成 UX/UI 設計，以及額外的 4~8 週完成給圖作業或前端開發。通常開發人員在設計專案進行到中、後半段時就可以開始同步進行程式開發作業。若狀況允許，我們建議保留多點時間在前期的研究與規劃階段，包含設計重點、規格訂定、設計風格等，這些項目確認越清楚，後續細部設計與開發效率也會相對提昇。`,
                        expanded: false
                      },
                      {
                        title: "專案進行時，如何配合達到最好成效？",
                        answer: `<b>以專案小組與您充分討論溝通，更歡迎您與我們共同參與相關活動。</b>專案正式開始時，AJA 通常會組成專案小組並配置一位專案經理（PM），PM 將與您討論開案時需要準備的事項，包含盤點現有資源、安排利益關係人內訪、使用者分群與研究方法、專案管理方式等，並舉行開案會議（kick-off meeting）。專案過程中如果包含使用者研究、訪談、測試，也將邀請您一起參與相關活動。另外，也需要貴公司協助安排提案會議、設計說明會議、交付驗收會議等，讓專案能夠如期如質的完成。`,
                        expanded: false
                      },
                      {
                        title: "專案結束後，後續的改版或更新怎麼辦？",
                        answer: `<b>一般來說，AJA 交付所有的設計成果之後，會提供一個月的保固。</b>保固期間若設計有瑕疵或缺漏，我們會負責到底。當然，在開發過程中才發現的瑕疵或缺漏，我們仍會提供一定的支援服務。如果客戶內部有視覺設計人員，我們也可以把設計內容交接給他們，讓客戶自己就可以進行細部的視覺調整作業。如果沒有內部的美術人員，客戶可以把 AJA 當做專屬的設計師，我們會儘可能配合客戶的需求安排適當的人員，費用的部份則採用工時實報實銷，以月結的方式請款。`,
                        expanded: false
                      },
                    ]} />

                  </FaqGroup>
                  <FaqGroup>
                    <h3 className="title">報價相關</h3>
                    <Collapse list={[
                      {
                        title: "報價如何計算？",
                        answer: `<b>UX/UI 設計的費用會根據專案特性、工作項目，以及使用到的職能種類來計價。</b>報價通常跟以下條件相關：<br/><ul><li><b style="display:contents">是否有明確的規格書？</b>如果沒有，在前期就需要花較多的時間協助客戶訂定產品策略與目標、規劃產品資訊架構、設計操作流程、繪製框架圖（wireframe） 等。</li><li><b style="display:contents">產品/服務內容的多寡。</b>有些專案較著重在視覺表現，有些則注重使用流程，有些 icon 很多，或視覺 layout 較複雜等。</li><li><b style="display:contents">專案的專業特性。</b>一些較特殊的產業或使用者對象，會花費較多的時間在研究和改善使用經驗，如果需要進行使用者訪談與測試等，則會產生額外費用。</li></ul><br/>AJA 在一開始，會儘可能蒐集相關資訊並依據實際工作項目與投入人員的職能、工時進行報價。通常一個手機 App 的 UX/UI 設計案，預算從 150 萬到 500 萬都有；一個網站規劃與設計案，則落於 200 萬到上千萬不等。但每個專案特性和狀態都不同，建議先進行整體評估之後，再進行報價。 <br/><br/>我們也與許多公司採年約方式合作。如果專案規模和數量並不明確，但又需要長期配合的設計夥伴，我們可根據案量配置適當的設計師人力，以實際發生的工時來計價（time-based）。年約方案讓 AJA 的設計師就像貴公司內部專屬設計師一樣，但此種合作模式較適合有一定的信任基礎，以及需要 AJA 協助設計創新性質的專案。想暸解更多報價方式，歡迎與我們聯絡。`,
                        expanded: false
                      },
                      {
                        title: "報價之前，需要準備哪些資料？",
                        answer: `<b>通常報價之前，需要有以下全部或部分的文件與參考資料：</b><ul><li>產品/服務的功能列表</li><li>專案預計啟動與完成的時間</li><li>若是改版專案，請提供現有網站/ App 版本供試用或測試帳號/App版本供試用或測試帳號</li><li>現有的規劃文件或規格文件</li><li>預計新增/移除的功能及相關說明</li><li>預期達成的專案成果與目標</li></ul>如果可以，建議由 AJA 的業務代表當面說明或展示專案需求是最有效的方式。我們會先跟您電話溝通，確定 AJA 提供的服務能符合貴公司的需求，再行安排業務拜訪。`,
                        expanded: false
                      },
                      {
                        title: "想與 AJA 合作，但預算有限？",
                        answer: `<b>我們理解貴公司或有預算限制與考量，若初期無法一次性編列 UX/UI 設計的預算，建議可分階段進行或將工作拆分。</b>例如，一個網站設計案，可將研究規劃、視覺設計、前端開發視為三個工作分階段進行；或只外發研究規劃的部份，視覺設計或前端開發由內部製作。但並不建議只讓 AJA 做視覺設計或前端開發的工作，因為 AJA 的價值著重於前期對使用者的洞察與訂定體驗策略，更能為產品與服務的開發帶來更高價值。`,
                        expanded: false
                      }
                    ]} />
                  </FaqGroup>
                </Grid>
              </Grid>
              <Horizon>
                <div className="title">
                  <div className="dot" />
                  <h4 className="eng">CONTACT</h4>
                </div>
                <h4 className="eng">02</h4>
              </Horizon>
              <Contact>
                <Grid container spacing={isDesktop() ? 8 : 0}>
                  <Grid item xs={12} md={5}>
                    <Box>
                      <div className="title eng">Where we are</div>
                      <h1>聯繫我們</h1>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3} className="contact-us">
                    <h4 className="eng">Contact Us.</h4>
                    <h5>
                      <Box><div className="left-col">T.</div><div className="right-col">+886-2-85029135</div></Box>
                      <Box><div className="left-col">F.</div><div className="right-col">+886-2-85029151</div></Box>
                      <Box><div className="left-col">M.</div><div className="right-col">+886-922-083-876</div></Box>
                    </h5>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <h4 className="eng">Find Us.</h4>
                    <h5 className='addr'>台北市中山區樂群二路 187 號 6 樓之 2 <br />（大直豐滙）</h5>
                  </Grid>
                </Grid>
                <Grid className="map" container>
                  <Grid className='location' item xs={12} md={5}>
                    <img src={location} alt="location" />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <div style={{ height: isDesktop() ? '400px' : '240px' }}>
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
  background: ${colors.DarkBlue};
  /* border: 2px solid #0c1c24; */
  border-radius: 100px;
  width: 272px;
  margin-top: 54px;
  cursor: pointer;
  justify-content: center;
  h4 {
    margin: 0 0 0 12px;
    font-size: 24px;
    font-weight: 500;
  }
  ${media.medium`
    h4{
      font-size: 14px;
    }
  `}
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

const GetInTouch = styled.div<{
  show: boolean
}>`
  /* position: relative; */
  position: absolute;
  margin-top: 40px;
  right: 0;
  color: ${colors.White};
  width: 310px;
  height: 186px;
  display: ${prop => prop.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
  img{
    animation: shake 2s infinite;
    position: relative;
  }
  @keyframes shake {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, 4px, 2px);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  &::after {
    content: '';
    display: block;
    width: 310px;
    height: 186px;
    background: ${colors.DarkBlue};
    /* border: 1px solid rgba(162, 170, 164, 0.5); */
    /* box-shadow: 4px 4px 15px rgb(0 0 0 / 50%); */
    box-shadow: 4px 4px 8px rgba(12, 28, 36, 0.05);
    border-radius: 100%;
    transform: rotate(-15deg);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    outline: 0 solid rgba(255, 248, 142, .45);
  }
  &::before {
    content: '';
    display: block;
    width: 310px;
    height: 186px;
    background: ${colors.DarkBlue};
    border: 1px solid rgba(162, 170, 164, 0.5);
    /* box-shadow: 4px 4px 15px rgb(0 0 0 / 50%); */
    border-radius: 100%;
    transform: rotate(-15deg);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    outline: 0 solid rgba(255, 248, 142, .45);
    transition: all .2s ease-in;
  }
  &:hover::before{
    /* animation: pulse .5s infinite; */
    /* outline: 50px solid rgba(255, 248, 142, .45); */
    box-shadow: 0px 0px 88px #fff88e;
    opacity: 1;
    /* outline: 25px solid rgba(255, 248, 142, .45); */
    /* box-shadow: 0 0 32px rgba(255, 248, 142, 1); */
  }
  @keyframes pulse {
  0% {
    outline: 0 solid rgba(255, 248, 142, 0);
    opacity: 0;
  }
  100%{
    outline: 25px solid rgba(255, 248, 142, .45);
    opacity: 1;
  }
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
    right: 21px;
    bottom: 0px;
    z-index: 3;
    width: 200px;
    gap: 8px;
    &::after {
      width: 200px;
      height: 124px;
      top: 40px;
    }
    h5{
      font-size: 10px;
    }
    h2{
      font-size: 20px;
      line-height: 30px;
    }
    img{
      width: 24px;
      transform: rotate(-90deg);
    }
  }
  ${media.large`
    &::before {
      display: none;
    }
    img{
      top: 12px;
    }
    .get-in-touch-wrapper{
      position: relative;
      top: 14px;
    }
  `}
  ${media.medium`
    img{
      transform: rotate(-90deg);
      animation: initial;
    }
  `}
  ${media.small`
    right: 0px;
    bottom: -4px;
    &::after{
      width: 164px;
      height: 106px;
      top: 52px;
      left: 15px;
    }
  `}
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
      width: 10px;
      height: 10px;
      /* border-radius: 100%; */
      /* border: 1px solid ${colors.DarkBlue}; */
      transform: rotate(45deg);
      top: -5px;
      background-color: ${colors.DarkBlue};
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
        font-size: 22px;
        font-weight: 500;
      }
    }
    .horizon{
      display: none;
    }
    h4{
      margin: -16px 0 0 86px;
      font-size: 16px;
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
    /* width: 500px; */
    height: 100vh;
    background: url(${formBg});
    background-size: cover;
    /* width: 592px; */
    /* top: 0; */
    padding: 120px 16px 0 80px;
    margin-right: 60px;
    color: ${colors.White};
    margin-left: -80px;
    height: 100vh;
    /* width: 776px; */
    position: absolute;
    top: 64px;
    width: calc( 33vw );
    h1{
      margin: 16px 0;
    }
  }
  .sticky-top {
    position: sticky;
    top: 80px;
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
  .right {
    /* height: 1000px; */
    /* flex: 1 1 100%; */
    padding: 128px 0 160px 26px;
  }
  ${media.large`
    .left{
      margin-right: 0;
      padding-right: 16px;
    }
    .right {
      /* padding-left:0; */
    }
  `}
  .form-section{
    display: flex;
    align-items: flex-start;
  }
  ${media.medium`
    .form-section{
      display: none;
    }
    .accordion__panel{
      ul{
        li{
          font-size: 16px;
          line-height: 24px;
        }
      }
      p{
        font-size: 16px;
        line-height: 24px;
        padding-right: 62px;
      }
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
    transition: background-color 0.1s ease-in;
    cursor: pointer;
    &:hover{
      outline: 2px solid ${colors.AJABlue};
      outline-offset: -2px;
      box-shadow: 0px 8px 16px rgba(12, 28, 36, 0.15);
    }
    h3 {
      margin: 0;
      font-weight: 500;
      text-align: center;
    }
    hr {
      border-top: 1px solid rgba(162, 170, 164, 0.5);
      margin: 12px 0;
    }
    p {
      margin: 0;
      font-weight: 300;
    }
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }
  .active {
    background-color: ${colors.AJABlue};
    color: ${colors.White};
    /* box-shadow: 4px 4px 10px rgba(162, 170, 164, 0.5); */
    box-shadow: 4px 4px 8px rgba(12, 28, 36, 0.05);
    &:hover{
      box-shadow: 0px 8px 16px rgba(12, 28, 36, 0.15);
    }
  }
  ${media.large`
    grid-template-columns: repeat(2, 1fr);
  `}
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
    transition: background-color 0.1s ease-in;
    cursor: pointer;
    &:hover{
      outline: 2px solid ${colors.AJABlue};
      outline-offset: -2px;
      box-shadow: 0px 8px 16px rgba(12, 28, 36, 0.15);
    }
    h3 {
      margin: 0;
      font-weight: 500;
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
      cursor: pointer;
    }
  }
  .active {
    background-color: ${colors.AJABlue};
    color: ${colors.White};
    box-shadow: 4px 4px 10px rgba(162, 170, 164, 0.5);
  }
  ${media.large`
    grid-template-columns: repeat(2, 1fr);
  `}
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
  .MuiFormLabel-root{
    top: 2px;
    font-size: 18px;
    &.Mui-error{
      color: #A2AAA4!important;
    }
  }
  .MuiFormLabel-root.Mui-focused{
    color:${colors.AJABlue};
    font-size: 18px;
  }
  .MuiFilledInput-underline{
    border-color: #0C1C24;
    &.Mui-error{
      &::before{
        border-color: #F84214;
        border-width: 2px!important; 
      }
    }
  }
  .Mui-focused.MuiFilledInput-underline{
    &::before{
      border-width: 2px!important; 
      border-color: #0C1C24;
    }
  }
  .MuiFormHelperText-root{
    font-size: 16px;
    color: #F84214!important;
    margin: 8px 0 0 0;
  }
  .MuiInputBase-root {
    flex: 1 1 50%;
    height: 71px;
    max-height: 71px;
    padding: 12px 12px 0;
    /* padding: 0; */
    min-height: 71px;
    background-color: initial;
    border: 0;
    /* border-bottom: 1px solid ${colors.DarkBlue}; */
    font-size: 20px;
    input{
      padding: 0;
    }
    &::after{
      display: none;
    }
    &:focus-visible {
      /* border: 0; */
      outline: 0;
      background-color: #f8f2ec;
    }
  }
  .MuiInputBase-multiline{
    max-height: initial;
    padding: 0;
    border-bottom: 0;
    &::before{
      display: none;
    }
  }
  textarea {
    padding: 18px;
    font-size: 20px;
    resize: none;
    width: 100%;
    background-color: #f8f2ec;
    border: 0;
    height: 214px!important;
    /* border-bottom: 1px solid ${colors.DarkBlue}; */
    font-size: 20px;
  }
  ${media.medium`
    .MuiFormLabel-root{
     font-size: 16px; 
    }
  `}
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
    letter-spacing: 0.1rem;
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
  padding-left: 26px;
  .title {
    font-weight: bold;
    margin-bottom: 32px;
  }
  .accordion__panel{
    margin-top: 26px;
    /* margin-bottom: 26px; */
  }
  ${media.medium`
    padding-left: 0;
    .accordion__item{
      h3{
        font-size: 18px;
        padding-right: 16px;
      }
    }
  `}
`;

const Contact = styled.div`
  .contact-us{
    margin-left: -26px;
    h5{
      font-family: "Poppins", "Noto",sans-serif;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 1px;
      .MuiBox-root{
        display: flex;
      }
      .left-col{
        flex: 1 1 39px;
        min-width: 39px;
      }
      .right-col{
        flex: 1 1 100%;
        /* padding: 0px; */
      }
    }
  }
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
    font-weight: 400;
    br{
      display: none;
    }
  }
  h4{
    font-size: 20px;
    margin-bottom: 12px;
  }
  h5{
    font-size: 16px;
    margin: 0;
  }
  ${media.medium`
    .contact-us{
      margin-left: 0;
    }
    .title{
      font-size: 32px;
      margin: 0 0 8px;
    }
    h1{
      margin-bottom: 24px;
    }
    h4{
      margin: 24px 0 8px;
    }
    h5{
      margin: 0;
      line-height: 24px;
      font-size: 16px;
    }
    .map{
      .location{
        display: none;
      }
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
const MbForm = styled.div`
  padding: 24px 20px 105px;
  .horizon{
    border-bottom: 1px solid ${colors.DarkBlue};
    border-top: 4px solid ${colors.DarkBlue};
    height: 8px;
  }
  ${RadioGroup}{
    grid-template-columns: repeat(1, 1fr);
    gap: 4px;
    margin-bottom: 0;
    p{
      font-size: 16px;
      line-height: 24px;
    }
  }
  .input-group{
    flex-direction: column;
  }
  h1{
    margin: 8px 0 26px;
  }
  h5{
    font-size: 16px;
  }
  .radio{
    min-height: 160px;
    h3{
      font-weight: 400;
    }
    &:nth-last-child(1){
      margin-bottom: 0;
    }
  }
  .title{
    display: flex;
    align-items: baseline;
    .dot{
      margin-right: 12px;
    }
    h2{
      font-weight: 400;
    }
  }
  ${RoundButton}{
    margin-top: 8px;
    width: 164px;
    padding: 8px 16px;
    background-color: #0C1C24;
    h4{
      font-size: 18px;
    }
  }
  ${SmallRadioGroup}{
    margin-bottom: 0;
    .radio{
      min-height: 56px;
    }
  }
  .MuiInputBase-root{
    font-size: 16px;
    line-height: 24px;
  }
  span[data-index="0"].MuiSlider-markLabel{
    top: 40px;
    margin-left: -2px;
  }
  span[data-index="8"].MuiSlider-markLabel{
    top: 52px;
    margin-left: -30px;
  }
`

const CustomCheckbox = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px 0;
  border-bottom: 1px solid #EBEBEB;
  margin-bottom: 20px;
  transition: all .2s ease-in;
  align-items: baseline;
  label{
    pointer-events: none;
  }
  .MuiCheckbox-root{
    display: none;
  }
  p{
    font-size: 14px;
    margin: 0;
    font-weight: bold;
    transition: all .2s ease-in;
    line-height: 150%;
  }
  small{
    font-size: 12px;
    color: #2C2C2C;
    line-height: 120%;
  }
  img{
    transition: all .2s ease-in;
    filter: grayscale(1);
  }
  .uncheck{
    min-width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #EBEBEB;
  }
  .info{
    flex: 1 1 100%;
  }
  &.active{
    p{
    }
    img{
      filter: grayscale(0);
    }
  }
  ${media.medium`
    h3{
      font-size: 18px;
      font-weight: 500!important;
    }
  `}
`

const Notification = styled.div<{
  open: boolean
}>`
  pointer-events: none;
  position: fixed;
  /* max-width: 640px; */
  font-family: 'Noto Sans TC', sans-serif;
  margin: 20px auto;
  padding: 0 16px;
  top: 0;
  width: 100%;
  transition: all .5s ease-in-out;
  opacity: ${prop => prop?.open ? 1 : 0};
  z-index: 100000;
  display: flex;
  justify-content: center;
  .MuiPaper-root{
    max-width: 640px;
    height: auto;
    font-size: 16px;
    box-shadow: 4px 4px 8px rgba(12, 28, 36, 0.05);
  }
  ${media.medium`
    top: -78px;
  `}
`