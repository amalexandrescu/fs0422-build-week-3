import React from "react";
import { Container } from "react-bootstrap";
import UserDetails from "./UserDetails";

const ProfilePageCenter = () => {
  return (
    <Container className="profilePageCenterContainer px-0">
      <UserDetails />
    </Container>
  );
};

export default ProfilePageCenter;
