import React from 'react';
import styled from 'styled-components';
import Brand from '../customIcon/Brand';
import {motion} from 'framer-motion'
import { useLocation } from 'react-router-dom';

const StlyedText = styled.div`
    font-size: 2rem;
    color: black;

    height: ${props => props.location.includes("/products/")? "60vh": "75vh"};
    grid-column: 1/-1;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    flex: 1;
`;

const dot = {
  hidden:{opacity:1},
  visible:{
    opacity: 0,
    transition:{
      repeat: Infinity, repeatDelay: 0.4
    }
  }
}

function Loading() {
  const{pathname}=useLocation()
  return (
    <StlyedText location={pathname}>
      <Brand/>Loading<motion.span variants={dot} initial="hidden" animate="visible" >.</motion.span>
    </StlyedText>
  )
}

export default Loading