import React from "react"
import ButtonConnect from "./ButtonConnect"

export default function RecommendedUser() {
  return (
    <div className="recommended-user-container">
      <div className="d-flex">
        <div className="border recommended-user-image">Img</div>
        <div className="text-left">
          <h6 className="mb-0">Ania Chmielnicka</h6>
          <div className="font-weight-light recommended-user-job-description-text">
            Interior Designer | 3D Visualiser
          </div>
        </div>{" "}
      </div>
      <ButtonConnect />
    </div>
  )
}
