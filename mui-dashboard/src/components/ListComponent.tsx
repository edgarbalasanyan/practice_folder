import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppsIcon from "@mui/icons-material/Apps";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
  const navigate = useNavigate();
  return (
    <List>
      {[
        { id: 1, icon: <AppsIcon />, text: "Mui DataGrid" },
        { id: 2, icon: <ViewComfyIcon />, text: "Table" },
      ].map((el) => (
        <ListItem key={el.id}  onClick={()=>{el.text==="Table" ? navigate("/marketplace/table"):navigate("/marketplace")}} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: true ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: true ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {el.icon}
            </ListItemIcon>
            <ListItemText primary={el.text} sx={{ opacity: true ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListComponent;
