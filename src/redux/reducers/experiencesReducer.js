import { GET_EXPERIENCES, UPDATE_STATE_OF_EXPERIENCES } from "../actions";

const initialState = {
  experiences: [],
  newExperienceAdded: false,
  seeAllExperiencesButtonClicked: false,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE_OF_EXPERIENCES:
      return {
        ...state,
        newExperienceAdded: action.payload,
      };
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
      };

    default:
      return state;
  }
};

export default experiencesReducer;
