import { connect } from "react-redux";
import App from "./App";
import { fetchContacts } from "../../redux/phonebookOperations";
import {
  getAllContacts,
  getIsLoadingValue,
  getError,
} from "../../redux/phonebookSelectors";

const mapStateToProps = (state) => ({
  contacts: getAllContacts(state),
  isLoading: getIsLoadingValue(state),
  error: getError(state),
});

const mapDispatchToProps = { fetchContacts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
