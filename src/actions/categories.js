import * as APICategories from '../api/categories';

export const ALL_CATEGORIES = 'ALL_CATEGORIES';

export const getAll = (categories) => {
  return {
    type: ALL_CATEGORIES,
    categories
  }
}

export const fetchAll = () => dispatch => 
  APICategories.getAll()
    .then(categories => dispatch(getAll(categories)))
