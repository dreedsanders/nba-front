
const initialState = {
  logged_in: false,
  errormsg: "",
  current_user: {},
  users: {},
  created: false,
  signIn: false,
  create_user: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        created: true,
      };
    case "FAILED":
      return {
        ...state,
        errormsg: action.errormsg,
      };
    case "SIGN_IN":
      return {
        ...state,
        logged_in: true,
        current_user: action.current_user,
        errormsg: action.errormsg,
      };
    case "SIGN_OUT":
      return {
        initialState,
      };
    case "EDIT":
      return {
        ...state,
        current_user: action.current_user,
      };
    case "USERS":
      return {
        ...state,
        users: action.users,
      };
    case "HALL":
      return {
        ...state,
        hall: true,
      };
    case "SIGN":
      return {
        ...state,
        signIn: true,
        create_user: false
      };
    case "CREATE":
      return {
        ...state,
        create_user: true,
        signIn: false
      };
    case "DELETE":
      return state;
    default:
      return state;
  }
};
export default userReducer;
