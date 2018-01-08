import { api, headers, POST, DELETE, PUT } from './common';

export const getAll = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const add = (body) =>
  fetch(`${api}/posts`, {
    method: POST,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...body })
   })
   .then(res => res.json())

export const get = (id) =>
   fetch(`${api}/posts/${id}`)
    .then(res => res.json())

export const disable = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: DELETE,
    headers: {
      ...headers
    }
  })
  .then(res => res.json())

export const vote = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: POST,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  })
  .then(res => res.json())

  export const edit = (id, body) =>
    fetch(`${api}/posts/${id}`, {
      method: PUT,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...body })
    })
    .then(res => res.json())
