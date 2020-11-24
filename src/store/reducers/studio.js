import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMyChannel = createAction("setMyChannel");
export const setMyChannelName = createAction("setMyChannelName");
export const setMyChannelAbout = createAction("setMyChannelAbout");
export const setMyChannelProfile = createAction("setMyChannelProfile");
export const setMyChannelBanner = createAction("setMyChannelBanner");

export default createReducer(
  {},
  {
    [setMyChannel.type]: (studio, action) => {
      studio.myChannel = action.payload;
    },
    [setMyChannelName.type]: (studio, action) => {
      studio.myChannel.name = action.payload;
    },
    [setMyChannelAbout.type]: (studio, action) => {
      studio.myChannel.about = action.payload;
    },
    [setMyChannelProfile.type]: (studio, action) => {
      studio.myChannel.profile = action.payload;
    },
    [setMyChannelBanner.type]: (studio, action) => {
      studio.myChannel.banner = action.payload;
    },
  }
);
