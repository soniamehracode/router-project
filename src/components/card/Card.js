import "./Card.css";
const Card = (props) => {
  return (
    <div className="cards-container">
      <div className="card-heading">
        <h1>{props.heading}</h1>
      </div>
      <div className="card-container">
        <div className="card-box">
          <img className="card-img" src={props.img} />
          <div className="card-title">
            <h3>{props.title}</h3>
            <p>{props.para}</p>
          </div>
          <div className="card-button">
            <div className="card-bt">
              {props.button} <span>{props.span}</span>
            </div>
          </div>
        </div>

        <div className="card-box">
          <img className="card-img" src={props.imag} />
          <div className="card-title">
            <h3>{props.titles}</h3>
            <p>{props.paragraph}</p>
          </div>
          <div className="card-button">
            <div className="card-bt">
              {props.btn} <span>{props.span}</span>
            </div>
          </div>
        </div>

        <div className="card-box">
          <img className="card-img" src={props.image} />
          <div className="card-title">
            <h3>{props.titless}</h3>
            <p>{props.paras}</p>
          </div>
          <div className="card-button">
            <div className="card-bt">
              {props.btn}
              <span>{props.span}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;