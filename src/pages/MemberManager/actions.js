import { Message } from '@alifd/next';
import {
  lists,
  add,
} from '../../api/member';

export const ADD = 'ADD';
export const LIST = 'LIST';

export const memberAdd = (params) => async (dispatch) => {
  const { data, status, info } = await add(params);
  if (status) {
    dispatch({ type: ADD, payload: data });
  } else {
    Message.error(info);
  }
};

export const memberList = (params) => async dispatch => {
  const { data, info, status } = await lists(params);
  if (status) {
    dispatch({ type: LIST, payload: data });
  } else {
    Message.error(info);
  }
};
