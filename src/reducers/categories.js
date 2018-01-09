import { ALL_CATEGORIES } from '../utils/constants';

const initialState = [];

const categories = (state = initialState, action) => {
  const { categories } = action;

  switch(action.type) {
    case ALL_CATEGORIES :
      return [
        ...state,
        ...categories
      ]
    default :
      return state;
  }
}

export default categories;
