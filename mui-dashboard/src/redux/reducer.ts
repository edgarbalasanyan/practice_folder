import { Action, DataActionTypes, DataType, StateType } from "./types";

const initialState: StateType = {
  data: [],
  loading: false,
  error: null,
};
const editUser = (editedFields: Omit<DataType, "id" | "showSettings">) => {};
// const deleteUser = (users)=>users.filter((user)=>user.id!==isAction.payload)
const dataReducer = (state = initialState, action: Action): StateType => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA:
      console.log("fetching data");
      return { loading: true, error: null, data: [] };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      console.log("data fetched successfully");
      return { loading: false, error: null, data: action.payload };
    case DataActionTypes.FETCH_DATA_FAILURE:
      console.log("failure to fetch data");
      return { loading: false, error: action.payload, data: [] };

    case DataActionTypes.DELETE_USER:
      console.log(`user with id:${action.payload} is deleted`);
      const filtered = state.data.filter((user) => user.id !== action.payload);
      return { ...state, data: filtered };

    case DataActionTypes.EDIT_USER:
      console.log("editing");
      return {
        ...state,
        data: state.data.map((user) => {
          if (user.id === action.payload.id) {
            return { ...user, ...action.payload.editedFields }
          }
          return user
        }),
      };
    default:
      return state;
  }
};
export default dataReducer;
