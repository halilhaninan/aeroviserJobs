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

  const [formData, setFormData] = useState({
    email: "",
    parola: "",
  });
  console.log(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    console.log(formData);
    axios
      .post(`http://localhost:8080/api/user/login`, formData)
      .then((response) => {
        console.log(response);
        console.log("giris");
        console.log("giris");
        console.log("giris");
        console.log("giris");
        console.log("giris");
        console.log("giris");
        console.log("giris");
        console.log("giris");
        toast.success("Success!!");
        toast.success("Success!!");
        toast.success("Success!!");
        toast.success("Success!!");
        toast.success("Success!!");
        toast.success("Success!!");
        toast.success("Success!!");
        toast.success("Success!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                        onChange={(e) => setFormData[{ email: e.target.value }]}
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
                        onChange={(e) =>
                          setFormData[{ parola: e.target.value }]
                        }
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
