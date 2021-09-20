import React from "react";
import "../../App.css";
import "./ShopContent.css";

const ShopContent = () => {
  return (
    <div className="wrs_container">
      <div className="item-container">
        <div className="content-img">
          <div className="shop-img">
            <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg" />
          </div>
        </div>
        <div className="content-img">
          <div className="shop-img">
            <img src="https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_1280.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
