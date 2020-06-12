import { connect } from "react-redux";
import { getError } from "../../redux/phonebookSelectors";
import Error from "./Error";

const mapStateToProps = (state) => ({
  error: getError(state),
});

export default connect(mapStateToProps)(Error);
