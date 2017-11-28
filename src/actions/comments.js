import * as APIComments from '../api/comments';

export const BY_PARENT = "BY_PARENT";
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';

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