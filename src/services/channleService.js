import { setCurrentChannel } from "../store/reducers/channel";
import * as user from "../store/reducers/user";
import store from "../store/store";
import httpService from "./httpService";

const createChannel = async (name) => {
  try {
    const { data: channel } = await httpService.post("/channel", { name });
    store.dispatch(user.setHasChannel(true));
    return channel;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getChannel = async (id) => {
  try {
    const { data } = await httpService.get("/channel/" + id);
    store.dispatch(setCurrentChannel(data));
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  createChannel,
  getChannel,
};
