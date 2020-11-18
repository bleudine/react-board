import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'
import Paginator from './Paginator'
import {PAGE_SIZE} from '../../utils/constants'

test('renders Paginator with correct number of links', () => {
  const count = 972
  const totalOfPages = Math.ceil(972 / PAGE_SIZE)
  render(
    <MemoryRouter>
      <Paginator count={count} />
    </MemoryRouter>,
  )

  expect(screen.getAllByRole('link').length).toBe(totalOfPages)
})
