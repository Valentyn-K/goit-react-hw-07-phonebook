import { connect } from "react-redux";
import Contact from "./Contact";
import { deleteContact } from "../../redux/phonebookOperations";

const mapDispatchToProps = { deleteContact };

export default connect(null, mapDispatchToProps)(Contact);
