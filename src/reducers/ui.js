import * as uitypes from '../constants/typesUi';

const notestate = {
  showloading: false,
  showsidebar: true,
};

const uireducer = (state = notestate, action) => {
  switch (action.type) {
    case uitypes.SHOW_LOADING:
      return { ...state, showloading: true };
    case uitypes.HIDE_LOADING:
      return { ...state, showloading: false };
    case uitypes.SHOW_SIDEBAR:
      return { ...state, showsidebar: true };
    case uitypes.HIDE_SIDEBAR:
      return { ...state, showsidebar: false };
    default:
      return state;
  }
};

export default uireducer;
