import { RootType } from "../../app/store";

export const selectAllCards = (state: RootType) => state.cards.cards;
export const selectCard = (state: RootType) => state.cards.card;
export const selectLength = (state:RootType)=> state.cards.length;
export const selectSearchedCards = (state:RootType)=> state.cards.searchedCards;