import { createSelector } from "reselect";

export const getAllContacts = (state) => state.contacts;

export const getFilterValue = (state) => state.filter;

export const getIsLoadingValue = (state) => state.isLoading;

export const getError = (state) => state.error;

export const filteredContacts = createSelector(
  [getAllContacts, getFilterValue],
  (contacts, filterInput) =>
    contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterInput.toLowerCase()) ||
        contact.number.toLowerCase().includes(filterInput.toLowerCase())
    )
);
