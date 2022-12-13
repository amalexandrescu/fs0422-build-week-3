export const GET_USERS = "GET_USERS"
export const USER_SEARCH_SUBMITTED = "USER_SEARCH_SUBMITTED"
export const SHOW_SEARCH_RESULTS = "SHOW_SEARCH_RESULTS"
export const HIDE_SEARCH_RESULTS = "HIDE_SEARCH_RESULTS"
export const EXPAND_MESSENGER = "EXPAND_MESSENGER"
export const COLLAPSE_MESSENGER = "COLLAPSE_MESSENGER"
//constants to use for fetching data

const baseEndPoint = "https://striveschool-api.herokuapp.com/api/profile/"

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAxM2M5NmRmYjAwMTUyMWE1YmEiLCJpYXQiOjE2NzA4MzYyNDMsImV4cCI6MTY3MjA0NTg0M30.y7kED45MhN6V7jWF7PwyZ4DryRe6OJ6b9-so68M-zaE",
    "Content-Type": "application/json"
  }
}

// action to get the info of users from the api

export const getUsersAction = () => {
  return async (dispatch) => {
    console.log("----------------fetching Users---------------------")

    try {
      let resp = await fetch(baseEndPoint, options)
      if (resp.ok) {
        let data = await resp.json()
        let fetchedUsers = data

        console.log("Users are ->", fetchedUsers)
        dispatch({
          type: GET_USERS,
          payload: fetchedUsers
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

// action for the user search

export const sendUserSearchAction = (filteredUsers) => {
  return {
    type: "USER_SEARCH_SUBMITTED",
    payload: filteredUsers
  }
}

// action to make the user search results display

export const showUserSearchAction = () => {
  return {
    type: "SHOW_SEARCH_RESULTS"
  }
}

//action to his the user search results display

export const hideUserSearchAction = () => {
  return {
    type: "HIDE_SEARCH_RESULTS"
  }
}

// action to expand and collapse the messenger

export const expandMessengerAction = () => {
  return {
    type: "EXPAND_MESSENGER"
  }
}

export const collapseMessengerAction = () => {
  return {
    type: "COLLAPSE_MESSENGER"
  }
}
