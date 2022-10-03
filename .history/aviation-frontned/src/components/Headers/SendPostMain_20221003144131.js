import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function SendPostMain() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/send-post.jpg") + ")",
          }}
          ref={pageHeader}></div>
        <div className="content-center">
          <div className="form">
            <div className="form-body">
              <div className="username">
                <label className="form__label" for="firstName">
                  First Name{" "}
                </label>
                <input
                  className="form__input"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="lastname">
                <label className="form__label" for="lastName">
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id="lastName"
                  className="form__input"
                  placeholder="LastName"
                />
              </div>
              <div className="email">
                <label className="form__label" for="email">
                  Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  className="form__input"
                  placeholder="Email"
                />
              </div>
              <div className="password">
                <label className="form__label" for="password">
                  Password{" "}
                </label>
                <input
                  className="form__input"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="confirm-password">
                <label className="form__label" for="confirmPassword">
                  Confirm Password{" "}
                </label>
                <input
                  className="form__input"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div class="footer">
              <button type="submit" class="btn">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendPostMain;
