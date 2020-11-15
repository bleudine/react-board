function message(id, message) {
  return new Promise((resolve, reject) => {
    fetch(`https://5fafee177edddb0016467f84.mockapi.io/thread/${id}/message`,
      {
        method: 'POST',
        body: JSON.stringify(message)
      }
      )
      .then(resolve)
      .catch(reject)
  })
}

export default {
  message,
}