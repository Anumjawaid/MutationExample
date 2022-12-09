import { ADD_USER,LOGIN,ADD_EMPLOYEE,CURRENT_USER } from "./actions";
const initialState = {
    users:[],
    isloggedIn:false,
    currentuser:[],
    employees:[]
  };
  function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_USER:
      return {
            ...initialState,users:[...state.users,action.payload]
      };
      case ADD_EMPLOYEE:
      return {
            ...initialState,employees:[...state.employees,action.payload]
      };
    case LOGIN:
      return {
        ...initialState, isloggedIn:action.payload
      };
      case CURRENT_USER:
      return {
        ...initialState, currentuser:[...state.currentuser,action.payload]
      };
    default:
      return state;
    }
  }
  export default reducer;
  