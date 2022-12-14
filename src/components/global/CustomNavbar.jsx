import { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  ListGroup,
  Button,
} from "react-bootstrap";

import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
          <Nav className="rightSideNavbarContainer d-flex align-items-center justify-content-center">
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover">
              <div>
                <Icon.HouseDoorFill />
              </div>
              <div>Home</div>
            </div>

            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover">
              <div>
                <Icon.PeopleFill />
              </div>
              <div>My Network</div>
            </div>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover">
              <div>
                <Icon.BriefcaseFill />
              </div>
              <div>Jobs</div>
            </div>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover">
              <div>
                <Icon.ChatRightDotsFill />
              </div>
              <div>Messaging</div>
            </div>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover">
              <div>
                <Icon.BellFill />
              </div>
              <div>Notifications</div>
            </div>
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover">
              <div className="me-icon-container ">
                <img src={userImage} alt="" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div>Me</div>
                <Icon.CaretDownFill
                  onClick={() => {
                    if (meSelected === false) {
                      setMeSelected(true);
                    } else {
                      setMeSelected(false);
                    }
                  }}
                />
              </div>
            </div>
            <div
              className={
                meSelected === false
                  ? "d-flex justify-content-between me-dropdown-list invisible"
                  : "d-flex justify-content-between me-dropdown-list visible"
              }
            >
              <ListGroup>
                <ListGroup.Item>
                  <div className="d-flex mb-2">
                    <div className="me-dropdown-image">
                      <img src={userImage} alt="profile-image" />
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
            {/* <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="me-icon-container ">
                <img src="" alt="" />
              </div>
              <NavDropdown title="Me" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
            </div> */}

            <div className="nav-link d-flex flex-column justify-content-around align-items-center border-left cursor-on-hover">
              <div>
                <Icon.Grid3x3GapFill />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div>Work</div>
                <Icon.CaretDownFill />
              </div>
            </div>

            {/* <div className="border-left work-dropdown-navbar-container my-auto">
              <div className="text-center">
                <Icon.Grid3x3GapFill />
              </div>
              <NavDropdown
                title="Work"
                id="collasible-nav-dropdown"
                className="text-center"
              >
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
            </div> */}
            <div className="nav-link d-flex flex-column justify-content-around align-items-center cursor-on-hover">
              <div>
                <Icon.CardChecklist />
              </div>
              <div>Learning</div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
