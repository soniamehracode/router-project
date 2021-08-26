import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="contact-container">
      <div className="box-1">
        <div className="context-item">
          <h1>contact information</h1>
          <p>
            Send us your message and we will get back to you within 24 hours.
          </p>
        </div>
        <div className="context-box">
          <div className="context-img">
            <img src="https://werstupid.netlify.app/images/logo_mail.png" />
            <p>hello@werstupid.com</p>
          </div>
          <div className="context-img">
            <img src="https://werstupid.netlify.app/images/logo_phone.png" />
            <p>+91 7303445855</p>
          </div>
        </div>
      </div>
      <div className="box-2">
        <div className="form">
          <form>
            <input type="text" placeholder="full Name" />
            <input type="text" placeholder="last Name" />
          </form>
          <form>
            <input type="text" placeholder="email id" />
            <input type="text" placeholder="phone number" />
          </form>
          <div className="form-section">
            <h3>category*</h3>
          </div>

          <div className="form-id">
            <div className="form-items">
              <input type="radio" />
              <p>genisis</p>
            </div>
            <div className="form-items">
              <input type="radio" />
              <p>shop</p>
            </div>
            <div className="form-items">
              <input type="radio" />
              <p>ebooks</p>
            </div>
            <div className="form-items">
              <input type="radio" />
              <p>Amazon Products</p>
            </div>
            <div className="form-items">
              <input type="radio" />
              <p>Other</p>
            </div>
          </div>
          <div className="textarea">
            <textarea className="text" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
