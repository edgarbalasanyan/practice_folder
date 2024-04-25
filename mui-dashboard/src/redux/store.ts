import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import dataReducer from "./reducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DispatchFunc, RootState } from "./types";


export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const store = createStore(
    combineReducers({
        data:dataReducer
    }),
    {},
    applyMiddleware(thunk)
)
export default store 