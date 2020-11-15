function message(id, message) {
  return new Promise((resolve, reject) => {
    fetch(`/api/thread/${id}/message`,
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