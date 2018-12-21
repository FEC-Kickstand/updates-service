import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from '../styles/dateHeader.css';

function DateHeader({ side, pubDate }) {
  const dateAndSpacer = [
    <div className={styles.date} key="1">
      {moment(pubDate).format('LL')}
    </div>,
    <div className={styles.spacerContainer} key="2">
      <div className={styles.spacerLine} />
    </div>,
  ];

  return (
    <div className={styles.header}>{side === 'left' ? dateAndSpacer : dateAndSpacer.reverse()}</div>
  );
}

DateHeader.defaultProps = {
  side: 'left',
  pubDate: moment().toISOString(),
};

DateHeader.propTypes = {
  side: PropTypes.oneOf(['left', 'right']),
  pubDate: PropTypes.string,
};

export default DateHeader;
