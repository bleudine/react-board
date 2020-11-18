import React from 'react'
import PropTypes from 'prop-types'

import { useUser } from '../../utils/contexts/users'
import styles from './Message.module.css'

function Message({ content, author, createdAt, avatar, isPrivate }) {
  const [isLoggedIn] = useUser()
  const date = new Date(createdAt)
  if (isPrivate && !isLoggedIn) {
    return (
      <div className={styles.container}>
        <p className={styles.privateVisibility}>
          it appears this post has a visibility setting set to private, please log in to be able to see it.
        </p>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <div className={styles.authorAvatar}>
          <img src={avatar} alt={`${author}-avatar`} />
        </div>
        <span className={styles.authorName}>{author}</span>
      </aside>
      <main className={styles.main}>
        <div className={styles.mainContent}>{content}</div>
        <footer className={styles.footer}>Posted on {date.toDateString()}</footer>
      </main>
    </div>
  )
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Message
