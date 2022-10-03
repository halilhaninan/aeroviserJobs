import React, { useState, useEffect } from "react";
import "./careers.css";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
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
import Modal2 from "./ApplyModal";
import axios from "axios";

function CareersTable() {
  const [detail, setDetail] = useState(true);
  const [modal1, setModal1] = React.useState(false);

  const [jobs, setJobs] = useState([]);

  console.log(modal1);

  const fdetail = () => {
    if (detail == true) {
      setDetail(true);
    } else setDetail(true);
  };
  const postdate = "21.10.1995";

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/jobs`)
      .then((response) => {
        setJobs(
          response.data.map((item) => {
            console.log(response);
            return {
              JobTitle: item.JobTitle,
              CompanyName: item.CompanyName,
              Location: item.Location,
              Description: item.Description,
              Requirements: item.Requirements,
              Salary: item.Salary,
              Other: item.Other,
            };
          })
        );
      })

      .catch((error) => {
        console.log("ERROR !!!", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="careerfilter">
        <h1>test filter</h1>
        <Button color="info" className="mx-3">
          Captain Jobs
        </Button>
        <Button color="info" className="mx-3">
          Licensed Jobs
        </Button>{" "}
        <Button color="info" className="mx-3">
          Technical Jobs
        </Button>{" "}
        <Button color="info" className="mx-3">
          Ground Crew Jobs
        </Button>{" "}
        <Button color="info" className="mx-3">
          test Jobs
        </Button>
        <Button color="info" className="mx-3">
          test Jobs
        </Button>
      </div>

      <table class="table table-hover">
        <tbody>
          <div className="col-md-12 row">
            <div className="col-md-5">
              <tr className="desc ">
                <div className="col-md-12 row pt-3">
                  <div className="content2 mt-3 border" onClick={fdetail}>
                    <td className="imageCareers">
                      {jobs.map(item, key)=>()}
                      
      <Modal2 setModal1={setModal1} modal1={modal1} />
    </div>
  );
}

export default CareersTable;
