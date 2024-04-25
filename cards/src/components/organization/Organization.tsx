import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectCard } from "../../features/cards/cardsSelectors";
import { useAppDispatch } from "../../app/store";
import { useEffect } from "react";
import { fetchCard } from "../../features/cards/cardsSlice";
import "./Organization.css";

const Organization = () => {
  const { id } = useParams();
  const card = useSelector(selectCard);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCard(id!));
  }, [dispatch, id]);

  return (
    <div className="organization-container">
      <div className="organization">
        <h2 className="organization-title">{card.title}</h2>
        <div className="organization-logo">
          <img src={card.logo} alt="logo" />
        </div>
        <div className="organization-body">
          <h4 className="organization-licenses">Licenses</h4>
          <div className="organization-lists">
            <ul>
              <li>
                <h5>Tracking</h5>
              </li>
              <li>In use: 1245</li>
              <li>
                Assigned: <input type="number" min={0} placeholder="0"></input>
              </li>
            </ul>
            <ul>
              <li>
                <h5>Protection</h5>
              </li>
              <li>In use: 300</li>
              <li>
                Assigned: <input min={0} type="number" placeholder="0"></input>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="button-back" onClick={() => navigate("../")}>
        Go Back
      </button>
    </div>
  );
};

export default Organization;
