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
  const { search } = useLocation()
  function getPage() {
    const params = new URLSearchParams(search)
    return params.get('page') || 1
  }
  function getMessages(id) {
    const page = getPage()
    api.get.messages(id, page).then(({items, count, initialPost}) => dispatch({
      type: 'SET_MESSAGES',
      messages: items,
      count,
      initialPost,
    }))
  }

  function postMessage(id, message, author) {
    const page = getPage()
    api.post.message(id, message, author).then(() => getMessages(id, page))
  }

  const value = React.useMemo(() => [state, getMessages, postMessage], [state, search])

  return <MessagesContext.Provider value={value} {...props} />
}

