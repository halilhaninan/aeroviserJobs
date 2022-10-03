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
          <div className="form"></div>
          <div className="sendpost">
            <input
              type="text"
              style={{
                width: "100%",
                paddingLeft: "8px",
                paddingTop: "6px",
                paddingBottom: "6px",

                border: this.state.error
                  ? "2px solid red"
                  : this.state.value
                  ? "2px solid #2684ff"
                  : "2px solid hsl(0, 0%, 80%)",
                outline: "0px",

                "&:hover": {
                  border: "2px solid green",
                },
              }}
              placeholder={this.props.placeholder}
              onChange={this.handleInput}
              onFocus={this.checkErrors}
              value={this.state.value}
              onBlur={this.sendData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SendPostMain;
