import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { ThreadsProvider } from './utils/contexts/threads';
import { MessageProvider } from './utils/contexts/messages';
import ThreadList from './containers/ThreadList/ThreadList';
import Thread from './containers/Thread/Thread';
import styles from './App.module.css'

function App() {
  return (
   <div className={styles.container}>
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
   </div>
  );
}

export default App;
