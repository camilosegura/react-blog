import * as APIComments from '../api/comments';

export const BY_PARENT = "BY_PARENT";
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';
export const VOTE_UP = 'VOTE_UP';
export const VOTE_DOWN = 'VOTE_DOWN';

export const getByParent = (comments) => ({
  type: BY_PARENT,
  comments  
});


export const fetchByParent = id => dispatch =>
    APIComments.getByParent(id)
        .then(comments => dispatch(getByParent(comments)))

export const add = comment => ({
  type: ADD,
  comment
})

export const addByParent = body => dispatch => 
  APIComments.add(body)
    .then(res => res.json())
    .then(comment => dispatch(add(comment)))

export const edit = comment => ({
  type: EDIT,
  comment
})

export const editById = (id, comment) => dispatch => 
  APIComments.edit(id, comment)
    .then(res => res.json())
    .then(comment => dispatch(edit(comment)))

export const disable = comment => ({
  type: DELETE,
  comment
})

export const disableById = id => dispatch => 
  APIComments.disable(id)
    .then(res =>  res.json())
    .then(comment => dispatch(disable(comment)))

export const voteUp = comment => ({
  type: VOTE_UP,
  comment
})

export const voteUpById = (id, option) => dispatch => 
  APIComments.vote(id, option)
    .then(res =>  res.json())
    .then(comment => dispatch(voteUp(comment)))

export const voteDown = comment => ({
  type: VOTE_DOWN,
  comment
})

export const voteDownById = (id, option) => dispatch => 
  APIComments.vote(id, option)
    .then(res =>  res.json())
    .then(comment => dispatch(voteDown(comment)))