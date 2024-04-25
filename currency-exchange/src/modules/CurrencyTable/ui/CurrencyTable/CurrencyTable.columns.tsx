import { ColumnDef } from "@tanstack/react-table";
import { CoinType } from "../../../Coins/store/Coins.slice";
import styles from "./CurrencyTable.module.scss";
import typographyStyles from "../../../../utils/sass/typography.module.scss";
import classnames from "classnames";

const cols: ColumnDef<CoinType>[] = [
  {
    header: "rank",
    cell: (row) => {
      return (
        <div className={classnames(styles.rank, typographyStyles)}>
          {row.renderValue() as string}
        </div>
      );
    },
    accessorKey: "rank",
    footer: "Total",
  },
  {
    header: "name",
    cell: (row) => {
      return (
        <div className={classnames(styles.name)}>
          <img width="25px" src={row.row.original.icon}></img>
          {row.renderValue() as string}
        </div>
      );
    },
    accessorKey: "name",
  },
  {
    header: "price",
    cell: (row) => {
      return row.renderValue();
    },
    accessorKey: "price",
    footer: "Total",
  },
  {
    header: "last 1h",
    cell: (row) => {
      return row.renderValue() + "%";
    },
    accessorKey: "priceChange1h",
    footer: "Total",
  },
  {
    header: "last 24h",
    cell: (row) => {
      return row.renderValue() + "%";
    },
    accessorKey: "priceChange1d",
    footer: "Total",
  },
  {
    header: "last week",
    cell: (row) => {
      return row.renderValue() + "%";
    },
    accessorKey: "priceChange1w",
    footer: "Total",
  },
];

export default cols;
