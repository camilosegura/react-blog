import * as APIPosts from '../api/posts';

export const ALL_POSTS = 'ALL_POSTS';

export const getAllPosts = (posts) => {
  return {
    type: ALL_POSTS,
    posts
  }
}

export const fetchAllPosts = () => dispatch => {
  APIPosts.getAll()
    .then(posts => dispatch(getAllPosts(posts)))
}
