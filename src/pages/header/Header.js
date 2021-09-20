import "./Header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="header">
      <Slider {...settings}>
        <div className="header-title">
          <div className="header-list">
            <span>{props.title}</span>
            <h2>{props.para}</h2>
            <p>{props.paragraph}</p>
            <div className="header-btn">
              <button className="header_btn">{props.button}</button>
            </div>
          </div>
        </div>
        <div className="header-title">
          <div className="header-list">
            <span>{props.title}</span>
            <h2>{props.para}</h2>
            <p>{props.paragraph}</p>
          </div>
        </div>
        <div className="header-title">
          <div className="header-list">
            <span>{props.title}</span>
            <h2>{props.para}</h2>
            <p>{props.paragraph}</p>
          </div>
        </div>
        <div className="header-title">
          <div className="header-list">
            <span>{props.title}</span>
            <h2>{props.para}</h2>
            <p>{props.paragraph}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
