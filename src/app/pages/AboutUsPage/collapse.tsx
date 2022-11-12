import React, { useState } from 'react';
import styled from 'styled-components/macro';
import roundArrowBtn from './assets/round-arrow-btn.svg';
import * as colors from 'styles/colors';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Collapse({ list }) {
  const [FAQS, setFAQS] = useState(list)

  const setExpand = (index) => e => {
    let temp = [...FAQS]
    temp[index].expanded = !temp[index].expanded
    setFAQS(temp)
  }
  return (
    <Wrapper>
      <Accordion allowZeroExpanded={true}  >
        {
          FAQS.map((FAQ, index) => <AccordionItem onClick={setExpand(index)} dangerouslySetExpanded={FAQ.expanded} key={FAQ.title} >
            <AccordionItemHeading>
              <AccordionItemButton  >
                <div className='head'>
                  <h4 className='eng'>{FAQ.title}</h4>
                  <h2 className='eng'>{FAQ.name}</h2>
                </div>
                <img style={{ transform: `rotate(${FAQ.expanded ? '180deg' : '0'})` }} src={roundArrowBtn} alt="button" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <h4>
                {FAQ.answer}
              </h4>
            </AccordionItemPanel>
          </AccordionItem>)
        }
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  .head{
    display: flex;
    flex-direction: column;
  }
  .accordion__panel{
    margin-top: 16px;
  }
  .accordion__item {
    /* display: flex; */
    justify-content: space-between;
    border-top: 1px solid ${colors.DarkBlue};
    /* padding: 22px 0; */
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    .collapse {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &:nth-last-child(1) {
      border-bottom: 1px solid ${colors.DarkBlue};
    }
  }
  p {
    margin: 0;
    padding-right: 82px;
  }
  h3 {
    margin: 0;
  }
  .accordion__button{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &::before{
      display: none;
    }
  }
`
