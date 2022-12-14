import { useState } from "react";
import { Row, ListGroup, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ExperienceModal from "./ExperienceModal";

const ExperienceComponent = () => {
  const [plusButton, setPlusButton] = useState(false);
  const location = window.location.pathname;
  console.log("🚀 ~ ExperienceComponent ~ location", location);

  return (
    <>
      {location === "/editexperiences" ? (
        <Container className="profilePageCenterContainer px-0">
          <Row className="my-2">
            <div className="col experience-container-design p-4 normal-cursor-on-hover">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="editButtonIconDiv d-flex justify-content-center align-items-center">
                    <Link to={"/"}>
                      <Icon.ArrowLeft
                        style={{ "font-size": "25px" }}
                        className="text-dark"
                      />
                    </Link>
                  </div>
                  <h5 className="text-left ml-4 mb-0 normal-cursor-on-hover font-weight-bold">
                    Experience
                  </h5>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column justify-content-center align-items-center cursor-on-hover">
                    <div
                      className={
                        plusButton === true
                          ? "d-flex editButtonIconDiv justify-content-center align-items-center mr-2 add-icon rounded-circle plus-icon-button-experience-container"
                          : "d-flex editButtonIconDiv justify-content-center align-items-center mr-2 add-icon rounded-circle "
                      }
                      onClick={() => {
                        if (plusButton === false) {
                          setPlusButton(true);
                        } else {
                          setPlusButton(false);
                        }
                      }}
                    >
                      <Icon.Plus />
                    </div>
                    <div className="d-flex justify-content-center align-items-center editButtonIconDiv mt-2 mr-2">
                      <Icon.Pencil style={{ fontSize: "20px" }} />
                      {/* //!HERE GOES THE MODAL TO EDIT FIRST EXPERIENCE */}
                    </div>
                    <div
                      className={
                        plusButton === true
                          ? "visible experience-dropdown light-grey-color p-3"
                          : "invisible experience-dropdown light-grey-color p-3"
                      }
                    >
                      <ExperienceModal />
                      <div className="d-flex">
                        <div className="mr-2">
                          <Icon.Calendar2Date />
                        </div>
                        <div>Add career break</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-5 ">
                <ListGroup variant="flush" className="px-0 text-left">
                  <ListGroup.Item className="px-0">
                    <h6 className="font-weight-bold">
                      Multidiscipliary Creative
                    </h6>
                    <div>
                      Alkha Studio{" "}
                      <span>
                        <Icon.Dot />
                      </span>{" "}
                      Freelance
                    </div>
                    <div className="light-grey-color">Sept 2017 - Present</div>
                    <div className="light-grey-color">
                      Manchester Area, United Kingdom
                    </div>
                  </ListGroup.Item>
                  <div className="col px-0 d-flex justify-content-between">
                    <ListGroup.Item className="px-0 border-0">
                      <h6 className="font-weight-bold">
                        The University of Salford
                      </h6>
                      <div className="light-grey-color mb-2">3 yrs</div>
                      <h6 className="font-weight-bold">
                        Student Representative
                      </h6>
                      <div className="light-grey-color mb-4">
                        Sept 2019 - Aug 2020{" "}
                        <span>
                          <Icon.Dot />
                        </span>
                        1 yr
                      </div>
                      <h6 className="font-weight-bold">
                        Interior Design Student
                      </h6>
                      <div className="light-grey-color mb-4">
                        Sept 2017 - Jun 2020{" "}
                        <span>
                          <Icon.Dot />
                        </span>
                        2 yrs 10 mo
                      </div>
                      <h6 className="font-weight-bold">
                        Student Representative
                      </h6>
                      <div className="light-grey-color">
                        Oct 2017 - Oct 2018{" "}
                        <span>
                          <Icon.Dot />
                        </span>
                        1 yr 1 mo
                      </div>
                    </ListGroup.Item>
                    <div className="d-flex justify-content-center align-items-center editButtonIconDiv mt-2 mr-2">
                      <Icon.Pencil style={{ "font-size": "20px" }} />
                    </div>
                  </div>
                  <div className="col border-top px-0 d-flex justify-content-between">
                    <ListGroup.Item className="px-0 border-0">
                      <h6 className="font-weight-bold">Interior Designer</h6>
                      <div>
                        AFL Architects{" "}
                        <span>
                          <Icon.Dot />
                        </span>{" "}
                        Freelance
                      </div>
                      <div className="light-grey-color">
                        Sept 2017 - Present
                      </div>
                      <div className="light-grey-color">
                        Manchester Area, United Kingdom
                      </div>
                    </ListGroup.Item>
                    <div className="d-flex justify-content-center align-items-center editButtonIconDiv mt-2 mr-2">
                      <Icon.Pencil style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                </ListGroup>
              </div>
            </div>
          </Row>
        </Container>
      ) : (
        <Row className="my-2">
          <div className="col experience-container-design p-4 normal-cursor-on-hover">
            <div className="d-flex justify-content-between">
              <h5 className="text-left mb-0 normal-cursor-on-hover font-weight-bold">
                Experience
              </h5>
              <div className="d-flex text-center cursor-on-hover">
                <div
                  className={
                    plusButton === true
                      ? "d-flex editButtonIconDiv justify-content-center align-items-center mr-2 add-icon rounded-circle plus-icon-button-experience-container"
                      : "d-flex editButtonIconDiv justify-content-center align-items-center mr-2 add-icon rounded-circle "
                  }
                  onClick={() => {
                    if (plusButton === false) {
                      setPlusButton(true);
                    } else {
                      setPlusButton(false);
                    }
                  }}
                >
                  <Icon.Plus />
                </div>
                <div className="d-flex editButtonIconDiv justify-content-center align-items-center edit-icon">
                  <Link to={"/editexperiences"}>
                    <Icon.Pencil
                      className="text-dark pb-1"
                      style={{ fontSize: "23px" }}
                    />
                  </Link>
                </div>
                <div
                  className={
                    plusButton === true
                      ? "visible experience-dropdown light-grey-color p-3"
                      : "invisible experience-dropdown light-grey-color p-3"
                  }
                >
                  {/* <div className="d-flex mb-1 add-position-experience-effect-on-hover">
                <div className="mr-2">
                  <Icon.BriefcaseFill />
                </div>
                <div>Add position</div>
              </div> */}
                  <ExperienceModal />
                  <div className="d-flex">
                    <div className="mr-2">
                      <Icon.Calendar2Date />
                    </div>
                    <div>Add career break</div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" ">
              <ListGroup variant="flush" className="px-0 text-left">
                <ListGroup.Item className="px-0">
                  <h6 className="font-weight-bold">
                    Multidiscipliary Creative
                  </h6>
                  <div>
                    Alkha Studio{" "}
                    <span>
                      <Icon.Dot />
                    </span>{" "}
                    Freelance
                  </div>
                  <div className="light-grey-color">Sept 2017 - Present</div>
                  <div className="light-grey-color">
                    Manchester Area, United Kingdom
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="px-0 ">
                  <h6 className="font-weight-bold">
                    The University of Salford
                  </h6>
                  <div className="light-grey-color mb-2">3 yrs</div>
                  <h6 className="font-weight-bold">Student Representative</h6>
                  <div className="light-grey-color mb-4">
                    Sept 2019 - Aug 2020{" "}
                    <span>
                      <Icon.Dot />
                    </span>
                    1 yr
                  </div>
                  <h6 className="font-weight-bold">Interior Design Student</h6>
                  <div className="light-grey-color mb-4">
                    Sept 2017 - Jun 2020{" "}
                    <span>
                      <Icon.Dot />
                    </span>
                    2 yrs 10 mo
                  </div>
                  <h6 className="font-weight-bold">Student Representative</h6>
                  <div className="light-grey-color">
                    Oct 2017 - Oct 2018{" "}
                    <span>
                      <Icon.Dot />
                    </span>
                    1 yr 1 mo
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="px-0">
                  <h6 className="font-weight-bold">Interior Designer</h6>
                  <div>
                    AFL Architects{" "}
                    <span>
                      <Icon.Dot />
                    </span>{" "}
                    Freelance
                  </div>
                  <div className="light-grey-color">Sept 2017 - Present</div>
                  <div className="light-grey-color">
                    Manchester Area, United Kingdom
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Row>
      )}
    </>
  );
};

export default ExperienceComponent;
