import React, { useState } from "react";
import Slider from "rc-slider";
import styled from 'styled-components';

const StyledSlider = styled.div`
    .rc-slider{
        &-rail{
            height: .5rem;
        }
        &-track{
            height: .5rem;
        }
        &-handle{
            margin-top: -3px;
        }
    }
`


export default function CustomizedRange({ lower, upper }) {
  const [value, setValue] = useState([lower, upper]);

  const onSliderChange = (newValue) => {
    setValue(newValue);
  };

  return (
      <StyledSlider>
          <Slider range allowCross={false} value={value} onChange={onSliderChange} />
      </StyledSlider>
  );
}
