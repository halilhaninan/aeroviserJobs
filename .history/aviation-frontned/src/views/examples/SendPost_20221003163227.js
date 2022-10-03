import React, { useState } from "react";

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

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [salary, setSalary] = useState("");
  const [other, setOther] = useState("");

  const sendPostData = { jobTitle, companyName, location,description, };
  return (
    <>
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
                          <a href="/signup">Click here and Back to main page</a>
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
                                  onChange={(event) => {
                                    setJobTitle(event.target.value);
                                  }}
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
                              <div className="form-outline flex-fill mb-0">
                                <label
                                  className="form-label font-weight-bold"
                                  for="form3Example3c">
                                  Company Name
                                </label>
                                <textarea
                                  onChange={(event) => {
                                    setCompanyName(event.target.value);
                                  }}
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
                              <div className="form-outline flex-fill mb-0">
                                <label
                                  className="form-label font-weight-bold"
                                  for="form3Example3c">
                                  Location
                                </label>
                                <textarea
                                  onChange={(event) => {
                                    setLocation(event.target.value);
                                  }}
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
                              <div className="form-outline flex-fill mb-0">
                                <label
                                  className="form-label font-weight-bold"
                                  for="form3Example3c">
                                  Description
                                </label>
                                <textarea
                                  onChange={(event) => {
                                    setDescription(event.target.value);
                                  }}
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
                              <div className="form-outline flex-fill mb-0">
                                <label
                                  className="form-label font-weight-bold"
                                  for="form3Example3c">
                                  Requirements
                                </label>
                                <textarea
                                  onChange={(event) => {
                                    setRequirements(event.target.value);
                                  }}
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
                              <div className="form-outline flex-fill mb-0">
                                <label
                                  className="form-label font-weight-bold"
                                  for="form3Example3c">
                                  Salary
                                </label>
                                <textarea
                                  onChange={(event) => {
                                    setSalary(event.target.value);
                                  }}
                                  style={{
                                    border: "1px solid blue",
                                  }}
                                  type="text area"
                                  id="form3Example3c"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label font-weight-bold"
                                for="form3Example3c">
                                Other
                              </label>
                              <textarea
                                onChange={(event) => {
                                  setOther(event.target.value);
                                }}
                                style={{
                                  border: "1px solid blue",
                                }}
                                type="text area"
                                id="form3Example3c"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="button"
                                className="btn btn-primary btn-lg">
                                Send a Post
                              </button>
                            </div>
                          </form>
                          <div className="w-100 text-center mt-2">
                            Need help?
                            <a href="/signup"> Send Message</a>
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
          </section>
        </div>
      </div>
    </>
  );
}

export default SendPost;