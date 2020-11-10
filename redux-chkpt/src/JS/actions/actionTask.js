import {
    ADD_TASK,
    DELETE_TASK,
    CHECK_TASK,
    EDIT_TASK,
    TOGGLE,
  } from "../constant/actionsTypes";
  
  export const addTask = (payload) => {
    return {
      type: ADD_TASK,
      payload,
    };
  };
  
  export const deleteTask = (id) => {
    return {
      type: DELETE_TASK,
      id,
    };
  };
  
  export const checkTask = (payload) => {
    return {
      type: CHECK_TASK,
      payload,
    };
  };
  export const editTask = (id, text) => {
    return {
      type: EDIT_TASK,
      id,
      text,
    };
  };
  export const toggle = () => {
    return {
      type: TOGGLE,
    };
  };