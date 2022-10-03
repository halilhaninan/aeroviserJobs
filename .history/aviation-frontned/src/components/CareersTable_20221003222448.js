import React, { useState } from "react";
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

  console.log(modal1);

  const fdetail = () => {
    if (detail == true) {
      setDetail(true);
    } else setDetail(true);
  };
  const postdate = "21.10.1995";

  useEffect(() => {
    axios
      .get("https://backend-cvsc.vercel.app/coin/")
      .then((response) => {
        setCoins(
          response.data.map((item) => {
            console.log(typeof "item.votes[0]", "item voteeeeeesssss");
            // console.log(response);
            return {
              contractAddress: item.contractAddress,
              logo: item.logo,
              name: item?.name,
              price: item?.price,
              marketCap: item?.marketcap,
              etherscan: item.etherscan,
              pancakeSwap: item.pancakeSwap,
              telegram: item.telegram,
              website: item.website,
              twitter: item.twitter,
              vote: item?.vote,
              votes: item?.votes,
            };
          })
        );
      })

      .catch((error) => {
        console.log("ERROR !!!", error);
      });
  }, [sentVote]);
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
                      <img
                        alt="a"
                        className=" fa-border"
                        src={
                          "https://www.resourcegroup.co.uk/wp-content/uploads/2021/05/Logo.png"
                        }
                      />
                    </td>
                    <td className="jobTitle">
                      VIP Aircraft Painters Required
                      <td className="company">Resource Group</td>
                      <td className="jobAddress">
                        Gloucestershire, South West, UK
                      </td>
                    </td>
                    <td>
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </td>
                  </div>
                </div>
              </tr>
            </div>

            <div className="col-md-7">
              {detail && (
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
                        VIP Aircraft Painters Required
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
                        Resource Group
                      </a>
                    </td>
                    <td>
                      <a
                        href={`https://www.google.com/maps/dir/${"paris"}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "blue" }}>
                        <img
                          src="https://img.icons8.com/color/20/000000/google-maps-new.png"
                          alt="address"
                        />
                        Gloucestershire, South West, UK
                      </a>
                    </td>
                  </div>
                  <div className="jobdesc col-md">
                    <td>
                      <td>
                        <span style={{ color: "gray" }}>
                          Posting Date:{postdate}
                        </span>
                      </td>
                      <td>
                        <span style={{ color: "gray" }}>
                          job title : VIP Aircraft Painters Required
                        </span>
                      </td>
                      <td>
                        <span style={{ color: "gray" }}>
                          salary:$5000 - $60000
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
                      <td style={{ color: "gray" }}>
                        Connecting the world to meaningful people, places and
                        experiences. Go higher. Go further. Move Beyond with
                        Cathay Pacific. Starting today, you can fly high and set
                        your ambition higher than ever before. With a career
                        that takes you places, it’s all about enjoying the
                        boundless opportunities and experiences you can set for
                        yourself. If you have an outgoing, warm, friendly
                        personality and hold a strong passion for delighting and
                        creating memorable customer experiences while travelling
                        around the world, we invite you to join our Flight
                        Attendant Recruitment Day on 7-8 October 2022 at Cordis
                        Hotel, Mongkok. Register for a timeslot now! Shortlisted
                        candidate will receive a special gift and timeslots will
                        be distributed on a first-come-first-served basis. We
                        will also reserve a limited number of interview slots
                        for walk-in candidates on 8 October from 2:30 PM to 4:30
                        PM.
                      </td>
                    </td>
                    <td>
                      Requirements
                      <ul style={{ color: "gray" }}>
                        <li>
                          Completing all line and base maintenance tasks in a
                          safe and efficient manner
                        </li>
                        <li>
                          Maintain and uphold a Just Culture in the approved
                          maintenance organisation. Including airworthiness and
                          safety standards in their delegated areas of
                          responsibility.
                        </li>
                        <li>
                          Ensuring all Company and legal requirement relating to
                          aircraft, inspection documentation is complied with
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
              )}
            </div>
          </div>
        </tbody>
      </table>
      <Modal2 setModal1={setModal1} modal1={modal1} />
    </div>
  );
}

export default CareersTable;
