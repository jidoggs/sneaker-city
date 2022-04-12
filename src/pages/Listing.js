import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Loading from "../component/HOC/Loading";
import ListSelector from "../component/listings/ListSelector";
import ListTitle from "../component/listings/ListTitle";
import { dispatchFetchFailure, dispatchFetchSuccess, loadingData } from "../redux/actions/requestActions";
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

function Listing() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const allShoes = useSelector((state) => state.networkRequestReducer);
  const {newShoes,menShoes,womenShoes,childrenShoes, isLoading} = allShoes;


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
            // "6a9e1ed7d0mshad15c22d4814a43p1aa588jsnb5eab34da227",
            "c08c020cb4msh1cac15acce21030p1084f0jsna581e807075f",
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
            // "6a9e1ed7d0mshad15c22d4814a43p1aa588jsnb5eab34da227",
            "c08c020cb4msh1cac15acce21030p1084f0jsna581e807075f",
        },
      };
    }

    if ((pathname === "/products/new" &&  newShoes.data.length <= 10) || (pathname === "/products/men" &&  menShoes.data.length <= 10 )|| (pathname === "/products/women" &&  womenShoes.data.length <= 10 )|| (pathname === "/products/kids" &&  childrenShoes.data.length <= 10)) {
      dispatch(loadingData())
      axios
        .request(options)
        .then(function (response) {
          dispatchFetchSuccess(pathname, dispatch, response.data.results.filter((itm) => itm.media.thumbUrl !== null));
        })
        .catch(function (error) {
          dispatchFetchFailure(pathname, dispatch,error);
        });
      
    }
  }, [pathname]); // eslint-disable-line

  return (
    <>
      <ListTitle />
      <ItemWrapper>
          {isLoading ? <Loading /> :<ListSelector type={pathname} />}
      </ItemWrapper>
    </>
  );
}

export default Listing;
