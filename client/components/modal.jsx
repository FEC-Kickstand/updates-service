import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/modal.css';
import { defaultUpdate, updatePropTypes, createMarkup } from './utils';

const UpdateModal = ({ update, changeView }) => {
  const {
    title,
    body,
    likes,
    pubDate,
  } = update;

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains(`${styles.modal}`)) {
      changeView(undefined);
    }
  };

  const handleModalExitKey = (event) => {
    const enterKey = 13;
    if (event.keyCode === enterKey) {
      handleOutsideClick();
    }
  };

  const visibilityStyle = title ? styles.visible : styles.hidden;

  return (
    <div
      className={`${styles.modal} ${visibilityStyle}`}
      onClick={handleOutsideClick}
      onKeyUp={handleModalExitKey}
      role="textbox"
      tabIndex="0"
    >
      <div className={`${styles.modalContent}`}>
        <span
          className={`${styles.closeBtn}`}
          onClick={() => changeView(undefined)}
          role="button"
          onKeyUp={handleModalExitKey}
          tabIndex="0"
        >
          &times;
        </span>
        <div className={styles.title}>{title}</div>
        <div dangerouslySetInnerHTML={createMarkup(body)} />
      </div>
    </div>
  );
};

UpdateModal.propTypes = {
  update: updatePropTypes,
  changeView: PropTypes.func.isRequired,
};

UpdateModal.defaultProps = {
  update: defaultUpdate,
};

export default UpdateModal;
