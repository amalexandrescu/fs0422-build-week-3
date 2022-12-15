import UserDetails from "../center/UserDetails";
import { Container } from "react-bootstrap";
import AboutComponent from "../center/AboutComponent";
import AnalyticsComponent from "../center/AnalyticsComponent";
import ResourcesComponent from "../center/ResourcesComponent";
import ExperienceComponent from "../center/ExperienceComponent";
import EducationComponent from "../center/EducationComponent";
import Languages from "../center/Languages";
import Activity from "../center/Activity";

const RandomUserProfilePage = ({ randomUserDetails }) => {
  let pathname = window.location.pathname;
  console.log("pathname", pathname);

  return (
    <Container className="profilePageCenterContainer px-0">
      <UserDetails profileData={randomUserDetails} />
      <AnalyticsComponent profileData={randomUserDetails} />
      <ResourcesComponent profileData={randomUserDetails} />
      <AboutComponent profileData={randomUserDetails} />
      <Activity profileData={randomUserDetails} />
      <ExperienceComponent profileData={randomUserDetails} />
      <EducationComponent profileData={randomUserDetails} />
      <Languages profileData={randomUserDetails} />
    </Container>
  );
};

export default RandomUserProfilePage;

{
  /* <Container className="profilePageCenterContainer px-0">
      <UserDetails />
      <AnalyticsComponent />
      <ResourcesComponent />
      <AboutComponent />
      <Activity />
      <ExperienceComponent />
      <EducationComponent />
      <Languages />
    </Container> */
}
