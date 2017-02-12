# react-emojipicker

[![npm version](https://badge.fury.io/js/react-search.svg)](https://badge.fury.io/js/react-emojipicker)

![](https://raw.githubusercontent.com/StevenIseki/react-search/master/example/screenshot.gif)

react-emojipicker is a simple emoji picker component

**TODO:**
Note that currently this emoji picker only sends the unicode emoji character back at this stage. Still in progress is passing back the title and possibly a png image in the correctly supported emoji format.

## Install

`npm install react-emojipicker --save`

## Usage basic


```jsx
import Picker from 'react-emojipicker'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  logEmoji (emoji) {
    console.log(emoji)
  }

  render () {
    return (
      <div>
        <Picker onEmojiSelected={this.logEmoji.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
```

## Props

#### `onEmojiSelected` (required)
Handler returns the emoji character selected from the emoji picker.

## Styles
Uses styled-components 💅 for the base styling.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
