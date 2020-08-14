import * as taskApis from '../apis/task';
import * as tasktypes from '../constants/typesTask';

export const fetchListTask = (params = {}) => {
  return {
    type: tasktypes.FETCH_TASK,
    payload: {
      params,
    },
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: tasktypes.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskErr = (err) => {
  return {
    type: tasktypes.FETCH_TASK_FAILED,
    payload: {
      err,
    },
  };
};

export const fetchListTaskrequest = () => {
  return (dispatch) => {
    dispatch(fetchListTask());
    taskApis
      .getList()
      .then((res) => {
        dispatch(fetchListTaskSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchListTaskErr(err));
      });
  };
};

export const filtertask = (keyword) => {
  return {
    type: tasktypes.FILTER_TASK,
    payload: {
      keyword,
    },
  };
};

export const filtertasksuccess = (datasearch) => {
  return {
    type: tasktypes.FILTER_TASK_SUCCESS,
    payload: {
      datasearch,
    },
  };
};

export const addTask = (title, description) => {
  return {
    type: tasktypes.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};

export const addTaskSuccess = (dataaddnew) => {
  return {
    type: tasktypes.ADD_TASK_SUCCESS,
    payload: {
      dataaddnew,
    },
  };
};

export const addTaskErr = (erraddnew) => {
  return {
    type: tasktypes.ADD_TASK_FAILED,
    payload: {
      erraddnew,
    },
  };
};

export const editTask = (dataedit) => {
  return {
    type: tasktypes.EDIT_TASK,
    payload: {
      dataedit,
    },
  };
};

export const updateTask = (title, description, status) => {
  return {
    type: tasktypes.UPDATE_TASK,
    payload: {
      title,
      description,
      status,
    },
  };
};

export const updateTaskSuccess = (dataupdate) => {
  return {
    type: tasktypes.UPDATE_TASK_SUCCESS,
    payload: {
      dataupdate,
    },
  };
};

export const updateTaskErr = (errupdate) => {
  return {
    type: tasktypes.UPDATE_TASK_FAILED,
    payload: {
      errupdate,
    },
  };
};

export const deleteTask = (taskid) => {
  return {
    type: tasktypes.DELETE_TASK,
    payload: {
      taskid,
    },
  };
};

export const deleteTaskSuccess = (iddelete) => {
  return {
    type: tasktypes.DELETE_TASK_SUCCESS,
    payload: {
      iddelete,
    },
  };
};

export const deleteTaskErr = (errdelete) => {
  return {
    type: tasktypes.DELETE_TASK_FAILED,
    payload: {
      errdelete,
    },
  };
};
