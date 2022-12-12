import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SideComponentsMyProfile from "./SideComponentsMyProfile"
import LargeFooter from "./LargeFooter"
import ProfilePageCenter from "./ProfilePageCenter"

export default function MyProfile() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={9}>
            <ProfilePageCenter />
          </Col>
          <Col lg={3} className=" mt-3 p-0 ">
            {" "}
            <SideComponentsMyProfile />
          </Col>
        </Row>
      </Container>
      <LargeFooter />
    </>
  )
}
