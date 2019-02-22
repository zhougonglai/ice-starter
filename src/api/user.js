import request from '../utils/request';

export const login = params =>
  request.post('/Outsource/Index/login', params);
