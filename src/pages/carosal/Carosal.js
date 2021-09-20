import "./Carosal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

import Slider from "react-slick";
const Carosal = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="section_posts">
      <div className="post-tag">
        <h2>{props.title}</h2>
        <span>{props.paragr}</span>
      </div>
      <div className="cards__container">
        <div className="mango_card">
          <img src={props.img} />
          <div className="carosal_btn">
            <button>
              <span>view all</span>
            </button>
          </div>
        </div>
        <div className="wrapper">
          <Slider {...settings}>
            <div className="cards__wrapper">
              <div className="post-section">
                <img
                  className="card__img"
                  src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                />
                <div className="card__body">
                  <h2>Shiljeet pro</h2>
                  <span>$59.00</span>
                </div>
                <div className="card__price">
                  <span>
                    Add to cart
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="cards__wrapper">
              <div className="post-section">
                <img
                  className="card__img"
                  src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                />
                <div className="card__body">
                  <h2>Shiljeet pro</h2>
                  <span>$59.00</span>
                </div>
                <div className="card__price">
                  <span>
                    Add to cart
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="cards__wrapper">
              <div className="post-section">
                <img
                  className="card__img"
                  src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                />
                <div className="card__body">
                  <h2>Shiljeet pro</h2>
                  <span>$59.00</span>
                </div>
                <div className="card__price">
                  <span>
                    Add to cart
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="cards__wrapper">
              <div className="post-section">
                <img
                  className="card__img"
                  src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                />
                <div className="card__body">
                  <h2>Shiljeet pro</h2>
                  <span>$59.00</span>
                </div>
                <div className="card__price">
                  <span>
                    Add to cart
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="cards__wrapper">
              <div className="post-section">
                <img
                  className="card__img"
                  src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                />
                <div className="card__body">
                  <h2>Shiljeet pro</h2>
                  <span>$59.00</span>
                </div>
                <div className="card__price">
                  <span>
                    Add to cart
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carosal;
