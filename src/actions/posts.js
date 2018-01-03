import * as APIPosts from '../api/posts';

export const ALL_POSTS = 'ALL_POSTS';
export const BY_CATEGORY_POSTS = 'BY_CATEGORY_POSTS';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';

export const getAll = (posts) => {
  return {
    type: ALL_POSTS,
    posts
  }
}

export const fetchAll = () => dispatch => {
  APIPosts.getAll()
    .then(posts => dispatch(getAll(posts)))
}

export const getByCategory = posts => ({
  type: BY_CATEGORY_POSTS,
  posts
})

export const fetchByCategory = category => dispatch =>
  APIPosts.getByCategory(category)
    .then(posts => dispatch(getByCategory(posts)))

export const add = post => ({
  type: ADD_POST,
  post
})

export const postNew = post => dispatch =>
  APIPosts.add(post)
    .then(post => dispatch(add(post)))

const edit = post => ({
  type: EDIT_POST,
  post
})

export const postEdit = (post) => dispatch =>
  APIPosts.edit(post.id, post)
    .then(post => dispatch(edit(post)))
