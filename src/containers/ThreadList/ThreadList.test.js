import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router'

import { ThreadsProvider } from '../../utils/contexts/threads'
import { THREADS } from '../../utils/mocks'
import ThreadList from './ThreadList'

test('renders Thread list', () => {
  const getThreads = jest.fn()
  render(
    <MemoryRouter>
      <Route path="/">
        <ThreadsProvider value={[THREADS, getThreads]}>
          <ThreadList />
        </ThreadsProvider>
      </Route>
    </MemoryRouter>
  )

  expect(getThreads).toHaveBeenCalled()
  expect(screen.getAllByRole('link').length).toBe(THREADS.length)
  const [{ author, title }] = THREADS
  expect(screen.getByText(author, { exact: false })).toBeInTheDocument()
  expect(screen.getByText(title, { exact: false })).toBeInTheDocument()
})