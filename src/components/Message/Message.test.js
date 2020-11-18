import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Message from './Message'
import { UserProvider } from '../../utils/contexts/users'

import { MESSAGES } from '../../utils/mocks'

test('renders a single message', () => {
  const [{ content, author }] = MESSAGES
  render(
    <UserProvider value={[false]}>
      <Message content={content} author={author} />
      <Message content="" author="" isPrivate={true} />
    </UserProvider>,
  )
  expect(screen.getByText(content)).toBeInTheDocument()
  expect(screen.getByText(author)).toBeInTheDocument()
  expect(
    screen.getByText(
      'it appears this post has a visibility setting set to private, please log in to be able to see it.',
    ),
  ).toBeInTheDocument()
})
