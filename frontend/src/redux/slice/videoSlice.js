import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: {},
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    like: (state, action) => {
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload);
        state.currentVideo.disLikes.splice(
          state.currentVideo.disLikes.findIndex(
            (userdId) => userdId === action.payload
          )
        );
      }
    },
    disLike: (state, action) => {
      if (!state.currentVideo.disLikes.includes(action.payload)) {
        state.currentVideo.disLikes.push(action.payload);
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex(
            (userdId) => userdId === action.payload
          )
        );
      }
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  like,
  disLike,
} = videoSlice.actions;

export default videoSlice.reducer;
