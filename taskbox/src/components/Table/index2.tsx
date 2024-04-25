import {
  ColumnDef,
  PaginationState,
  Row,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { Fragment, useEffect, useState } from "react";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  pageIndex?: number;
  pageSize?: number;
  showNavigation?: boolean;
  pageCount?: number;
  onPaginationChange?: (pagination: PaginationState) => void;
  className?: string;
}

const Table = <T extends object>({
  data,
  columns,
  pageCount,
  onPaginationChange,
  className,
  showNavigation = false,
  renderSubComponent,
  ...props
}: ReactTableProps<T>) => {
  // const [pagination, setPagination] = useState<PaginationState>({
  //   pageIndex: props.pageIndex ?? 0,
  //   pageSize: props.pageSize ?? 15,
  // });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount,
    // state: {
    //   pagination,
    // },
    // onPaginationChange: setPagination,
  });

  // useEffect(() => {
  //   if (onPaginationChange) {
  //     onPaginationChange(pagination);
  //   }
  // }, [pagination, onPaginationChange]);
  return (
    <div className="flex flex-col">
      <div
        className="overflow-hidden p-1"
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <table
          className={classNames(`Table min-w-full`, className)}
          style={{
            border: "1px solid black",
            // borderCollapse: "separate",
          }}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      border: "1px solid black",
                      backgroundColor: "aliceblue",
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext() || "-"
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <Fragment key={row.id}>
                <tr>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        style={{
                          padding: "20px",
                          border: "1px solid black",
                          width: cell.column.getSize(),
                        }}
                        key={cell.id}
                      >
                        {cell.row.getValue(cell.column.id) || "-"}
                      </td>
                    );
                  })}
                </tr>

                {renderSubComponent ? (
                  <tr key={row.id + "-expanded"}>
                    <td colSpan={columns.length}>
                      {renderSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{
                      padding: "20px",
                      border: "1px solid black",
                      backgroundColor: "aliceblue",
                    }}
                  >
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
        </table>
        {showNavigation ? (
          <>
            {/* <button
              className="navigate-page"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="navigate-page"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"previous"}
            </button>
            <button
              className="navigate-page"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {"next"}
            </button>
            <button
              className="navigate-page"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button> */}
            <div className={"pagination-container"}>
              {/* <span
                className={`${"page-info"} flex cursor-pointer items-center gap-1`}
              >
                <div>Page</div>
                <strong>
                  {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
                </strong>
              </span> */}

              <span className={`${"go-to-page"} flex items-center gap-1`}>
                | Go to page:
                <input
                  type="number"
                  min={1}
                  max={table.getPageCount()}
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    table.setPageIndex(page);
                  }}
                  className={"page-input"}
                />
              </span>

              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
                className={"page-size-select"}
              >
                {[2, 4, 6].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Table;
