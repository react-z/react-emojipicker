import Picker from '../lib/Picker'
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
