import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SideComponentsMyProfile from "./SideComponentsMyProfile"

export default function MyProfile() {
  return (
    <Container>
      <Row>
        <Col lg={9}>Main Section Component</Col>
        <Col lg={3} className=" mt-5 p-0 ">
          {" "}
          <SideComponentsMyProfile />
        </Col>
      </Row>
    </Container>
  )
}
