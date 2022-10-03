import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

import DefaultFooter from "components/Footers/DefaultFooter.js";

function SendPost() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />

      <div>
        <div>
          <section className="vh-100">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black">
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Send Post
                          </p>

                          <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <label
                                  className="form-label font-weight-bold"
                                  for="form3Example3c">
                                  Job Title
                                </label>
                                <textarea
                                  style={{
                                    border: "1px solid blue",
                                  }}
                                  type="text area"
                                  id="form3Example3c"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="form3Example4c"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  for="form3Example4c">
                                  Password
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="form3Example4c"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  for="form3Example4c">
                                  Password
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="form3Example4c"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  for="form3Example4c">
                                  Password
                                </label>
                              </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="button"
                                className="btn btn-primary btn-lg">
                                Login
                              </button>
                            </div>
                          </form>
                          <div className="w-100 text-center mt-2">
                            Need Account? <a href="/signup"> SignUp</a>
                          </div>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"></div>
                        <img
                          src="https://f24.com/wp-content/uploads/2022/05/Safety-and-Crisis-Management-in-Aviation-Dblue.jpg"
                          className="img-fluid"
                          alt="Sample image"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://f24.com/wp-content/uploads/2022/05/Safety-and-Crisis-Management-in-Aviation-Dblue.jpg"
              className="img-fluid"
              alt="Sample image"
            />
          </section>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
}

export default SendPost;
