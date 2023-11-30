import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { IFormData } from "../lib/types";
import { CountryCodes } from "../lib/constants";

export const reducers = {
  setName: (state: Draft<IFormData>, action: PayloadAction<string>) => {
    state.name = action.payload;
  },
  setAge: (state: Draft<IFormData>, action: PayloadAction<number>) => {
    state.age = action.payload;
  },
  setEmail: (state: Draft<IFormData>, action: PayloadAction<string>) => {
    state.email = action.payload;
  },
  setPassword: (state: Draft<IFormData>, action: PayloadAction<string>) => {
    state.password = action.payload;
  },
  setSex: (
    state: Draft<IFormData>,
    action: PayloadAction<"male" | "female">
  ) => {
    state.sex = action.payload;
  },
  setImage: (state: Draft<IFormData>, action: PayloadAction<string>) => {
    state.image = action.payload;
  },
  setCountry: (
    state: Draft<IFormData>,
    action: PayloadAction<CountryCodes>
  ) => {
    state.country = action.payload;
  },
};
