import { Settings as SettingsIcon } from "lucide-react";
import "./Card.css";
import { useState } from "react";
import Settings from "../settings/Settings";
import { useOutsideClick } from "../../hooks/useOutSideClick";

const Card = ({
  logo,
  title,
  id,
}: {
  logo: string;
  title: string;
  id: string;
}) => {
  const [openSettings, setOpenSettings] = useState(false);
  const ref = useOutsideClick(() => {
    setOpenSettings(false);
  });
  return (
    <div className="card-container">
      <div className="title-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h3 className="title">{title}</h3>
        <div ref={ref}>
          <SettingsIcon
            className="settings-icon"
            onClick={(e) => {
              e.preventDefault();
              setOpenSettings((prev) => !prev);
            }}
          />
          {openSettings && (
            <Settings
              id={id}
              openSettings={openSettings}
              setOpenSettings={setOpenSettings}
            />
          )}
        </div>
      </div>
      <div className="card-body-container">
        <h4>Licenses</h4>
        <div className="lists">
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
  );
};

export default Card;
