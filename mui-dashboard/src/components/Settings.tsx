import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteUser, editUser } from "../redux/action-creators/data";
import { useAppDispatch } from "../redux/store";
import Edit from "./Edit";
import { DataType } from "../redux/types";

const options = ["Edit", "Delete"];
const ITEM_HEIGHT = 48;

export default function Settings({ user }: { user: DataType }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const [openEdit, setOpenEdit] = React.useState(false);
  const closeEditModal = () => setOpenEdit(false);

  const dispatch = useAppDispatch();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleManuClick = (option: string) => {
    if (option === "Delete") {
      dispatch(deleteUser(user.id));
    }
    if (option === "Edit") {
      setOpenEdit(true)
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => {
              handleManuClick(option);
            }}
          >
            {option}
          </MenuItem>
        ))}
        <Edit open={openEdit} onClose={closeEditModal} user={user}></Edit>
      </Menu>
    </div>
  );
}
