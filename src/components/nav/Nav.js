import "./Nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="navbar-list">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-logo">
            <Link to="/" className="navbar-logo">
              <img src="https://werstupid.netlify.app/images/company_logo.png" />
            </Link>
          </div>

          <ul className={click ? "nav-menu active" : "navbar-menuItem"}>
            <li className="nav-items">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                blog
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                about
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                online training
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
                shop
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                company
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                contact us
              </Link>
            </li>
            <Link to="/login">
              <div className="navItems">
                <button className="nav-btn">
                  <span>login</span>
                </button>
              </div>
            </Link>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
