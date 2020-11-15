import React from 'react'
import PropTypes from 'prop-types'

import styles from './Message.module.css'

function Message({ content, author, createdAt, avatar }) {
  const date = new Date(createdAt)
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <div className={styles.authorAvatar}>
          <img src={avatar} alt={`${author}-avatar`} />
        </div>
        <span className={styles.authorName}>{author}</span>
      </aside>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          {content}
        </div>
        <footer className={styles.footer}>
          {date.toDateString()}
        </footer>
      </main>
    </div>
  )
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Message
