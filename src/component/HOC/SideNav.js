import React from "react";
import styled from "styled-components";

const CheckGroup = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;

  /* label{
    display: block;
  } */
  /* input[type="radio"]{

    appearance: none;
    border: 1px solid #d3d3d3;
    width: 30px;
    height: 30px;
    content: none;
    outline: none;
    margin: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  input[type="radio"]:checked {
    appearance: none;
    outline: none;
    padding: 0;
    content: none;
    border: none;
  }

  input[type="radio"]:checked::before{
    position: absolute;
    color: green !important;
    content: "\00A0\2713\00A0" !important;
    border: 1px solid #d3d3d3;
    font-weight: bolder;
    font-size: 21px;
  } */
`;

function SideNav({ className }) {
  return (
    <form className={className}>
      <div className="checkBox">
        <h5>Brand</h5>
        <label htmlFor="brand1">
          <input type="radio" name="brand" id="brand" />
          Nike
        </label>
        <label htmlFor="brand2">
          <input type="radio" name="brand" id="brand" />
          Jordan
        </label>
        <label htmlFor="brand3">
          <input type="radio" name="brand" id="brand" />
          Adidas
        </label>
        <label htmlFor="brand4">
          <input type="radio" name="brand" id="brand" />
          Fila
        </label>
        <label htmlFor="brand5">
          <input type="radio" name="brand" id="brand" />
          Gucci
        </label>
        <label htmlFor="brand6">
          <input type="radio" name="brand" id="brand" />
          Balenciaga
        </label>
      </div>
      <div>
        <h5>Price range</h5>
        <input type="range" name="price-range" id="price-range" />
      </div>
      <div>
        <h5>Size</h5>
      </div>
    </form>
  );
}

export default SideNav;
