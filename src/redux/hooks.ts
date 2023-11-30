import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { AppDispatch, RootState } from "./store";
import { actions as uncontrolledFormActions } from "./states/uncontrolledForm";
import { actions as reactHookFormActions } from "./states/reactHookForm";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppActionsHookForm = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(reactHookFormActions, dispatch);
};

export const useAppActionsUncontrolledForm = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(uncontrolledFormActions, dispatch);
};
