import store from "./store";

export enum DataActionTypes {
  FETCH_DATA = "FETCH_DATA",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE",
  DELETE_USER = "DELETE_USER",
  EDIT_USER = "EDIT_USER",
  ADD_USER = "ADD_USER",
}
export interface DataType {
  id:number
  name: string;
  username: string;
  email: string;
  address: {
    city:string
  };
  phone: string;
  showSettings: boolean;
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch;

interface DeleteUser {
  type: DataActionTypes.DELETE_USER;
  payload: number
}
interface EditUser {
  type: DataActionTypes.EDIT_USER;
  payload: {
    id:number,
    editedFields:Omit<DataType,"id"|"showSettings">
  }
}
interface FetchDataAction {
  type: DataActionTypes.FETCH_DATA;
}
interface FetchDataSuccessAction {
  type: DataActionTypes.FETCH_DATA_SUCCESS;
  payload: any[];
}
interface FetchDataFailureAction {
  type: DataActionTypes.FETCH_DATA_FAILURE;
  payload: string;
}
export type Action =
  | FetchDataAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | DeleteUser
  | EditUser

export interface StateType {
  data: DataType[];
  loading: boolean;
  error: string | null;
}
