# react-tab-view

[![npm version](https://badge.fury.io/js/react-tab-view.svg)](https://badge.fury.io/js/react-tab-view)

react-tab-view is a simple tabs component using react.js.

## Install

`npm install react-tab-view --save`

## Usage

```jsx

import { Tabs, Tab } from 'react-tab-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  render () {

    const headers = ['heading 1', 'heading 2'];

    return (
      <div>
        <Tabs headers={headers}>
          <Tab>
            <div><p>This is the first tab</p></div>
            <div><p>with some content</p></div>
          </Tab>
          <Tab>
            <p>This is the second tab's content</p>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)

```

## Versions

#### `1.0.1` uses React `^0.13.0`

#### `1.0.3` uses React `^0.14.0`

#### `1.0.4` uses React `^0.15.1`

## Styles

react-tab-view can be used with your own custom styles. A minimal [tabs.css](https://github.com/StevenIseki/react-tab-view/blob/master/example/public/tabs.css) style sheet is included as a guide.

## Development

    npm install
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
