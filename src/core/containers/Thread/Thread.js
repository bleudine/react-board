import React from 'react'
import { useParams } from 'react-router-dom'

import {useMessages} from '../../../utils/contexts/messages';
import Message from '../../components/Message/Message';
import MessageForm from '../../components/MessageForm/MessageForm';

function Thread() {
    const [messages, getMessages, postMessage] = useMessages()
  const { id } = useParams()

  React.useEffect(() => {
    getMessages(id)
  }, [])

  return (
    <div>
      {
        messages.map(({ content, author, avatar, createdAt }) => (
          <Message avatar={avatar} createdAt={createdAt} author={author} content={content} />
        ))
      }
      <MessageForm onSubmit={(message) => postMessage(id, message)} />
    </div>
  )
}

Thread.propTypes = {

}

export default Thread