import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/footer.css';


const Footer = ({ likes, comments, side }) => {
  return (
    <div className={styles[`footer${side}`]}>
      <div className={`${styles.footerElement} ${styles.comments}`}>{`${comments} Comments`}</div>
      <div className={styles.footerElement}>{`${likes} Likes`}</div>
      <div className={styles.heartWrapper}>
        <img
          className={styles.heart}
          src="https://s3-us-west-1.amazonaws.com/fec.updates/minifiedHeart.svg"
          alt="heart"
        />
      </div>
    </div>
  );
};

Footer.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  side: PropTypes.string.isRequired,
};

export default Footer;
