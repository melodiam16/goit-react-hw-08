// import { createAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter } = slice.actions;

export default slice.reducer;

// export const filter = createAction("filters/setStatusFilter");

// const initialState = {
//   filters: {
//     name: "",
//   },
// };

// export const filtersReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         filter: (state.name = action.payload),
//       };
//   }
// };
