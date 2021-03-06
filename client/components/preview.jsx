import React from 'react';
import PropTypes from 'prop-types';

import DateHeader from './dateHeader';
import Footer from './footer';
import styles from '../styles/preview.css';
import {
  defaultUpdate,
  createMarkup,
  getHighlightColor,
  capitalize,
  abbreviateParagraphs,
} from './utils';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleTitleKeyUp = this.handleTitleKeyUp.bind(this);
    this.handleTitleHover = this.handleTitleHover.bind(this);

    this.state = {
      highlight: false,
      color: getHighlightColor(),
    };
  }

  handleTitleHover() {
    this.setState(state => ({ highlight: !state.highlight }));
  }

  handleTitleClick() {
    const { changeView, update } = this.props;
    changeView(update);
  }

  handleTitleKeyUp(event) {
    const enterKey = 13;
    if (event.keyCode === enterKey) {
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
      comments,
      pubDate,
    } = update;
    const styleSide = capitalize(side);
    const titleStyle = highlight ? `${styles.title} ${styles[`highlight${color}`]}` : styles.title;

    return (
      <div className={styles[`wrapper${styleSide}`]}>
        <DateHeader side={side} pubDate={pubDate} />
        <div className={styles[`previewMain${styleSide}`]}>
          <div
            className={titleStyle}
            onMouseEnter={this.handleTitleHover}
            onMouseLeave={this.handleTitleHover}
            onClick={this.handleTitleClick}
            role="button"
            tabIndex="0"
            onKeyUp={this.handleTitleKeyUp}
          >
            {title}
          </div>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={createMarkup(abbreviateParagraphs(body))}
          />
          <Footer likes={likes} comments={comments} side={styleSide} />
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
