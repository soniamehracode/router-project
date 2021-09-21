import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="context_container">
        <div className="container_item">
          <div>
            <div className="contact-list">
              <h3 className="contact-heading">contact information</h3>
              <p className="contact-para">
                Send us your message and we will get back to you within 24
                hours.
              </p>
            </div>
            <div>
              <div className="context-img">
                <span>
                  <img src="https://werstupid.netlify.app/images/logo_mail.png" />
                </span>
                <p>hello@werstupid.com</p>
              </div>

              <div className="context-img">
                <span>
                  <img src="https://werstupid.netlify.app/images/logo_phone.png" />
                </span>
                <p>+91 7303445855</p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact_icon">
                <a>
                  <img src="https://werstupid.netlify.app/images/logo_youtube.png" />
                </a>
              </div>
              <div className="contact_icon">
                <a>
                  <img src="https://werstupid.netlify.app/images/logo_twitter.png" />
                </a>
              </div>
              <div className="contact_icon">
                <a>
                  <img src="https://werstupid.netlify.app/images/logo_instagram.png" />
                </a>
              </div>
              <div className="contact_icon">
                <a>
                  <img src="https://werstupid.netlify.app/images/logo_facebook.png" />
                </a>
              </div>
              <div className="contact_icon">
                <a>
                  <img src="https://werstupid.netlify.app/images/logo_linkedin.png" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-2">
          <div className="form-list">
            <div className="form-input">
              <input type="text" placeholder="full Name" />
              <input type="text" placeholder="last Name" />
            </div>

            <div className="form-input">
              <input type="text" placeholder="email id" />
              <input type="text" placeholder="phone number" />
            </div>
          </div>
          <div className="form-section">
            <h3>category*</h3>
            <div>
              <div className="form-id">
                <div>
                  <input className="form_list" type="radio" />
                  <span>genisis</span>
                </div>
                <div>
                  <input className="form_list" type="radio" />
                  <span>shop</span>
                </div>
                <div>
                  <input className="form_list" type="radio" />
                  <span>ebooks</span>
                </div>
                <div>
                  <input className="form_list" type="radio" />
                  <span>Amazon Products</span>
                </div>
                <div>
                  <input className="form_list" type="radio" />
                  <span>other</span>
                </div>
              </div>
            </div>
          </div>

          <div className="textarea">
            <div>
              <div>
                <textarea className="text" />
                <button className="contact-btn">
                  <span>submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
