import "./Slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../App.css";
const Slide = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="wrs_section_2 section_posts">
      <div className="wrs_container">
        <div className="cards_container">
          <div className="carosal_card">
            <h2>
              Merchandise<span>store</span>
            </h2>
            <div className="carosal_btn">
              <button className="button">
                <span>view all</span>
              </button>
            </div>
          </div>

          <div className="post-wrapper">
            <Slider {...settings}>
              <div className="post_card">
                <div className="post">
                  <img src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png" />
                  <div className="post_info">
                    <h1>
                      T-shirt <span>$59.00</span>
                    </h1>
                    <h3>
                      Add to cart
                      <i className="fas fa-arrow-right"></i>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="post_card">
                <div className="post">
                  <img src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png" />
                  <div className="post_info">
                    <h1>
                      T-shirt <span>$59.00</span>
                    </h1>
                    <h3>
                      Add to cart
                      <i className="fas fa-arrow-right"></i>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="post_card">
                <div className="post">
                  <img src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png" />
                  <div className="post_info">
                    <h1>
                      T-shirt <span>$59.00</span>
                    </h1>
                    <h3>
                      Add to cart
                      <i className="fas fa-arrow-right"></i>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="post_card">
                <div className="post">
                  <img src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png" />
                  <div className="post_info">
                    <h1>
                      T-shirt <span>$59.00</span>
                    </h1>
                    <h3>
                      Add to cart
                      <i className="fas fa-arrow-right"></i>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="post_card">
                <div className="post">
                  <img src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png" />
                  <div className="post_info">
                    <h1>
                      T-shirt <span>$59.00</span>
                    </h1>
                    <h3>
                      Add to cart
                      <i className="fas fa-arrow-right"></i>
                    </h3>
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

export default Slide;
