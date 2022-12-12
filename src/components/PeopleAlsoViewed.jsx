import React from "react"
import RecommendedUser from "./RecommendedUser"
import ShowMore from "./ShowMore"

export default function PeopleAlsoViewed() {
  return (
    <>
      <div className="border side-component-border mt-2">
        <h6 className="text-left font-weight-bold ml-3 mt-3">
          People also viewed
        </h6>
        <div>
          {" "}
          <RecommendedUser />
        </div>
        <hr style={{ width: "90%" }} />
        <div>
          {" "}
          <RecommendedUser />
        </div>
        <hr style={{ width: "90%" }} />
        <div>
          {" "}
          <RecommendedUser />
        </div>
        <ShowMore />
      </div>
    </>
  )
}
