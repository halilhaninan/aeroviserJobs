import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

export default function DefaultFooter() {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src="https://lh3.googleusercontent.com/tex-rKfOTfRPbrV4_kXCg2MoKflntdBVV9fYA0eBc5rr_N_QghSYyIYpD4jJmo13lHgr_0fMqJvweaySWYBJ8lGHnNHC7Qn2ct3POJgTLEa5l2857zhOpnoIjxHPflIyxtEup-tqO5VIvxSRkIqGKs7Zh99HQLlYokeNmnS5O9lQs7gsZQMKDlNmgADMobhpptevK4ZXauCQDB6KmvhXMfouWaqLxlymK7sjN48PysGlM64d4p1yQXieKeiUoO2PKdwaVvxgV8Io7XJFhQEx7vlqoxzGkHXrAmaI5bbNgelnT8amb3hCmceRklPb-mrQRYf5THIAyfYu2rPGHMSk_M758bbeohtOk7SU2AhcBhjIfppp62S3Wkx_b6yuyek6DWSD3Qu_2-gfNEjBMJI8JCuP6Q73QEfSnEjJWOREnvxxhlJkNVn_AV2986jWrSso0C_-5gWnpeqHuiDrKjkfi7d1CleqlYaOB93pgSpf7T8SJvjZpTaSEz1sXReg5z5pfGbTb7dLPShzGuKlwQsL9M6eQuLOxnawp8imHw2twhMgXEgVQFxqhjYLo8QQ1SYuWpwJX7AxzhMx-ldALNn7IHSyvDbM6hkFILsIKirK_8Vg9Z71nC6tyRCpi9f1gWS7hplVyRDzMRku6XgKuGOTZPno=w176-h52-no"
                width="30px"
              />
              <span className="ml-3 h5 font-weight-bold">Aeroviser</span>
            </a>
            <p className="my-3" style={{ width: "250px" }}>
              We are creating High Quality Resources and tools to Aid developers
              during the developement of their projects
            </p>
            <CDBBox display="flex" className="mt-4">
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
              Devwares
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
        <small className="text-center mt-5">
          &copy; Devwares, 2020. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
}
