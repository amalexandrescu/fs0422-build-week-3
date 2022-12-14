import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { hideAddPostModalAction } from "../../redux/actions"
import placeholder from "../../assets/v-team-logo.png"
import { AiFillCaretDown } from "react-icons/ai"
import { ImEarth } from "react-icons/im"

export default function WritePostModal() {
  const showModal = useSelector((state) => state.showPostModal.show)
  const dispatch = useDispatch()

  const [text, setText] = useState("")
  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value)
  }

  return (
    <Modal show={showModal} onHide={() => dispatch(hideAddPostModalAction())}>
      <Modal.Header closeButton>
        <h5 className="font-weight-light ml-1 mb-0">Create a post</h5>
      </Modal.Header>
      <div className="p-feed ml-2 d-flex">
        {" "}
        <div className="border recommended-user-image">
          <img src={placeholder} alt="" />
        </div>
        <div>
          <div className="small-header-text font-weight-bold">
            Alexander Spomer
          </div>
          <div
            id="select-viewing-options"
            className="font-weight-light recommended-user-job-description-text gray-hover"
          >
            <ImEarth />
            <div className="d-flex align-items-center"> Anyone</div>
            <AiFillCaretDown />
          </div>
        </div>
      </div>
      <div id="feed-modal-form">
        <Form
          className="p-feed-left p-feed-right ml-2 mr-2"
          style={{ color: "grey", height: "20vh" }}
        >
          <Form.Group className="mb-3 " controlId="formPostText">
            <Form.Control
              className="border-0"
              as="textarea"
              placeholder="What do you want to talk about?"
              value={text}
              rows={5}
              onChange={(e) => onChangeHandler(e.target.value, setText)}
            />
          </Form.Group>
        </Form>
      </div>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => dispatch(hideAddPostModalAction())}
        >
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
