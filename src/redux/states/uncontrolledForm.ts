import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "../reducers";
import { initialState } from "../../lib/constants";

const uncontrolledFormSlice = createSlice({
  name: "uncontrolledForm",
  initialState,
  reducers,
});

export const { actions } = uncontrolledFormSlice;
export default uncontrolledFormSlice.reducer;
