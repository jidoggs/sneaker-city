import React from "react";
import styled from "styled-components";
import Product from "../component/product/Product";

const DetailStyle = styled.div`
  display: grid;
  grid-template-columns: inherit;

  @media(max-width:530px){
    grid-template-columns: 2rem repeat(12, 1fr) 2rem;
  }
`;

function Details() {
  return (
    <DetailStyle>
      <Product />
    </DetailStyle>
  );
}

export default Details;
