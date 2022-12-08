import { ADD_USER,LOGIN } from "./actions";
const initialState = {
    users:[],
    isloggedIn:false,
    currentuser:[]
  };
  function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_USER:
      return {
            ...initialState,users:[...state.users,action.payload]
      };
    case LOGIN:
      return {
        ...initialState, isloggedIn:action.payload
      };
    default:
      return state;
    }
  }
  export default reducer;
  