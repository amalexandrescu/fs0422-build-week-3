import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import RandomUserProfilePage from "../randomUser/RandomUserProfilePage";
import SideComponentsMyProfile from "../sidebar/SideComponentsMyProfile";
import LargeFooter from "./LargeFooter";
import ProfilePageCenter from "../center/ProfilePageCenter";

export default function OtherUser() {
  const otherUser = useSelector((state) => state.otherUser.selectedUser);

  return (
    <>
      <Container>
        <Row>
          <Col lg={9}>
            {otherUser.length !== 0 && (
              <RandomUserProfilePage randomUserDetails={otherUser} />
            )}
          </Col>
          <Col lg={3} className=" mt-3 p-0 ">
            {" "}
            <SideComponentsMyProfile />
          </Col>
        </Row>
      </Container>
      <LargeFooter />
    </>
    // <>
    //   <div>{otherUser.name}</div>
    //   <div>{otherUser.title}</div>
    //   <div>{otherUser.area}</div>
    // </>
  );
}
