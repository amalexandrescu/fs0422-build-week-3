import React from "react"
import { useSelector } from "react-redux"
export default function OtherUser() {
  const otherUser = useSelector((state) => state.otherUser.selectedUser)

  return (
    <>
      <div>{otherUser.name}</div>
      <div>{otherUser.title}</div>
      <div>{otherUser.area}</div>
    </>
  )
}
