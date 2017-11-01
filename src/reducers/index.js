import { TEST } from '../actions';

const initialState = {
  test: 'Hola'
}

const blog = (state = initialState, action) => {
  const { test } = action;

  switch(action.type) {
    case TEST :
      return {
        ...state,
        test
      }
    default :
      return state;
  }
}

export default blog;
