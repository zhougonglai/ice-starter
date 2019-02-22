import {
  ADD,
  LIST,
} from './actions';

const initaState = {
  model: [],
  lists: [],
};

export default (state = initaState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state };
    case LIST:
      return {
        ...state,
        lists: state.lists.concat(action.payload),
      };
    default:
      return state;
  }
};
