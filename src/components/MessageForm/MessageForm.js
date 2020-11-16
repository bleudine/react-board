import React from 'react'
import styles from './MessageForm.module.css'

function MessageForm({ onSubmit }) {
  const [message, setMessage] = React.useState('')
  const [authorName, setAuthorName] = React.useState('')
  const [showForm, setShowForm] = React.useState(false)
  function onFormSubmit (e) {
    e.preventDefault()
    onSubmit(message)
  }

  if (!showForm) {
    return <button className={styles.button} onClick={() => setShowForm(true)}>reply</button>
  }
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <button className={styles.closeButton} onClick={() => setShowForm(false)}>&#10799;</button>
      <label className={styles.label} htmlFor="nickname">Your name :</label>
      <input className={styles.textInput} type="text" value={authorName} required onChange={(e) => setAuthorName(e.target.value)} />
      <label className={styles.label} htmlFor="content">Your message :</label>
      <textarea required name="content" className={styles.textarea} value={message} onChange={(e) => setMessage(e.target.value)} />
      <input className={styles.button} type="submit" value="Send" />
    </form>
  )
}

export default MessageForm
