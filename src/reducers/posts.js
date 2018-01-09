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
  VOTE_POST,
  INCREASE_COMMENTS_POST,
  DECREASE_COMMENTS_POST
} from '../utils/constants';

const initialState = []

const posts = (state = initialState, action) => {
  const { posts, post, id } = action;
  let newState = [];

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
      state.map(st => {
        if (st.id === post.id) {
            st.body = post.body;
            st.title = post.title;
        }

        return st;
      });
      return [
        ...state
      ];
    case DISABLE_POST :
      newState = state.filter(st => st.id !== id);
      return newState
    case ORDER_CREATED_FIRST :
      state.sort((a, b) => {
        return a.timestamp - b.timestamp;
      });

      return [
        ...state
      ];
    case ORDER_CREATED_LAST :
      state.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

      return [
        ...state
      ];

    case ORDER_VOTED_DOWN :
      state.sort((a, b) => {
        return a.voteScore - b.voteScore;
      });

      return [
        ...state
      ];
    case ORDER_VOTED_UP :
      state.sort((a, b) => {
        return b.voteScore - a.voteScore;
      });

      return [
        ...state
      ];
    case VOTE_POST :
      state.map(st => {
        if (st.id === post.id) {
          st.voteScore = post.voteScore;
        }

        return st;
      });

      return [
        ...state
      ];
    case INCREASE_COMMENTS_POST :
      state.map(st => {
        if (st.id === id) {
          st.commentCount++;
        }
      });

      return [
        ...state
      ]
    case DECREASE_COMMENTS_POST :
      state.map(st => {
        if (st.id === id) {
          st.commentCount--;
        }
      });

      return [
        ...state
      ]
    default :
      return state;
  }
}

export default posts;
