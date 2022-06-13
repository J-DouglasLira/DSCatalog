import { NavBar } from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
