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
  };

  return (
    <div className="wrs_section_2 section_newpost">
      <div className="wrs_container">
        <div className="cards_container">
          <div className="ebook_card">
            <h2>
              ebooks<span>store</span>
            </h2>
            <div className="carosal_btn">
              <button className="button">
                <span>view all</span>
              </button>
            </div>
          </div>

          <div className="post-wrapper">
            <Slider {...settings}>
              <div className="post_card_section">
                <div className="post_section">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_info">
                    <h2>Born to Move</h2>
                    <span className="post_span">$59.00</span>
                    <span className="post_info_span"> Genisis Member : 0</span>
                  </div>
                  <div className="colm_section">
                    <span>
                      Add to cart
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post_card_section">
                <div className="post_section">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_info">
                    <h2>Born to Move</h2>
                    <span className="post_span">$59.00</span>
                    <span className="post_info_span"> Genisis Member : 0</span>
                  </div>
                  <div className="colm_section">
                    <span>
                      Add to cart
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post_card_section">
                <div className="post_section">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_info">
                    <h2>Born to Move</h2>
                    <span className="post_span">$59.00</span>
                    <span className="post_info_span"> Genisis Member : 0</span>
                  </div>
                  <div className="colm_section">
                    <span>
                      Add to cart
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post_card_section">
                <div className="post_section">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_info">
                    <h2>Born to Move</h2>
                    <span className="post_span">$59.00</span>
                    <span className="post_info_span"> Genisis Member : 0</span>
                  </div>
                  <div className="colm_section">
                    <span>
                      Add to cart
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post_card_section">
                <div className="post_section">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_info">
                    <h2>Born to Move</h2>
                    <span className="post_span">$59.00</span>
                    <span className="post_info_span"> Genisis Member : 0</span>
                  </div>
                  <div className="colm_section">
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
    </div>
  );
};

export default Cards;
