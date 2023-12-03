import { configureStore } from "@reduxjs/toolkit";
import uncontrolledForm from "./states/uncontrolledForm";
import reactHookForm from "./states/reactHookForm";
import baseState from "./states/baseState";

export const store = configureStore({
  reducer: {
    uncontrolledForm,
    reactHookForm,
    baseState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
