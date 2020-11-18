import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { MessageProvider } from '../../utils/contexts/messages'
import { UserProvider } from '../../utils/contexts/users'
import Thread from './Thread'
import { MESSAGES } from '../../utils/mocks'

test('get messages and renders them', () => {
  const [{ content }] = MESSAGES
  const getMessages = jest.fn()
  render(
    <UserProvider value={[false]}>
      <MemoryRouter initialEntries={['/some_id']}>
        <Route path="/:id">
          <MessageProvider
            value={[{ messages: MESSAGES, initialPost: { title: '' }, count: MESSAGES.length }, getMessages]}
          >
            <Thread />
          </MessageProvider>
        </Route>
      </MemoryRouter>
    </UserProvider>,
  )
  expect(getMessages).toHaveBeenCalledWith('some_id')
  expect(screen.getByText(content)).toBeInTheDocument()
})
