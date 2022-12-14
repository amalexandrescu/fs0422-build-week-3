import { Col, Container, Row } from "react-bootstrap";

const Feed = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={3} className={"pr-4 pl-0"}>
          <div className="" style={{ backgroundColor: "slategrey" }}>
            Here goes the Leftside
          </div>
        </Col>
        <Col xs={6} className={"pr-4 pl-0"}>
          <div style={{ backgroundColor: "slategrey" }}>
            Here goes the CENTER
          </div>
        </Col>
        <Col xs={3} className={"px-0"}>
          <div style={{ backgroundColor: "slategrey" }}>
            Here goes the Rightside
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
