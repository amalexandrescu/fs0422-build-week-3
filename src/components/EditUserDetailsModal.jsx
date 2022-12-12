import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Pencil, InfoSquareFill, Plus } from "react-bootstrap-icons";

function EditUserDetailsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="editButtonDivTwo d-flex justify-content-center align-items-center"
        onClick={handleShow}
      >
        <Pencil className="text-dark" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "grey" }}>Edit intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="overflow-auto">
            <p className="lightGreyParagraph mb-4">* indicates required</p>
            <Form style={{ color: "grey", height: "60vh" }}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>First name*</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Last name*</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Name pronunciation</Form.Label>
                <div className="d-flex align-items-center mt-2">
                  <InfoSquareFill className="mr-3" />
                  <p className="mb-0">
                    this can only be added using our mobile app
                  </p>
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>E-Mail*</Form.Label>
                <Form.Control type="email" placeholder="E-Mail" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Bio*</Form.Label>
                <Form.Control type="text" placeholder="Bio" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title*</Form.Label>
                <Form.Control type="text" placeholder="Current position" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Area*</Form.Label>
                <Form.Control type="text" placeholder="Your current city" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Image-Url*</Form.Label>
                <Form.Control type="text" placeholder="https//:" />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="rounded-pill py-0"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUserDetailsModal;
