import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// sections for this page

import Download from "./index-sections/Download.js";
import CareersTable from "components/CareersTable";

function Index({ onSubmitCategory, setCategory }) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader
          onSubmitCategory={onSubmitCategory}
          setCategory={setCategory}
        />
        <CareersTable />
        <div className="main">
          <Download />
        </div>
      </div>
    </>
  );
}

export default Index;
