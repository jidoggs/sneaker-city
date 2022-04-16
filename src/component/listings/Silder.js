import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterPrice } from "../../redux/actions/requestActions";
import { getCategoryName } from "../../helpers";


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

export default function CustomizedRange({ lower, upper, state }) {
const {pathname} = useLocation();
const dispatch = useDispatch()
  const [value, setValue] = useState([lower,upper]);

  const onSliderChange = (newValue) => {
    setValue(newValue);

  };

  useEffect(() => {
      setValue(state)
      // eslint-disable-next-line
  }, [lower])
  

  const onSlideAfterChange = (val) => { 
    setValue(val);
    dispatch(filterPrice(getCategoryName(pathname),val))
   }


  return (
      <StyledSlider>
          <Slider range allowCross={false} min={lower} max={upper} value={value} onAfterChange={onSlideAfterChange}  onChange={onSliderChange} />
      </StyledSlider>
  );
}
