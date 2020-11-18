import React from 'react'

export const UserContext = React.createContext(null)

export function useUser() {
  const context = React.useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

export function UserProvider(props) {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const value = React.useMemo(() => [loggedIn, setLoggedIn], [loggedIn])

  return <UserContext.Provider value={value} {...props} />
}
