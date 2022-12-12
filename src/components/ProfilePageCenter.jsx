import React from "react";
import { Container } from "react-bootstrap";
import Activity from "./Activity";
import Languages from "./Languages";
import UserDetails from "./UserDetails";
import AnalyticsComponent from "./AnalyticsComponent";
import ResourcesComponent from "./ResourcesComponent";

const ProfilePageCenter = () => {
  return (
    <Container className="profilePageCenterContainer px-0">
      <UserDetails />
      <AnalyticsComponent />
      <ResourcesComponent />
      <Activity />
      <Languages />
    </Container>
  );
};

export default ProfilePageCenter;
