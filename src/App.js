import { Route, Routes } from "react-router-dom";
import Layout from "./component/HOC/Layout";
import Cart from "./pages/Cart";
import Customshoe from "./pages/Customshoe";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import SavedItems from "./pages/SavedItems";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="products">
          <Route path="new" element={<Listing />} />
          <Route path="men" element={<Listing />} />
          <Route path="women" element={<Listing />} />
          <Route path="kids" element={<Listing />} />
        </Route>
        <Route path="/product/:id" element={<Details />} />
        <Route path="/customProduct" element={<Customshoe />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/saved-items" element={<SavedItems />} />
      </Route>
    </Routes>
  );
}

export default App;
