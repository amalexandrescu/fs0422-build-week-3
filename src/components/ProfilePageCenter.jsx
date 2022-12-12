import React from "react";
import { Container } from "react-bootstrap";
import Activity from "./Activity";
import Languages from "./Languages";
import UserDetails from "./UserDetails";
import AnalyticsComponent from "./AnalyticsComponent";
import ResourcesComponent from "./ResourcesComponent";
import AboutComponent from "./AboutComponent";
import ExperienceComponent from "./ExperienceComponent";
import EducationComponent from "./EducationComponent";

const ProfilePageCenter = () => {
  return (
    <Container className="profilePageCenterContainer px-0">
      <UserDetails />
      <AnalyticsComponent />
      <ResourcesComponent />
      <AboutComponent />
      <Activity />
      <ExperienceComponent />
      <EducationComponent />
      <Languages />
    </Container>
  );
};

export default ProfilePageCenter;
