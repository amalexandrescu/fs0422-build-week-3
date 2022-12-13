import React from "react"
import { BsThreeDots } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { SlArrowUp } from "react-icons/sl"
import placeholder from "../../assets/v-team-logo.png"
export default function MessagingPopup() {
  return (
    <>
      <div id="messaging-popup-wrapper" className="border">
        <div className="d-flex align-items-center">
          <div className="border recommended-user-image ml-auto">
            <img src={placeholder} alt="" />
          </div>
          <div className="font-weight-bold">Messaging</div>
        </div>
        <div className="d-flex">
          <div className="mr-3">
            <BsThreeDots />
          </div>
          <div className="mr-3">
            <FiEdit />
          </div>
          <div>
            <SlArrowUp className="mr-2" />
          </div>
        </div>
      </div>
    </>
  )
}
