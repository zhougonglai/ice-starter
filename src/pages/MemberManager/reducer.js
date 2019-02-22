import {
  ADD,
  LIST,
} from './actions';

const initaState = {
  model: [],
  lists: [],
  total: 0,
};

export default (state = initaState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state };
    case LIST:
      const { list, total } = action.payload;
      return {
        ...state,
        lists: state.lists.concat(list),
        total,
      };
    default:
      return state;
  }
};
