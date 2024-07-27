import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../HOC/Loading";
import ProductCanvas from "./ProductCanvas";
import ProductDesc from "./ProductDesc";
import { makeGetRequest } from "../../service/request";

const ProductStyle = styled.div`
  grid-column: 1/-2;

  display: flex;
  column-gap: 4rem;

  @media (max-width: 954px) {
    grid-column: 2/-2;
    flex-direction: ${(props) => (props.pid ? "column" : "row")};
  }
`;

function Product() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const cart = useSelector((state) =>
    state.cartReducer.cart.filter((cartItm) => cartItm.id === id)
  );
  const saved = useSelector((state) =>
    state.savedReducer.savedItems.filter((savedItm) => savedItm.id === id)
  );

  const cartLength = cart.length;

  const savedLength = saved.length;

  useEffect(() => {
    if (cartLength === 1) {
      setData(cart[0]);
    }
    if (savedLength === 1) {
      setData(saved[0]);
    }

    if (cartLength !== 1 && savedLength !== 1) {
      makeGetRequest(`/${id}`)
        .then(function (response) {
          setData(response.data?.results[0]);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [cartLength, savedLength]); //eslint-disable-line

  return (
    <ProductStyle pid={data.id}>
      {data.id ? (
        <>
          <ProductCanvas data={data} />
          <ProductDesc data={data} />
        </>
      ) : (
        <Loading />
      )}
    </ProductStyle>
  );
}

export default Product;
