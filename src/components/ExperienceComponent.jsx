import { Container, Row, ListGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const ExperienceComponent = () => {
  return (
    <Container className="profilePageCenterContainer px-0">
      {/* <Row> */}
      <div className="experience-container-design p-4 normal-cursor-on-hover">
        <div className="d-flex justify-content-between">
          <h5 className="text-left mb-0 normal-cursor-on-hover font-weight-bold">
            Experience
          </h5>
          <div className="d-flex cursor-on-hover">
            <div className="d-flex justify-content-center align-items-center mr-2 add-icon">
              <Icon.Plus />
            </div>
            <div className="d-flex justify-content-center align-items-center edit-icon">
              <Icon.Pencil />
            </div>
          </div>
        </div>
        <div className=" ">
          <ListGroup variant="flush" className="px-0 text-left">
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
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      {/* </Row> */}
    </Container>
  );
};

export default ExperienceComponent;
