import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants/index';
import qs from 'query-string';

const url = 'tasks';

export const getList = (params) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addTask = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateTask = (data, taskid) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${taskid}`, data);
};

export const deleteTask = (taskid) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${taskid}`);
};
