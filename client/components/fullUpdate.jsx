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
      <div>{body}</div>
    </div>
  );
}

export default FullUpdate;
