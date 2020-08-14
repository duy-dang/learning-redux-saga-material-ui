import * as uitypes from '../constants/typesUi';

export const showloading = () => {
  return {
    type: uitypes.SHOW_LOADING,
  };
};

export const hideloading = () => {
  return {
    type: uitypes.HIDE_LOADING,
  };
};

export const showsidebar = () => {
  return {
    type: uitypes.SHOW_SIDEBAR,
  };
};

export const hidesidebar = () => {
  return {
    type: uitypes.HIDE_SIDEBAR,
  };
};
