import * as toast from '../commons/error/toast';
import * as tasktypes from '../constants/typesTask';

const notestate = {
  listtasks: [],
  formTaskEdit: null,
};

const taskreducer = (state = notestate, action) => {
  switch (action.type) {
    case tasktypes.FETCH_TASK:
      return { ...state, listtasks: [] };
    case tasktypes.FETCH_TASK_SUCCESS:
      const { data } = action.payload;
      return { ...state, listtasks: data };
    case tasktypes.FETCH_TASK_FAILED:
      const { err } = action.payload;
      toast.toastError(err);
      return { ...state };
    case tasktypes.FILTER_TASK_SUCCESS:
      const { datasearch } = action.payload;
      return { ...state, listtasks: datasearch };
    case tasktypes.ADD_TASK:
      return { ...state };
    case tasktypes.ADD_TASK_SUCCESS:
      const { dataaddnew } = action.payload;
      toast.toastSuccess('Thêm công việc thành công!');
      return { ...state, listtasks: state.listtasks.concat([dataaddnew]) };
    case tasktypes.ADD_TASK_FAILED:
      const { erraddnew } = action.payload;
      toast.toastError(erraddnew);
      return { ...state };
    case tasktypes.EDIT_TASK:
      const { dataedit } = action.payload;
      return { ...state, formTaskEdit: dataedit };
    case tasktypes.UPDATE_TASK:
      return { ...state };
    case tasktypes.UPDATE_TASK_SUCCESS:
      const { dataupdate } = action.payload;
      const { listtasks } = state;
      const index = listtasks.findIndex((item) => item.id === dataupdate.id);
      if (index !== -1) {
        const newList = [
          ...listtasks.slice(0, index),
          dataupdate,
          ...listtasks.slice(index + 1),
        ];
        toast.toastSuccess('Cập nhập công việc thành công');
        return {
          ...state,
          listtasks: newList,
          formTaskEdit: null,
        };
      }
      return { ...state };
    case tasktypes.UPDATE_TASK_FAILED:
      const { errupdate } = action.payload;
      toast.toastError(errupdate);
      return { ...state };
    case tasktypes.DELETE_TASK:
      return { ...state };
    case tasktypes.DELETE_TASK_SUCCESS:
      const { iddelete } = action.payload;
      toast.toastSuccess('Xóa công việc thành công');
      return {
        ...state,
        listtasks: state.listtasks.filter((item) => item.id !== iddelete),
      };
    case tasktypes.DELETE_TASK_FAILED:
      const { errdelete } = action.payload;
      toast.toastError(errdelete);
      return { ...state };
    default:
      return state;
  }
};

export default taskreducer;
