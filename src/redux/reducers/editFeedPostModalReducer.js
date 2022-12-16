import {
  SHOW_EDIT_POST_MODAL,
  HIDE_EDIT_POST_MODAL,
  SHOW_EDIT_DROPDOWN,
  HIDE_EDIT_DROPDOWN,
  SHOW_DELETE_MODAL,
  HIDE_DELETE_MODAL
} from "../actions"

const initialState = {
  showEditModal: [],
  openDropdown: false,
  deleteModal: false
}

const editFeedPostModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_EDIT_POST_MODAL:
      return {
        ...state,
        showEditModal: state.showEditModal.filter(
          (post) => post !== action.payload
        )
      }
    case SHOW_EDIT_POST_MODAL:
      return {
        ...state,
        showEditModal: [state.showEditModal, action.payload]
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
    case SHOW_DELETE_MODAL:
      return {
        ...state,
        deleteModal: !state.deleteModal
      }
    case HIDE_DELETE_MODAL:
      return {
        ...state,
        deleteModal: false
      }

    default:
      return state
  }
}

export default editFeedPostModalReducer
