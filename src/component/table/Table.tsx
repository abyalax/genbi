import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { fuzzyFilter, reorder } from "./Table.utils";
import { News } from "@/services/news";
import { useTableData } from "./useTableData";
import { TableHeader } from "./TableHeader";
import RowDetailView from "./RowDetail";
import Pagination from "./Pagination";
import dynamic from "next/dynamic";
import { Fragment, useEffect } from "react";
import { ColumnVisibilitySelector } from "./ColumnVisibility";

const Droppable = dynamic(
  () => import('react-beautiful-dnd').then((mod) => mod.Droppable),
  { ssr: false }
);
const DragDropContext = dynamic(
  () => import('react-beautiful-dnd').then((mod) => mod.DragDropContext),
  { ssr: false }
);

const Table = ({ news }: { news: News[] }) => {
  const { columns, data, setData, initialColumnVisibility, columnIds } = useTableData();

  useEffect(() => {
    setData(news);
    return () => {

    };
  }, [news, setData]);

  const table = useReactTable<News>({
    data: news,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: { fuzzy: fuzzyFilter },
    globalFilterFn: fuzzyFilter,
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
    getRowCanExpand: () => true,
    initialState: {
      columnVisibility: initialColumnVisibility,
      columnOrder: columnIds,
    },
  });
  return (
    <main className="">

      <div className="flex items-center">
        <ColumnVisibilitySelector table={table} columnIds={columnIds} />
        <input className="ml-2 w-96 px-3 py-2 rounded ring-0 focus:outline-none"
          onChange={(e) => table.setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>

      <div className="bg-white border-2 border-slate-200 h-fit w-fit rounded-xl m-1">
        <table className="min-w-[1500px] rounded-lg overflow-hidden">
          <DragDropContext onDragEnd={({ destination, source }) => {
            if (!destination) {
              return;
            }
            const items = reorder(
              table.getState().columnOrder,
              source.index,
              destination.index
            );
            table.setColumnOrder(items);
          }}>

            <thead className="bg-[#f5f6fa] p-4">
              {table.getHeaderGroups().map((headerGroup, i) => (
                <Droppable key={headerGroup.id} droppableId={"header"} direction="horizontal" type="column">
                  {(provided) => (
                    <tr key={`${headerGroup.id}-${i}`} {...provided.droppableProps} ref={provided.innerRef} className="p-4">
                      {headerGroup.headers.map((header, index) => (
                        <TableHeader key={header.id} header={header} index={index} />
                      ))}
                      {provided.placeholder}
                    </tr>
                  )}
                </Droppable>
              ))}
            </thead>
          </DragDropContext>


          <tbody className="rounded-xl overflow-x-auto">
            {table.getRowModel().rows.map((news) => (

              <Fragment key={news.id}>
                <tr className="p-4 overflow-x-scroll h-fit " style={{ background: news.getIsSelected() ? "#21A4A4" : "white", color: news.getIsSelected() ? "white" : "black" }}>

                  {news.getVisibleCells().map((cell) => (

                    <td key={cell.id} className="p-3 text-nowrap border-r border-slate-200">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>

                  ))}

                </tr>

                {news.getIsExpanded() && (
                  <tr>
                    <td colSpan={news.getVisibleCells().length}>
                      <RowDetailView news={news.original} />
                    </td>
                  </tr>
                )}
              </Fragment>

            ))}
          </tbody>

          <tfoot>
            {table.getFooterGroups().map((footerGroup) => {
              return (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((footer) => {
                    return (
                      <td key={footer.id}>
                        {footer.isPlaceholder
                          ? null
                          : flexRender(
                            footer.column.columnDef.footer,
                            footer.getContext()
                          )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tfoot>

        </table>
      </div>
      <div>
        <Pagination table={table} />
      </div>
    </main>
  )
}

export default Table