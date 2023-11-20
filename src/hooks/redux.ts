import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../redux';
import { reduxActions } from '../redux/sliceReducer';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators({ ...reduxActions }, dispatch);
};
