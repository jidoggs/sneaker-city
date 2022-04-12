import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { returnArrayofObjects } from "../../helpers";
import BrandTitle from "./BrandTitle";
import Checked from "./Checked";

const Container = styled.div`
  height: 12.5rem;
  overflow-x: scroll;
`;
const BrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Brands() {
  const networkShoes = useSelector((state) => state.networkRequestReducer);
  const { pathname } = useLocation();
  const { newShoes, menShoes, womenShoes, childrenShoes } = networkShoes;

  const [brands, setBrands] = useState([]);
  const [length, setLength] = useState(0);

  const lenghtBaseLocation = () => {
    if (pathname === "/products/new") {
      return newShoes?.data?.length;
    }
    if (pathname === "/products/men") {
      return menShoes?.data?.length;
    }
    if (pathname === "/products/women") {
      return womenShoes?.data?.length;
    }
    if (pathname === "/products/kids") {
      return childrenShoes?.data?.length;
    }
  };

  const prevLenth = useMemo(() => lenghtBaseLocation());//eslint-disable-line

  useEffect(() => {
    setLength(lenghtBaseLocation());
  }, [prevLenth]);//eslint-disable-line

  useEffect(() => {
    if (length > 0) {
      if (pathname === "/products/new") {
        setBrands(returnArrayofObjects(newShoes?.brands));
      }
      if (pathname === "/products/men") {
        setBrands(returnArrayofObjects(menShoes?.brands));
      }
      if (pathname === "/products/women") {
        setBrands(returnArrayofObjects(womenShoes?.brands));
      }
      if (pathname === "/products/kids") {
        setBrands(returnArrayofObjects(childrenShoes?.brands));
      }
    }
  }, [pathname, length]);//eslint-disable-line


  return (
    <>
      <BrandTitle />
      <Container>
        <BrandsContainer>
          {brands.map((brand, id) => {
            return (
              <Checked
                key={id}
                brand={brand.name}
                isChecked={brand.isChecked}
                setBrands={setBrands}
              />
            );
          })}
        </BrandsContainer>
      </Container>
    </>
  );
}

export default Brands;
