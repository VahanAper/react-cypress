import React from 'react'
import ReactDOM from 'react-dom'

import Editor from '../editor.todo'
import {posts} from '../../utils/api'

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve()),
    },
  }
})

const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

test('calls onSubmit with the username and password when submitted', async () => {
  const container = document.createElement('div')
  const user = {
    id: 1,
  }
  const history = {
    push: jest.fn(),
  }

  ReactDOM.render(<Editor user={user} history={history} />, container)

  const form = container.querySelector('form')
  const {title, content, tags} = form.elements

  title.value = 'Test title'
  content.value = 'Test content'
  tags.value = 'abc  ,qwerty,   xyz'

  const submit = new window.Event('submit')
  form.dispatchEvent(submit)

  await flushPromises()

  expect(posts.create).toHaveBeenCalledTimes(1)
  expect(posts.create).toHaveBeenCalledWith({
    title: title.value,
    content: content.value,
    tags: ['abc', 'qwerty', 'xyz'],
    date: expect.any(String),
    authorId: user.id,
  })

  expect(history.push).toHaveBeenCalledTimes(1)
  expect(history.push).toHaveBeenCalledWith('/')
})

// TODO later...
test('snapshot', () => {})
