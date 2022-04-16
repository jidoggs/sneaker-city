import React from "react";
import styled from "styled-components";

export const Title = styled.h5`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: .5rem;
`;
function BrandTitle() {
  return <Title>Brands</Title>;
}

export default BrandTitle;
