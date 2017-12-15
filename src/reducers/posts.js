import { ALL_POSTS, BY_CATEGORY_POSTS, ADD_POST } from '../actions/posts';

const initialState = []

const posts = (state = initialState, action) => {
  const { posts, post } = action;

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
    case ADD_POST :
      return [
        ...state,
        post
      ]
    default :
      return state;
  }
}

export default posts;