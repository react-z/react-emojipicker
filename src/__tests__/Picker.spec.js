/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Picker from '../Picker'

test('Picker renders correctly and matches snapshot', () => {
  const component = renderer.create(
    <Picker onEmojiSelected={jest.fn()} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Picker renders the correct elements and props', () => {
  const handleEmojiSelected = jest.fn(event => {})

  const wrapper = shallow(
    <Picker onEmojiSelected={handleEmojiSelected} />
  )

  // wrapper
  //   .find('.ld-emoji')
  //   .first()
  //   .simulate('click')

  // expect(wrapper.instance().props.onEmojiSelected).toBeCalled();

  // console.log(wrapper.debug())

  expect(wrapper.find('.ld-emoji').length).toEqual(154)
})
