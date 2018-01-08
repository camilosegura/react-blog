import {
  ALL_POSTS,
  BY_CATEGORY_POSTS,
  ADD_POST,
  EDIT_POST,
  DISABLE_POST,
  ORDER_VOTED_UP,
  ORDER_VOTED_DOWN,
  ORDER_CREATED_FIRST,
  ORDER_CREATED_LAST,
  VOTE_DOWN_POST,
  VOTE_UP_POST
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

    case VOTE_DOWN_POST :
      const voteDownState = state.map(st => {
          if (st.id === post.id) {
            st.voteScore = post.voteScore;
          }

          return st;
      });

      return voteDownState;
    case VOTE_UP_POST :
      const voteUpState = state.map(st => {
          if (st.id === post.id) {
            st.voteScore = post.voteScore;
          }

          return st;
      });

      return voteUpState;
    default :
      return state;
  }
}

export default posts;
