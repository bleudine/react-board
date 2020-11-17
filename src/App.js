import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThreadsProvider } from "./utils/contexts/threads";
import { MessageProvider } from "./utils/contexts/messages";
import ThreadList from "./containers/ThreadList/ThreadList";
import Thread from "./containers/Thread/Thread";
import { ReactComponent as UserIcon } from "./assets/user.svg";
import styles from "./App.module.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div className={styles.appContainer}>
      <header className={styles.appHeader}>
        <h2 className={styles.appTitle}>React Board</h2>
        <a
          type="button"
          className={styles.loginButton}
          onClick={() => setIsLoggedIn((loggedIn) => !loggedIn)}
        >
          <UserIcon
            className={isLoggedIn ? styles.loggedIn : styles.loggedOut}
          />
          {isLoggedIn ? "log out" : "log in"}
        </a>
      </header>
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
    </div>
  );
}

export default App;
