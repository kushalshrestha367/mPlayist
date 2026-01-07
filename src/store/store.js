import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./addSlice";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    music: addSlice,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    music: store.getState().music,
  });
});

export default store;
