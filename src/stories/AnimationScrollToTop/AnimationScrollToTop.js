import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';

import Header from '../components/Header';
import PageContent from '../../PageContent';
import WindowScroller from '../../WindowScroller';

import chevron from './chevron.svg';

import './AnimationScrollToTop.css';

function AnimationScrollToTop(props) {
  return (
    <div className="App">
      <Header/>
      <PageContent/>
      <WindowScroller
        scrollBehaviour="smooth"
        supportScrollToTop
      >
        {({ showScrollToTop, onScrollToTopClick }) => (
          <React.Fragment>
            <CSSTransition
              in={showScrollToTop}
              timeout={300}
              classNames="scrollToTopAnimation"
              mountOnEnter
              unmountOnExit
              appear
            >
              <div className="scrollBubbleC center-x-y scp" onClick={onScrollToTopClick}>
                <img src={chevron} className="scrollIconC" alt="up"/>
              </div>
            </CSSTransition>
          </React.Fragment>
        )}
      </WindowScroller>
    </div>
  );
}

AnimationScrollToTop.displayName = 'AnimationScrollToTop';

export default AnimationScrollToTop;
