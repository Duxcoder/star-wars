import { RequestAnswerType } from '../types';
import { API_SERVICE_URL } from '../settings';

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetching = createAsyncThunk('card/fetchAll', async (_, thunkAPI) => {
  try {
    return await axios.get<RequestAnswerType>(API_SERVICE_URL);
  } catch (e) {
    return thunkAPI.rejectWithValue('Sorry... something went wrong');
  }
});
