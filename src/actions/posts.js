import * as APIPosts from '../api/posts';

export const ALL_POSTS = 'ALL_POSTS';

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
