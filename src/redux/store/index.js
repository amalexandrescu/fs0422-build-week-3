import { configureStore, combineReducers } from "@reduxjs/toolkit"
import getUserReducer from "../reducers/getUserReducer"

// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  // cart: cartReducer,
  users: getUserReducer
})

const store = configureStore({
  reducer: bigReducer // here there's place for just 1 value!
})

export default store

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file
