import "./Cards.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "../../App.css";
const Cards = () => {
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
    <div className="wrs_section_2 section_newpost">
      <div className="wrs_container">
        <div className="cards__container">
          <div>
            <div className="ebook_card">
              <div className="ebook-title">
                <h1>
                  ebooks <span>store</span>
                </h1>
              </div>

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
                    src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
                  />
                  <div className="card__body">
                    <h3>born to move</h3>
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
                    src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
                  />
                  <div className="card__body">
                    <h3>born to move</h3>
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
                    src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
                  />
                  <div className="card__body">
                    <h3>born to move</h3>
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
                    src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
                  />
                  <div className="card__body">
                    <h3>born to move</h3>
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
                    src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
                  />
                  <div className="card__body">
                    <h3>born to move</h3>
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

export default Cards;
