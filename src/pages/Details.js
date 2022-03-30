import React from "react";
import styled from "styled-components";
import Product from "../component/product/Product";

const DetailStyle = styled.div`
  display: grid;
  grid-template-columns: inherit;
`;

function Details() {
  return (
    <DetailStyle>
      <Product />
    </DetailStyle>
  );
}

export default Details;
