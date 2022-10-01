import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import "./DefaultFooter.css";

export default function DefaultFooter() {
  return (
    <div className="bd-dark">
      <CDBFooter className="shadow bg-dark ">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto "
          style={{ width: "90%" }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img
                  alt="logo"
                  src="https://i.ibb.co/YtP0YSg/footerlogo.png"
                  width="30px"
                />

                <span className="ml-3 h5 font-weight-bold text-white">
                  Aeroviser
                </span>
              </a>
              <p
                className="my-3 footerDesc text-white"
                style={{ width: "250px" }}>
                We are creating High Quality Resources and tools to Aid
                developers during the developement of their projects
              </p>
              <CDBBox display="flex" className="mt-4 text-white">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                AviatonCareers
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink href="/">Resources</CDBFooterLink>
                <CDBFooterLink href="/">About Us</CDBFooterLink>
                <CDBFooterLink href="/">Contact</CDBFooterLink>
                <CDBFooterLink href="/">Blog</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Help
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink href="/">Support</CDBFooterLink>
                <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                <CDBFooterLink href="/">Sign In</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Products
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink href="/">Windframe</CDBFooterLink>
                <CDBFooterLink href="/">Loop</CDBFooterLink>
                <CDBFooterLink href="/">Contrast</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center pb-5">
            &copy; Aeroviser, 2022. All rights reserved.
          </small>
        </CDBBox>
      </CDBFooter>
    </div>
  );
}
