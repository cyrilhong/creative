import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.ajaShowcase || initialState;

export const selectAjaShowcase = createSelector([selectSlice], state => state);
