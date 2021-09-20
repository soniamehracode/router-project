import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-1">
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
          <div className="footer-list">
            <span>quick links</span>
            <div className="footer-content">
              <div className="footer-item">
                <a>about us</a>
                <a>blog</a>
                <a>genisis online training</a>
                <a>media</a>
              </div>
              <div className="box">
                <div className="footer-item">
                  <a>shop</a>
                  <a>login</a>
                  <a>affiliates</a>
                  <a>contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-3">
          <h2>follow us on</h2>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
