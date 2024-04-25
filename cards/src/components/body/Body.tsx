import { useSelector } from "react-redux";
import Card from "../card/Card";
import "./Body.css";
import {
  selectAllCards,
  selectSearchedCards,
} from "../../features/cards/cardsSelectors";
import { selectInput } from "../../features/searchedInput/searchSlice";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  fetchAllCards,
  fetchByInput,
  fetchCardsToShow,
} from "../../features/cards/cardsSlice";

const Body = () => {
  const search = useSelector(selectInput);
  const cards = useSelector(selectAllCards);
  const searchedCards = useAppSelector(selectSearchedCards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !cards.length && dispatch(fetchAllCards());
    !cards.length && dispatch(fetchCardsToShow());
    let id = setTimeout(() => {
      dispatch(fetchByInput(search));
    }, 1000);
    return () => clearTimeout(id);
  }, [cards, dispatch, search]);

  const loadMore = () => {
    dispatch(fetchCardsToShow(cards.length));
  };
  const f = () => {
    if (search.trim()) {
      return searchedCards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            logo={card.logo}
            title={card.title}
          ></Card>
        );
      });
    } else {
      return cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            logo={card.logo}
            title={card.title}
          ></Card>
        );
      });
    }
  };
  return (
    <>
      <div className="body-container">{f()}</div>
      <Footer onLoadMore={loadMore} />
    </>
  );
};

export default Body;
