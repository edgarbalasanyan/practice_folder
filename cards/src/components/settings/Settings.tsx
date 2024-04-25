import { useAppDispatch } from "../../app/store";
import { remove } from "../../features/cards/cardsSlice";
import "./Settings.css";
import { Link } from "react-router-dom";

const Settings = ({
  id,
}: {
  id: string;
  openSettings: boolean;
  setOpenSettings: (param: boolean) => void;
}) => {
  const dispatch = useAppDispatch();


  return (
    <div className="settings-container">
      <ul className="settings-list">
        <li>Edit</li>
        <li>
          <Link to={`/organization/${id}`} className="link">
            Go To Organization
          </Link>
        </li>
        <li
          onClick={() => {
            dispatch(remove(id));
          }}
        >
          Delete organization
        </li>
      </ul>
    </div>
  );
};

export default Settings;
