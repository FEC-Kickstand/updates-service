import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateHeader from './dateHeader';
import styles from '../styles/preview.css';

class Preview extends React.Component {
  static getHighlightColor() {
    const colors = ['Sky', 'Teal', 'Apricot'];
    const randomIdx = Math.floor(Math.random() * colors.length);
    return colors[randomIdx];
  }

  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleTitleKeyUp = this.handleTitleKeyUp.bind(this);

    this.state = {
      highlight: false,
      color: Preview.getHighlightColor(),
    };
  }

  handleMouseEnter() {
    this.setState({ highlight: true });
  }

  handleMouseLeave() {
    this.setState({ highlight: false });
  }

  handleTitleClick() {
    const { changeView, update } = this.props;
    changeView(update);
  }

  handleTitleKeyUp(event) {
    if (event.keyCode === 13) {
      this.handleTitleClick();
    }
  }

  render() {
    const { side, update } = this.props;
    const { highlight, color } = this.state;
    const {
      title,
      body,
      likes,
      pubDate,
    } = update;
    const styleSide = side === 'left' ? styles.left : styles.right;
    const previewSide = side === 'left' ? styles.previewMainLeft : styles.previewMainRight;

    return (
      <div className={styleSide}>
        <DateHeader side={side} pubDate={pubDate} />
        <div className={previewSide}>
          <div
            className={highlight ? `${styles.title} ${styles[`highlight${color}`]}` : styles.title}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onClick={this.handleTitleClick}
            role="button"
            tabIndex="0"
            onKeyUp={this.handleTitleKeyUp}
          >
            {title}
          </div>
          <div className={styles.body}>{body.split('\n')[0]}</div>
          <div className={side === 'left' ? styles.footerLeft : styles.footerRight}>
            <div className={`${styles.footerElement} ${styles.comments}`}>12 Comments</div>
            <div className={styles.footerElement}>{`${likes} Likes`}</div>
          </div>
        </div>
      </div>
    );
  }
}

Preview.defaultProps = {
  side: 'left',
  update: {
    title: 'No Updates Available',
    pubDate: moment().toISOString(),
    likes: 0,
    body:
      'There are no updates for this project at this time. If you are a contributer, you will recieve an email notification when an update is posted.',
  },
};

Preview.propTypes = {
  side: PropTypes.oneOf(['left', 'right']),
  changeView: PropTypes.func.isRequired,
  update: PropTypes.shape({
    title: PropTypes.string,
    pubDate: PropTypes.string,
    likes: PropTypes.number,
    body: PropTypes.string,
  }),
};

export default Preview;
