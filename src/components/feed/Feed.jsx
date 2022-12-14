import { Col, Container, Row } from "react-bootstrap"
import Center from "./Center"
import Leftside from "./Leftside"
import Rightside from "./Rightside"

const Feed = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={3} className={"pr-4 pl-0"}>
          <div className="">
            <Leftside />
          </div>
        </Col>
        <Col xs={6} className={"pr-4 pl-0"}>
          <div>
            <Center />
          </div>
        </Col>
        <Col xs={3} className={"px-0"}>
          <div style={{ backgroundColor: "slategrey" }}>
            <Rightside />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Feed
