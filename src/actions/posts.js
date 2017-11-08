import * as APIPosts from '../api/posts';

export const ALL_POSTS = 'ALL_POSTS';
export const BY_CATEGORY_POSTS = 'BY_CATEGORY_POSTS';

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