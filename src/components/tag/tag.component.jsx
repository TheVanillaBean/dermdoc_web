import React from 'react';

const Tag = ({ tag }) => {
  if (tag === 'Tufts Medical Center') {
    return <span className="tag tag--tufts">{tag}</span>;
  } else {
    return <span className="tag">{tag}</span>;
  }
};

export default Tag;
