import React from "react"
import { Modal, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { hideAddPostModalAction } from "../../redux/actions"

export default function WritePostModal() {
  const showModal = useSelector((state) => state.showPostModal.show)
  const dispatch = useDispatch()

  return (
    <Modal show={showModal} onHide={() => dispatch(hideAddPostModalAction())}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch(hideAddPostModalAction())}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => dispatch(hideAddPostModalAction())}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
