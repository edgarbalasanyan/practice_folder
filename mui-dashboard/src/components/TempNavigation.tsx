import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ListComponent from "./ListComponent";
import { Toolbar, Typography } from "@mui/material";

type Anchor = "left";

export default function TempNavigation() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListComponent />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Toolbar sx={{position:"fixed",width:"100%",top:0,backgroundColor:"aliceblue"}}>
          <MenuIcon onClick={toggleDrawer("left", true)} />
        </Toolbar>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 2,
              backgroundColor: "white",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "gray", padding: "0.5rem 2rem" }}
            >
              MATERIO
            </Typography>
          </Box>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
