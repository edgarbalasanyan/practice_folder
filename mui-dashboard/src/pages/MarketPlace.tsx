import { Box } from "@mui/material";
import TempNavigation from "../components/TempNavigation";
import BasicTable from "../components/BasicTable";
import { Outlet, Route, Routes } from "react-router-dom";

const MarketPlace = () => {
  return (
    <Box>
      <TempNavigation></TempNavigation>
      <Outlet />
    </Box>
  );
};

export default MarketPlace;
