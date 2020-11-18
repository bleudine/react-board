function message(id, message, author, isPrivate) {
  return new Promise((resolve, reject) => {
    fetch(`/api/thread/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        content: message,
        author,
        isPrivate,
      }),
    })
      .then(resolve)
      .catch(reject)
  })
}

export default {
  message,
}
