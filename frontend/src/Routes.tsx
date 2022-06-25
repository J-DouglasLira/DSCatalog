import { NavBar } from "components/Navbar";
import Admin from "pages/Admin";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import ProductDetails from "pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
