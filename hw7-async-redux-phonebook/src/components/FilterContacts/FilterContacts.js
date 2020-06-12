import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterContacts.module.css";

const FilterContact = ({
  onSetFilter = function () {
    alert("Sorry, the filter is updating now. Try to use it later");
  },
}) => {
  const handleFilterContact = (e) => onSetFilter(e.target.value);
  return (
    <>
      <input
        className={styles.filterInput}
        type="text"
        onChange={handleFilterContact}
        placeholder="Enter the name or the number to find contact"
      />
    </>
  );
};

export default FilterContact;

FilterContact.propTypes = {
  onSetFilter: PropTypes.func.isRequired,
};
