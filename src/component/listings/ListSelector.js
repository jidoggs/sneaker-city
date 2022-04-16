import React from "react";
import { useSelector } from "react-redux";
import { getCategoryName, resultFilter } from "../../helpers";
import ItemCard from "../ItemCard";

function ListSelector({ pathname,type }) {
  const allShoes = useSelector((state) => state.networkRequestReducer);

  const {data , minMax} = allShoes[getCategoryName(pathname)];

  const savedItems = useSelector((state) => state.savedReducer.savedItems);

  let template = null;

  switch (type) {
    case "LIST_ITEMS":
      template = resultFilter(data, minMax?.filter, allShoes.brandsFilter).map((itm, id) => (
          <ItemCard
            key={id}
            title={itm.title}
            price={itm.retailPrice}
            id={itm.id}
            image={itm.media.thumbUrl}
          />
        ));
      break;
    
    case "SAVED_ITEMS":
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
