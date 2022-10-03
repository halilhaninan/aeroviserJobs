import React from "react";
import "./SendPostMain.css";

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
          <form className="form col-md">
            <div className="form bg-transparent mt-5">
              <h2>Send new job Post</h2>
              <form className=" row" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                classname="form-control mt-5"
                id="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={onChange}></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                classname="form-control mt-5"
                id="parola"
                name="parola"
                value={parola}
                placeholder="password"
                onChange={onChange}></input>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-info mt-5 login-register"
                style={{ width: 175 }}>
                Login
              </button>
            </div>
          </form>
          <div className="pt-5">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SendPostMain;
