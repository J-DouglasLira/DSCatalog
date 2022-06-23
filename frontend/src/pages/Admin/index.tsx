import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles.css";

const Component1 = () => {
  return <h1>Products 1</h1>;
};

const Component2 = () => {
  return <h1>Categories </h1>;
};

const Component3 = () => {
  return <h1>Users 2</h1>;
};

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="products" element={<Component1 />} />
          <Route path="categories" element={<Component2 />} />
          <Route path="users" element={<Component3 />} />
        </Routes>
        <div />
      </div>
    </div>
  );
};

export default Admin;
