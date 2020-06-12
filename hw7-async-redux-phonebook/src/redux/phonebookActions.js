import { Type } from "./types";
import { createAction } from "@reduxjs/toolkit";

export const filterContacts = createAction(Type.FILTER_CONTACTS, (filter) => ({
  payload: filter,
}));
//-----actions for "fetching" contacts in App
export const fetchContactsRequest = createAction(Type.FETCH_CONTACTS_REQUEST);

export const fetchContactsSuccess = createAction(
  Type.FETCH_CONTACTS_SUCCESS,
  (contacts) => ({
    payload: contacts,
  })
);

export const fetchContactsError = createAction(
  Type.FETCH_CONTACTS_ERROR,
  (error) => ({
    payload: { error },
  })
);

//-----actions for "adding" contact in Form
export const addContactRequest = createAction(Type.ADD_CONTACT_REQUEST);

export const addContactSuccess = createAction(
  Type.ADD_CONTACT_SUCCESS,
  (contact) => ({
    payload: { contact },
  })
);

export const addContactError = createAction(
  Type.ADD_CONTACT_ERROR,
  (error) => ({
    payload: { error },
  })
);

//-----actions for "deleting" contact in Contact
export const deleteContactRequest = createAction(Type.DELETE_CONTACT_REQUEST);

export const deleteContactSuccess = createAction(
  Type.DELETE_CONTACT_SUCCESS,
  (id) => ({
    payload: { id },
  })
);

export const deleteContactError = createAction(
  Type.DELETE_CONTACT_ERROR,
  (error) => ({
    payload: { error },
  })
);
