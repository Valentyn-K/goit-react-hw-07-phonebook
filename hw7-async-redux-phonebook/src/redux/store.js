import {
  contactsReducer,
  filterReducer,
  errorReducer,
  loadingReducer,
} from "./phonebookReducer";
import { configureStore } from "@reduxjs/toolkit";

//redux-toolkit
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    isLoading: loadingReducer,
    error: errorReducer,
  },
});

export default store;
