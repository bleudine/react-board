import React from "react";
import api from "../api";

export const ThreadsContext = React.createContext(null);

export function useThreads() {
  const context = React.useContext(ThreadsContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessagesProvider");
  }

  return context;
}

export function ThreadsProvider(props) {
  const [threads, setThreads] = React.useState([]);

  function getThreads() {
    api.get.threads().then((thrds) => setThreads(thrds));
  }

  const value = React.useMemo(() => [threads, getThreads], [threads]);

  return <ThreadsContext.Provider value={value} {...props} />;
}
