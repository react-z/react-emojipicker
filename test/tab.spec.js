import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Tab from '../src/tab'

test('Visit component', (t) => {
  setupJsdom()

  const component = shallow(<Tab><span>hey there</span></Tab>)
  const wrapper = mount(<Tab><span>hey there</span></Tab>)

  t.equal(
    component.find('div').text(), 'hey there', 'the tab component has no text'
  )

  t.pass(
    expect(wrapper.props().children).toEqual(<span>hey there</span>)
  )

  t.end()
});
