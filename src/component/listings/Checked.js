import React, { useState } from "react";
import { useDispatch,  } from "react-redux";
import { addBrandToFilter, removeBrandToFilter } from "../../redux/actions/requestActions";

function Checked({brand, isChecked, setBrands}) {
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()


  const brandOnChangeandler = (e) => {
    const value = e.target.value;
    setClicked(!clicked)
    if (e.target.checked) {
      setBrands(prev => prev.map(itm => itm.name === value? {...itm,isChecked: true }: itm ))
      dispatch(addBrandToFilter(value));
    } else {
      setBrands(prev => prev.map(itm => itm.name === value? {...itm,isChecked: false } : itm ))
        dispatch(removeBrandToFilter(value));
    }
  };

  return (
    <label >
      <span>{brand}</span>
      <input
        type="checkbox"
        name={brand}
        value={brand}
        onChange={brandOnChangeandler}
        checked={isChecked}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export default Checked;
