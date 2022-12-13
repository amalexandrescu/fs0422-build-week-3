import React from "react"
import { useSelector } from "react-redux"
import { BiSearch } from "react-icons/bi"
import { BsDot } from "react-icons/bs"
export default function SearchDisplay() {
  let usersFromSearch = useSelector(
    (state) => state.usersFromSearchFilter.searchResults
  )

  let firstTen = usersFromSearch.slice(0, 10)
  console.log("usersFromSearch", usersFromSearch)

  return (
    <div id="search-results-float" className=" bg-white border">
      {usersFromSearch.length === 0 ? (
        <div>Search for users</div>
      ) : (
        <>
          {firstTen.map((user) => (
            <div key={user._id} className="search-individual-user-diplay">
              <span className="mr-3">
                <BiSearch />
              </span>
              <span>{user.name} </span>
              <span>{user.surname}</span>
              <span>
                <BsDot />
              </span>
              <span className="recommended-user-job-description-text">
                {user.title}
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
