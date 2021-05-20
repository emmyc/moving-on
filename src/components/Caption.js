import React from 'react';

export default function Caption(props) {
  const { caption } = props;
  return (
    <div id='caption'>
      {caption}
    </div>
  );
}