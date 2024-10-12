import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, statusFilter) => {
    return (
      contacts &&
      contacts.filter((value) =>
        value.name
          .toLocaleLowerCase()
          .includes(statusFilter.toLocaleLowerCase())
      )
    );
  }
);
