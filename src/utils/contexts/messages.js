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

const initialState = {
  count: 0,
  messages: [],
  initialPost: {
    title: '',
  }
}

function reducer(state, action) {
  switch(action.type) {
    case 'SET_MESSAGES':
      return {
        messages: action.messages,
        initialPost: action.initialPost,
        count: action.count,
      }
    default:
      return state
  }
}

export function MessageProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  function getMessages(id, page) {
    api.get.messages(id, page).then(({items, count, initialPost}) => dispatch({
      type: 'SET_MESSAGES',
      messages: items,
      count,
      initialPost,
    }))
  }

  function postMessage(id, message) {
    api.post.message(id, message).then(() => getMessages(id))
  }

  const value = React.useMemo(() => [state, getMessages, postMessage], [state])

  return <MessagesContext.Provider value={value} {...props} />
}

