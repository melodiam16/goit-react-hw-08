// import { createAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;

// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");

// const initialState = {
//   contacts: {
//     items: [],
//   },
// };

// export const contactsReducer = (state = initialState.tasks, action) => {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return {
//         ...state,
//         items: state.items.push(action.payload),
//       };
//     }

//     case "contacts/deleteContact":
//       return {
//         ...state,
//         items: state.items.filter((contact) => contact.id !== action.payload),
//       };

//     default:
//       return state;
//   }
// };
