import React from "react"
import { RxDotFilled } from "react-icons/rx"
import ButtonConnect from "./ButtonConnect"
// import { Image } from "react-bootstrap-icons"

export default function RecommendedUser({ user }) {
  return (
    <div className="recommended-user-container">
      <div className="d-flex recommended-user-content">
        <div className="border recommended-user-image">
          <img src={user.image} alt={user.username} />
        </div>
        <div className="text-left">
          <h6 className="mb-0">
            <span> {user.name} </span>
            <span> {user.surname}</span>
            <RxDotFilled />
            <span className="font-weight-light"> 1st </span>
          </h6>
          <div className="font-weight-light recommended-user-job-description-text">
            {user.title}
          </div>
        </div>{" "}
      </div>

      <ButtonConnect />
    </div>
  )
}
