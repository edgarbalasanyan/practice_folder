import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { RootState } from "../redux/types";
import { useEffect } from "react";
import { fetchData } from "../redux/action-creators/data";
import TableUserRow from "./TableUserRow";

export default function BasicTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: RootState) => state.data);

  useEffect(() => {
    if(!users.data.length){
      dispatch(fetchData());
    }
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{ width: "90%", margin: "6rem auto" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "600" }}>NAME</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>USERNAME</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>PHONE</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>EMAIL</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>ADDRESS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.data.map((user) => (
            <TableUserRow user={user} key={user.id}></TableUserRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
