import React from 'react';
import PropTypes from 'prop-types';
import App from '../App';

function ScrollToBottom(props) {
  return (
    <App
      description="Scroll down"
      scrollBehaviour={props.scrollBehaviour}
      supportScrollToBottom
      renderScrollToBottom={onClick => <button className="scrollTo scrollToBottom" onClick={onClick}>Scroll To Bottom</button>}
    />
  );
}

ScrollToBottom.displayName = 'ScrollToBottom';

ScrollToBottom.propTypes = {
  scrollBehaviour: PropTypes.string,
};

export default ScrollToBottom;
