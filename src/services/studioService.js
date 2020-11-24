import store from "../store/store";
import httpService from "./httpService";
import {
  setMyChannel,
  setMyChannelAbout,
  setMyChannelBanner,
  setMyChannelName,
  setMyChannelProfile,
} from "../store/reducers/studio";

const getMyChannel = async () => {
  try {
    const { data: myChannel } = await httpService.get("/channel/my");
    store.dispatch(setMyChannel(myChannel));
    return myChannel;
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateMyChannelName = async (channelName) => {
  try {
    const { data: updated } = await httpService.put("/channel/my/name", {
      channelName,
    });
    store.dispatch(setMyChannelName(updated.name));
    return updated;
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateChannelAbout = async (about) => {
  try {
    const { data: updatedChannel } = await httpService.put(
      "/channel/my/about",
      {
        about,
      }
    );
    store.dispatch(setMyChannelAbout(updatedChannel.about));
    return updatedChannel;
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateChannelProfile = async (file) => {
  try {
    const fd = new FormData();
    fd.append("profilePicture", file);
    const { data: updatedChannel } = await httpService.put(
      "/channel/my/profile",
      fd
    );
    store.dispatch(setMyChannelProfile(updatedChannel.profile));
    return updatedChannel;
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateChannelBanner = async (file) => {
  try {
    const fd = new FormData();
    fd.append("bannerPicture", file);
    const { data: updatedChannel } = await httpService.put(
      "/channel/my/banner",
      fd
    );
    store.dispatch(setMyChannelBanner(updatedChannel.profile));
    return updatedChannel;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  getMyChannel,
  updateMyChannelName,
  updateChannelAbout,
  updateChannelProfile,
  updateChannelBanner,
};
