import React from 'react'
import styles from './MessageForm.module.css'

function MessageForm({ onSubmit }) {
  const [message, setMessage] = React.useState('')
  function onFormSubmit (e) {
    e.preventDefault()
    onSubmit(message)
  }
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <label htmlFor="content" />
      <textarea name="content" className={styles.textarea} value={message} onChange={(e) => setMessage(e.target.value)} />
      <input className={styles.button} type="submit" value="Send" />
    </form>
  )
}

export default MessageForm
