import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ListSelector from "../component/listings/ListSelector";
import { fetchChildrenShoesData, fetchChildrenShoesError, fetchMenShoesData, fetchMenShoesError, fetchShoesData, fetchShoesError, fetchWomenShoesData, fetchWomenShoesError, minMaxAll, minMaxChildren, minMaxMen, minMaxWomen } from "../redux/actions/requestActions";
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
  const newShoes = useSelector((state) => state.networkRequestReducer.newShoes.data);
  const menShoes = useSelector((state) => state.networkRequestReducer.menShoes.data);
  const womenShoes = useSelector((state) => state.networkRequestReducer.womenShoes.data);
  const childrenShoes = useSelector((state) => state.networkRequestReducer.childrenShoes.data);

  const renderTitle = () => {
    if (pathname === "/products/new") {
      return "The new arrivals";
    } else {
      return `For ${pathname.substring(10)}`;
    }
  };

  const dispatchSuccess = (data) => { 
    if (pathname === "/products/new") {
          dispatch(fetchShoesData(data))
          dispatch(minMaxAll())
        }
        if (pathname === "/products/men") {
          dispatch(fetchMenShoesData(data))
          dispatch(minMaxMen())
        }
        if (pathname === "/products/women") {
          dispatch(fetchWomenShoesData(data))
          dispatch(minMaxWomen())
        }
        if (pathname === "/products/kids") {
          dispatch(fetchChildrenShoesData(data))
          dispatch(minMaxChildren())
    }
   }
  const dispatchFailure = (data) => { 
    if (pathname === "/products/new") {
          dispatch(fetchShoesError(data))
    }
    if (pathname === "/products/men") {
          dispatch(fetchMenShoesError(data))
    }
    if (pathname === "/products/women") {
          dispatch(fetchWomenShoesError(data))
    }
    if (pathname === "/products/kids") {
          dispatch(fetchChildrenShoesError(data))
    }
   }

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
          // sort: "retailPrice:desc",
        },
        headers: {
          "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
          "X-RapidAPI-Key":
            // "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
            "6a9e1ed7d0mshad15c22d4814a43p1aa588jsnb5eab34da227",
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
          // sort: "retailPrice:desc",
        },
        headers: {
          "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
          "X-RapidAPI-Key":
            // "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
            "6a9e1ed7d0mshad15c22d4814a43p1aa588jsnb5eab34da227",
        },
      };
    }

    if ((pathname === "/products/new" &&  newShoes.length <= 10) || (pathname === "/products/men" &&  menShoes.length <= 10 )|| (pathname === "/products/women" &&  womenShoes.length <= 10 )|| (pathname === "/products/kids" &&  childrenShoes.length <= 10)) {
      axios
        .request(options)
        .then(function (response) {
          dispatchSuccess(response.data.results.filter((itm) => itm.media.thumbUrl !== null));
        })
        .catch(function (error) {
          dispatchFailure(error);
        });
      
    }
  }, [pathname]); // eslint-disable-line

  return (
    <>
      <Title>{renderTitle()}</Title>
      <ItemWrapper>
            <ListSelector type={pathname} />
      </ItemWrapper>
    </>
  );
}

export default Listing;
