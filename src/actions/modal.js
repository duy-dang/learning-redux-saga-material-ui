import * as modaltypes from '../constants/typesModal';

export const showform = () => {
  return {
    type: modaltypes.SHOW_FORM,
  };
};

export const hideform = () => {
  return {
    type: modaltypes.HIDE_FORM,
  };
};

export const changemodaltitle = (title) => {
  return {
    type: modaltypes.CHANGE_MODAL_TITLE,
    payload: {
      title,
    },
  };
};

export const changemodalcontent = (component) => {
  return {
    type: modaltypes.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    },
  };
};
