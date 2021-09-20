// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./HeaderSlider.css";
import "../../App.css";

const HeaderSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="wrs_section_2 section_genesis">
      <div className="wrs_container">
        <Slider {...settings}>
          <div className="header__container">
            <div className="contents">
              <div className="header-col">
                <div className="header-item">
                  <div className="header_list">
                    <span>{props.title}</span>
                    <h2>{props.para}</h2>
                  </div>
                  <div className="paras">
                    <p>{props.paragraph}</p>
                    <div className="header__btn">
                      <button>{props.button}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__container">
            <div className="contents">
              <div className="header-col">
                <div className="header-item">
                  <div className="header_list">
                    <span>{props.title}</span>
                    <h2>{props.para}</h2>
                  </div>
                  <div className="paras">
                    <p>{props.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__container">
            <div className="contents">
              <div className="header-col">
                <div className="header-item">
                  <div className="header_list">
                    <span>{props.title}</span>
                    <h2>{props.para}</h2>
                  </div>
                  <div className="paras">
                    <p>{props.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__container">
            <div className="contents">
              <div className="header-col">
                <div className="header-item">
                  <div className="header_list">
                    <span>{props.title}</span>
                    <h2>{props.para}</h2>
                  </div>
                  <div className="paras">
                    <p>{props.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeaderSlider;
