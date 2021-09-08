import React from 'react';

const Tag = ({ tag }) => {
  if (tag === 'Tufts Dermatology') {
    return <span className="tag tag--tufts">{tag}</span>;
  } else {
    return <span className="tag">{tag}</span>;
  }
};

export default Tag;
