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

  const visibilityStyle = title ? styles.visible : styles.hidden;

  return (
    <div className={`${styles.modal} ${visibilityStyle}`} onClick={handleOutsideClick}>
      <div className={`${styles.modalContent}`}>
        <span className={`${styles.closeBtn}`} onClick={() => changeView(undefined)}>&times;</span>
        <h1>Testing Modal</h1>
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
