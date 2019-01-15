import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from '../styles/modal.css';

function FullUpdate(props) {
  const makeModal = () => {
    // const {
    //   title,
    //   body,
    //   likes,
    //   pubDate,
    // } = props.update;

    return (
      <div className={`${styles.modal} ${styles.visible}`}>
        <h1>Testing Modal</h1>
        <div dangerouslySetInnerHTML={{ __html: '<div><b>This should be bold</b></div>' }} />
      </div>
    );
  };

  const makePlaceholder = () => {
    return <div className={`${styles.modal} ${styles.visible}`} />;
  };

  // return props.update ? makeModal() : makePlaceholder();
  return makeModal();
}

export default FullUpdate;
