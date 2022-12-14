import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

const FeedLeftAccordeon = () => {
  const [isCollapsed1, setIsCollapsed1] = useState(true);

  return (
    <div
      className="bg-white mt-2"
      style={{
        borderRadius: "10px",
        border: "1px solid lightgrey",
        overflow: "hidden",
      }}
    >
      <Accordion defaultActiveKey="0">
        <Card className="border-0">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            style={{ backgroundColor: "white" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>Recent</div>
              <div className="d-flex justify-content-center align-items-center editButtonIconDiv ">
                {isCollapsed1 ? (
                  <ChevronUp
                    style={{ "font-size": "20px" }}
                    className="chevronHover"
                  />
                ) : (
                  <ChevronDown
                    style={{ "font-size": "20px" }}
                    className="chevronHover"
                  />
                )}
              </div>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default FeedLeftAccordeon;
