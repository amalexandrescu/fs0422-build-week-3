import React from "react";
import { Container } from "react-bootstrap";
import Activity from "./Activity";
import Languages from "./Languages";
import UserDetails from "./UserDetails";

const ProfilePageCenter = () => {
  return (
    <Container className="profilePageCenterContainer px-0">
      <UserDetails />
      <Activity />
      <Languages />
    </Container>
  );
};

export default ProfilePageCenter;
