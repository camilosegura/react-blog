import * as APIComments from '../api/comments';

export const BY_PARENT = "BY_PARENT";
export const ADD = 'ADD';

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
    .then(res => console.log('resp', res))