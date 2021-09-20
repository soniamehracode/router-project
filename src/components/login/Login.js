import "./Login.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <div className="form-content">
          <div className="form__input">
            <div className="form-inner">
              <div className="form-group">
                <div className="form-wrapper">
                  <div className="app-wrapper">
                    <img src="https://werstupid.netlify.app/images/icon_signup.png" />
                  </div>
                  <div className="ragister">
                    <h2>login</h2>
                    <p>enter the world of fitness</p>
                    <div className="create-title">
                      <button className="create-btn">
                        <span className="create-span">
                          <img src="https://werstupid.netlify.app/images/logo_google.png" />
                        </span>
                        <span className="create__span">login with google</span>
                      </button>
                    </div>
                  </div>
                  <div className="name">
                    <div className="main">
                      <hr className="main-line" />
                      <h2>or</h2>
                      <hr className="main-line" />
                    </div>
                  </div>
                  <div className="input-box">
                    <form className="user-details">
                      <input
                        type="email"
                        placeholder="enter your email"
                        value=""
                      />
                      <input
                        type="password"
                        placeholder="enter your password"
                        value=""
                      />
                    </form>

                    <div className="user-title">
                      <div>
                        <input type="checkbox" />
                        <span className="check-span"> remember me</span>
                      </div>

                      <div className="password">
                        <span>forgot password</span>
                      </div>
                    </div>
                  </div>
                  <div className="login-detail">
                    <button>login</button>
                  </div>
                  <div className="login-title">
                    <p>
                      do not have an account?<span>sign up here</span>
                    </p>
                  </div>
                  <div className="login-tag">
                    <p>All rights reserved,powerd by KM</p>
                  </div>
                </div>
                <div className="login-img">
                  <img src="https://werstupid.netlify.app/images/icon_element_oval1.png" />
                </div>
              </div>
              <div className="gender-details">
                <div className="gender-title" onClick={() => setShow(!show)}>
                  <img src="https://werstupid.netlify.app/images/icon_closeButton.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
