import Dropdown from "react-bootstrap/Dropdown";
import CustomToggleOpenToButton from "../../customToggleElements/CustomToggleOpenToButton";
import CustomMenuOpenToButton from "../../customToggleElements/CustomMenuOpenToButton";
import {
  Arrow90degRight,
  Download,
  FileEarmark,
  InfoSquareFill,
} from "react-bootstrap-icons";

export default function OpenToDropDownButton() {
  return (
    <div className="d-flex ml-0">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggleOpenToButton}>
          <div className="openToDiv rounded-pill text-white py-1 px-3">
            <div> Open to</div>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenuOpenToButton}>
          <Dropdown.Item eventKey="1" className="dropdown">
            <div className="d-flex flex-column">
              <p className="mb-0 font-weight-bold">Finding a new job</p>
              <p className="mb-2" style={{ color: "grey" }}>
                Show recruiter and others that <br />
                you're Open to work
              </p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <div className="d-flex flex-column">
              <p className="mb-0 font-weight-bold">Hiring</p>
              <p className="mb-2" style={{ color: "grey" }}>
                Share that you're hiring and attract
                <br />
                qualified candidates
              </p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <div className="d-flex flex-column">
              <p className="mb-0 font-weight-bold">Providing services</p>
              <p className="" style={{ color: "grey" }}>
                Showcase services you offer so new
                <br />
                clients can discover you
              </p>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
