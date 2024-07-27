import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Loading from "../component/HOC/Loading";
import ListSelector from "../component/listings/ListSelector";
import ListTitle from "../component/listings/ListTitle";
import { getCategoryName } from "../helpers";
import {
  fetchShoesBrands,
  fetchShoesData,
  fetchShoesError,
  loadingData,
  minMax,
} from "../redux/actions/requestActions";
import { makeGetRequest } from "../service/request";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 4rem;

  @media (max-width: 1160px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

function Listing() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const allShoes = useSelector((state) => state.networkRequestReducer);
  const { newShoes, menShoes, womenShoes, childrenShoes, isLoading } = allShoes;

  useEffect(() => {
    let params = {
      limit: "100",
      releaseYear: "gte:2011",
      // sort: "retailPrice:desc",
    };
    if (pathname !== "/products/new") {
      params = {
        ...params,
        gender:
          pathname.includes("/products/men") ||
          pathname.includes("/products/women")
            ? pathname.substring(10)
            : "child",
      };
    } else {
      params = {
        ...params,
        page: "1",
      };
    }

    if (
      (pathname === "/products/new" && newShoes.data.length <= 10) ||
      (pathname === "/products/men" && menShoes.data.length <= 10) ||
      (pathname === "/products/women" && womenShoes.data.length <= 10) ||
      (pathname === "/products/kids" && childrenShoes.data.length <= 10)
    ) {
      dispatch(loadingData());
      makeGetRequest("/", params)
        .then(function (response) {
          dispatch(
            fetchShoesData(
              getCategoryName(pathname),
              response.data.results.filter((itm) => itm.media.thumbUrl !== null)
            )
          );
          dispatch(fetchShoesBrands(getCategoryName(pathname)));
          dispatch(minMax(getCategoryName(pathname)));
        })
        .catch(function (error) {
          dispatch(fetchShoesError(getCategoryName(pathname), error));
        });
    }
  }, [pathname]); // eslint-disable-line

  return (
    <>
      <ListTitle />
      <ItemWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <ListSelector type="LIST_ITEMS" pathname={pathname} />
        )}
      </ItemWrapper>
    </>
  );
}

export default Listing;
