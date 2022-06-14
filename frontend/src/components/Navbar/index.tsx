import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";
export function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>DS Catalog</h4>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" className="active">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="active">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/admin" className="active">ADMIN</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
