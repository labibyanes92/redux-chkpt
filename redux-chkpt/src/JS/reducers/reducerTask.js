import {
    ADD_TASK,
    DELETE_TASK,
    CHECK_TASK,
    EDIT_TASK,
    TOGGLE,
  } from "../constant/actionsTypes";
  
  const intialState = {
    list: [],
    filtred: false,
  };
  
  const reducerTask = (state = intialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return { ...state, list: [...state.list, action.payload] };
      case DELETE_TASK:
        return {
          ...state,
          list: state.list.filter((item) => item.id !== action.id),
        };
  
      case CHECK_TASK:
        return {
          ...state,
          list: state.list.map((el) =>
            el.id === action.payload.id ? { ...el, isDone: !el.isDone } : el
          ),
        };
      case EDIT_TASK:
        return {
          ...state,
          list: state.list.map((el) =>
            el.id === action.id ? { ...el, text: action.text } : el
          ),
        };
      case TOGGLE:
        return {
          ...state,
          filtred: !state.filtred,
        };
      default:
        return state;
    }
  };
  
  export default reducerTask;