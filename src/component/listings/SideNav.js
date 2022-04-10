import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import CustomizedRange from "./Silder";
import { useDispatch, useSelector } from "react-redux";
import {
  addBrandToFilter,
  fetchBrandsError,
  fetchBrandsSuccess,
  removeBrandToFilter,
} from "../../redux/actions/requestActions";
import { btnArr, capitalizeEachWord } from "../../helpers";
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
  const brands = useSelector(
    (state) => state.networkRequestReducer.brands.data
  );
  const newShoes = useSelector(
    (state) => state.networkRequestReducer.newShoes.minMax
  );
  const menShoes = useSelector(
    (state) => state.networkRequestReducer.menShoes.minMax
  );
  const womenShoes = useSelector(
    (state) => state.networkRequestReducer.womenShoes.minMax
  );
  const childrenShoes = useSelector(
    (state) => state.networkRequestReducer.childrenShoes.minMax
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const switchMinMax = () => {
    if (pathname === "/products/new") {
      return newShoes;
    }
    if (pathname === "/products/men") {
      return menShoes;
    }
    if (pathname === "/products/women") {
      return womenShoes;
    }
    if (pathname === "/products/kids") {
      return childrenShoes;
    }
  };

  const result = switchMinMax();

  useEffect(() => {
    if (brands.length < 1) {
      const options = {
        method: "GET",
        url: "https://v1-sneakers.p.rapidapi.com/v1/brands",
        headers: {
          "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
          "X-RapidAPI-Key":
            "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
        },
      };


      axios
        .request(options)
        .then(function (response) {
          dispatch(fetchBrandsSuccess(response.data.results));
        })
        .catch(function (error) {
          dispatch(fetchBrandsError(error));
        });
    }
    // eslint-disable-next-line
  }, []);

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
          <CustomizedRange
            lower={result.min}
            upper={result.max}
            state={[result.min, result.max]}
          />
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
