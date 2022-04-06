import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Range } from "../Range";

// const CheckGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: red;

//   label{
//     display: block;
//   }

import "rc-slider/assets/index.css";
import CustomizedRange from "../Silder";

// export default () => (
//   <>

//   </>
// );

// `;
const RangeWrapper = styled.div`
  /* padding: 2rem; */
  border-top: 1px solid #00000026;
  border-bottom: 1px solid #00000026;
`;

const BtnWrapper = styled.div`
  /* padding-top: 1.125rem; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  button {
    padding: 12px 15px;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #00000026;
    cursor: pointer;
  }
`;

const GroupWrapper = styled.div`
  padding: 2rem;

  label {
    /* display: flex;
    align-items: center;
    column-gap: 12px; */
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
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
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #000;
    padding-bottom: 1rem;
  }
`;

function SideNav({ className }) {
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://v1-sneakers.p.rapidapi.com/v1/brands",
    //   headers: {
    //     "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
    //     "X-RapidAPI-Key": "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
    //   },
    // };

    let options = "";

    axios
      .request(options)
      .then(function (response) {
        setBrandData(["ALL", ...response.data.results]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  // console.log(brandData);

  const btnArr = [
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
  ];

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <GroupWrapper>
        <h5>Brand</h5>
        {brandData && (
          <div style={{ height: "200px", overflowX: "scroll" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {brandData.map((brand, id) => {
                return (
                  <label key={id}>
                    <span>{brand}</span>
                    {brand === "ALL" ? (
                      <input type="radio" name="brand" defaultChecked />
                    ) : (
                      <input type="radio" name="brand" />
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
          <CustomizedRange lower={0} upper={50} />
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
