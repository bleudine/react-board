import {MESSAGES, THREADS, TOPICS} from '../mocks';

function messages(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://5fafee177edddb0016467f84.mockapi.io/thread/${id}/message`)
      .then(res => res.json())
      .then(resolve)
      .catch(reject)
  })
}

function thread(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://5fafee177edddb0016467f84.mockapi.io/thread/${id}`)
      .then(res => res.json())
      .then(resolve)
      .catch(reject)
  })
}

function threads() {
  return new Promise((resolve, reject) => {
    fetch(`https://5fafee177edddb0016467f84.mockapi.io/thread`)
      .then(res => res.json())
      .then(resolve)
      .catch(reject)
  })
}

export default {
  messages,
  threads,
  thread,
}
