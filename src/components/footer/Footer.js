import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* first section */}
      <div className="footer">
        <h2>
          WEr<span>STUPID</span>
        </h2>
        <p>
          India’s Top research based - health, fitness & Lifestyle Website.
          Let’s correct the human stupidities in a more sensible and rational
          way.
        </p>
      </div>
      {/* second section */}
      <div className="footer-2">
        <h1>quick links</h1>
        <div className="list">
          <div>
            <ul>
              <li>about us</li>
              <li>blog</li>
              <li>genisis online training</li>
              <li>media</li>
            </ul>
          </div>
          <div className="footer-list">
            <ul>
              <li>shop</li>
              <li>login</li>
              <li>affiliates</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="footer-3">
        <h2>follow us on</h2>
        <div className="icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
