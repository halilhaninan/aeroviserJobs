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
            <div className="form ">
              <label className="font-weight-bold">asd</label>
              <input />
              asd
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SendPostMain;