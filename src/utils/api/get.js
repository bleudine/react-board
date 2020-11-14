import {MESSAGES, THREADS, TOPICS} from '../mocks';

function messages(id) {
  return new Promise((resolve ) => resolve(MESSAGES))
}

function threads(id) {
  return new Promise((resolve) => resolve(THREADS))
}

function topics() {
  return new Promise((resolve) => resolve(TOPICS))
}


export default {
  messages,
  threads,
  topics,
}
