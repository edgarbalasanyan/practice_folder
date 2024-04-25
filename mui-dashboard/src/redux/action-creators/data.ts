import { Dispatch } from "redux";
import { Action, DataActionTypes, DataType } from "../types";
import axios from "axios";

export const fetchData = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: DataActionTypes.FETCH_DATA });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: DataActionTypes.FETCH_DATA_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: DataActionTypes.FETCH_DATA_FAILURE,
        payload: "error occurred",
      });
    }
  };
};

export const deleteUser = (id: number) => {
  return {
    type: DataActionTypes.DELETE_USER,
    payload: id,
  };
};

export const editUser = (
  id: number,
  editedFields: Omit<DataType, "id" | "showSettings">
) => {
  return {
    type: DataActionTypes.EDIT_USER,
    payload: {
      id,
      editedFields,
    },
  };
};
