import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterQueryAll, filterQueryChildren, filterQueryMen, filterQueryWomen } from "../../redux/actions/requestActions";


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
    if(pathname === "/products/new") { 
       dispatch(filterQueryAll(val))
    }
    if(pathname === "/products/men") { 
        dispatch(filterQueryMen(val))
    }
    if(pathname === "/products/women") { 
        dispatch(filterQueryWomen(val))
    }
    if(pathname === "/products/kids") { 
        dispatch(filterQueryChildren(val))
    }
   }


  return (
      <StyledSlider>
          <Slider range allowCross={false} min={lower} max={upper} value={value} onAfterChange={onSlideAfterChange}  onChange={onSliderChange} />
      </StyledSlider>
  );
}
