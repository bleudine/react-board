function message(id, message, author) {
  return new Promise((resolve, reject) => {
    fetch(`/api/thread/${id}`, {
      method: "POST",
      body: JSON.stringify({
        content: message,
        author,
      }),
    })
      .then(resolve)
      .catch(reject);
  });
}

export default {
  message,
};
