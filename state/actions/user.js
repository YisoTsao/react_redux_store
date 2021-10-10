import { constant_cleanUser, constant_editUser } from "../constant/index";

export const changeUser = (user) => {
  return (dispatch) => {
    dispatch(edit(user));
  };
};

export const cleanUser = (user) => {
  return (dispatch) => {
    dispatch(clean(user));
  };
};

function clean(user) {
  return { type: constant_cleanUser, user };
}

function edit(user) {
  return { type: constant_editUser, user };
}
