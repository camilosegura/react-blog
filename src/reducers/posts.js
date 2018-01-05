import {
  ALL_POSTS,
  BY_CATEGORY_POSTS,
  ADD_POST,
  EDIT_POST,
  DISABLE_POST,
  ORDER_VOTED_UP,
  ORDER_VOTED_DOWN,
  ORDER_CREATED_FIRST,
  ORDER_CREATED_LAST
} from '../actions/posts';

const initialState = []

const posts = (state = initialState, action) => {
  const { posts, post, id } = action;

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
      ];
    case EDIT_POST :
      const newState = state.map(st => {
        if (st.id === post.id) {
            st.body = post.body;
            st.title = post.title;
        }

        return st;
      });
      return newState;
    case DISABLE_POST :
      const activeState = state.filter(st => st.id !== id);
      return activeState
    case ORDER_CREATED_FIRST :
      posts.sort((a, b) => {
        return a.timestamp - b.timestamp;
      });

      return [
        ...posts
      ];
    case ORDER_CREATED_LAST :
      posts.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

      return [
        ...posts
      ];
    default :
      return state;
  }
}

export default posts;
