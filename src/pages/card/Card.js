import React from "./Card.css";
import "../../App.css";

const Card = () => {
  return (
    <div className="wrs_section_1 section_universe">
      <div className="wrs_container">
        <div className="card-link">
          <h1>the we r stupid universe</h1>
        </div>

        <div className="cards">
          <div className="card-single">
            <div className="card-item">
              <div className="img-section">
                <img
                  src="https://werstupid.netlify.app/images/icon_home_youtube.png"
                  alt=""
                />
              </div>
              <div className="card-span">
                <h3>youtube</h3>
                <span>@werstupid</span>
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="card-item">
              <div className="img-section">
                <img
                  src="https://werstupid.netlify.app/images/icon_home_blogs.png"
                  alt=""
                />
              </div>
              <div className="card-span">
                <h3>Blog</h3>
                <span>Myths,tips,etc</span>
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="card-item">
              <div className="img-section">
                <img
                  src="https://werstupid.netlify.app/images/icon_home_mango_herbs.png"
                  alt=""
                />
              </div>
              <div className="card-span">
                <h3>Mango Herb</h3>
                <span>Natural, herb store</span>
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="card-item">
              <div className="img-section">
                <img
                  src="https://werstupid.netlify.app/images/icon_home_shop.png"
                  alt=""
                />
              </div>
              <div className="card-span">
                <h3>Shop</h3>
                <span>WerStupid Merch</span>
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="card-item">
              <div className="img-section">
                <img
                  src="https://werstupid.netlify.app/images/icon_home_genesis.png"
                  alt=""
                />
              </div>
              <div className="card-span">
                <h3>Gensis</h3>
                <span>Training program</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
