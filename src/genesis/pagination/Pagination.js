import React from "react";
import "./Pagination.css";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];
  for (var i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="wrs_container">
      <nav className="nav">
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <a onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
