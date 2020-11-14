import React from 'react'
import PropTypes from 'prop-types'

import { useMessages } from '../../utils/contexts/messages';

function Thread({ id }) {
  const [messages, getMessages] = useMessages()

  React.useEffect(() => {
    getMessages(id)
  }, [])

  return messages.map(({ content, id }) => (
    <p key={id}>{content}</p>
  ))
}

Thread.propTypes = {

}

export default Thread