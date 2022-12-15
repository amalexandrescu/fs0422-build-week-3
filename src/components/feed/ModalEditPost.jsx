import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import placeholder from "../../assets/v-team-logo.png";
import { Modal, Form, Button } from "react-bootstrap";
import {
  editMyFeedPostAction,
  editShowToggleAction,
  getFeedPostsAction,
  hideEditPostModalAction,
  updateSelectedFeedPost,
} from "../../redux/actions";
import { AiFillCaretDown } from "react-icons/ai";
import { ImEarth } from "react-icons/im";

export default function ModalEditPost() {
  const dispatch = useDispatch();
  const showEditModal = useSelector(
    (state) => state.editPostModal.showEditModal
  );
  let details = useSelector((state) => state.myProfile.detailsData);
  let isFetched = useSelector((state) => state.myProfile.isFetched);

  const currentText = useSelector((state) => state.editThisPost.selectedPost);
  console.log("currentText", currentText);
  let textToEdit = currentText.text;
  console.log("textToEdit", textToEdit);
  const postId = currentText._id;

  const onChangeHandler = (value, fieldToSet) => {
    setEditFeedPost({
      ...editFeedPost,
      [fieldToSet]: value,
    });
  };
  const [editFeedPost, setEditFeedPost] = useState({
    text: textToEdit,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(editFeedPost.text);
    dispatch(hideEditPostModalAction());
    dispatch(editMyFeedPostAction(editFeedPost, postId));
    dispatch(updateSelectedFeedPost(editFeedPost));
    dispatch(editShowToggleAction());
    dispatch(getFeedPostsAction());
  };

  return (
    <Modal
      show={showEditModal}
      onHide={() => dispatch(hideEditPostModalAction())}
    >
      <Modal.Header closeButton>
        <h5 className="font-weight-light ml-1 mb-0">Create a post</h5>
      </Modal.Header>
      <div className="p-feed ml-2 d-flex">
        {" "}
        <div className="border recommended-user-image">
          <img src={isFetched ? details.image : placeholder} alt="avatar" />
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
          onSubmit={onSubmitHandler}
          className="p-feed-left p-feed-right ml-2 mr-2"
          style={{ color: "grey", height: "20vh" }}
        >
          <Form.Group className="mb-3 " controlId="formPostText">
            <Form.Control
              className="border-0"
              as="textarea"
              placeholder={textToEdit}
              value={editFeedPost.text}
              rows={5}
              onChange={(e) => onChangeHandler(e.target.value, "text")}
            />
          </Form.Group>
        </Form>
      </div>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmitHandler}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
