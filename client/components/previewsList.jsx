import React from 'react';
import PropTypes from 'prop-types';
import Preview from './preview';
import styles from '../styles/updates.css';

const PreviewsList = ({ updates, changeView }) => {
  if (!updates) {
    return (
      <div className={styles.contentWrapper}>
        <h1>Loading Updates...</h1>
      </div>
    );
  }

  const previewComponentsOnAlternatingSides = updates.reduce((acc, update, idx) => {
    const side = idx % 2 === 0 ? 'right' : 'left';
    const preview = <Preview changeView={changeView} update={update} side={side} key={update.id} />;
    const spacer = <div key={`${update.id}spacer`} />;

    if (side === 'left') {
      acc.push(preview);
      acc.push(spacer);
    } else {
      acc.push(spacer);
      acc.push(preview);
    }
    return acc;
  }, []);

  return (
    <div className={styles.contentWrapper}>
      {previewComponentsOnAlternatingSides}
    </div>
  );
};

PreviewsList.propTypes = {
  updates: PropTypes.arrayOf(PropTypes.object),
  changeView: PropTypes.func.isRequired,
};

PreviewsList.defaultProps = {
  updates: null,
};

export default PreviewsList;
