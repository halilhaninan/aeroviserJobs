import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";
import "./LoginPage.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const kullanici = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    kullaniciAd: "",
    email: "",
    parola: "",
    parolaKontrol: "",
  });

  const { email, parola } = formData;
  const reload = () => {
    window.location.reload();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    const userData = {
      email,
      parola,
    };
    console.log(userData);
    axios
      .post(`http://localhost:8080/api/user/login`, formData)
      .then((response) => {
        console.log(response);
        toast.success("Success!!");

        localStorage.setItem("user", JSON.stringify(response.data));
        setTimeout(() => {
          reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className=" register">
        <Navbarr />

        <div className="container-fluid col-md-12 row">
          <div className="col-md-6 mt-5 p-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image2"
            />
          </div>
          <div className="col-md-6  d-flex align-content-around row">
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
              <MDBBtn
                disabled={true}
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#3b5998" }}>
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Continue with Facebook
              </MDBBtn>
              <MDBBtn
                disabled={true}
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#EA4335" }}>
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Continue with Google
              </MDBBtn>
              <MDBBtn
                disabled={true}
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#55acee" }}>
                <MDBIcon fab icon="twitter" className="mx-2" />
                Continue with Twitter
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
