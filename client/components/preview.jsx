import React from 'react';
import PropTypes from 'prop-types';
import DateHeader from './dateHeader';
import styles from '../styles/preview.css';
import { defaultUpdate, createMarkup, getHighlightColor } from './utils';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleTitleKeyUp = this.handleTitleKeyUp.bind(this);

    this.state = {
      highlight: false,
      color: getHighlightColor(),
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
    const titleStyle = highlight ? `${styles.title} ${styles[`highlight${color}`]}` : styles.title;

    return (
      <div className={styleSide}>
        <DateHeader side={side} pubDate={pubDate} />
        <div className={previewSide}>
          <div
            className={titleStyle}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onClick={this.handleTitleClick}
            role="button"
            tabIndex="0"
            onKeyUp={this.handleTitleKeyUp}
          >
            {title}
          </div>
          <div className={styles.body} dangerouslySetInnerHTML={createMarkup(body)} />
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
  update: defaultUpdate,
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
