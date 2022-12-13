import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";

const ExperienceModal = () => {
  //this is for the modal
  const [show, setShow] = useState(false);

  //this is for the checkbox
  const [checkedInput, setCheckedInput] = useState("");

  //this is for the end date experience inputs
  const [disabledInput, setDisabledInput] = useState("");

  // "2019-06-16"

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  //changes the value of the inputs
  const onChangeHandler = (value, fieldToSet) => {
    setExperience({
      ...experience,
      [fieldToSet]: value,
    });
  };

  //if the checkbox is checked, than disable the end date inputs
  //and if the checkbox is not checked, than enable the end date inputs
  //it is because the endDate can be null, and if this is null
  //this means that the checkbox is checked(still working at this role) and
  //we don't have an end date; I will put it with "null" in the POST

  const handleCheckbox = () => {
    if (checkedInput === "") {
      setCheckedInput(true);
      setDisabledInput(true);
    } else {
      setCheckedInput("");
      setDisabledInput("");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className="d-flex mb-1 add-position-experience-effect-on-hover"
        onClick={handleShow}
      >
        <div className="mr-2">
          <Icon.BriefcaseFill />
        </div>
        <div>Add position</div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="overflow-auto"> */}
          <Form className="experiencesModal">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. Retail Sales Manager"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Company name*</Form.Label>
              <Form.Control type="text" placeholder="Ex. Microsoft" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Location*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. London, United Kingdom"
              />
            </Form.Group>
            <Form.Group className="d-flex align-items-center">
              <Form.Control
                type="checkbox"
                className="d-inline-block checkboxInput mr-2"
                checked={checkedInput}
                onClick={handleCheckbox}
              />
              <Form.Label className="mb-0">
                I am currently working on this role.
              </Form.Label>
            </Form.Group>
            <Form.Group className="d-flex flex-column">
              <Form.Label>Start date</Form.Label>

              <div className="d-flex flex-row justify-content-between">
                <Form.Control
                  as="select"
                  className="monthSelectInput"
                  // value={reservation.numberOfPeople}
                  // onChange={(e) =>
                  // onChangeHandler(e.target.value, "numberOfPeople")
                  // }
                >
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Control>

                <Form.Control
                  type="text"
                  placeholder="Year"
                  className="yearSelectInput"
                  // value={reservation.numberOfPeople}
                  // onChange={(e) =>
                  // onChangeHandler(e.target.value, "numberOfPeople")
                  // }
                ></Form.Control>
              </div>
            </Form.Group>
            <Form.Group className="d-flex flex-column ">
              <Form.Label>End date</Form.Label>
              <div className="d-flex flex-row justify-content-between">
                <Form.Control
                  as="select"
                  disabled={disabledInput}
                  className="monthSelectInput"

                  // value={reservation.numberOfPeople}
                  // onChange={(e) =>
                  // onChangeHandler(e.target.value, "numberOfPeople")
                  // }
                >
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Control>
                <Form.Control
                  type="text"
                  placeholder="Year"
                  className="yearSelectInput"
                  disabled={disabledInput}
                  // value={reservation.numberOfPeople}
                  // onChange={(e) =>
                  // onChangeHandler(e.target.value, "numberOfPeople")
                  // }
                ></Form.Control>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                // value={reservation.specialRequests}
                // onChange={(e) =>
                // onChangeHandler(e.target.value, "specialRequests")
                // }
              />
            </Form.Group>
          </Form>
          {/* </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="saveButtonExperiencesModal">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExperienceModal;
