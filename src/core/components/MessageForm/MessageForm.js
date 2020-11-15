import React from 'react'

function MessageForm({ onSubmit }) {
  const [message, setMessage] = React.useState('')
  function onFormSubmit (e) {
    e.preventDefault()
    onSubmit(message)
  }
  return (
    <form onSubmit={onFormSubmit}>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <input type="submit" value="Send" />
    </form>
  )
}

export default MessageForm
