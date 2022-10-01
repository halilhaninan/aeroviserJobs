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

import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {
  const navigate = useHistory();
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

  const [email, setEmail] = useState({
    email: "",
  });
  const [pw, setpw] = useState({
    parola: "",
  });

  const formData = { email, pw };

  console.log(formData, "formdataaaaa");

  const onSubmit = (e) => {
    // console.log(formData);

    axios
      .post(`http://localhost:8080/api/user/login`, formData)
      .then((response) => {
        if (!response.data) {
          setTimeout(() => {
            console.log("girisss");
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/");
          }, 100);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  if (localStorageUser) {
    navigate("/");
  }

  useEffect(() => {
    if (localStorageUser) {
      navigate("/");
    }
  }, [localStorageUser, navigate]);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login-logo.jpg") + ")",
          }}></div>
        <div className="content3">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png")}></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        id="parola"
                        name="parola"
                        placeholder="password"
                        onChange={(e) => setpw(e.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      onClick={onSubmit}
                      type="submit"
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      size="lg">
                      Login
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}>
                          Aeroviser yonetim girisi
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
