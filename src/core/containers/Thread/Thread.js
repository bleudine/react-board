import React from 'react'
import { useParams } from 'react-router-dom'

import {useMessages} from '../../../utils/contexts/messages';
import Message from '../../components/Message/Message';
import MessageForm from '../../components/MessageForm/MessageForm';

import styles from './Thread.module.css'

function Thread() {
    const [messages, getMessages, postMessage] = useMessages()
  const { id } = useParams()

  React.useEffect(() => {
    getMessages(id)
  }, [])

  return (
    <div className={styles.container}>
      <header>
        THIS IS THE HEADER
      </header>
      <main className={styles.messageList}>
        {
          messages.map(({ content, author, avatar, createdAt }) => (
            <Message avatar={avatar} createdAt={createdAt} author={author} content={content} />
          ))
        }
      </main>
      <footer>THIS IS THE FOOTER</footer>
      <MessageForm onSubmit={(message) => postMessage(id, message)} />
    </div>
  )
}

Thread.propTypes = {

}

export default Thread