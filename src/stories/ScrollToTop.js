import React from 'react';
import PropTypes from 'prop-types';
import App from '../App';

function ScrollToTop(props) {
  return (
    <App
      scrollBehaviour={props.scrollBehaviour}
      supportScrollToTop
      renderScrollToTop={onClick => <button className="scrollTo scrollToTop" onClick={onClick}>Scroll To Top</button>}
    />
  );
}

ScrollToTop.displayName = 'ScrollToTop';

ScrollToTop.propTypes = {
  scrollBehaviour: PropTypes.string,
};

export default ScrollToTop;
