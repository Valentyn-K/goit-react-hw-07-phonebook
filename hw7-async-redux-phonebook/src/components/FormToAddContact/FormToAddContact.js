import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./FormToAddContact.module.css";
import { Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { connect } from "react-redux";
import store from "../../redux/store";

import Notification from "../Notification/Notification";
import { CSSTransition } from "react-transition-group";
import transitionToBottom from "../../styles/transitionToBottom.module.css";
import { addContact } from "../../redux/phonebookOperations";

const FormToAddContact = ({ onCloseForm, dispatch }) => {
  const [isNameNotifShow, setNameNotifShow] = useState(false);
  const [isNumberNotifShow, setNumberNotifShow] = useState(false);

  const openNameNotification = () => {
    setNameNotifShow(true);
  };
  const closeNameNotification = () => {
    setTimeout(() => setNameNotifShow(false), 1000);
  };

  const openNumberNotification = () => {
    setNumberNotifShow(true);
  };
  const closeNumberNotification = () => {
    setTimeout(() => setNumberNotifShow(false), 1000);
  };

  let name;
  let number;
  const handleSubmit = (e) => {
    e.preventDefault();
    const contacts = store.getState().contacts;
    console.log("contacts", contacts);

    const isName = contacts.find((ct) => ct.name === name.value);
    const isNumber = contacts.find((ct) => ct.number === number.value);

    if (!name.value.trim() && !number.value.trim()) {
      return;
    }
    if (isName) {
      openNameNotification();
      closeNameNotification();
      return;
    }
    if (isNumber) {
      openNumberNotification();
      closeNumberNotification();
      return;
    }

    dispatch(addContact({ name: name.value, number: number.value }));
    name.value = "";
    number.value = "";
  };
  return (
    <section className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <ClearIcon className={styles.closeFormButton} onClick={onCloseForm} />

        <label className={styles.inputLabel}>Name</label>
        <div className={styles.nameInputWrapper}>
          <input
            ref={(node) => (name = node)}
            className={styles.input}
            name="name"
            type="text"
            required
          />
          <CSSTransition
            in={isNameNotifShow}
            timeout={1000}
            unmountOnExit
            classNames={transitionToBottom}
          >
            <Notification
              text={`Contact with this name has been already saved in your phonebook!!!`}
            />
          </CSSTransition>
        </div>
        <label className={styles.inputLabel}>Number</label>

        <div className={styles.numInputWrapper}>
          <input
            ref={(node) => (number = node)}
            className={styles.input}
            name="number"
            type="number"
            required
          />

          <CSSTransition
            in={isNumberNotifShow}
            timeout={1000}
            unmountOnExit
            classNames={transitionToBottom}
          >
            <Notification
              text={`This number has been already saved earlier !!!`}
            />
          </CSSTransition>
        </div>
        <br />

        <Button
          variant="outlined"
          color="secondary"
          className={styles.submitButton}
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </section>
  );
};

export default connect()(FormToAddContact);

FormToAddContact.propTypes = {
  onCloseForm: PropTypes.func.isRequired,
};
