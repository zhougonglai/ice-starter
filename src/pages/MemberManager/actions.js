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

const overdue = (dispatch, message) => {
  dispatch({ type: LOADING, payload: false });
  Message.warning(message);
  reloadAuthorized();
  dispatch(push('/user/login'));
};

export const memberAdd = (params) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  const { data, status, info } = await add(params);
  if (status) {
    dispatch({ type: ADD, payload: data });
    dispatch({ type: LOADING, payload: false });
  } else {
    overdue(dispatch, info);
  }
  return { data, info, status };
};

export const memberModel = params => async dispatch => {
  dispatch({ type: LOADING, payload: true });
  const { data, status, info } = await viewModel(params);
  if (status) {
    dispatch({ type: VIEW_MODEL, payload: data });
    dispatch({ type: LOADING, payload: false });
  } else {
    overdue(dispatch, info);
  }
  return { data, info, status };
};

export const memberList = (params) => async dispatch => {
  dispatch({ type: LOADING, payload: true });
  const { data, info, status } = await lists(params);
  if (status) {
    dispatch({ type: LIST, payload: data });
    dispatch({ type: LOADING, payload: false });
  } else {
    overdue(dispatch, info);
  }
  return { data, info, status };
};
