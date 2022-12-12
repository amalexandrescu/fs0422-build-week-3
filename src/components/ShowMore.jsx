import React from "react"
import { SlArrowDown } from "react-icons/sl"

export default function ShowMore() {
  return (
    <div className="m-2 d-flex align-items-center justify-content-center">
      <div>
        <span> Show More</span>

        <span>
          <SlArrowDown className="ml-1" />
        </span>
      </div>
    </div>
  )
}
