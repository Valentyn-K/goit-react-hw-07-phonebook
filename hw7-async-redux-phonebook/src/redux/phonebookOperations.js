import axios from "axios";
import * as phonebookActions from "./phonebookActions";
import { getContacts, postContact, delContact } from "../services/api";

//-----operation for "fetching" contacts in App
export const fetchContacts = () => (dispatch) => {
  dispatch(phonebookActions.fetchContactsRequest());

  getContacts()
    .then((response) =>
      dispatch(phonebookActions.fetchContactsSuccess(response.data))
    )
    .catch((error) => dispatch(phonebookActions.fetchContactsError(error)));
};

//-----operation for "adding" contact in Form
export const addContact = (contact) => (dispatch) => {
  dispatch(phonebookActions.addContactRequest());

  postContact(contact)
    .then((response) =>
      dispatch(phonebookActions.addContactSuccess(response.data))
    )
    .catch((error) => dispatch(phonebookActions.addContactError(error)));
};

//-----operation for "deleting" contact in Contact
export const deleteContact = (id) => (dispatch) => {
  dispatch(phonebookActions.deleteContactRequest());

  delContact(id)
    .then(() => dispatch(phonebookActions.deleteContactSuccess(id)))
    .catch((error) => {
      dispatch(phonebookActions.deleteContactError(error));
      console.log(error);
    });
};
