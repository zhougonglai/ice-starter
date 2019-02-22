import { push } from 'react-router-redux';
import { Message } from '@alifd/next';
import { login } from '../../api/user';
import { setAuthority } from '../../utils/authority';
import { reloadAuthorized } from '../../utils/Authorized';

export const LOGIN = 'LOGIN';

export const userLogin = params => async dispatch => {
  const { data, status, info } = await login(params);
  if (status) {
    sessionStorage.Token = data.token;
    sessionStorage.PasswordCredential = JSON.stringify(params);
    dispatch({ type: LOGIN, payload: data });
    setAuthority('admin');
    reloadAuthorized();
    dispatch(push('/'));
  } else {
    Message.error(info);
  }
};
