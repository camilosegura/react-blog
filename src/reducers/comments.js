import { BY_PARENT, ADD, EDIT, DELETE, VOTE_COMMENT } from '../actions/comments';

const initialState = []

const comments = (state = initialState, action) => {
    const { comments, comment } = action;
    switch (action.type) {
        case BY_PARENT :

            const filteredState = state.filter(st => {
                const alreadyInArray = comments.find(comment => comment.id === st.id)
                return alreadyInArray === undefined
            })

            return [
                ...filteredState,
                ...comments
            ];
        case ADD :
            return [
                ...state,
                comment
            ]
        case EDIT :
            const newState = state.map(st => {
                if (st.id === comment.id) {
                    st.body = comment.body;
                    st.timestamp = comment.timestamp;
                }

                return st;
            });
            return newState
        case DELETE :
            const actives = state.filter(st => st.id !== comment.id);
            return actives;
        case VOTE_COMMENT :
          state.map(st => {
              if (st.id === comment.id) {
                st.voteScore = comment.voteScore
              }

              return st;
          });

          return [
            ...state
          ];
        default :
            return state;
    }
}

export default comments;
