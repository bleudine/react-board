import React from 'react'
import PropTypes from 'prop-types'

import styles from './Message.module.css'

function Message({ content, author}) {
  return (
    <div className={styles.container}>
      <header>
        <h3>{author}</h3>
      </header>
      <main>{content}</main>
    </div>
  )
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Message
