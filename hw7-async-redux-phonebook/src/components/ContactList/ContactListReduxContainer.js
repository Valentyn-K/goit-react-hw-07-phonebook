import { connect } from "react-redux";
import ContactList from "./ContactList";
import { filteredContacts } from "../../redux/phonebookSelectors";

const mapStateToProps = (state) => ({
  filteredContacts: filteredContacts(state),
});

export default connect(mapStateToProps, null)(ContactList);
