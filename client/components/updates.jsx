/* eslint-env browser */
import React from 'react';
import styles from '../styles/updates.css';
import PreviewsList from './previewsList';

const Updates = ({ updates, changeView }) => (
  <div>
    {/* <UpdateModal update={singleUpdate} /> */}
    <div className={styles.wrapper}>
      <div className={styles.verticalMargin} />
      <PreviewsList changeView={changeView} updates={updates} />
      <div className={styles.verticalMargin} />
    </div>
  </div>

);

export default Updates;
