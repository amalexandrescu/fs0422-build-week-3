import React from "react"
import { useState } from "react"
import { SlArrowDown, SlArrowUp } from "react-icons/sl"
import RecommendedUser from "./RecommendedUser"

export default function ShowMore({ moreUsers }) {
  const [showUsers, setShowUsers] = useState(false)
  const onClickk = () => setShowUsers(!showUsers)

  return (
    <>
      {showUsers ? (
        <>
          {moreUsers.map((user, i) => (
            <div key={user._id}>
              <RecommendedUser user={user} />
              <hr style={{ width: "90%" }} />
            </div>
          ))}
          <div
            onClick={onClickk}
            className=" p-3 d-flex align-items-center justify-content-center show-more mt-n3"
          >
            <span>Show Less</span>
            <span>
              <SlArrowUp className="ml-1" />
            </span>
          </div>
        </>
      ) : (
        <div
          onClick={onClickk}
          className=" p-3 d-flex align-items-center justify-content-center show-more mt-n3"
        >
          <span>Show More</span>
          <span>
            <SlArrowDown className="ml-1" />
          </span>
        </div>
      )}
    </>
  )
}
