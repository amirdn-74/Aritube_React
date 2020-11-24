import { combineReducers } from "redux";
import channel from "./reducers/channel";
import studio from "./reducers/studio";
import ui from "./reducers/ui";
import user from "./reducers/user";

export default combineReducers({
  auth: user,
  ui,
  channel,
  studio,
});
