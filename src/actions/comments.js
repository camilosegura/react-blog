import * as APIComments from '../api/comments';
import { BY_PARENT, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, VOTE_COMMENT } from '../utils/constants';

export const getByParent = (comments) => ({
  type: BY_PARENT,
  comments
});

export const fetchByParent = id => dispatch =>
    APIComments.getByParent(id)
        .then(comments => dispatch(getByParent(comments)))

export const add = comment => ({
  type: ADD_COMMENT,
  comment
});

export const addByParent = body => dispatch =>
  APIComments.add(body)
    .then(res => res.json())
    .then(comment => dispatch(add(comment)))

export const edit = comment => ({
  type: EDIT_COMMENT,
  comment
});

export const editById = (id, comment) => dispatch =>
  APIComments.edit(id, comment)
    .then(res => res.json())
    .then(comment => dispatch(edit(comment)))

export const disable = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const disableById = id => dispatch =>
  APIComments.disable(id)
    .then(res =>  res.json())
    .then(comment => dispatch(disable(comment)))

export const vote = comment => ({
  type: VOTE_COMMENT,
  comment
});

export const voteById = (id, option) => dispatch =>
  APIComments.vote(id, option)
    .then(res =>  res.json())
    .then(comment => dispatch(vote(comment)));
