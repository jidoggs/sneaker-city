import React from "react";
import { useSelector } from "react-redux";
import { resultFilter } from "../../helpers";
import ItemCard from "../ItemCard";

function ListSelector({ type }) {
  const newShoes = useSelector(
    (state) => state.networkRequestReducer.newShoes.data
  );
  const allFilter = useSelector(
    (state) => state.networkRequestReducer.newShoes.minMax?.filter
  );
  const menShoes = useSelector(
    (state) => state.networkRequestReducer.menShoes.data
  );
  const menFilter = useSelector(
    (state) => state.networkRequestReducer.menShoes.minMax?.filter
  );
  const womenShoes = useSelector(
    (state) => state.networkRequestReducer.womenShoes.data
  );
  const womenFilter = useSelector(
    (state) => state.networkRequestReducer.womenShoes.minMax?.filter
  );
  const childrenShoes = useSelector(
    (state) => state.networkRequestReducer.childrenShoes.data
  );
  const childrenFilter = useSelector(
    (state) => state.networkRequestReducer.childrenShoes.minMax?.filter
  );
  const selected = useSelector(
    (state) => state.networkRequestReducer.brands.selected
  );

  let template = null;

  switch (type) {
    case "/products/new":
      template =
        //    newShoes
        // .filter((itm) => allFilter.length > 0 ? (selected.length === 0 ? (itm.retailPrice >= allFilter[0] && itm.retailPrice <= allFilter[1]): (itm.retailPrice >= allFilter[0] && itm.retailPrice <= allFilter[1] && selected.includes(itm.brand))): selected.length > 0? selected.includes(itm.brand):itm)
        resultFilter(newShoes, allFilter, selected).map((itm, id) => (
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
      template = resultFilter(menShoes, menFilter, selected).map((itm, id) => (
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
      template = resultFilter(womenShoes, womenFilter, selected).map(
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
      template = resultFilter(childrenShoes, childrenFilter, selected).map(
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

    default:
      template = <div>invalid</div>;
      break;
  }

  return template;
}

export default ListSelector;
