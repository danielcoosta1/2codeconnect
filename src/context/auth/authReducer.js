export const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          usuario: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          usuario: null,
        };
      default:
        return state;
    }
  };
  