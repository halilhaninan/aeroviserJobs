/*eslint-disable*/
import React, { useState } from "react";
import "./indexheader.css";
// reactstrap components

// core components
import axios from "axios";
import {
  Button,
  FormGroup,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

function IndexHeader() {
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

  const [email, setEmail] = useState("");
  const subscribeMail = { email };
  console.log(subscribeMail, "subscribe");

  const onSubmit = (e) => {
    axios
      .post(`http://localhost:8080/api/subscribe`, subscribeMail)
      .then((response) => {
        console.log(response, "subscribe mail");
        setEmail("");
        alert(
          "We have saved your e-mail address. We will notify you about job postings :)"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}></img>
            <h1 className="h1-seo font-weight-bold">Aviation Careers</h1>

            <h3>
              Find the most suitable employee or job for your aviation career
            </h3>

            <div className="filterJob">
              <button className="btn btn-outline jobbtn ">asd</button>
              <button className="btn btn-outline jobbtn ">asd</button>
              <button className="btn btn-outline jobbtn ">123</button>
              <button className="btn btn-outline jobbtn ">
                Ground Crew Jobs
              </button>{" "}
              <button className="btn btn-outline jobbtn ">
                Ground Crew Jobs
              </button>{" "}
              <button className="btn btn-outline jobbtn ">
                Ground Crew Jobs
              </button>{" "}
              <button className="btn btn-outline jobbtn ">
                Ground Crew Jobs
              </button>
            </div>
          </div>
          <div class="containerS">
            <div class="content">
              <form class="subscription">
                <input
                  class="add-email"
                  type="email"
                  value={email}
                  placeholder="subscribe for jobs news"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  color="info"
                  onClick={{() => setModal2(true),}}
                  onClick={onSubmit}>
                  Launch Modal Mini
                </Button>
                <button class="submit-email" type="button">
                  <span class="before-submit">Subscribe</span>
                  <span class="after-submit">Thank you for subscribing!</span>
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;