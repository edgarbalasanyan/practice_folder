import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cardsReducer from "../features/cards/cardsSlice";
import searchReducer from "../features/searchedInput/searchSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    search: searchReducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
