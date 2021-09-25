import "./Carosal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

import Slider from "react-slick";
const Carosal = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="wrs_section_1 section_posts">
      <div className="wrs_container">
        <div className="post-tag">
          <h2 className="title-heading">{props.title}</h2>
          <p>{props.paragr}</p>
        </div>

        <div className="cards__container">
          <div>
            <div className="mango_card">
              <img className="mango_card_img" src={props.img} />
              <div className="carosal_btn">
                <button>
                  <span>view all</span>
                </button>
              </div>
            </div>
          </div>

          <div className="post-wrappers">
            <Slider {...settings}>
              <div className="card-wrap">
                <div className="posts">
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
                      <span className="card__price-span">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-wrap">
                <div className="posts">
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
                      <span className="card__price-span">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-wrap">
                <div className="posts">
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
                      <span className="card__price-span">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-wrap">
                <div className="posts">
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
                      <span className="card__price-span">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-wrap">
                <div className="posts">
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
                      <span className="card__price-span">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosal;
