import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function FullUpdate(props) {
  const {
    title,
    body,
    likes,
    pubDate,
  } = props.update;

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: '<div><b>This should be bold</b></div>' }} />
    </div>
  );
}

export default FullUpdate;
