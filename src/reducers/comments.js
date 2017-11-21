import { BY_PARENT } from '../actions/comments';

const initialState = []

const comments = (state = initialState, action) => {
    const { comments } = action;
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
        default :
            return state;
    }
}

export default comments;