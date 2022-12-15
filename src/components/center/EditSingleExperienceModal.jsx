import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleExpIdAction,
  editExperienceAction,
  getExperiencesAction,
} from "../../redux/actions";
import DeleteSingleExpModal from "./DeleteSingleExpModal";
import moment from "moment";

const EditSingleExperienceModal = ({ exp }) => {
  const userId = useSelector((state) => state.myProfile.detailsData._id);
  const [checked, setChecked] = useState(exp.endDate === null ? true : false);
  const [disabledInput, setDisabledInput] = useState(
    checked && checked === true ? true : false
  );
  const isExperienceEdited = useSelector(
    (state) => state.experiences.experienceEdited
  );

  const [image, setImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(getExperiencesAction(userId));
      dispatch({
        type: "CHANGE_STATUS_EDITED_EXP",
        payload: false,
      });
    }
  }, [isExperienceEdited]);

  const dispatch = useDispatch();
  const selectedExperience = useSelector(
    (state) => state.experiences.clickedExp
  );
  const [show, setShow] = useState(false);
  const [day, setDay] = useState("01");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [experience, setExperience] = useState({
    role: exp.role,
    company: exp.company,
    startDate: moment(exp.startDate).format("YYYY-MM-DD"),
    endDate:
      exp.endDate === null
        ? `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${day}`
        : `${moment(exp.endDate).format("YYYY")}-${moment(exp.endDate).format(
            "MM"
          )}-${day}`,
    description: exp.description,
    area: exp.area,
    startYear: moment(exp.startDate).format("YYYY"),
    endYear:
      exp.endDate === null
        ? new Date().getFullYear()
        : moment(exp.endDate).format("YYYY"),
    startMonth: moment(exp.startDate).format("MM"),
    endMonth:
      exp.endDate === null
        ? new Date().getMonth() + 1
        : moment(exp.endDate).format("MM"),
  });

  const onChangeHandler = (value, fieldToSet) => {
    setExperience((state) => ({
      // ...experience,
      ...state,
      [fieldToSet]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let randomDay = Math.floor(Math.random() * 28);
    if (randomDay < 10) {
      setDay(`0${randomDay}`);
    } else {
      setDay(randomDay);
    }

    let updatedExperience = {
      role: experience.role,
      company: experience.company,
      startDate: `${experience.startYear}-${experience.startMonth}-${day}`,
      endDate:
        experience.endMonth !== "" && experience.endYear !== ""
          ? `${experience.endYear}-${experience.endMonth}-${day}`
          : null,
      description: experience.description,
      area: experience.area,
    };

    console.log("updated experience", updatedExperience);

    dispatch(editExperienceAction(updatedExperience, userId, exp._id));

    if (isImageUploaded === true) {
      submitFileData();
      setIsImageUploaded(false);
    }

    handleClose();
  };

  const submitFileData = async () => {
    const formData = new FormData();

    formData.append("experience", image);

    const optionsPost = {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAxM2M5NmRmYjAwMTUyMWE1YmEiLCJpYXQiOjE2NzA4MzYyNDMsImV4cCI6MTY3MjA0NTg0M30.y7kED45MhN6V7jWF7PwyZ4DryRe6OJ6b9-so68M-zaE",
      },
    };

    try {
      let res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${exp.user}/experiences/${exp._id}/picture`,
        optionsPost
      );
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div onClick={handleShow}>
        <Icon.Pencil
          className="edit-icon"
          onClick={() => {
            dispatch(getSingleExpIdAction(exp));
          }}
        />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedExperience !== "" && (
            <Form className="experiencesModal">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex. Retail Sales Manager"
                  required
                  value={experience.role}
                  onChange={(e) => {
                    onChangeHandler(e.target.value, "role");
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Company name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex. Microsoft"
                  required
                  value={experience.company}
                  onChange={(e) => {
                    onChangeHandler(e.target.value, "company");
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Location*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex. London, United Kingdom"
                  required
                  value={experience.area}
                  onChange={(e) => {
                    onChangeHandler(e.target.value, "area");
                  }}
                />
              </Form.Group>
              <Form.Group className="d-flex align-items-center">
                <Form.Control
                  type="checkbox"
                  className="d-inline-block checkboxInput mr-2"
                  checked={checked}
                  onChange={(e) => {
                    if (checked === true) {
                      setDisabledInput(false);
                    } else {
                      onChangeHandler("", "endDate");
                      onChangeHandler("", "endMonth");
                      onChangeHandler("", "endYear");
                      setDisabledInput(true);
                    }
                    setChecked(e.target.checked);
                  }}
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
                    required
                    // value={moment(experience.startDate).format("MM")}
                    value={experience.startMonth}
                    onChange={(e) =>
                      onChangeHandler(e.target.value, "startMonth")
                    }
                  >
                    <option>Month</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </Form.Control>
                  <Form.Control
                    type="number"
                    min={1900}
                    max={2022}
                    placeholder="Year"
                    className="yearSelectInput"
                    value={experience.startYear}
                    onChange={(e) =>
                      onChangeHandler(e.target.value, "startYear")
                    }
                  ></Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="d-flex flex-column ">
                <Form.Label>End date</Form.Label>
                <div className="d-flex flex-row justify-content-between">
                  <>
                    <Form.Control
                      as="select"
                      disabled={disabledInput}
                      className="monthSelectInput"
                      value={experience.endMonth}
                      onChange={(e) => {
                        onChangeHandler(e.target.value, "endMonth");
                      }}
                    >
                      <option>Month</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </Form.Control>
                    <Form.Control
                      type="number"
                      min={1900}
                      max={2022}
                      placeholder="Year"
                      className="yearSelectInput"
                      disabled={disabledInput}
                      value={experience.endYear}
                      onChange={(e) =>
                        onChangeHandler(e.target.value, "endYear")
                      }
                    ></Form.Control>
                  </>
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={experience.description}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, "description")
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Upload your Company Logo</Form.Label>
                <Form.File
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setIsImageUploaded(true);
                  }}
                  name="profile"
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <DeleteSingleExpModal outerModalClose={handleClose} />
          <Button variant="primary" onClick={onSubmitHandler}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditSingleExperienceModal;
