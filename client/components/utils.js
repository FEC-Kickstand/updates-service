import PropTypes from 'prop-types';

/* eslint-env browser */
const createMarkup = markup => ({ __html: markup });

const getHighlightColor = () => {
  const colors = ['Sky', 'Teal', 'Apricot'];
  const randomIdx = Math.floor(Math.random() * colors.length);
  return colors[randomIdx];
};

const capitalize = str => str[0].toUpperCase() + str.slice(1);

const abbreviateParagraphs = (paragraphsStr) => {
  const third = 2;
  const closingTag = '</p>';
  const paragraphs = paragraphsStr.split(closingTag);
  if (paragraphs.length <= 3) {
    return paragraphs.join(closingTag);
  }
  paragraphs[third] += '...';
  const firstThreeParagraphs = paragraphs.slice(0, third + 1);
  return firstThreeParagraphs.join(closingTag);
};

const getScrollbarWidth = () => {
  let { width } = getScrollbarWidth;
  let div;

  if (width === undefined) {
    div = document.createElement('div');
    div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
    div = div.firstChild;
    document.body.appendChild(div);
    width = div.offsetWidth - div.clientWidth;
    getScrollbarWidth.width = width;
    document.body.removeChild(div);
  }
  return width;
};

const defaultUpdate = {
  title: '',
  pubDate: '',
  likes: 0,
  body:
    '',
};

const updatePropTypes = PropTypes.shape({
  title: PropTypes.string,
  pubDate: PropTypes.string,
  likes: PropTypes.number,
  body: PropTypes.string,
});

export {
  createMarkup,
  getHighlightColor,
  capitalize,
  abbreviateParagraphs,
  getScrollbarWidth,
  defaultUpdate,
  updatePropTypes,
};
