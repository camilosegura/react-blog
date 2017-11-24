import { BY_PARENT, ADD, EDIT } from '../actions/comments';

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
        default :
            return state;
    }
}

export default comments;