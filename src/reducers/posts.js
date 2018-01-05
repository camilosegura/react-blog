import { ALL_POSTS, BY_CATEGORY_POSTS, ADD_POST, EDIT_POST, DISABLE_POST } from '../actions/posts';

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
    case DISABLE_POST :
      const activeState = state.filter(st => st.id !== id);
    return activeState
    default :
      return state;
  }
}

export default posts;
