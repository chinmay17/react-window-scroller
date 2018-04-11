import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';

import Header from '../components/Header';
import PageContent from '../../PageContent';
import WindowScroller from '../../WindowScroller';

import chevron from './chevron.svg';

import './AnimationScrollToBoth.css';

function AnimationScrollToBoth(props) {
  return (
    <div className="App">
      <Header/>
      <PageContent/>
      <WindowScroller
        scrollBehaviour="smooth"
        supportScrollToTop
        supportScrollToBottom
      >
        {({ showScrollToTop, showScrollToBottom, onScrollToTopClick, onScrollToBottomClick  }) => (
          <React.Fragment>
            <CSSTransition
              in={showScrollToTop}
              timeout={300}
              classNames="scrollerAnim"
              mountOnEnter
              unmountOnExit
              appear
            >
              <div className="scrollBubble scrollBubbleUp center-x-y scp" onClick={onScrollToTopClick}>
                <img src={chevron} className="scrollIcon scrollIconUp" alt="up"/>
              </div>
            </CSSTransition>
            <CSSTransition
              in={showScrollToBottom}
              timeout={300}
              classNames="scrollerAnim"
              mountOnEnter
              unmountOnExit
              appear
            >
              <div className="scrollBubble scrollBubbleDown center-x-y scp" onClick={onScrollToBottomClick}>
                <img src={chevron} className="scrollIcon scrollIconDown" alt="down"/>
              </div>
            </CSSTransition>
          </React.Fragment>
        )}
      </WindowScroller>
    </div>
  );
}

AnimationScrollToBoth.displayName = 'AnimationScrollToBoth';

export default AnimationScrollToBoth;
