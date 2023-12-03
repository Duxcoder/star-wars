import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryCodes, initialState } from "../../lib/constants";
import { IFormData } from "../../lib/types";
import getEnumValues from "../../utils/getEnumValues";

const baseState = createSlice({
  name: "baseState",
  initialState: {
    allCountry: getEnumValues(CountryCodes),
    allForms: [initialState],
  },
  reducers: {
    addForm: (state, action: PayloadAction<IFormData>) => {
      state.allForms.push(action.payload);
    },
  },
});

export const { actions } = baseState;
export default baseState.reducer;
