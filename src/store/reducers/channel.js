import { createAction, createReducer } from "@reduxjs/toolkit";

export const setCurrentChannel = createAction("setCurrentChannel");

export default createReducer(
  {},
  {
    [setCurrentChannel.type]: (channel, action) => {
      channel.currentChannel = action.payload;
    },
  }
);
