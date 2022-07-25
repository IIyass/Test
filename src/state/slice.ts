import { createAction, createSelector, createSlice } from '@reduxjs/toolkit';

export interface Home {
  open: boolean;
}

export const initialState: Home = {
  open: false,
};

export const openModal = createAction('openModal');
export const closeModal = createAction('closeModal');

export const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    setModal: (state: Home) => {
      state.open = !state.open;
    },
  },
});

export default homeSlice.reducer;

const selectCreatorsState = (state: any) => state[homeSlice.name];

export const open = createSelector(selectCreatorsState, (state) => state.open);
