import {MESSAGES, THREADS, TOPICS} from '../mocks';

function messages(id, page = 1) {
  return new Promise((resolve, reject) => {
    fetch(`/api/thread/${id}?page=${page}`)
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  });
}

function thread(id) {
  return new Promise((resolve, reject) => {
    fetch(`/api/thread/${id}`)
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  });
}

function threads() {
  return new Promise((resolve, reject) => {
    fetch(`/api/thread`)
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  });
}

export default {
  messages,
  threads,
  thread,
};
