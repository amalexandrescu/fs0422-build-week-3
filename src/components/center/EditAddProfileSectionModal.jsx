import { useState } from "react";
import { Form, Modal, Row } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

import { useSelector } from "react-redux";

function EditAddProfileSectionModal() {
  // Modal variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetching variables
  let isFetched = useSelector((state) => state.myProfile.isFetched);

  // Changing Data via Modal submit

  return (
    <>
      {/* Button Open Modal */}
      <div
        className="addProfileSectionDiv bg-white rounded-pill py-1 px-3 mx-2"
        onClick={handleShow}
      >
        <div> Add profile section</div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark" style={{ "font-weight": "500" }}>
            Add to profile
          </Modal.Title>
        </Modal.Header>
        {isFetched ? (
          <Modal.Body>
            <Form style={{ color: "grey", height: "52vh" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-dark" style={{ "font-weight": "500" }}>
                  Core
                </h5>
                <div className="d-flex justify-content-center align-items-center editButtonIconDiv ">
                  <ChevronUp style={{ "font-size": "20px" }} />
                </div>
              </div>
              <Row className="mt-2 text-dark">
                <div className="col">
                  <p
                    className="mt-0"
                    style={{ "font-size": "0.9em", color: "grey" }}
                  >
                    Start with the basics. Filling out these sections will help
                    you be discovered by recruiters and people you may know
                  </p>
                </div>
              </Row>
              <Row className="text-dark">
                <div className="col ">
                  <p
                    className="pb-3 font-weight-bold border-bottom"
                    style={{ "font-size": "0.9em", color: "grey" }}
                  >
                    Add education
                  </p>
                </div>
              </Row>
              <Row className="text-dark">
                <div className="col ">
                  <p
                    className="pb-3 font-weight-bold border-bottom"
                    style={{ "font-size": "0.9em", color: "grey" }}
                  >
                    Add position
                  </p>
                </div>
              </Row>
              <Row className="text-dark">
                <div className="col ">
                  <p
                    className="pb-3 font-weight-bold border-bottom"
                    style={{ "font-size": "0.9em", color: "grey" }}
                  >
                    Add career break
                  </p>
                </div>
              </Row>
              <Row className="text-dark">
                <div className="col ">
                  <p
                    className="pb-3 font-weight-bold border-bottom"
                    style={{ "font-size": "0.9em", color: "grey" }}
                  >
                    Add skills
                  </p>
                </div>
              </Row>
              <div className="d-flex pb-2 border-bottom justify-content-between align-items-center">
                <h5 className="text-dark" style={{ "font-weight": "500" }}>
                  Recommended
                </h5>
                <div className="d-flex justify-content-center align-items-center editButtonIconDiv ">
                  <ChevronDown style={{ "font-size": "20px" }} />
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-dark py-3" style={{ "font-weight": "500" }}>
                  Additional
                </h5>
                <div className="d-flex justify-content-center align-items-center editButtonIconDiv ">
                  <ChevronDown style={{ "font-size": "20px" }} />
                </div>
              </div>
            </Form>
          </Modal.Body>
        ) : (
          <Modal.Body></Modal.Body>
        )}
      </Modal>
    </>
  );
}

export default EditAddProfileSectionModal;
