import React, { useState } from "react"
import placeholder from "../../assets/v-team-logo.png"
import { MdPhotoSizeSelectActual, MdOutlineArticle } from "react-icons/md"
import { BsFillPlayBtnFill, BsBriefcaseFill } from "react-icons/bs"
import { Modal, Button } from "react-bootstrap"
export default function StartAPost() {
  const [writePost, setWritePost] = useState(false)
  const showModal = () => setWritePost(!writePost)
  const hideModal = () => setWritePost(false)

  return (
    <>
      <div id="feed-start-a-post-container" className="border p-feed">
        <div id="start-a-post-top">
          <div className="border recommended-user-image mr-1">
            <img src={placeholder} alt="" />
          </div>
          <div
            id="start-a-post"
            className="gray-hover small-header-text"
            onClick={showModal}
          >
            Start a post
          </div>
        </div>
        <div id="start-a-post-lower" className="small-header-text">
          <div className="start-a-post-icon-text gray-hover">
            <MdPhotoSizeSelectActual
              className="text-primary"
              style={{ fontSize: "20px" }}
            />

            <span>Photo</span>
          </div>
          <div className="start-a-post-icon-text gray-hover ">
            <BsFillPlayBtnFill
              className="text-success"
              style={{ fontSize: "20px" }}
            />
            <span>Video</span>
          </div>
          <div className="start-a-post-icon-text gray-hover">
            <BsBriefcaseFill className="indigo" style={{ fontSize: "20px" }} />
            <span>Job</span>
          </div>
          <div className="start-a-post-icon-text gray-hover">
            <MdOutlineArticle className="orange" style={{ fontSize: "20px" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>
      {writePost && (
        <Modal show={writePost} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              Close
            </Button>
            <Button variant="primary" onClick={hideModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}
