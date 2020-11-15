import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { ThreadsProvider } from './utils/contexts/threads';
import { MessageProvider } from './utils/contexts/messages';
import ThreadList from './core/containers/ThreadList/ThreadList';
import Thread from './core/containers/Thread/Thread';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <ThreadsProvider>
          <ThreadList />
        </ThreadsProvider>
      </Route>
      <Route path="/:id">
       <MessageProvider>
         <Thread />
       </MessageProvider>
      </Route>
    </BrowserRouter>
  );
}

export default App;
