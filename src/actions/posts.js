import * as APIPosts from '../api/posts';
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

export const getAll = (posts) => {
  return {
    type: ALL_POSTS,
    posts
  }
};

export const fetchAll = () => dispatch =>
  APIPosts.getAll()
    .then(posts => dispatch(getAll(posts)));


export const getByCategory = posts => ({
  type: BY_CATEGORY_POSTS,
  posts
});

export const fetchByCategory = category => dispatch =>
  APIPosts.getByCategory(category)
    .then(posts => dispatch(getByCategory(posts)));

export const add = post => ({
  type: ADD_POST,
  post
});

export const postNew = post => dispatch =>
  APIPosts.add(post)
    .then(post => dispatch(add(post)));

const edit = post => ({
  type: EDIT_POST,
  post
});

export const postEdit = post => dispatch =>
  APIPosts.edit(post.id, post)
    .then(post => dispatch(edit(post)));

const disable = id => ({
  type: DISABLE_POST,
  id
});

export const postDisable = id => dispatch =>
  APIPosts.disable(id)
    .then(() => dispatch(disable(id)));

export const orderVotedUp = posts => ({
  type: ORDER_VOTED_UP,
  posts
});

export const orderVotedDown = posts => ({
  type: ORDER_VOTED_DOWN,
  posts
});

export const orderCreatedFirst = posts => ({
  type: ORDER_CREATED_FIRST,
  posts
});

export const orderCreatedLast = posts => ({
  type: ORDER_CREATED_LAST,
  posts
});

const vote = post => ({
  type: VOTE_POST,
  post
});

export const postVote = (id, option) => dispatch =>
  APIPosts.vote(id, option)
    .then((post) => dispatch(vote(post)));

export const increaseComments = id => ({
  type: INCREASE_COMMENTS_POST,
  id
});

export const decreaseComments = id => ({
  type: DECREASE_COMMENTS_POST,
  id
});
