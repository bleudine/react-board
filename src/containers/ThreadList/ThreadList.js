import React from 'react'
import { Link } from 'react-router-dom'

import { useThreads } from '../../utils/contexts/threads';

import styles from './ThreadList.module.css'



function ThreadList() {
  const [threads, getThreads] = useThreads()

  React.useEffect(() => {
    getThreads()
  }, [])

  return threads.map(({ title, author, createdAt, lastUpdated, id, messages, content }) => (
    <Link className={styles.threadListItem} to={`/${id}`}>
      <span className={styles.title}>{title}</span>
      <span className={styles.separator} />
      <div className={styles.threadInfos}>
        Created by {author}, {messages} messages, last updated on {lastUpdated}
      </div>
    </Link>
  ))
}

ThreadList.propTypes = {

}

export default ThreadList