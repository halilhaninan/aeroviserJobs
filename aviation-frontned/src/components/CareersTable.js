/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import "./careers.css";
import { Button } from "reactstrap";
import Modal2 from "./ApplyModal";
import axios from "axios";

function CareersTable() {
  // const [detail, setDetail] = useState(true);
  const [modal1, setModal1] = React.useState(false);

  const [jobs, setJobs] = useState([]);
  const [jobsDetail, setJobsDetail] = useState([]);
  const [category, setCategory] = useState("1");
  const [detailQuery, setDetailQuery] = useState("633d7731c5c7195f052d2f9f");

  console.log(modal1);

  //main
  const onSubmitCategory = () => {
    axios
      .get(`http://localhost:8080/api/jobs?Category=${category}`)
      .then((response) => {
        console.log(response, "1234567");
        setJobs(
          response.data.map((item) => {
            return {
              JobTitle: item.JobTitle,
              CompanyName: item.CompanyName,
              Location: item.Location,
              Description: item.Description,
              Requirements: item.Requirements,
              Salary: item.Salary,
              Other: item.Other,
              Date: item.createdAt,
              _id: item._id,
            };
          })
        );
      });
  };

  //detail
  const onSubmitDetail = () => {
    axios
      .get(`http://localhost:8080/api/jobs?_id=${detailQuery}`)
      .then((response) => {
        console.log(response, "1234567");
        setJobsDetail(
          response.data.map((item) => {
            return {
              JobTitle: item.JobTitle,
              CompanyName: item.CompanyName,
              Location: item.Location,
              Description: item.Description,
              Requirements: item.Requirements,
              Salary: item.Salary,
              Other: item.Other,
              Date: item.createdAt,
              uid: item._id,
            };
          })
        );
      })

      .catch((error) => {
        console.log("ERROR !!!", error);
      });
  };

  useEffect(async () => {
    await onSubmitCategory();

    await onSubmitDetail();
  }, []);

  return (
    <div className="container">
      <h4
        className="d-flex justify-content-center mt-3"
        style={{ fontFamily: "sans-serif" }}>
        Browse the Latest Jobs
      </h4>
      <div className="careerfilter">
        <Button
          color="info"
          className="mx-3"
          onClick={() => {
            setCategory("1");
            onSubmitCategory();
          }}>
          Captain Jobs
        </Button>
        <Button
          color="info"
          className="mx-3"
          onClick={() => {
            setCategory("2");
            onSubmitCategory();
          }}>
          Licensed Jobs
        </Button>
        <Button
          color="info"
          className="mx-3"
          onClick={() => {
            setCategory("3");
            onSubmitCategory();
          }}>
          test Jobs
        </Button>
        <Button
          color="info"
          className="mx-3"
          onClick={() => {
            setCategory("4");
            onSubmitCategory();
          }}>
          cabine Jobs
        </Button>
        <Button color="info" className="mx-3">
          xxx category(5)
        </Button>
        <Button color="info" className="mx-3">
          xxx category(6)
        </Button>
      </div>

      <table class="table table-hover">
        <tbody>
          <div className="col-md-12 row">
            <div className="col-md-5">
              {jobs.map((item, key) => (
                <tr className="desc">
                  <div
                    className="content2 mt-3 border justify-content-center"
                    onClick={() => {
                      {
                        setDetailQuery(item._id);
                        onSubmitDetail();
                      }
                    }}>
                    <td className="imageCareers ">
                      <img
                        alt="a"
                        width="100px"
                        className=" fa-border"
                        src={
                          "https://www.resourcegroup.co.uk/wp-content/uploads/2021/05/Logo.png"
                        }
                      />
                      <td className="jobTitle">
                        {item.name}
                        <td className="company">{item.CompanyName}</td>
                        <td className="location">{item.Location}</td>
                      </td>
                    </td>
                  </div>
                </tr>
              ))}
            </div>
            {/* DETAIL */}
            {/* DETAIL */}
            {/* DETAIL */}
            {/* DETAIL */}
            {/* DETAIL */}
            <div className="col-md-7">
              {jobsDetail.map((item, key) => (
                <tr>
                  <div className="desc pt-3 ">
                    <div className="descTitle">
                      <td className="imageCareers">
                        <img
                          alt="a"
                          className=" fa-border"
                          src={
                            "https://www.resourcegroup.co.uk/wp-content/uploads/2021/05/Logo.png"
                          }
                        />
                      </td>
                      <td>
                        <span style={{ color: "black" }}>
                          <img
                            src="https://img.icons8.com/color/20/000000/work.png"
                            alt="job"
                          />
                          {item.JobTitle}
                        </span>
                      </td>
                      <td>
                        <a
                          href={`https://www.resourcegroup.co.uk/`}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "blue" }}>
                          <img
                            src="https://img.icons8.com/color/20/000000/company.png"
                            alt="company"
                          />
                          {item.CompanyName}
                        </a>
                      </td>
                      <td>
                        <a
                          href={`https://www.google.com/maps/dir/${item.Location}`}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "blue" }}>
                          <img
                            src="https://img.icons8.com/color/20/000000/google-maps-new.png"
                            alt="address"
                          />
                          {item.Location}
                        </a>
                      </td>
                    </div>
                    <div className="jobdesc col-md">
                      <td>
                        <td>
                          <span style={{ color: "gray" }}>{item.Date}</span>
                        </td>
                        <td>
                          <span style={{ color: "gray" }}>
                            job title : {item.JobTitle}
                          </span>
                        </td>
                        <td>
                          <span style={{ color: "gray" }}>
                            salary:{item.Salary}
                          </span>
                        </td>
                      </td>
                    </div>
                    <div className="applySave">
                      <td className="d-flex justify-content-around">
                        <Button
                          color="primary"
                          className="mr-1"
                          onClick={() => setModal1(true)}>
                          Apply
                        </Button>
                        <button className="btn btn-warning">Save </button>
                      </td>
                    </div>
                    <div>
                      <td className="row">
                        Role
                        <td style={{ color: "gray" }}>{item.Requirements}</td>
                      </td>
                      <td>
                        Requirements
                        <ul style={{ color: "gray" }}>
                          <li>123{item.Other}</li>
                          <li>{item.Other}</li>
                          <li>
                            Ensuring all Company and legal requirement relating
                            to aircraft, inspection documentation is complied
                            with
                          </li>
                          <li>
                            Responsible to ensure all completed, or partly
                            completed, inspections are up-to-date and certified
                            prior to end of each day shift, including shift
                            handovers.
                          </li>
                          <li>
                            Maintain competence through the attendance of
                            continuation training and additional training as
                            required and considered appropriate for the role.
                          </li>
                        </ul>
                      </td>
                      <td className="row">
                        The package available is as follows:
                      </td>
                      <td className="row">€28 per hour *(NET)* </td>
                      <td className="row">
                        Up to 60 hours per week Accommodation
                      </td>
                      <td className="row">Travel Included</td>
                    </div>
                  </div>
                </tr>
              ))}
            </div>
          </div>
        </tbody>
      </table>
      <Modal2 setModal1={setModal1} modal1={modal1} />
    </div>
  );
}

export default CareersTable;
