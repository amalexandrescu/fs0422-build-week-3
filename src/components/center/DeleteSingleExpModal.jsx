import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteExperienceAction } from "../../redux/actions";

const DeleteSingleExpModal = ({ outerModalClose }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const userId = useSelector((state) => state.myProfile.detailsData._id);
  const expId = useSelector((state) => state.experiences.clickedExp._id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="cursor-on-hover">
        Delete
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this experience?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No thanks
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              outerModalClose();
              if (userId && expId) {
                dispatch(deleteExperienceAction(userId, expId));
              }
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteSingleExpModal;
