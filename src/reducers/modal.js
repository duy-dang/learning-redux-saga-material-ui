import * as modaltypes from '../constants/typesModal';

const notestate = {
  showmodal: false,
  title: '',
  component: null,
};

const modalreducer = (state = notestate, action) => {
  switch (action.type) {
    case modaltypes.SHOW_FORM:
      return { ...state, showmodal: true };
    case modaltypes.HIDE_FORM:
      return { ...state, showmodal: false, title: '', component: null };
    case modaltypes.CHANGE_MODAL_TITLE:
      const { title } = action.payload;
      return { ...state, title };
    case modaltypes.CHANGE_MODAL_CONTENT:
      const { component } = action.payload;
      return { ...state, component };
    default:
      return state;
  }
};

export default modalreducer;
