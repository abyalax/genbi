import { News } from "@/services/news";
import { Table } from "@tanstack/react-table";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

export default function Pagination({ table }: { table: Table<News> }) {
  return (
    <div className="flex items-center gap-2">
      <button className=""
        aria-label="First Page"
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <FaAnglesLeft />
      </button>
      <button className=""
        aria-label="Prev Page"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <FaAngleLeft />
      </button>
      <button className=""
        aria-label="Next Page"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <FaAngleRight />
      </button>
      <button className=""
        aria-label="Last Page"
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        <FaAnglesRight />
      </button>

      <p className="text-sm">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </p>
    </div>
  );
}
