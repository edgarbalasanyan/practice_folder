import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import type { ColumnDef } from "@tanstack/react-table";
import styles from "./Table.module.scss";
import { useState } from "react";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showFooter: boolean;
  showNavigation?: boolean;
}
const Table = <T extends object>({
  data,
  columns,
  showFooter = false,
  showNavigation = true,
}: ReactTableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });
  return (
    <div className={styles["table-container"]}>
      <div className={styles["table-wrapper"]}>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={styles[header.id]}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
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
          {showFooter ? (
              <tfoot className="border-t bg-gray-50">
                {table.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </tfoot>
            ) : null}
        </table>
      </div>
      {showNavigation ? (
        <>
          <button
            className={styles["navigate-page"]}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className={styles["navigate-page"]}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"previous"}
          </button>
          <button
            className={styles["navigate-page"]}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {"next"}
          </button>
          <button
            className={styles["navigate-page"]}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <div className={styles["pagination-container"]}>
            <span
              className={`${"page-info"} flex cursor-pointer items-center gap-1`}
            >
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </strong>
            </span>

            <span className={`${"go-to-page"} flex items-center gap-1`}>
              | Go to page:
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className={styles["page-input"]}
              />
            </span>

            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className={styles["page-size-select"]}
            >
              {[2,4,6,8].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Table;
