export const GET_USERS = "GET_USERS";
export const USER_SEARCH_SUBMITTED = "USER_SEARCH_SUBMITTED";
export const SHOW_SEARCH_RESULTS = "SHOW_SEARCH_RESULTS";
export const HIDE_SEARCH_RESULTS = "HIDE_SEARCH_RESULTS";
export const EXPAND_MESSENGER = "EXPAND_MESSENGER";
export const COLLAPSE_MESSENGER = "COLLAPSE_MESSENGER";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const GET_MY_PROFILEDETAILS = "GET_MY_PROFILEDETAILS";
export const GET_IS_FETCHED = "GET_IS_FETCHED";
export const CHANGE_PROFILE_DETAILS = "CHANGE_PROFILE_DETAILS";

//constants to use for fetching data

const baseEndPoint = "https://striveschool-api.herokuapp.com/api/profile/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAxM2M5NmRmYjAwMTUyMWE1YmEiLCJpYXQiOjE2NzA4MzYyNDMsImV4cCI6MTY3MjA0NTg0M30.y7kED45MhN6V7jWF7PwyZ4DryRe6OJ6b9-so68M-zaE",
    "Content-Type": "application/json",
  },
};

// action to get the info of users from the api

export const getUsersAction = () => {
  return async (dispatch) => {
    console.log("----------------fetching Users---------------------");

    try {
      let resp = await fetch(baseEndPoint, options);
      if (resp.ok) {
        let data = await resp.json();
        let fetchedUsers = data;

        console.log("Users are ->", fetchedUsers);
        dispatch({
          type: GET_USERS,
          payload: fetchedUsers,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// action for the user search

export const sendUserSearchAction = (filteredUsers) => {
  return {
    type: "USER_SEARCH_SUBMITTED",
    payload: filteredUsers,
  };
};

// action to make the user search results display

export const showUserSearchAction = () => {
  return {
    type: "SHOW_SEARCH_RESULTS",
  };
};

//action to his the user search results display

export const hideUserSearchAction = () => {
  return {
    type: "HIDE_SEARCH_RESULTS",
  };
};

// action to expand and collapse the messenger

export const expandMessengerAction = () => {
  return {
    type: "EXPAND_MESSENGER",
  };
};

export const collapseMessengerAction = () => {
  return {
    type: "COLLAPSE_MESSENGER",
  };
};

//action for getting the experiences

//change the userId with the original one from Redux State
const experiencesUrl =
  "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences";

export const getExperiencesAction = () => {
  console.log("fetching experiences - GET method");
  return async (dispatch) => {
    try {
      let response = await fetch(experiencesUrl);
      if (response.ok) {
        let data = await response.json();
        console.log("data from experiences fetch with GET method", data);
        dispatch({
          type: GET_EXPERIENCES,
          payload: data,
        });
      } else {
        console.log("en error occured while fetching the experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// get My Profile Details Fetching Action

const baseUrlMe = "https://striveschool-api.herokuapp.com/api/profile/me";

export const getMyProfileDetailsAction = () => {
  return async (dispatch) => {
    console.log(
      "----------------fetching My Profile Details---------------------"
    );

    try {
      let response = await fetch(baseUrlMe, options);
      if (response.ok) {
        let data = await response.json();
        let myProfileDetailsData = data;

        console.log("My Profile Details are ->", myProfileDetailsData);
        dispatch({
          type: GET_MY_PROFILEDETAILS,
          payload: myProfileDetailsData,
        });
        dispatch({
          type: GET_IS_FETCHED,
          payload: true,
        });
      } else {
        console.log("error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Change Profile Details Fetching Action

export const changeProfileDetailsAction = (details) => {
  console.log("🚀 changeProfileDetailsAction ~ details", details);

  return async (dispatch) => {
    const optionsPut = {
      method: "PUT",
      body: JSON.stringify(details),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAxM2M5NmRmYjAwMTUyMWE1YmEiLCJpYXQiOjE2NzA4MzYyNDMsImV4cCI6MTY3MjA0NTg0M30.y7kED45MhN6V7jWF7PwyZ4DryRe6OJ6b9-so68M-zaE",
        "Content-Type": "application/json",
      },
    };
    console.log(
      "----------------CHANGING My Profile Details------------------"
    );

    try {
      let response = await fetch(baseEndPoint, optionsPut);
      if (response.ok) {
        console.log("Profile Details sucessfully updated ->", response);
      } else {
        console.log("Error changing profile details");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};
