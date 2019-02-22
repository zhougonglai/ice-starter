import { push } from 'react-router-redux';
import { Message } from '@alifd/next';

import { reloadAuthorized } from '../../utils/Authorized';
import { login } from '../../api/user';

const USER_PROFILE = 'USER_PROFILE';

export const userProfile = () => async dispatch => {
  if ('PasswordCredential' in sessionStorage) {
    const { data, status, info } = await login(JSON.parse(sessionStorage.PasswordCredential));
    if (status) {
      dispatch({ type: USER_PROFILE, payload: data });
    } else {
      Message.error(info);
    }
  } else {
    Message.success('已登出');
    reloadAuthorized();
    dispatch(push('/user/login'));
  }
};
