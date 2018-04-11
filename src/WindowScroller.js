/*
 * User: chinmay
 * Date: 11 Apr 2018
 * description: For scrollToBottom and scrollToTop behaviour. Uses render prop.
 */

import React from 'react';
import PropTypes from 'prop-types';
import _throttle from 'lodash/throttle';

function getWindowScrollHeight() {
  const docEl = document.documentElement;
  return docEl.scrollHeight - docEl.clientHeight;
}

class WindowScroller extends React.PureComponent {

  state = {
    showScrollToTop: false,
    showScrollToBottom: false,
  };

  lastScrollY = null;

  autoScrolling = false;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = _throttle(e => {
    const windowScrollY = window.scrollY;
    const lastScrollY = this.lastScrollY;
    this.lastScrollY = windowScrollY;

    if (this.props.supportScrollToTop && (windowScrollY <= 0)) {
      this.autoScrolling = false;
      this.setState({ showScrollToTop: false });
      return;
    }

    if (this.props.supportScrollToBottom && (windowScrollY >= getWindowScrollHeight())) {
      this.autoScrolling = false;
      this.setState({ showScrollToBottom: false });
      return;
    }

    if (this.autoScrolling) {
      return;
    }

    const nextState = {};

    if (this.props.supportScrollToTop && (lastScrollY - windowScrollY > this.props.scrollThreshold)) {
      nextState.showScrollToTop = true;
    }

    if (this.props.supportScrollToBottom && (windowScrollY - lastScrollY > this.props.scrollThreshold)) {
      nextState.showScrollToBottom = true;
    }

    this.setState(nextState);
  }, this.props.throttleDuration);

  handleScrollToTop = () => {
    this.autoScrolling = true;
    window.scrollTo({
      top: 0,
      behavior: this.props.scrollBehaviour,
    });
  };

  handleScrollToBottom = () => {
    this.autoScrolling = true;
    window.scrollTo({
      top: getWindowScrollHeight(),
      behavior: this.props.scrollBehaviour,
    });
  };

  render() {
    return (
      this.props.children({
        showScrollToTop: this.state.showScrollToTop,
        showScrollToBottom: this.state.showScrollToBottom,
        onScrollToTopClick: this.handleScrollToTop,
        onScrollToBottomClick: this.handleScrollToBottom
      })
    );
  }
}

WindowScroller.displayName = 'WindowScroller';
WindowScroller.propTypes = {

  //invoked with an object of the shape ({showScrollToTop: bool, showScrollToBottom: bool, onScrollToTopClick: func, onScrollToBottomClick: func })
  children: PropTypes.func.isRequired,

  supportScrollToTop: PropTypes.bool,
  supportScrollToBottom: PropTypes.bool,
  scrollThreshold: PropTypes.number,
  scrollBehaviour: PropTypes.oneOf(['smooth', 'instant', 'auto']),
  throttleDuration: PropTypes.number,
};
WindowScroller.defaultProps = {
  scrollThreshold: 50,
  scrollBehaviour: 'smooth',
  throttleDuration: 300,
};

export default WindowScroller;
