import React from 'react';
import PropTypes from 'prop-types';
import App from '../App';

function Both(props) {
  return (
    <App
      scrollBehaviour={props.scrollBehaviour}
      supportScrollToBottom
      supportScrollToTop
      renderScrollToBottom={onClick => <button className="scrollTo scrollToBottom" onClick={onClick}>Scroll To Bottom</button>}
      renderScrollToTop={onClick => <button className="scrollTo scrollToTop" onClick={onClick}>Scroll To Top</button>}
    />
  );
}

Both.displayName = 'Both';

Both.propTypes = {
  scrollBehaviour: PropTypes.string,
};


export default Both;
