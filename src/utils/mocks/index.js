import faker from 'faker'
import { createServer, Model, Factory, hasMany, belongsTo } from 'miragejs';
import {PAGE_SIZE} from '../constants';

export const TOPICS = []
export const THREADS = []
export const MESSAGES = [
  { author: 'anonymous', content: faker.lorem.paragraph(), private: false, id: 1},
  { author: 'pinguin', content: faker.lorem.paragraph(), private: false, id: 2},
  { author: 'madlephant', content: faker.lorem.paragraph(), private: false, id: 3},
  { author: 'bruh', content: faker.lorem.paragraph(), private: false, id: 4 },
  { author: 'linus', content: faker.lorem.paragraph(), private: false, id: 5}
]

function fillAnArrayOfSortedDates(size, callback) {
  return new Array(size).fill(undefined).map(callback).sort((a, b) => new Date(a) - new Date(b))
}
export function mockApi() {
  createServer({
    models: {
      thread: Model,
    },
    seeds(server) {
      const nbOfThreads = Math.round(Math.random() * 100)
      const threads = fillAnArrayOfSortedDates(nbOfThreads, () => faker.date.past())
      threads.forEach((createdAt) => {
        const nbOfMessages = Math.round(Math.random() * 1000)
        const messages = fillAnArrayOfSortedDates(nbOfMessages, () => faker.date.between(createdAt, new Date()))
        server.create('thread', {
          title: faker.random.words(),
          author: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatar: faker.image.avatar(),
          content: faker.lorem.paragraphs(),
          createdAt,
          messages: messages.map((messageCreatedAt) => ({
            author: `${faker.name.firstName()} ${faker.name.lastName()}`,
            avatar: faker.image.avatar(),
            content: faker.lorem.paragraph(),
            private: Boolean(Math.round(Math.random())),
            createdAt: messageCreatedAt
          }))
        })
      })
    },
    routes() {
      this.get('/api/thread')
      this.get('/api/thread/:id', (schema, request) => {
        const id = request.params.id
        const { page } = request.queryParams
        const thread = schema.threads.find(id)
        const pageInRange = page <= Math.ceil(thread.messages.length / 25)
        const indexToSlice = pageInRange ? (page - 1) * PAGE_SIZE : 0
        const messages = thread.messages.slice(indexToSlice, indexToSlice + PAGE_SIZE)
        const { author, avatar, content, createdAt, title } = thread
        return { items: messages, initialPost: { author, avatar, content, createdAt, title }, count: thread.messages.length }
      })
      this.post('/api/thread/:id', (schema, request) => {
        const id = request.params.id
        const message = JSON.parse(request.requestBody)
        const thread = schema.db.threads.findBy({id})
        console.log(thread)
        schema.db.threads.update(thread, {...thread, messages: [...thread.messages, message]})
      })
    }
  })
}