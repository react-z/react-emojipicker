import Picker from '../lib/Picker'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      enteredText: '',
      visible: true
    }
  }

  logEmoji (emoji) {
    console.log(emoji)
    this.setState({enteredText: emoji.unicode})
  }

  toggleVisible () {
    this.setState({visible: !this.state.visible})
  }


  render () {
    const {enteredText, visible} = this.state
    return (
      <div>
        <div style={{paddingBottom: '2rem'}}>
          <Picker
            onEmojiSelected={this.logEmoji.bind(this)}
            visible={visible}
            modal={false}
            />
        </div>
        <button onClick={this.toggleVisible.bind(this)}>toggle emoji picker</button>
        <input type='text' value={enteredText} />
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
