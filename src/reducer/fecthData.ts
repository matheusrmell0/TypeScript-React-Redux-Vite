import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../globalState/configureStore';
import normalizeData from '../helper/normalizeData';

const slice = createSlice({
  name: 'fetchAPI',
  initialState: <Data>{
    data: null,
    error: null,
    loading: false,
  },
  reducers: {
    fetchStarted: (state) => {
      state.error = null;
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload?.map(normalizeData);
    },
    fetchError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.data = null;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;
export const fetchStats = (url: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(url);
    const data: Promise<TransacaoAPI[]> = await response.json();
    if (response.ok) return dispatch(fetchSuccess(data));
  } catch (err) {
    if (err instanceof Error) return dispatch(fetchError(err.message));
  }
};

export default slice.reducer;
