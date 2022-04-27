const initialState = {
  isShow: false,
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case "ShowModal":
      return {
        ...state,
        isShow: true,
      };
    case "HideModal":
      return {
        ...state,
        isShow: false,
      };
    default:
      return state;
  }
}

export default modalReducer;