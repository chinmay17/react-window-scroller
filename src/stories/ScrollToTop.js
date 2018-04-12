import React from 'react';
import PropTypes from 'prop-types';
import App from '../App';

function ScrollToTop(props) {
  return (
    <App
      description="Scroll to the bottom and then scroll a little up"
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
