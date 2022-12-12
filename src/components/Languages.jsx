import { Row, Col } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";

const Languages = () => {
  return (
    <Row className="my-2 ">
      <Col className="activityComponent pt-4 flex-nowrap bg-white">
        <Row className="px-4">
          <div className="col-6 d-flex flex-column align-items-start">
            <h5 className="mb-0">
              <b>Languages</b>
            </h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <Plus style={{ fontSize: "30px" }} className="mr-2" />
                <div className="editButtonDivThree d-flex justify-content-center align-items-center">
                  <Pencil style={{ fontSize: "15px" }} />
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row className="px-4">
          <Col className=" text-left">
            <p className="mb-0 font-weight-bold mt-3">Arabic</p>
            <p className="lightGreyParagraph pb-2 border-bottom">
              Limited working proficiency
            </p>
          </Col>
        </Row>
        <Row className="px-4">
          <Col className=" text-left">
            <p className="mb-0 font-weight-bold mt-2">Russian</p>
            <p className="lightGreyParagraph pb-2 border-bottom">fluent</p>
          </Col>
        </Row>
        <Row className="px-4">
          <Col className=" text-left">
            <p className="mb-0 font-weight-bold mt-2">Bulgarian</p>
            <p className="lightGreyParagraph">fluent</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Languages;
