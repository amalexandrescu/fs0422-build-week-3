import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import RandomUserProfilePage from "../randomUser/RandomUserProfilePage";
import SideComponentsMyProfile from "../sidebar/SideComponentsMyProfile";
import LargeFooter from "./LargeFooter";
import ProfilePageCenter from "../center/ProfilePageCenter";
import { useNavigate } from "react-router-dom";

export default function OtherUser() {
  const otherUser = useSelector((state) => state.otherUser.selectedUser);
  let details = useSelector((state) => state.myProfile.detailsData);
  const navigate = useNavigate();

  const params = window.location.pathname;

  if (details._id && params === `/profile/${details._id}`) {
    navigate("/me");
  }

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
