import { combineReducers } from "redux";
import channel from "./reducers/channel";
import ui from "./reducers/ui";
import user from "./reducers/user";

export default combineReducers({
  auth: user,
  ui,
  channel,
});
