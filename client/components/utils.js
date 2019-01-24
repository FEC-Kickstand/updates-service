

const createMarkup = markup => ({ __html: markup });

const getHighlightColor = () => {
  const colors = ['Sky', 'Teal', 'Apricot'];
  const randomIdx = Math.floor(Math.random() * colors.length);
  return colors[randomIdx];
};

const defaultUpdate = {
  title: '',
  pubDate: '',
  likes: 0,
  body:
    '',
};

export { createMarkup, getHighlightColor, defaultUpdate };
