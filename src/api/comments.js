import { api, headers, PUT, POST, DELETE } from './common';

export const getByParent = (token, id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())

export const get = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())

export const edit = (token, id, body) =>
  fetch(`${api}/comments/${id}`, {
    method: PUT,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body })
  })

export const add = (token, body) =>
  fetch(`${api}/comments`, {
    method: POST,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body })
  })

export const vote = (token, id, body) =>
  fetch(`${api}/comments/${id}`, {
    method: POST,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body })
  })

export const disable = (token, id) =>
  fetch(`${api}/comments/${id}`, {
    method: DELETE,
    headers
  })

