import { createSlice } from "@reduxjs/toolkit";

export type CoinType = {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  redditUrl: string;
  websiteUrl: string;
  twitterUrl: string;
  explorers: string[];
};
const initialState: CoinType[] = [];

export const Coins = createSlice({
  name: "coins",
  initialState,
  reducers: {},
});

export default Coins.reducer;
