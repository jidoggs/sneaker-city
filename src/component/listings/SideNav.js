import React from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import CustomizedRange from "./Silder";
import { useSelector } from "react-redux";
import { btnArr } from "../../helpers";
import { useLocation } from "react-router-dom";
import Brands from "./Brands";
import { Title } from "./BrandTitle";

const RangeWrapper = styled.div`
  border-top: 1px solid #00000026;
  border-bottom: 1px solid #00000026;
`;

const BtnWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem; */
  
  display:flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  button {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #00000026;
    cursor: pointer;
    
    /* flex: 1; */
  }
`;

const GroupWrapper = styled.div`
  padding: 1rem 1.5rem;

  label {
    display: block;
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    cursor: pointer;
    font-size: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* Create a custom radio button */
    .checkmark {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 14px;
      width: 14px;
      background-color: transparent;
      border-radius: 4px;
      border: 1px solid #00000026;
    }

    /* Hide the browser's default radio button */
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;

      /* When the radio button is checked, add a blue background */
      &:checked ~ .checkmark {
        background-color: #17cbf2;
        /* background-color: red; */
      }
    }
  }
`;

function SideNav({ className }) {
  const networkShoes = useSelector((state) => state.networkRequestReducer);
  const { pathname } = useLocation();
  const { newShoes, menShoes, womenShoes, childrenShoes } = networkShoes;

  const switchMinMax = (pathname) => {
    if (pathname === "/products/new") {
      return newShoes.minMax;
    }
    if (pathname === "/products/men") {
      return menShoes.minMax;
    }
    if (pathname === "/products/women") {
      return womenShoes.minMax;
    }
    if (pathname === "/products/kids") {
      return childrenShoes.minMax;
    }
  };

  const result = switchMinMax(pathname);

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <GroupWrapper>
        <Brands />
      </GroupWrapper>
      <RangeWrapper>
        <GroupWrapper>
        <Title>Price range</Title>
          <CustomizedRange
            lower={result?.min}
            upper={result?.max}
            state={[result?.min, result?.max]}
          />
        </GroupWrapper>
      </RangeWrapper>
      <GroupWrapper>
        <Title>Size</Title>
        <BtnWrapper>
          {btnArr.map((itm, id) => (
            <button key={id} onClick={() => console.log(itm)}>
              {itm}
            </button>
          ))}
        </BtnWrapper>
      </GroupWrapper>
    </form>
  );
}

export default SideNav;
