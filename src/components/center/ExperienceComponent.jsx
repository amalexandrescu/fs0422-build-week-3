import { useEffect, useState } from "react";
import { Container, Row, ListGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import ExperienceModal from "./ExperienceModal";
import { getExperiencesAction } from "../../redux/actions";
import { UPDATE_STATE_OF_EXPERIENCES } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const ExperienceComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let userId = "";
  let userId = useSelector((state) => state.myProfile.detailsData._id);
  console.log("user id from exp comp", userId);
  let isNewExperienceAdded = useSelector(
    (state) => state.experiences.newExperienceAdded
  );

  const experiencesArray = useSelector(
    (state) => state.experiences.experiences
  );

  // const experienceArrayOrderdByDate = experiencesArray.sort((date1, date2) => {
  //   return date1.getTime() - date2.getTime();
  // });
  // console.log("testing ordered array by date", experienceArrayOrderdByDate);

  useEffect(() => {
    if (userId && isNewExperienceAdded === true) {
      dispatch(getExperiencesAction(userId));
      dispatch({
        type: UPDATE_STATE_OF_EXPERIENCES,
        payload: false,
      });
    }
  }, [userId, isNewExperienceAdded]);

  const [plusButton, setPlusButton] = useState(false);

  return (
    <Row className="my-2">
      <div className="col experience-container-design p-4 normal-cursor-on-hover">
        <div className="d-flex justify-content-between">
          <h5 className="text-left mb-0 normal-cursor-on-hover font-weight-bold">
            Experience
          </h5>
          <div className="d-flex cursor-on-hover">
            <div
              className={
                plusButton === true
                  ? "d-flex justify-content-center align-items-center mr-2 add-icon rounded-circle plus-icon-button-experience-container"
                  : "d-flex justify-content-center align-items-center mr-2 add-icon rounded-circle "
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
            <div className="d-flex justify-content-center align-items-center edit-icon">
              <Icon.Pencil />
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
          {experiencesArray.length !== 0 ? (
            <ListGroup variant="flush" className="px-0 text-left">
              <ListGroup.Item className="px-0">
                <h6 className="font-weight-bold">
                  {experiencesArray[experiencesArray.length - 1].role}
                </h6>
                <div>
                  {experiencesArray[experiencesArray.length - 1].company}
                  {/* <span>
                    <Icon.Dot />
                  </span>{" "}
                  Freelance */}
                </div>
                <div className="light-grey-color">
                  {experiencesArray[experiencesArray.length - 1].endDate !==
                  null
                    ? `${moment(
                        experiencesArray[experiencesArray.length - 1].startDate
                      ).format("MMMM YYYY")} - ${moment(
                        experiencesArray[experiencesArray.length - 1].endDate
                      ).format("MMMM YYYY")}`
                    : `${moment(
                        experiencesArray[experiencesArray.length - 1].startDate
                      ).format("MMMM YYYY")} - Present`}
                </div>
                <div className="light-grey-color">
                  {experiencesArray[experiencesArray.length - 1].area}
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="px-0 text-center pb-0">
                <div
                  className="d-flex align-items-center justify-content-center"
                  // onClick={() => {
                  //   navigate("/details/experiences");
                  // }}
                >
                  <div className="cursor-on-hover">
                    Show all {experiencesArray.length} experiences
                  </div>
                  <Icon.ArrowRight className="font-weight-bold ml-2 cursor-on-hover" />
                </div>
              </ListGroup.Item>
            </ListGroup>
          ) : (
            "nope"
          )}
          {/* <ListGroup variant="flush" className="px-0 text-left">
            <ListGroup.Item className="px-0">
              <h6 className="font-weight-bold">Multidiscipliary Creative</h6>
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
              <h6 className="font-weight-bold">The University of Salford</h6>
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
            </ListGroup.Item> */}
          {/* </ListGroup> */}
        </div>
      </div>
    </Row>
  );
};

export default ExperienceComponent;
