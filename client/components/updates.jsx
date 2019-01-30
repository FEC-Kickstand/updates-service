/* eslint-env browser */
import React from 'react';
import styles from '../styles/updates.css';
import PreviewsList from './previewsList';

const Updates = ({ updates, changeView, modalOpen }) => {
  const wrapperStyle = modalOpen ? `${styles.wrapper} ${styles.modalOpen}` : styles.wrapper;
  return (
    <div>
      <div className={wrapperStyle}>
        <div className={styles.verticalMargin} />
        <PreviewsList changeView={changeView} updates={updates} />
        <div className={styles.verticalMargin} />
      </div>
    </div>

  );
};

export default Updates;
