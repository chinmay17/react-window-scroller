# react-window-scroller

A React Component which accepts render prop to render scrollToTop and scrollToBottom elements. Uses `window.scrollTo` for updating the scroll.  

https://chinmay17.github.io/react-window-scroller/


Usage
------------
### Basic Example

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PageContent/>
        <WindowScroller
          supportScrollToTop
        >
          {({ showScrollToTop, showScrollToBottom, onScrollToTopClick, onScrollToBottomClick }) => (
              showScrollToTop && <button
              style={{
              position: 'fixed',
              right: '20px',
              bottom: '20px',
               }}
              onClick={onScrollToTopClick}
              >
              Scroll To Top
              </button>
          )}
        </WindowScroller>
      </div>
    );
  }
}
```

### Prop Types

#### WindowScroller
| Property                   | Type              | Default                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:---------------------------|:-------------------------------------------------------------------------------------------------|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| supportScrollToTop         | Boolean           |                                                                                                            | For rendering scrollToTop Element                                                                                                                                                                                                                                                                                                                                                                           |
| supportScrollToBottom      | String            |                                                                                                            | For rendering scrollToBottom Element                                                                                                                                                                                                                                                                                                                                           |
| scrollBehaviour            | String - oneOf( [`'smooth'`, `'instant'`, `'auto'`] )            | `smooth`                                                                                                            | The scroll behaviour, passed to `window.scrollTo`                                                                                                                                                                                                                                                                                                                                                                              |
| scrollThreshold            | Number            | `50`                                                                                                      | The amount pixels the user should scroll before the scrollToTop/scrollToBottom element appears                                                                                                                                                                                                                                                                                                                                                     |
| throttleDuration           | Number            | `300`                                                                                                        | The duration used for throttling window's scroll events.                                                                                                                                                                                                                                                |
| children                   | Function (**Required**)            |                                                                                                        | Invoked with an object of the shape ({showScrollToTop: bool, showScrollToBottom: bool, onScrollToTopClick: func, onScrollToBottomClick: func }).                                                                                                                                                                                                                                                                                                                                                                                                |

Depends only on `lodash/throttle`.
