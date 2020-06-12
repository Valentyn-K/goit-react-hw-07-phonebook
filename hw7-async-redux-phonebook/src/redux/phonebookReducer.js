import { createReducer } from "@reduxjs/toolkit";

import { Type } from "./types";

//redux-toolkit

export const contactsReducer = createReducer([], {
  [Type.ADD_CONTACT_SUCCESS]: (state = [], { type, payload }) => [
    ...state,
    payload.contact,
  ],
  [Type.DELETE_CONTACT_SUCCESS]: (state = [], { type, payload }) =>
    state.filter((contact) => contact.id !== payload.id),

  [Type.FETCH_CONTACTS_SUCCESS]: (state = [], { type, payload }) => [
    ...payload,
  ],
});

export const filterReducer = createReducer("", {
  [Type.FILTER_CONTACTS]: (state = "", { type, payload }) => (state = payload),
});

export const loadingReducer = createReducer(false, {
  [Type.FETCH_CONTACTS_REQUEST]: (state = false, { type, payload }) =>
    (state = true),
  [Type.ADD_CONTACT_REQUEST]: (state = false, { type, payload }) =>
    (state = true),
  [Type.DELETE_CONTACT_REQUEST]: (state = false, { type, payload }) =>
    (state = true),

  [Type.FETCH_CONTACTS_SUCCESS]: (state = true, { type, payload }) =>
    (state = false),
  [Type.FETCH_CONTACTS_ERROR]: (state = true, { type, payload }) =>
    (state = false),
  [Type.ADD_CONTACT_SUCCESS]: (state = true, { type, payload }) =>
    (state = false),
  [Type.ADD_CONTACT_ERROR]: (state = true, { type, payload }) =>
    (state = false),
  [Type.DELETE_CONTACT_SUCCESS]: (state = true, { type, payload }) =>
    (state = false),
  [Type.DELETE_CONTACT_ERROR]: (state = true, { type, payload }) =>
    (state = false),
});

export const errorReducer = createReducer(null, {
  [Type.FETCH_CONTACTS_REQUEST]: (state, action) => state,
  [Type.ADD_CONTACT_REQUEST]: (state, action) => state,
  [Type.DELETE_CONTACT_REQUEST]: (state, action) => state,
  [Type.FETCH_CONTACTS_SUCCESS]: (state, action) => state,
  [Type.ADD_CONTACT_SUCCESS]: (state, action) => state,
  [Type.DELETE_CONTACT_SUCCESS]: (state, action) => state,

  [Type.FETCH_CONTACTS_ERROR]: (state, { type, payload }) => payload.error,
  [Type.ADD_CONTACT_ERROR]: (state, { type, payload }) => payload.error,
  [Type.DELETE_CONTACT_ERROR]: (state, { type, payload }) => payload.error,
});
