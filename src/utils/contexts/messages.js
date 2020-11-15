import React from 'react'
import api from '../api'

export const MessagesContext = React.createContext(null)

export function useMessages() {
  const context = React.useContext(MessagesContext)
  if (!context) {
    throw new Error('useMessages must be used within a MessagesProvider')
  }

  return context
}

export function MessageProvider(props) {
  const [messages, setMessages] = React.useState([])
  const [thread, setThread] = React.useState(null)
  function getMessages(id) {
    api.get.messages(id).then((msgs) => setMessages(msgs))
  }

  function getThread(id) {
    api.get.thread(id).then((thrd) => setThread(thrd))
  }

  function postMessage(id, message) {
    api.post.message(id, message).then(() => getMessages(id))
  }

  const value = React.useMemo(() => [messages, getMessages, postMessage], [messages])

  return <MessagesContext.Provider value={value} {...props} />
}

