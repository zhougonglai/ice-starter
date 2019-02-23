import { push } from 'react-router-redux';
import { Message } from '@alifd/next';

import { reloadAuthorized } from '../../utils/Authorized';
import {
  lists,
  add,
  viewModel,
} from '../../api/member';

export const ADD = 'ADD';
export const LIST = 'LIST';
export const VIEW_MODEL = 'VIEW_MODEL';
export const LOADING = 'LOADING';

const overdue = ({ code, info }, dispatch) => {
  dispatch({ type: LOADING, payload: false });
  Message.warning(info);
  if (code === 301) {
    reloadAuthorized();
    dispatch(push('/user/login'));
  }
};

export const memberAdd = (params) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  const { data, status, info, code } = await add(params);
  if (status) {
    Message.success(info);
    dispatch({ type: ADD, payload: data });
    dispatch({ type: LOADING, payload: false });
  } else {
    overdue({ data, info, status, code }, dispatch);
  }
  return { data, info, status };
};

export const memberModel = params => async dispatch => {
  dispatch({ type: LOADING, payload: true });
  const { data, status, info, code } = await viewModel(params);
  if (status) {
    dispatch({ type: VIEW_MODEL, payload: data });
    dispatch({ type: LOADING, payload: false });
  } else {
    overdue({ data, info, status, code }, dispatch);
  }
  return { data, info, status };
};

export const memberList = (params) => async dispatch => {
  dispatch({ type: LOADING, payload: true });
  const { data, info, status, code } = await lists(params);
  if (status) {
    dispatch({ type: LIST, payload: data });
    dispatch({ type: LOADING, payload: false });
  } else {
    overdue({ data, info, status, code }, dispatch);
  }
  return { data, info, status };
};
