import request from '../utils/request';

export const lists = params =>
  request.get('/Outsource/Student/lists', params);

export const add = params =>
  request.post('/Outsource/Student/add', params);

export const viewModel = params =>
  request.post('/Outsource/Student/viewModel', params);
