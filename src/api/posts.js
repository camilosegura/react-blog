import { api, headers, POST, DELETE, PUT } from './common';

export const getAll = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getByCategory = (token, category) =>
  fetch(`${api}/${category}/posts`)
    .then(res => res.json())

export const add = (token, body) =>
  fetch(`${api}/posts`, {
    method: POST,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body })
   })
   .then(res => res.json())

export const get = (id) =>
   fetch(`${api}/posts/${id}`)
    .then(res => res.json())

export const disable = (token, id) =>
  fetch(`${api}/posts/${id}`, {
    method: DELETE,
    headers: {
      ...headers
    }
  })
  .then(res => res.json())

export const vote = (token, id, body) =>
  fetch(`${api}/posts/${id}`, {
    method: POST,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body })
  })
  .then(res => res.json())

  export const edit = (token, id, body) =>
    fetch(`${api}/posts/${id}`, {
      method: PUT,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body })
    })
    .then(res => res.json())
