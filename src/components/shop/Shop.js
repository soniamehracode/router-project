import React from "react";
import "./Shop.css";
import HeaderSlider from "../../pages/headerSlider/HeaderSlider";
import Shoppage from "../../newShop/shoppage/Shoppage";
import Cards from "../../pages/cards/Cards";
import ShopContent from "../../newShop/shopContent/ShopContent";
import Footer from "../../pages/footer/Footer";
const Shop = () => {
  return (
    <div className="blog_container">
      <div className="blog">
        <h1>Explore the We R Stupid Store</h1>
        <div className="form_input">
          <div className="form-Data">
            <form className="inputfeild">
              <input type="text" placeholder="enter a word" />

              <span>search</span>
            </form>
          </div>
        </div>
      </div>

      <HeaderSlider />
      <Shoppage />
      <Cards />
      <ShopContent />
      <Cards />
      <Footer />
    </div>
  );
};

export default Shop;
