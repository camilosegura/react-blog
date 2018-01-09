import * as APICategories from '../api/categories';
import { ALL_CATEGORIES } from '../utils/constants';

export const getAll = (categories) => {
  return {
    type: ALL_CATEGORIES,
    categories
  }
}

export const fetchAll = () => dispatch =>
  APICategories.getAll()
    .then(categories => dispatch(getAll(categories)))
