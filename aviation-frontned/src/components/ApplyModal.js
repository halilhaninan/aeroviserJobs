import axios from "axios";
import React, { useState } from "react";
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
import "./ApplyModal.css";
import { useHistory } from "react-router-dom";

function ApplyModal({ setModal1, modal1 }) {
  //
  const history = useHistory();
  const [sendCvData, setSendCvData] = useState([]);
  //
  const onChangeCv = (e) => {
    console.log("sendCvData: ", sendCvData);
    setSendCvData([...sendCvData, e.target.files[0]]);
  };
  //

  const sendCv = () => {
    axios
      .post(`http://localhost:8080/api2/cv`, sendCvData)
      .then((response) => {
        console.log(response, "response");

        if (response.data) {
          alert("Thank you for attention");
          setTimeout(() => {
            history.push("/");
          }, 1500);
        } else alert(" please try again");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //
  //
  //
  return (
    <Modal isOpen={modal1} toggle={() => setModal1(false)}>
      <div className="modal-header justify-content-center">
        <button
          className="close"
          type="button"
          onClick={() => setModal1(false)}>
          <i className="now-ui-icons ui-1_simple-remove"></i>
        </button>
        <h4 className="title title-up">Apply Job</h4>
      </div>
      <ModalBody>
        <h4>Send your cv</h4>
        <label for="images" class="drop-container">
          <span class="drop-title">Drop files here</span>
          or
          <input
            type="file"
            id="images"
            accept="pdf/*"
            onChange={onChangeCv}
            required
          />
        </label>
      </ModalBody>
      <div className="modal-footer">
        <Button
          color="success"
          type="button"
          onClick={() => {
            sendCv();
          }}>
          Send
        </Button>
        <Button color="danger" type="button" onClick={() => setModal1(false)}>
          Close
        </Button>
      </div>
    </Modal>
  );
}

export default ApplyModal;
