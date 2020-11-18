import React from 'react'
import { MemoryRouter } from 'react-router'
import { screen, render, fireEvent } from '@testing-library/react'
import MessageForm from './MessageForm'
import { UserProvider } from '../../utils/contexts/users'

test('renders MessageForm component', () => {
  const submitForm = jest.fn()
  render(
    <MemoryRouter>
      <UserProvider value={[true]}>
        <MessageForm onSubmit={submitForm} newLocation="newLocation" />
      </UserProvider>
    </MemoryRouter>,
  )
  const replyButton = screen.getByText('reply')
  expect(replyButton).toBeInTheDocument()
  fireEvent.click(replyButton)
  const [inputText, textArea] = screen.getAllByDisplayValue('')
  fireEvent.change(inputText, { target: { value: 'name' } })
  expect(screen.getByDisplayValue('name')).toBeInTheDocument()
  fireEvent.change(textArea, { target: { value: 'a very long text' } })
  expect(screen.getByDisplayValue('a very long text')).toBeInTheDocument()
  const submitButton = screen.getByText('Send')
  fireEvent.click(submitButton)
  expect(submitForm).toHaveBeenCalledWith('a very long text', 'name', false)
})
