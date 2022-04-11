import React from "react";
import { useSelector } from "react-redux";
import { resultFilter } from "../../helpers";
import ItemCard from "../ItemCard";

function ListSelector({ type }) {
  const allShoes = useSelector((state) => state.networkRequestReducer);

  const {newShoes , menShoes, womenShoes, childrenShoes, brands} = allShoes;

  const savedItems = useSelector((state) => state.savedReducer.savedItems);

  let template = null;

  switch (type) {
    case "/products/new":
      template = resultFilter(newShoes.data, newShoes.minMax?.filter, brands.selected).map((itm, id) => (
          <ItemCard
            key={id}
            title={itm.title}
            price={itm.retailPrice}
            id={itm.id}
            image={itm.media.thumbUrl}
          />
        ));
      break;
    case "/products/men":
      template = resultFilter(menShoes.data, menShoes.minMax?.filter, brands.selected).map((itm, id) => (
        <ItemCard
          key={id}
          title={itm.title}
          price={itm.retailPrice}
          id={itm.id}
          image={itm.media.thumbUrl}
        />
      ));
      break;
    case "/products/women":
      template = resultFilter(womenShoes.data, womenShoes.minMax?.filter, brands.selected).map(
        (itm, id) => (
          <ItemCard
            key={id}
            title={itm.title}
            price={itm.retailPrice}
            id={itm.id}
            image={itm.media.thumbUrl}
          />
        )
      );
      break;
    case "/products/kids":
      template = resultFilter(childrenShoes.data, childrenShoes.minMax?.filter, brands.selected).map(
        (itm, id) => (
          <ItemCard
            key={id}
            title={itm.title}
            price={itm.retailPrice}
            id={itm.id}
            image={itm.media.thumbUrl}
          />
        )
      );
      break;
    case "/saved-items":
      template = (savedItems.map(
        (itm, id) => (
          <ItemCard
            key={id}
            title={itm.title}
            price={itm.retailPrice}
            id={itm.id}
            image={itm.media.thumbUrl}
          />
        )
      ));
      break;

    default:
      template = <div>invalid</div>;
      break;
  }

  return template;
}

export default ListSelector;
