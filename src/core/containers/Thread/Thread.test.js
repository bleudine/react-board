import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { MessageProvider } from '../../../utils/contexts/messages'
import Thread from './Thread'
import {MESSAGES} from '../../../utils/mocks'

test('get messages and renders them', () => {
  const [{content}] = MESSAGES
  const getMessages = jest.fn()
  render(<MessageProvider value={[MESSAGES, getMessages]}><Thread id="some_id" /></MessageProvider>)
  expect(getMessages).toHaveBeenCalledWith('some_id')
  expect(screen.getByText(content)).toBeInTheDocument()
})
