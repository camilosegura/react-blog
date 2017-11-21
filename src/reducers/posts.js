import { ALL_POSTS, BY_CATEGORY_POSTS } from '../actions/posts';

const initialState = []

const posts = (state = initialState, action) => {
  const { posts } = action;

  switch(action.type) {
    case ALL_POSTS :
      return [
        ...state,
        ...posts
      ];
    case BY_CATEGORY_POSTS : 
      return [
        ...state,
        ...posts
      ];
    default :
      return state;
  }
}

export default posts;