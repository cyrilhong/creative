import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as colors from 'styles/colors';
export default function SliderBar() {
  function valuetext(value: number) {
    return `${value}萬`;
  }
  const [budge, setBudge] = React.useState<number[]>([12.5, 37.5]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setBudge(newValue as number[]);
  };
  return (
    <CustomSlider
      getAriaLabel={() => '預算'}
      value={budge}
      step={12.5}
      marks={[
        {
          value: 0,
          label: '0萬',
        },
        {
          value: 12.5,
          label: '100萬',
        },
        {
          value: 25,
          label: '200萬',
        },
        {
          value: 37.5,
          label: '300萬',
        },
        {
          value: 50,
          label: '400萬',
        },
        {
          value: 62.5,
          label: '500萬',
        },
        {
          value: 75,
          label: '600萬',
        },
        {
          value: 87.5,
          label: '700萬',
        },
        {
          value: 100,
          label: '800萬以上',
        },
      ]}
      onChange={handleChange}
      // valueLabelDisplay="auto"
      getAriaValueText={valuetext}
    />
  );
}


const CustomSlider = styled(Slider)({
  height: 12,
  color: colors.AJABlue,
  '& .MuiSlider-rail': {
    backgroundColor: colors.AJABlue,
  },
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: colors.AJABlue,
    border: '3px solid' + colors.White,
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(25, 54, 92, 0.30)',
    }
  },
})
