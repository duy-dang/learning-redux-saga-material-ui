import { combineReducers } from 'redux';

import taskreducer from './task';
import uireducer from './ui';
import modalreducer from './modal';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  task: taskreducer,
  ui: uireducer,
  modal: modalreducer,
  form: formReducer,
});

export default rootReducer;
