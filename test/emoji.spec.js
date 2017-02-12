import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Picker from '../src/Picker'

test('Emoji component', (t) => {
  setupJsdom()

  const logEmoji = (emoji) => {
     console.log(emoji)
   }

  const wrapper = mount(<Picker onEmojiSelected={logEmoji} />)

  t.pass(
    expect(wrapper.props().onEmojiSelected).toEqual(logEmoji)
  )

  t.end()
});
