import React from "react";
import "./Blogs.css";

const Blog = () => {
  return (
    <div className="main">
      <div className="cont">
        <h1>the we r stupid universe</h1>
      </div>
      <main>
        <div className="cards">
          <div className="card-single">
            <div className="img-section">
              <img
                src="https://werstupid.netlify.app/images/icon_home_youtube.png"
                alt=""
              />
              <div className="card-span">
                <h1>youtube</h1>
                <span>@werstupid</span>
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="img-section">
              <img
                src="https://werstupid.netlify.app/images/icon_home_blogs.png"
                alt=""
              />
              <div className="card-span">
                <h1>Blog</h1>
                <span>Myths,tips,etc</span>
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="img-section">
              <img
                src="https://werstupid.netlify.app/images/icon_home_mango_herbs.png"
                alt=""
              />
              <div className="card-span">
                <h1>Mango Herb</h1>
                <span>Natural, herb store</span>
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="img-section">
              <img
                src="https://werstupid.netlify.app/images/icon_home_shop.png"
                alt=""
              />
              <div className="card-span">
                <h1>Shop</h1>
                <span>WerStupid Merch</span>
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="img-section">
              <img
                src="https://werstupid.netlify.app/images/icon_home_genesis.png"
                alt=""
              />
              <div className="card-span">
                <h1>Gensis</h1>
                <span>Training program</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
