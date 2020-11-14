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
  function getMessages(id) {
    api.get.messages(id).then((msgs) => setMessages(msgs))
  }

  const value = React.useMemo(() => [messages, getMessages], [messages])

  return <MessagesContext.Provider value={value} {...props} />
}

