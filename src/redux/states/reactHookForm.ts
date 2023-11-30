import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../lib/constants";
import { reducers } from "../reducers";

const reactHookFormSlice = createSlice({
  name: "reactHookForm",
  initialState,
  reducers,
});

export const { actions } = reactHookFormSlice;
export default reactHookFormSlice.reducer;
