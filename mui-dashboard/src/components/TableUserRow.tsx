import { TableCell } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import Settings from "./Settings";
import { DataType } from "../redux/types";
import { useState } from "react";
import { useOutsideClick } from "../hooks/useOutSideClick";

const TableUserRow = ({ user }: { user: DataType }) => {
  const [showSettings, setShowSettings] = useState(false);
  const ref = useOutsideClick(() => {
    setShowSettings(false);
  });
  return (
    <TableRow
      sx={{
        position: "relative",
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell sx={{ color: "grey" }}>{user.name}</TableCell>
      <TableCell sx={{ color: "grey" }}>{user.username}</TableCell>
      <TableCell sx={{ color: "grey" }}>{user.phone}</TableCell>
      <TableCell sx={{ color: "grey" }}>{user.email}</TableCell>
      <TableCell sx={{ color: "grey" }}>{user.address.city}</TableCell>
      <TableCell sx={{ color: "grey" }} ref={ref}>
        <Settings user={user} />
      </TableCell>
    </TableRow>
  );
};

export default TableUserRow;
