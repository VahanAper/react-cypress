import React from 'react'
import ReactDOM from 'react-dom'

import Login from '../login'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // 🐨 create a fake object to hold the form field values (username and password)
  const div = document.createElement('div')
  const onSubmit = jest.fn()

  ReactDOM.render(<Login onSubmit={onSubmit} />, div)

  const form = div.querySelector('form')
  const {username, password} = form.elements

  username.value = 'Username'
  password.value = 'Password'

  form.dispatchEvent(new window.Event('submit'))

  expect(onSubmit).toHaveBeenCalledTimes(1)
  expect(onSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  })
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
