import { useState } from "react";
import "./Modal.css";
import { useAppDispatch } from "../../app/store";
import { add } from "../../features/cards/cardsSlice";

const Modal = ({ onClose }: any) => {
  const [title, setTitle] = useState("");
  const [logo, setLogo] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const dispatch = useAppDispatch();

  const checkTitle = (name: string) => { 
    if (name.trim()) {
      name = name.trim();
      for (let i = 0; i < name.length; i++) {
        if (
          (name[i] <= "a" || name[i] >= "z") &&
          (name[i] <= "A" || name[i] >= "Z") &&
          name[i] !== " "
        ) {
          return false; // not valid name
        }
      }
      return true // valid name
    }
    return false; // not valid name
  };
  const checkURL = (url: string) => {
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      return false;
    }
    for (let i = 0; i < url.length; i++) {
      if (url[i] === " ") {
        return false;
      }
    }
    return true;
  };
  const onAdd = (title: string, logo: string) => {
    if(!checkTitle(title)){
      setTitleError(true);
    }
    if(!checkURL(logo)){
      setLogoError(true);
    }
    if (checkTitle(title) && checkURL(logo)) {
      onClose();
      dispatch(add({ logo, title }));
      setLogo("");
      setTitle("");
    }
  };

  return (
    <div className="modal-container" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <label htmlFor="title">Organization Name</label>
        <div className="input-container">
          <input
            type="text"
            value={title}
            id={"title"}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          {titleError && !title && <div className="warning">*Organization name is required</div>}
          {!checkTitle(title) && titleError && title &&  <div className="warning">*Inapropriate name</div>}
        </div>
        <label htmlFor="logo">Logo URL</label>
        <div className="input-container">
          <input
            type="text"
            value={logo}
            id={"logo"}
            onChange={(e) => {
              setLogo(e.target.value);
            }}
          ></input>
          { logoError && !logo && (
            <div className="warning">*Logo URL is required</div>
          )}
          {logo && !checkURL(logo) && (
            <div className="warning">*Inapropriate URL</div>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            onAdd(title, logo);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Modal;
