import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: { excelData: [] },
  reducers: {
    setExcelData: (state, action) => {
      state.excelData = action.payload;
    },
  },
});

export const { setExcelData } = dataSlice.actions;
export default dataSlice.reducer;
