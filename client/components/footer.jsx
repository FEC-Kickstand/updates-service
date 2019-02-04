import React from 'react';
import styles from '../styles/footer.css';


const Footer = ({ likes, comments, side }) => {
  return (
    <div className={styles[`footer${side}`]}>
      <div className={`${styles.footerElement} ${styles.comments}`}>{`${comments} Comments`}</div>
      <div className={styles.footerElement}>{`${likes} Likes`}</div>
      <div className={styles.heartWrapper}>
        <img
          className={styles.heart}
          src="https://s3-us-west-1.amazonaws.com/fec.updates/svg-red-heart-icon-1.svg"
          alt="heart"
        />
      </div>
    </div>
  );
};

export default Footer;
