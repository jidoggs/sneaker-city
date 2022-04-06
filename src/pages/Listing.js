import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ItemCard from "../component/ItemCard";
import { fetchShoesData, fetchShoesError } from "../redux/actions/requestActions";
const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 4rem;

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;
const Title = styled.h2`
  margin: 2rem 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
`;

function Listing() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.networkRequestReducer.data);

  const renderTitle = () => {
    if (pathname === "/products/new") {
      return "The new arrivals";
    } else {
      return `For ${pathname.substring(10)}`;
    }
  };

  useEffect(() => {
    let options = null;
    if (pathname !== "/products/new") {
      options = {
        method: "GET",
        url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
        params: {
          limit: "100",
          gender: `${
            pathname === "/products/men" || pathname === "/products/women"
              ? pathname.substring(10)
              : "child"
          }`,
          releaseYear: "gte:2011",
          sort: "retailPrice:desc",
        },
        headers: {
          "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
          "X-RapidAPI-Key":
            "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
        },
      };
    } else {
      options = {
        method: "GET",
        url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
        params: {
          limit: "100",
          page: "1",
          releaseYear: "gte:2011",
          sort: "retailPrice:desc",
        },
        headers: {
          "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
          "X-RapidAPI-Key":
            "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
        },
      };
    }

    axios
      .request(options)
      .then(function (response) {
        dispatch(fetchShoesData(response.data.results));
      })
      .catch(function (error) {
        dispatch(fetchShoesError(error));
        console.error(error);
      });
  }, [pathname]); // eslint-disable-line

  return (
    <>
      <Title>{renderTitle()}</Title>
      <ItemWrapper>
        {result &&
          result
            .filter((itm) => itm.media.thumbUrl !== null)
            .map((itm, id) => (
              <ItemCard
                key={id}
                title={itm.title}
                price={itm.retailPrice}
                id={itm.id}
                image={itm.media.thumbUrl}
              />
            ))}
      </ItemWrapper>
    </>
  );
}

export default Listing;
