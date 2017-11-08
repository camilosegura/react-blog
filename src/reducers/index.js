import { ALL_POSTS } from '../actions';

const initialState = {
  posts: []
}

const blog = (state = initialState, action) => {
  const { posts } = action;

  switch(action.type) {
    case ALL_POSTS :
      return {
        ...state,
        posts
      }
    default :
      return state;
  }
}

export default blog;
