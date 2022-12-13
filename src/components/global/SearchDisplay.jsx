import React from "react"
import { useSelector } from "react-redux"

export default function SearchDisplay() {
  let usersFromSearch = useSelector(
    (state) => state.usersFromSearchFilter.searchResults
  )
  console.log("usersFromSearch", usersFromSearch)

  return (
    <div id="search-results-float" className=" bg-white border">
      {usersFromSearch.length === 0 ? (
        <div>Search for users</div>
      ) : (
        <>
          {usersFromSearch.map((user) => (
            <div key={user._id}>
              <span>{user.name}</span>
              <span> {user.surname}</span>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
