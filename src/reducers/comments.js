import { BY_PARENT, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, VOTE_COMMENT } from '../utils/constants';

const initialState = []

const comments = (state = initialState, action) => {
  const { comments, comment } = action;
  let newState = [];

  switch (action.type) {
    case BY_PARENT:
      newState = state.filter(st => {
        const alreadyInArray = comments.find(comment => comment.id === st.id)
        return alreadyInArray === undefined
      })

      return [
        ...newState,
        ...comments
      ];
    case ADD_COMMENT:
      return [
        ...state,
        comment
      ]
    case EDIT_COMMENT:
      state.map(st => {
        if (st.id === comment.id) {
          st.body = comment.body;
          st.timestamp = comment.timestamp;
        }

        return st;
      });
      return [
        ...state
      ]
    case DELETE_COMMENT:
      newState = state.filter(st => st.id !== comment.id);
      return newState;
    case VOTE_COMMENT:
      state.map(st => {
        if (st.id === comment.id) {
          st.voteScore = comment.voteScore
        }

        return st;
      });

      return [
        ...state
      ];
    default:
      return state;
  }
}

export default comments;
