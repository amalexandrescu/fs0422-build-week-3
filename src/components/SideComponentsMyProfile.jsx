import React from "react"
import SimpleTextMyProfile from "./SimpleTextMyProfile"
import PeopleYouMayKnow from "./PeopleYouMayKnow"
import PeopleAlsoViewed from "./PeopleAlsoViewed"

export default function SideComponentsMyProfile() {
  return (
    <>
      {/* 2 components with same basic structure in SimpleTextMyProfile, text passed as props */}
      <div className=" border side-component-border mt-2">
        <SimpleTextMyProfile text="Edit public profile & URL" />
        <hr style={{ width: "90%" }} />
        <SimpleTextMyProfile text="Add profile in another language" />
      </div>
      {/* People also viewed component */}
      <PeopleAlsoViewed />
      {/* People you may know section, component */}
      <PeopleYouMayKnow />
    </>
  )
}
