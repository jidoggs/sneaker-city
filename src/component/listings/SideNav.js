import React from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import CustomizedRange from "./Silder";
import { useDispatch, useSelector } from "react-redux";
import {
  addBrandToFilter,
  removeBrandToFilter,
} from "../../redux/actions/requestActions";
import { appearOnce, btnArr, capitalizeEachWord } from "../../helpers";
import { useLocation } from "react-router-dom";

const RangeWrapper = styled.div`
  border-top: 1px solid #00000026;
  border-bottom: 1px solid #00000026;
`;

const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;

  button {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #00000026;
    cursor: pointer;
  }
`;

const GroupWrapper = styled.div`
  padding: 2rem;

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
      }
    }
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #000;
    padding-bottom: 1rem;
  }
`;

function SideNav({ className }) {
  const networkShoes = useSelector((state) => state.networkRequestReducer);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const switchMinMax = () => {
    const { newShoes, menShoes, womenShoes, childrenShoes } = networkShoes;
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

  const switchBrands = () => {
    const { newShoes, menShoes, womenShoes, childrenShoes } = networkShoes;
    if (pathname === "/products/new") {
      return appearOnce(
        newShoes.data.map((item) => capitalizeEachWord(item.brand))
      );
    }
    if (pathname === "/products/men") {
      return appearOnce(
        menShoes.data.map((item) => capitalizeEachWord(item.brand))
      );
    }
    if (pathname === "/products/women") {
      return appearOnce(
        womenShoes.data.map((item) => capitalizeEachWord(item.brand))
      );
    }
    if (pathname === "/products/kids") {
      return appearOnce(
        childrenShoes.data.map((item) => capitalizeEachWord(item.brand))
      );
    }
  };

  const result = switchMinMax();

  const brands = switchBrands();

  const brandOnClickHandler = (e) => {
    const value = capitalizeEachWord(e.target.value);
    if (e.target.checked) {
      dispatch(addBrandToFilter(value));
    } else {
      dispatch(removeBrandToFilter(value));
    }
  };

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <GroupWrapper>
        <h5>Brand</h5>
        {brands && (
          <div style={{ height: "200px", overflowX: "scroll" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {brands.map((brand, id) => {
                return (
                  <label key={id}>
                    <span>{brand}</span>
                    {brand === "ALL" ? (
                      <input
                        type="checkbox"
                        name={brand}
                        value={brand}
                        defaultChecked
                      />
                    ) : (
                      <input
                        type="checkbox"
                        name={brand}
                        value={brand}
                        onClick={brandOnClickHandler}
                      />
                    )}
                    <span className="checkmark"></span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </GroupWrapper>
      <RangeWrapper>
        <GroupWrapper>
          <h5>Price range</h5>
          {brands && <CustomizedRange
            lower={result?.min}
            upper={result?.max}
            state={[result?.min, result?.max]}
          />}
        </GroupWrapper>
      </RangeWrapper>
      <GroupWrapper>
        <h5>Size</h5>
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
