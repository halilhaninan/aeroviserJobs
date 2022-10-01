/*eslint-disable*/
import React from "react";
import axio

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Powered by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-transparent-footer"
            target="_blank">
            Aeroviser
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-transparent-footer"
            target="_blank">
            RomantikHaydut95
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
