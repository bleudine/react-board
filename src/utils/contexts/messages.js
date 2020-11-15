import React from 'react'
import { useLocation } from 'react-router-dom'
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
  messages: []
}

function reducer(state, action) {
  switch(action.type) {
    case 'SET_MESSAGES':
      return {
        messages: action.messages,
        count: action.count,
      }
    default:
      return state
  }
}

export function MessageProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { search } = useLocation()
  function getMessages(id) {
    const params = new URLSearchParams(search)
    api.get.messages(id, params.get('page')).then(({items, count}) => dispatch({
      type: 'SET_MESSAGES',
      messages: items,
      count,
    }))
  }

  function postMessage(id, message) {
    api.post.message(id, message).then(() => getMessages(id))
  }

  const value = React.useMemo(() => [state.messages, getMessages, postMessage], [state])

  return <MessagesContext.Provider value={value} {...props} />
}

