import React, { useState } from "react";
import Posts from "../posts/Posts";
import "./NewCard.css";

const NewCard = ({ posts }) => {
  return (
    <div className="app">
      <div className="card-container">
        <div className="row">
          {posts.map((post) => {
            return (
              <div className="col">
                <div className="card-cont">
                  <div className="card-body">
                    <img className="card-image" src={post.img} />
                    <h1 className="card-title">{post.title}</h1>
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
