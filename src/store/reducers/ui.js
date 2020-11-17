import { createAction, createReducer } from "@reduxjs/toolkit";

export const updateProgressBar = createAction("updateProgressBar");

export default createReducer(
  {},
  {
    [updateProgressBar.type]: (ui, action) => {
      ui.progressBar = action.payload.progress;
    },
  }
);
