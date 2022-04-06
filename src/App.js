import { Route, Routes } from "react-router-dom";
import Layout from "./component/HOC/Layout";
import Cart from "./pages/Cart";
import Customshoe from "./pages/Customshoe";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Listing from "./pages/Listing";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/products/new" element={<Listing/>} />
        <Route path="/products/men" element={<Listing/>} />
        <Route path="/products/women" element={<Listing/>} />
        <Route path="/products/kids" element={<Listing/>} />
        <Route path="/product/:id" element={<Details/>} />
        <Route path="/customProduct" element={<Customshoe />} />
        <Route path="/cart" element={<Cart/>} />
      </Route>
    </Routes>
  );
}

export default App;
