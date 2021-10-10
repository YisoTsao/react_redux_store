const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "editUser":
      return action.user;
    case "cleanUser":
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
