import { GET_EXPERIENCES } from "../actions";

const initialState = {
  experiences: [],
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
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
