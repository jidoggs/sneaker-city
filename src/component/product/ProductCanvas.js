import React from "react";
import styled from "styled-components";
import HeartIcon from "../customIcon/HeartIcon";

const ProductCanvasStyle = styled.div`
  flex: 2;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding:6rem 4rem;
`;
const ShoeImage = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: top;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: #000000;
  }
  p {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: #000000a6;
  }
`;

function ProductCanvas({ data }) {
  return (
    <ProductCanvasStyle>
      <TextWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="title">{data?.title}</h2>
          <HeartIcon />
        </div>
        <p className="price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data?.retailPrice)}</p>
      </TextWrapper>
      <ShoeImage image={data?.media?.imageUrl} />
    </ProductCanvasStyle>
  );
}

export default ProductCanvas;
