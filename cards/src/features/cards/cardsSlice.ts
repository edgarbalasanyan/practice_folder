import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState: {
  card: CardType;
  cards: Array<CardType>;
  searchedCards: Array<CardType>;
  length: number;
  loading: boolean;
} = {
  card: { id: "", logo: "", title: "" },
  cards: [],
  searchedCards: [],
  length: 0,
  loading: false,
};

export type CardType = {
  id: string;
  logo: string;
  title: string;
};

export const fetchAllCards = createAsyncThunk<Array<CardType>>(
  "cards/fetchAllCards",
  () => {
    return axios
      .get("http://localhost:7000/data")
      .then((response) => response.data);
  }
);
export const fetchCard = createAsyncThunk("cards/fetchCard", (id: string) => {
  return axios
    .get(`http://localhost:7000/data?id=${id}`)
    .then((response) => response.data);
});

export const fetchCardsToShow = createAsyncThunk(
  "cards/fetchCardsToShow",
  (start: number = 0) => {
    return axios
      .get(`http://localhost:7000/data?_start=${start}&_limit=6`)
      .then((response) => response.data);
  }
);

export const fetchByInput = createAsyncThunk("cards/fetchByInput", (input:string) => {
  return axios
    .get(`http://localhost:7000/data?q=${input}`)
    .then((response) => response.data);
});
export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: {
      prepare: (action: Omit<CardType, "id">) => {
        return {
          payload: {
            ...action,
            id: nanoid(),
          },
        };
      },
      reducer: (state, action: PayloadAction<CardType>) => {
        state.cards.push(action.payload);
        state.length += 1;
      },
    },
    remove: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
      state.length -= 1;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllCards.fulfilled, (state, action) => {
      state.length = action.payload.length;
      state.loading = false;
    });
    builder.addCase(fetchCard.fulfilled, (state, action) => {
      state.card = action.payload[0];
    });
    builder.addCase(fetchCardsToShow.fulfilled, (state, action) => {
      state.cards.push(...action.payload);
    });
    builder.addCase(fetchCardsToShow.pending, (state, action) => {
      console.log("pending");
    });
    builder.addCase(fetchAllCards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByInput.fulfilled,(state,action)=>{
      state.searchedCards = action.payload;
    })
  },
});
export const { add, remove } = cardsSlice.actions;
export default cardsSlice.reducer;
