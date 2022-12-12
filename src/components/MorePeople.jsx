import React, { useEffect } from "react"
import RecommendedUser from "./RecommendedUser"
import ShowMore from "./ShowMore"
import { useSelector, useDispatch } from "react-redux"
import { getUsersAction } from "../redux/actions"
export default function MorePeople({ heading }) {
  let userList = useSelector((state) => state.users.usersFromFetch)

  const randomUsers = [...userList].sort(() => 0.5 - Math.random())
  const users = randomUsers.slice(0, 5)
  const moreUsers = randomUsers.slice(5, 10)
  console.log(users, moreUsers)

  let moreUsersToRender = useSelector(
    (state) => state.moreUsersToRender.moreUsers
  )
  console.log("moreUsersToRender", moreUsersToRender)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const handleClick = (e) => {
  //   dispatch(showMoreUsersAction(moreUsers))
  //   console.log("-----------clicked-----------")
  // }

  return (
    <>
      <div className="border side-component-border mt-2 bg-white">
        <h6 className="text-left font-weight-bold ml-3 mt-3">{heading}</h6>

        {users.map((user, i) => (
          <div key={user._id}>
            <RecommendedUser user={user} />
            <hr style={{ width: "90%" }} />
          </div>
        ))}

        <ShowMore moreUsers={moreUsers} />
      </div>
    </>
  )
}
