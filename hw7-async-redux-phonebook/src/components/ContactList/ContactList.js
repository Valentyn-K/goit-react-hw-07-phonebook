import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Contact from "../Contact/ContactReduxContainer";
import styles from "./ContactList.module.css";
import translate from "../../styles/translate.module.css";

const ContactList = ({ filteredContacts }) => {
  return (
    filteredContacts.length > 0 && (
      <TransitionGroup component="ul" className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <CSSTransition
            key={contact.id}
            timeout={250}
            unmountOnExit
            classNames={translate}
          >
            <Contact {...contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired || PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
