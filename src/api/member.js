import request from '../utils/request';

export const lists = params =>
  request.get('/Outsource/Student/lists', params);

export const add = params =>
  request.auth('/Outsource/Student/add', params);

export const viewModel = params =>
  request.auth('/Outsource/Student/viewModel', params);
