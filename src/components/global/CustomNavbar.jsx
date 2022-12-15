
import { useState } from "react";
import { Container, Navbar, Nav, ListGroup, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import SearchField from "./SearchField";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [meSelected, setMeSelected] = useState(false);

  const userName = useSelector((state) => state.myProfile.detailsData.name);
  const userTitle = useSelector((state) => state.myProfile.detailsData.title);
  const userImage = useSelector((state) => state.myProfile.detailsData.image);
  const userSurname = useSelector(
    (state) => state.myProfile.detailsData.surname
  );

  return (
    <>
      <Navbar expand="lg" variant="light" bg="white" className="sticky-top">
        <Container className="d-flex justify-content-between align-items-center navbar-font-sizes">
          <div className="d-flex">
            <div className="my-auto">
              <Navbar.Brand href="/">
                <Icon.Linkedin className="navbar-logo-icon" />
              </Navbar.Brand>
            </div>
            <SearchField />
          </div>

          <Nav className="rightSideNavbarContainer d-flex align-items-center justify-content-center flex-sm-row mx-sm-auto mx-md-none">
            <Link to={"/feed"}>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover mr-sm-2 mr-md-none">
              <div>
                <Icon.HouseDoorFill className="mr-sm-3 mr-md-0" />
              </div>
              <div className="d-sm-none d-md-block">Home</div>
            </div>
            </Link>

            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover mr-sm-2 mr-md-none">

              <div>
                <Icon.PeopleFill className="mr-sm-3 mr-md-0" />
              </div>
              <div className="d-sm-none d-md-block">My Network</div>
            </div>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover mr-sm-2 mr-md-none">
              <div>
                <Icon.BriefcaseFill className="mr-sm-3 mr-md-0" />
              </div>
              <div className="d-sm-none d-md-block">Jobs</div>
            </div>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover mr-sm-2 mr-md-none">
              <div>
                <Icon.ChatRightDotsFill className="mr-sm-3 mr-md-0" />
              </div>
              <div className="d-sm-none d-md-block">Messaging</div>
            </div>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover mr-sm-2 mr-md-none">
              <div>
                <Icon.BellFill className="mr-sm-3 mr-md-0" />
              </div>
              <div className="d-sm-none d-md-block">Notifications</div>
            </div>
            <div
              className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover mr-sm-2 mr-md-none position-relative"
              onClick={() => {
                if (meSelected === false) {
                  setMeSelected(true);
                } else {
                  setMeSelected(false);
                }
              }}
            >
              <div className="me-icon-container d-sm-flex my-sm-auto d-md-block my-md-0">
                <img
                  src={userImage}
                  alt=""
                  className="d-flex align-items-center justify-content-center"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-sm-none d-md-block">Me</div>
                <Icon.CaretDownFill className="d-sm-none d-md-block" />
                <div
                  className={
                    meSelected === false
                      ? "d-flex justify-content-between me-dropdown-list invisible"
                      : "d-flex justify-content-between me-dropdown-list visible"
                  }
                >
                  <ListGroup style={{ width: "350px" }}>
                    <ListGroup.Item>
                      <div className="d-flex mb-2">
                        <div className="me-dropdown-image">
                          <img
                            src={userImage}
                            alt=""
                            className="d-flex align-items-center justify-content-center"
                          />
                        </div>
                        <div className="ml-2 underline-on-hover">
                          <div className="me-dropdown-big-element">
                            {userName} {userSurname}
                          </div>
                          <div>{userTitle}</div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <Button
                          className="me-dropdown-button"
                          onClick={() => {
                            navigate("/");
                            setMeSelected(false);
                          }}
                        >
                          View Profile
                        </Button>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="underline-on-hover">
                      <div className="me-dropdown-big-element">Account</div>
                      <div>Settings & Privacy</div>
                      <div>Help</div>
                      <div>Language</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="underline-on-hover">
                      <div className="me-dropdown-big-element">Manage</div>
                      <div>Posts & Activity</div>
                      <div>Job Posting Account</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="underline-on-hover">
                      <div>Sing Out</div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </div>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center border-left cursor-on-hover ml-sm-2 ml-md-none pl-sm-2 pl-md-none">
              <div className="d-sm-lex my-sm-auto d-md-block my-md-0">
                <Icon.Grid3x3GapFill className="mr-sm-3 mr-md-0" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-sm-none d-md-block">Work</div>
                <Icon.CaretDownFill className="d-sm-none d-md-block" />
              </div>
            </div>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover ml-sm-2 ml-md-none">
              <div>
                <Icon.CardChecklist />
              </div>
              <div className="d-sm-none d-md-block">Learning</div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
