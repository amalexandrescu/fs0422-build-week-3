import React from "react"
import placeholder from "../../assets/v-team-logo.png"

export default function UserMessages() {
  return (
    <>
      <div className="message-wrapper gray-hover">
        <div className="d-flex align-items-center">
          <div className="border recommended-user-image ml-1">
            <img src={placeholder} alt="" />
          </div>
          <div className="message">
            <div>Olaf Glad</div>
            <div className="font-weight-light recommended-user-job-description-text ">
              Olaf: Why am I getting an empty array?
            </div>
          </div>
        </div>
        <div className="font-weight-light recommended-user-job-description-text mr-2 ">
          Dec 17
        </div>
      </div>
      <div className="message-wrapper gray-hover">
        <div className="d-flex align-items-center">
          <div className="border recommended-user-image ml-1">
            <img src={placeholder} alt="" />
          </div>
          <div className="message">
            <div>Olaf Glad</div>
            <div className="font-weight-light recommended-user-job-description-text">
              Olaf: Why am I getting an empty array?
            </div>
          </div>
        </div>
        <div className="font-weight-light recommended-user-job-description-text mr-2">
          Dec 17
        </div>
      </div>
      <div className="message-wrapper gray-hover">
        <div className="d-flex align-items-center">
          <div className="border recommended-user-image ml-1">
            <img src={placeholder} alt="" />
          </div>
          <div className="message">
            <div>Olaf Glad</div>
            <div className="font-weight-light recommended-user-job-description-text">
              Olaf: Why am I getting an empty array?
            </div>
          </div>
        </div>
        <div className="font-weight-light recommended-user-job-description-text mr-2">
          Dec 17
        </div>
      </div>
    </>
  )
}
