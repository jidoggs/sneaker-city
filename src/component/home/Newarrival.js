import React from "react";
import styled from "styled-components";
import Adidas from "../customIcon/Adidas";
import Nike from "../customIcon/Nike";
import Vans from "../customIcon/Vans";
import { Link } from "react-router-dom";
import NextIcon from "../customIcon/Next";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3.5rem;
  background-color: #fff;
  box-shadow: 0px 4px 34px 0px #00000014;

  .container__img {
    display: flex;
    column-gap: 2rem;
  }

  .container__txt {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000bf;
    display: flex;
    column-gap: 1rem;
  }
`;

const container = {
  hidden: { x: "100vw", display: "none" },
  visible: {
    x: 0,
    display: "flex",
    transition: {
      delay: 1.2,
      type: "spring",
      stiffness: 50,
    },
  },
};

function HeroNewarrival() {
  return (
    <Container variants={container} initial="hidden" animate="visible">
      <div className="container__img">
        <Adidas />
        <Nike />
        <Vans />
      </div>
      <Link to={"/products/new"} className="container__txt">
        Find that sneaker you want
        <NextIcon />
      </Link>
    </Container>
  );
}

export default HeroNewarrival;
