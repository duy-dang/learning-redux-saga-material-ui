import * as tasktypes from '../constants/typesTask';
import {
  call,
  put,
  fork,
  take,
  delay,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects';
import { getList, addTask, updateTask, deleteTask } from '../apis/task';
import { STATUS_CODE, STATUSES } from '../constants';
import {
  fetchListTaskSuccess,
  fetchListTaskErr,
  filtertasksuccess,
  addTaskSuccess,
  addTaskErr,
  fetchListTask,
  updateTaskSuccess,
  updateTaskErr,
  deleteTaskSuccess,
  deleteTaskErr,
} from '../actions/task';
import { showloading, hideloading } from '../actions/ui';
import { hideform } from '../actions/modal';

function* watchfetchTaskAction() {
  while (true) {
    const action = yield take(tasktypes.FETCH_TASK);
    yield put(showloading());
    const { params } = action.payload;
    const resp = yield call(getList, params);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskErr(data));
    }
    yield delay(500);
    yield put(hideloading());
  }
}

function* filtertasksaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask({ q: keyword }));
  // const list = yield select((state) => state.task.listtasks);
  // const filtertask = list.filter((task) =>
  //   task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  // );
  // yield put(filtertasksuccess(filtertask));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showloading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(hideform());
    yield put(addTaskSuccess(data));
  } else {
    yield put(addTaskErr(data));
  }
  yield delay(500);
  yield put(hideloading());
}

function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskid = yield select((state) => state.task.formTaskEdit.id);
  yield put(showloading());
  const resp = yield call(
    updateTask,
    {
      title,
      description,
      status,
    },
    taskid
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data));
    yield put(hideform());
  } else {
    yield put(updateTaskErr(data));
  }
  yield delay(500);
  yield put(hideloading());
}

function* deleteTaskSaga({ payload }) {
  const { taskid } = payload;
  yield put(showloading());
  const resp = yield call(deleteTask, taskid);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(taskid));
    yield put(hideform());
  } else {
    yield put(deleteTaskErr(data));
  }
  yield delay(500);
  yield put(hideloading());
}

function* rootSaga() {
  yield fork(watchfetchTaskAction);
  yield takeLatest(tasktypes.FILTER_TASK, filtertasksaga);
  yield takeEvery(tasktypes.ADD_TASK, addTaskSaga);
  yield takeLatest(tasktypes.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(tasktypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
