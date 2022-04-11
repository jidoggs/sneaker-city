import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../HOC/Loading";
import ProductCanvas from "./ProductCanvas";
import ProductDesc from "./ProductDesc";

const ProductStyle = styled.div`
  grid-column: 1/-2;

  display: flex;
  column-gap: 4rem;
`;

function Product() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
      headers: {
        "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
        "X-RapidAPI-Key": 
        // "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
        // "6a9e1ed7d0mshad15c22d4814a43p1aa588jsnb5eab34da227",
        "c08c020cb4msh1cac15acce21030p1084f0jsna581e807075f",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data?.results[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <ProductStyle>
      {data.id  ? (
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
