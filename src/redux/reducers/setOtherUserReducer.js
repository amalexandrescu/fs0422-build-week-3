import { OTHER_USER_SELECTED } from "../actions"

const initialState = {
  selectedUser: {}
}

const setOtherUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTHER_USER_SELECTED:
      return {
        ...state,
        selectedUser: action.payload
      }

    default:
      return state
  }
}

export default setOtherUserReducer
