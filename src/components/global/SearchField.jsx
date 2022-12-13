import React, { useState } from "react"
import { Nav, Form } from "react-bootstrap"

import { useSelector, useDispatch } from "react-redux"
import { sendUserSearchAction } from "../../redux/actions"
export default function SearchField() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  let usersArray = useSelector((state) => state.users.usersFromFetch)

  const handleChange = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("--------------search submitted--------------", query)
    console.log("usersArray from search --->", usersArray)

    const filteredUsers = usersArray.filter((user) => {
      return user.name.toLowerCase().includes(query.toLowerCase())
    })

    console.log("filteredUsers -->", filteredUsers)
    dispatch(sendUserSearchAction(filteredUsers))
  }

  return (
    <div className="my-auto">
      <Nav className="me-auto">
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </Nav>
    </div>
  )
}
