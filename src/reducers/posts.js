import { ALL_POSTS } from '../actions/posts';

const initialState = []

const posts = (state = initialState, action) => {
  const { posts } = action;
console.log(posts)
  switch(action.type) {
    case ALL_POSTS :
      return [
        ...state,
        ...posts
      ]
    default :
      return state;
  }
}

export default posts;