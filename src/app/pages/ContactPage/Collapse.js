import React, { useState } from 'react';
import styled from 'styled-components/macro';
import roundArrowBtn from './assets/round-arrow-btn.svg';
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
    <Accordion allowZeroExpanded={true}  >
      {
        FAQS.map((FAQ, index) => <AccordionItem onClick={setExpand(index)} dangerouslySetExpanded={FAQ.expanded} key={FAQ.title} >
          <AccordionItemHeading>
            <AccordionItemButton  >
              <h3>{FAQ.title}</h3>
              <img style={{ transform: `rotate(${FAQ.expanded ? '0' : '180deg'})` }} src={roundArrowBtn} alt="button" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {FAQ.answer}
            </p>
          </AccordionItemPanel>
        </AccordionItem>)
      }
    </Accordion>
  );
}

