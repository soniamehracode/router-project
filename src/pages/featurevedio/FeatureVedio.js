import "./FeatureVedio.css";
import "../../App.css";

const FeatureVedio = (props) => {
  return (
    <div className="wrs_section_2 section_videos">
      <div className="wrs_container">
        <div className="card-heading">
          <h2>
            featured <span>vedios</span>
          </h2>
        </div>
        <div className="card-container">
          <div className="card-box">
            <div className="card_box">
              <img src={props.imag} />
              <div className="card-title">
                <h3>{props.title}</h3>
              </div>
              <div className="card-button">
                <div className="card-bt">{props.button}</div>
              </div>
            </div>
          </div>

          <div className="card-box">
            <div className="card_box">
              <img src={props.img} />
              <div className="card-title">
                <h3>{props.titles}</h3>
              </div>
              <div className="card-button">
                <div className="card-bt">{props.btn}</div>
              </div>
            </div>
          </div>

          <div className="card-box">
            <div className="card_box">
              <img src={props.image} />
              <div className="card-title">
                <h3>{props.titless}</h3>
              </div>
              <div className="card-button">
                <div className="card-bt">{props.bttn}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureVedio;
