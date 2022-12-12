import React from "react";
import { Container } from "react-bootstrap";
import Activity from "./Activity";
import UserDetails from "./UserDetails";

const ProfilePageCenter = () => {
  return (
    <Container className="profilePageCenterContainer px-0">
      <UserDetails />
      <Activity />
    </Container>
  );
};

export default ProfilePageCenter;
