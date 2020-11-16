import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



import {MessageProvider} from '../../utils/contexts/messages';
import Thread from './Thread';
import {mockApi} from '../../utils/mocks';
import api from '../../utils/api'
import { MESSAGES } from '../../utils/mocks';

beforeAll(() => {
  mockApi()
})

test('get messages and renders them', () => {
  const [{content}] = MESSAGES
  const spy = jest.spyOn(api.get, 'messages')
  const getMessages = jest.fn()
  render(
    <MemoryRouter initialEntries={['/some_id']}>
      <Route path="/:id">
        <MessageProvider value={[{ messages: MESSAGES, initialPost: { title: ''}, count: MESSAGES.length }, getMessages]}>
          <Thread />
        </MessageProvider>
      </Route>
    </MemoryRouter>
  );
  expect(getMessages).toHaveBeenCalledWith('some_id');
  expect(screen.getByText(content)).toBeInTheDocument();
});
