import React from 'react';
import styled from 'styled-components';
import Brand from '../customIcon/Brand';
import {motion} from 'framer-motion'

const StlyedText = styled.div`
    font-size: 2rem;
    color: black;

    height: 75vh;
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
      yoyo: 30
    }
  }
}

function Loading() {
  return (
    <StlyedText>
      <Brand/>Loading<motion.span variants={dot} initial="hidden" animate="visible" >.</motion.span>
    </StlyedText>
  )
}

export default Loading