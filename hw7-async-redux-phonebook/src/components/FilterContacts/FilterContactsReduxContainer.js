import { connect } from "react-redux";
import { filterContacts } from "../../redux/phonebookActions";
import FilterContacts from "./FilterContacts";

const mapDispatchToProps = (dispatch) => ({
  onSetFilter: (filter) => dispatch(filterContacts(filter)),
});

export default connect(null, mapDispatchToProps)(FilterContacts);
