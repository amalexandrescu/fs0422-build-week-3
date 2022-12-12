import { Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const AboutComponent = () => {
  return (
    <Row>
      <div className="about-container-design p-4 normal-cursor-on-hover">
        <div className="d-flex justify-content-between">
          <h5 className="text-left mb-0 font-weight-bold">About</h5>
          <div className="cursor-on-hover">
            <Icon.Pencil />
          </div>
        </div>
        <p className="text-left mt-4">
          Passionate about innovation in both design & tech. I build powerful
          Web apps using a range of technologies including React & TypeScript.
        </p>
        <div className="text-left">
          Always open to learning and taking on a new challenge.
        </div>
      </div>
    </Row>
  );
};

export default AboutComponent;
