import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUser } from '../../utils/contexts/users'
import styles from './MessageForm.module.css'

function MessageForm({ onSubmit, newLocation }) {
  const [isLoggedIn] = useUser()
  const [message, setMessage] = React.useState('')
  const [authorName, setAuthorName] = React.useState('')
  const [isPrivate, setIsPrivate] = React.useState(false)
  const [showForm, setShowForm] = React.useState(false)
  const { search } = useLocation()

  function onFormSubmit(e) {
    e.preventDefault()
    onSubmit(message, authorName, isPrivate)
    setShowForm(false)
  }

  React.useEffect(() => {
    if (showForm && !newLocation.includes(search)) {
      setShowForm(false)
    }
  }, [search])

  if (!isLoggedIn) {
    return <div className={styles.loggedOut}>You must be logged in to reply to this thead.</div>
  }

  if (!showForm) {
    return (
      <Link className={styles.button} onClick={() => setShowForm(true)} to={newLocation}>
        reply
      </Link>
    )
  }
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <button className={styles.closeButton} onClick={() => setShowForm(false)}>
        &#10799;
      </button>
      <div>
        <label className={styles.label} htmlFor="private">
          Private :
        </label>
        <input type="checkbox" onChange={() => setIsPrivate((bool) => !bool)} checked={isPrivate} />
      </div>
      <label className={styles.label} htmlFor="nickname">
        Your name :
      </label>
      <input
        className={styles.textInput}
        name="nickname"
        type="text"
        value={authorName}
        required
        onChange={(e) => setAuthorName(e.target.value)}
      />
      <label className={styles.label} htmlFor="content">
        Your message :
      </label>
      <textarea
        required
        name="content"
        className={styles.textarea}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input className={styles.button} type="submit" value="Send" />
    </form>
  )
}

export default MessageForm
