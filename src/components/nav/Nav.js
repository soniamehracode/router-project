import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <Link to="/">
        <img
          className="nav-img"
          src="https://werstupid.netlify.app/images/company_logo.png"
        />
      </Link>

      <ul
        className={menu ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMenu(false)}
      >
        <Link to="/blogData">
          <li>Blog</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="about">
          <li>Online Training</li>
        </Link>

        <Link to="/about">
          <li>Shop</li>
        </Link>

        <Link to="/about">
          <li>Company</li>
        </Link>

        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <Link to="/contact">
          <li className="btn">Login</li>{" "}
        </Link>
      </ul>
      <button className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Nav;
