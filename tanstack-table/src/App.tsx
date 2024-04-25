import { useMemo } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { ColumnDef } from "@tanstack/react-table";
import { useGetTeamsQuery } from "./store/eSports";

type Team = {
  won: number;
  lost: number;
};

function App() {
  const teams = useGetTeamsQuery();
  // const newData = structuredClone(teams.data)
  // newData?.sort((team1,team2)=>team2.won-team1.won)
  const newData = [
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
    {
      name: "name",
      won: 2,
      lost: 5,
    },
  ];
  const cols = useMemo<ColumnDef<Team>[]>(
    () => [
      {
        header: "Place",
        cell: (row) => {
          return row.row.index + 1;
        },
        accessorKey: "place",
      },
      {
        header: "Name",
        cell: (row) => {
          return row.renderValue();
        },
        accessorKey: "name",
        footer: "Total",
      },
      {
        header: "Points",
        cell: (row) => {
          return row.row.original.won * 3;
        },
        accessorKey: "points",
      },
      {
        header: "Games",
        cell: (row) => row.row.original.won + row.row.original.lost,
        accessorKey: "games",
      },
      {
        header: "Won",
        cell: (row) => {
          return row.row.original.won;
        },
        accessorKey: "won",
      },
      {
        header: "Lost",
        cell: (row) => row.row.original.lost,
        accessorKey: "lost",
      },
    ],
    []
  );
  return (
    <div className="App">
      <Table<Team>
        data={newData}
        columns={cols}
        showFooter
        showNavigation
      ></Table>
    </div>
  );
}

export default App;
