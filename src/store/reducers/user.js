import { createAction, createReducer } from "@reduxjs/toolkit";

export const addUser = createAction("addUser");
export const removeUser = createAction("removeUser");
export const setHasChannel = createAction("setHasChannel");

export default createReducer(
  {},
  {
    [addUser.type]: (auth, action) => {
      auth.currentUser = action.payload.user;
    },
    [removeUser.type]: (auth, action) => {
      auth.currentUser = null;
    },
    [setHasChannel.type]: (auth, action) => {
      auth.currentUser.hasChannel = action.payload;
    },
  }
);
