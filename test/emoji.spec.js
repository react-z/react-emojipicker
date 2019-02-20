import expect from 'expect'
import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Picker from '../src/Picker'

test('Emoji component', (t) => {
  const logEmoji = (emoji) => {
     console.log(emoji)
   }

  const wrapper = mount(<Picker onEmojiSelected={logEmoji} />)

  t.pass(
    expect(wrapper.props().onEmojiSelected).toEqual(logEmoji)
  )

  t.end()
});
