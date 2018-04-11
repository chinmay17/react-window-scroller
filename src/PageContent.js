import React from 'react';
import _times from 'lodash/times';
import './PageContent.css';

function PageContent() {
  return (
    <div className="pageContent">
      {_times(30, i => (
        <div className="itemContainer">
            <p>{i}</p>
        </div>
      ))}
    </div>
  );
}

PageContent.displayName = 'PageContent';

export default PageContent;
