import Picker from '../src/Picker'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { value: 'reactjs'}
  }

  render () {
    return (
      <div>
        <Picker />
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
