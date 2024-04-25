import { useEffect } from "react";
import { useLazyGetCoinsQuery } from "../../../../store/cryptoApi";
import Table from "../../../../components/Table/Table";
// import { CoinType } from "../../../Coins/store/Coins.slice";
import { getCoreRowModel } from "@tanstack/react-table";
// import { CoinType } from "../../../Coins/store/Coins.slice";
import cols from "./CurrencyTable.columns";
import styles from "./CurrencyTable.module.scss";
const CurrencyTable = () => {
  const [getCoins, { data }] = useLazyGetCoinsQuery();
  console.log("data", data);

  useEffect(() => {
    getCoins("").then((res) => res.data.result);
  }, [getCoins]);

  return (
    <div className={styles.currencyTable}>
      {data && (
        <Table
          data={data.result}
          columns={cols}
          showFooter={true}
          getCoreRowModel={getCoreRowModel()}
        />
      )}
    </div>
  );
};

export default CurrencyTable;
