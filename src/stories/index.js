import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import SimpleScrollToTopApp from './ScrollToTop';
import ScrollToBottomApp from './ScrollToBottom';
import BothApp from './Both';

import AnimationScrollToTop from './AnimationScrollToTop';
import AnimationScrollToBoth from './AnimationScrollToBoth';

storiesOf('Welcome', module).add('to WindowScroller', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Simple', module)
  .add('Scroll To Top', () => <SimpleScrollToTopApp scrollBehaviour="instant"/>)
  .add('Scroll To Bottom', () => <ScrollToBottomApp scrollBehaviour="instant"/>)
  .add('Both', () => <BothApp scrollBehaviour="instant"/>);

storiesOf('Smooth', module)
  .add('Scroll To Top', () => <SimpleScrollToTopApp scrollBehaviour="smooth"/>)
  .add('Scroll To Bottom', () => <ScrollToBottomApp scrollBehaviour="smooth"/>)
  .add('Both', () => <BothApp scrollBehaviour="smooth"/>);

storiesOf('Animation', module)
  .add('ScrollToTop', () => <AnimationScrollToTop />)
  .add('Both', () => <AnimationScrollToBoth />);

