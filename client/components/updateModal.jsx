import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from '../styles/modal.css';

const UpdateModal = ({ update, changeView }) => {
  const {
    title,
    body,
    likes,
    pubDate,
  } = update;

  const visibilityStyle = title ? styles.visible : styles.hidden;

  return (
    <div className={`${styles.modal} ${visibilityStyle}`}>
      <div className={`${styles.modalContent}`}>
        <span className={`${styles.closeBtn}`}>&times;</span>
        <h1>Testing Modal</h1>
        <div dangerouslySetInnerHTML={{ __html: '<div><b>This should be bold</b></div>' }} />
      </div>
    </div>
  );
};

UpdateModal.propTypes = {
  update: PropTypes.shape({
    title: PropTypes.string,
    pubDate: PropTypes.string,
    likes: PropTypes.number,
    body: PropTypes.string,
  }),
  changeView: PropTypes.func.isRequired,
};

UpdateModal.defaultProps = {
  update: {
    title: '',
    pubDate: '',
    likes: 0,
    body:
      '',
  },
};

export default UpdateModal;
