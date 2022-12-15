import {
  SHOW_EDIT_POST_MODAL,
  HIDE_EDIT_POST_MODAL,
  SHOW_EDIT_DROPDOWN,
  HIDE_EDIT_DROPDOWN
} from "../actions"

const initialState = {
  showEditModal: false,
  openDropdown: false
}

const editFeedPostModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_EDIT_POST_MODAL:
      return {
        ...state,
        showEditModal: false
      }
    case SHOW_EDIT_POST_MODAL:
      return {
        ...state,
        showEditModal: true
      }

    case SHOW_EDIT_DROPDOWN:
      return {
        ...state,
        openDropdown: !state.openDropdown
      }
    case HIDE_EDIT_DROPDOWN:
      return {
        ...state,
        openDropdown: false
      }

    default:
      return state
  }
}

export default editFeedPostModalReducer
