import React from 'react'
import { Link } from 'react-router-dom'

import { useThreads } from '../../utils/contexts/threads';



function ThreadList() {
  const [threads, getThreads] = useThreads()

  React.useEffect(() => {
    getThreads()
  }, [])

  return threads.map(({ title, author, createdAt, id }) => (
    <Link to={`/${id}`}>
      <p>{title}</p>
    </Link>
  ))
}

ThreadList.propTypes = {

}

export default ThreadList