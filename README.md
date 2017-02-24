# react-emojipicker

[![npm version](https://badge.fury.io/js/react-emojipicker.svg)](https://badge.fury.io/js/react-emojipicker)

![](https://raw.githubusercontent.com/StevenIseki/react-emojipicker/master/example/screenshot.png)

react-emojipicker is a simple emoji picker component

Uses [emojione](http://emojione.com/) for rendering emojis to images.

An Emoji object is returned in the following format from the picker.

```jsx
{
  image: '<img class="emojione" alt="😀" src="https://cdn.jsdelivr.net/emojione..." />',
  unicode: 😀,
  shortname: ':grinning:'
}
```

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

#### `visible`
Opacity to show or hide the picker. Defaults to `true`.

#### `modal`
If you want the emoji picker to be a modal.
`true` will set the wrapper as `position: absolute`.
Or `false`, which is the default will be `position: static`.

## Styles
Uses styled-components 💅 for the base styling.

## Development

```sh
npm install
npm run build
npm test
npm start
```

## License

[MIT](http://isekivacenz.mit-license.org/)
