import React, { useState } from "react";
import "./NewCard.css";
import "../../App.css";
const NewCard = ({ posts }) => {
  return (
    <div className="wrs_section_1">
      <div className="wrs_container">
        <div className="row">
          {posts.map((post) => {
            return (
              <div className="col">
                <div className="card-cont">
                  <div className="card-body">
                    <img className="card-image" src={post.img} />

                    <h3 className="card_title">{post.title}</h3>
                    <p className="card-para">{post.para}</p>
                    <button className="card-btns">{post.button}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewCard;
