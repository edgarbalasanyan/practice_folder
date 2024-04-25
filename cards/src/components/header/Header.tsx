import "./Header.css";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { selectLength, } from "../../features/cards/cardsSelectors";
import { useState } from "react";
import Modal from "../modal/Modal";
import {
  selectInput,
  setSearchInput,
} from "../../features/searchedInput/searchSlice";

const Header = () => {
  const allCardsLength = useAppSelector(selectLength);
  const [showModal, setShowModal] = useState(false);
  const search = useAppSelector(selectInput);
  const dispatch = useAppDispatch();
  return (
    <>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      <div className="header">
        <h2>All organizations({allCardsLength})</h2>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search organization"
            value={search}
            onChange={(e) => {
              dispatch(setSearchInput(e.target.value));
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          Add new organization
        </button>
      </div>
    </>
  );
};
export default Header;
