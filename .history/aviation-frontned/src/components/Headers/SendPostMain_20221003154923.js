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
              <div className="col-md-12 row">
                <div className="thread col-md-5 bg-red">123</div>
                <div className="thread col-md-7 bg-dark">asd</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SendPostMain;
// {
//   /* <label className="font-weight-bold col-md mt-2">
// JobTitle&nbsp;&nbsp;
// <input />
// </label>
// <label className="font-weight-bold col-md mt-2">
// Company Name&nbsp;&nbsp;
// <input />
// </label>
// <label className="font-weight-bold col-md mt-2">
// Location &nbsp;&nbsp;
// <input />
// </label>
// <label className="font-weight-bold col-md mt-2">
// Description&nbsp;&nbsp;
// <input />
// </label>
// <label className="font-weight-bold col-md mt-2">
// Requirements&nbsp;&nbsp;
// <input />
// </label>
// <label className="font-weight-bold col-md mt-2">
// Salary&nbsp;&nbsp;
// <input />
// </label>{" "}
// <label className="font-weight-bold col-md mt-2">
// Other&nbsp;&nbsp;
// <input />
// </label>{" "} */
// }
