import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { BiSearch } from "react-icons/bi"
import { BsDot } from "react-icons/bs"
import {
  showUserSearchAction,
  hideUserSearchAction
} from "../../redux/actions/index"

export default function SearchDisplay() {
  const dispatch = useDispatch()

  // const selectedUser = useSelector((state) => state.otherUser.selectedUser)
  // console.log("selectedUser", selectedUser)

  let usersFromSearch = useSelector(
    (state) => state.usersFromSearchFilter.searchResults
  )
  const handleClick = (user, e) => {
    e.preventDefault()
    dispatch(showUserSearchAction())
    console.log("selectedUser", user)
  }

  let firstTen = usersFromSearch.slice(0, 10)
  console.log("usersFromSearch", usersFromSearch)

  return (
    <div>
      <div
        className="search-overlay"
        onClick={() => dispatch(hideUserSearchAction())}
      ></div>
      <div id="search-results-float" className=" bg-white border">
        {usersFromSearch.length === 0 ? (
          <div>Search for users</div>
        ) : (
          <>
            {firstTen.map((user) => (
              <div
                key={user._id}
                className="search-individual-user-display"
                onClick={handleClick}
              >
                <div className="search-results-text-wrapper">
                  <span className="mr-3 ml-2">
                    <BiSearch />
                  </span>
                  <span className="small-header-text ">{user.name} </span>
                  <span className="small-header-text">{user.surname}</span>
                  <span>
                    <BsDot />
                  </span>
                  <span className="recommended-user-job-description-text">
                    {user.title}
                  </span>
                </div>
                <div className="border recommended-user-image ml-auto">
                  <img src={user.image} alt="" />
                </div>
              </div>
            ))}
            <div className="border-top p-2 text-center gray-hover text-primary font-weight-bold">
              See all results
            </div>
          </>
        )}
      </div>
    </div>
  )
}
