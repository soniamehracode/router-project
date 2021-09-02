import "./Posts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

import Slider from "react-slick";
const Posts = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="wrs_section_1 section_posts">
      <div className="wrs_container">
        <div className="">
          <h2>{props.title}</h2>
          <p>{props.paragr}</p>
        </div>

        <div className="cards">
          <div className="carosal-card">
            <img src={props.img} />

            <a href="#" className="card-btn">
              view all
            </a>
          </div>

          <div className="flexbox">
            <Slider {...settings}>
              <div className="items">
                <div className="items-img">
                  <img
                    className="carosal-img"
                    src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                  />
                  <h1>Shiljeet pro</h1>
                  <span>$59.00</span>

                  <div className="cardButton">
                    <span className="add-btn">Add to cart</span>
                  </div>
                </div>
              </div>

              <div className="items">
                <div className="items-img">
                  <img
                    className="carosal-img"
                    src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                  />

                  <h1>Shiljeet pro</h1>
                  <span>$59.00</span>

                  <div className="cardButton">
                    <span className="add-btn">Add to cart</span>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="items-img">
                  <img
                    className="carosal-img"
                    src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                  />

                  <h1>Shiljeet pro</h1>
                  <span>$59.00</span>

                  <div className="cardButton">
                    <span className="add-btn">Add to cart</span>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="items-img">
                  <img
                    className="carosal-img"
                    src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                  />
                  <h1>Shiljeet pro</h1>
                  <span>$59.00</span>

                  <div className="cardButton">
                    <span className="add-btn">Add to cart</span>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="items-img">
                  <img
                    className="carosal-img"
                    src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271__480.png"
                  />
                  <h1>Shiljeet pro</h1>
                  <span>$59.00</span>

                  <div className="cardButton">
                    <span className="add-btn">Add to cart</span>
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

export default Posts;
