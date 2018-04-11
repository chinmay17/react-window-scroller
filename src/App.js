import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import PageContent from './PageContent';
import WindowScroller from './WindowScroller';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">WindowScroller</h1>
        </header>
        <PageContent/>
        <WindowScroller
          scrollBehaviour={this.props.scrollBehaviour}
          supportScrollToTop={this.props.supportScrollToTop}
          supportScrollToBottom={this.props.supportScrollToBottom}
        >
          {({ showScrollToTop, showScrollToBottom, onScrollToTopClick, onScrollToBottomClick }) => (
            <React.Fragment>
              {showScrollToTop && this.props.renderScrollToTop(onScrollToTopClick)}
              {showScrollToBottom && this.props.renderScrollToBottom(onScrollToBottomClick)}
            </React.Fragment>
          )}
        </WindowScroller>
      </div>
    );
  }
}

App.propTypes = {
  supportScrollToTop: PropTypes.bool,
  supportScrollToBottom: PropTypes.bool,
  renderScrollToTop: PropTypes.func,
  renderScrollToBottom: PropTypes.func,
  scrollBehaviour: PropTypes.string,
};

App.defaultProps = {
  renderScrollToTop(onClick) {
    return <button className="scrollTo scrollToTop" onClick={onClick}>Scroll To Top</button>;
  },
  renderScrollToBottom(onClick) {
    return <button className="scrollTo scrollToBottom" onClick={onClick}>Scroll to bottom</button>;
  },
};

export default App;
