import React from "react";
import "./Shoppage.css";
import "../../App.css";
const Shoppage = () => {
  return (
    <div className="wrs_container">
      <div className="shop_container">
        <div className="shop_card">
          <div className="shop-container">
            <div className="shop_item">
              <span className="shop-head">Supplements & Herbs</span>
              <span className="shop-heading">
                Best Organic natural supplements for all your fitness needs
              </span>
            </div>
            <div className="shop_img">
              <img src="https://werstupid.netlify.app/images/icon_herbs.png" />
            </div>
          </div>
        </div>
        <div className="shop_card">
          <div className="shop-container">
            <div className="shop_item">
              <span className="shop-head">Books & Ebooks</span>
              <span className="shop-heading">
                Curated with detailed research and science based guides
              </span>
            </div>
            <div className="shop_img">
              <img src="https://werstupid.netlify.app/images/icon_books.png" />
            </div>
          </div>
        </div>
        <div className="shop_card">
          <div className="shop-container">
            <div className="shop_item">
              <span className="shop-head">Motivation & Inspiration</span>
              <span className="shop-heading">
                Never miss a day and achieve your goal with any distraction{" "}
              </span>
            </div>
            <div className="shop_img">
              <img src="https://werstupid.netlify.app/images/icon_motivation.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoppage;
