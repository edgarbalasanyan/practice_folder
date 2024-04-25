import styles from "./Table.module.scss";
import typographyStyles from "../../utils/sass/typography.module.scss";
import {
  useReactTable,
  flexRender,
  // getPaginationRowModel,
  getFilteredRowModel,
  ColumnDef,
  TableOptions,
} from "@tanstack/react-table";
import classnames from "classnames";

interface ReactTableProps<T extends object> extends TableOptions<T> {
  data: T[];
  columns: ColumnDef<T>[];
  showFooter: boolean;
  showNavigation?: boolean;
}

const Table = <T extends object>({
  data,
  columns,
  ...rest
}: // showFooter = true,
// showNavigation = true,
ReactTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    state: {},
    // getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...rest,
  });

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className={classnames(
                        // styles[header.id],
                        typographyStyles.tableHeader
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className={classnames(typographyStyles.tableCell,styles[cell.column.id])}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
