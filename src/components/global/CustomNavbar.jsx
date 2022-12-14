import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

import * as Icon from "react-bootstrap-icons"

import SearchField from "./SearchField"

const CustomNavbar = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="white">
        <Container className="d-flex justify-content-between align-items-center navbar-font-sizes">
          <div className="d-flex">
            <div className="my-auto">
              <Navbar.Brand href="/">
                <Icon.Linkedin className="navbar-logo-icon" />
              </Navbar.Brand>
            </div>
            <SearchField />
          </div>
          <Nav>
            <div className="nav-link">
              <div>
                <Icon.HouseDoorFill />
              </div>
              <div>Home</div>
            </div>

            <div className="nav-link">
              <div>
                <Icon.PeopleFill />
              </div>
              <div>My Network</div>
            </div>
            <div className="nav-link">
              <div>
                <Icon.BriefcaseFill />
              </div>
              <div>Jobs</div>
            </div>
            <div className="nav-link">
              <div>
                <Icon.ChatRightDotsFill />
              </div>
              <div>Messaging</div>
            </div>
            <div className="nav-link">
              <div>
                <Icon.BellFill />
              </div>
              <div>Notifications</div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
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
            </div>

            <div className="border-left">
              <div>
                <Icon.Grid3x3GapFill />
              </div>
              <NavDropdown title="Work" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="nav-link ">
              <div>
                <Icon.CardChecklist />
              </div>
              <div>Learning</div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
