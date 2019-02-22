import { push } from 'react-router-redux';
import { Message } from '@alifd/next';

import { reloadAuthorized } from '../../utils/Authorized';

const overdue = dispatch => {
  Message.warning('凭证失效');
  reloadAuthorized();
  dispatch(push('/user/login'));
};

export const userProfile = () => async dispatch => {
  if ('Token' in sessionStorage) {
    console.log('update');
  } else {
    overdue(dispatch);
  }
};
