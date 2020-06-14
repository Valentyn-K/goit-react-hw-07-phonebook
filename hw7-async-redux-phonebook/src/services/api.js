import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getContacts = () => axios.get("contacts");

export const postContact = (contact) => axios.post("contacts", contact);

export const delContact = (id) => axios.delete(`contacts/${id}`);
