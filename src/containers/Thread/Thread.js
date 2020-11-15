import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

import {useMessages} from '../../utils/contexts/messages';
import Message from '../../components/Message/Message';
import MessageForm from '../../components/MessageForm/MessageForm';
import Paginator from '../../components/Paginator/Paginator';

import styles from './Thread.module.css'

function Thread() {
  const [{messages, count, initialPost}, getMessages, postMessage] = useMessages()
  const { search } = useLocation()
  const { id } = useParams()
  const { title, content, author, avatar, createdAt } = initialPost

  React.useEffect(() => {
    const params = new URLSearchParams(search)
    const page = params.get('page')
    getMessages(id, page)
  }, [search])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link className={styles.goBackLink} to="/">Discussions</Link> :: <span className={styles.threadTitle}>{title}</span>
      </header>
      <main className={styles.messageList}>
        {title && (
          <div className={styles.initialPost}>
            <Message author={author} content={content} createdAt={createdAt} avatar={avatar} />
          </div>
        )}
        {
          messages.map(({ content, author, avatar, createdAt }) => (
            <Message avatar={avatar} createdAt={createdAt} author={author} content={content} />
          ))
        }
      </main>
      <footer>
        <Paginator count={count} />
      </footer>
      <MessageForm onSubmit={(message) => postMessage(id, message)} />
    </div>
  )
}

Thread.propTypes = {

}

export default Thread