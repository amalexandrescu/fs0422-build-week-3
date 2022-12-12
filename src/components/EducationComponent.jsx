import { Container, Row, ListGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const EducationComponent = () => {
  return (
    <Container className="profilePageCenterContainer px-0">
      {/* <Row> */}
      <div className="education-container-design p-4 normal-cursor-on-hover">
        <div className="d-flex justify-content-between">
          <h5 className="text-left mb-0 normal-cursor-on-hover font-weight-bold">
            Education
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
            <ListGroup.Item className="px-0 pl-5">
              <h6 className="font-weight-bold">EPICODE</h6>
              <div>Full-Stack Developer, Computer Software Engineering</div>
              <div className="light-grey-color">Sept 2022 - Mar 2023</div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      {/* </Row> */}
    </Container>
  );
};

export default EducationComponent;