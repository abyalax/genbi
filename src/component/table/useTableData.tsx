import { News } from "@/services/news";
import { createColumnHelper } from "@tanstack/react-table"
import { useMemo, useState } from "react";
import Checkbox from "../ui/checkbox";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { formatDate } from "@/utils/convert-date";

const DISPLAY_COLUMN_SIZE = 100
const columnHelper = createColumnHelper<News>();

export const useTableData = () => {
    const [data, setData] = useState<News[]>([]);

    const columns = useMemo(() => [
        columnHelper.display({
            id: "selection",
            header: ({ table }) => (
                <div className="flex justify-center items-center">
                    <Checkbox
                        checked={table.getIsAllRowsSelected()}
                        indeterminate={table.getIsSomeRowsSelected()}
                        onChange={table.getToggleAllRowsSelectedHandler()}
                        className="form-checkbox"
                    />
                </div>
            ),
            cell: ({ row }) => (
                <div className="flex justify-center items-center">
                    <Checkbox
                        onChange={row.getToggleSelectedHandler()}
                        checked={row.getIsSelected()}
                    />
                </div>
            ),
            size: DISPLAY_COLUMN_SIZE
        }),

        columnHelper.display({
            id: "expand",
            cell: ({ row }) => row.getCanExpand() ? (
                <div className="flex justify-center items-center">
                    <button className="text-xs p-1"
                        onClick={row.getToggleExpandedHandler()}>
                        {row.getIsExpanded() ? <FaMinus /> : <FaPlus />}
                    </button>
                </div>
            ) : null,
            size: DISPLAY_COLUMN_SIZE
        }),

        columnHelper.accessor("id", {
            id: "id",
            header: "Id",
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("category", {
            id: "category",
            header: "Category",
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("title", {
            id: "title",
            header: "Title",
            cell: ({ getValue }) => <div>{getValue().length > 30 ? getValue().substring(0, 30) + "..." : getValue()}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("description", {
            id: "description",
            header: "Description",
            cell: ({ getValue }) => <div className="text-justify">{getValue().length > 80 ? getValue().substring(0, 80) + "..." : getValue()}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("author_name", {
            id: "author_name",
            header: "Author",
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("date", {
            id: "date",
            header: "News Date",
            cell: ({ getValue }) => <div>{formatDate(getValue())}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("created_at", {
            id: "created_at",
            header: "Created At",
            cell: ({ getValue }) => <div>{formatDate(getValue())}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("updated_at", {
            id: "updated_at",
            header: "Updated At",
            cell: ({ getValue }) => <div>{formatDate(getValue())}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("meta_title", {
            id: "meta_title",
            header: "Meta Title",
            cell: ({ getValue }) => <div>{getValue().length > 30 ? getValue().substring(0, 30) + "..." : getValue()}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("meta_description", {
            id: "meta_description",
            header: "Meta Descripition",
            cell: ({ getValue }) => <div>{getValue().length > 80 ? getValue().substring(0, 80) + "..." : getValue()}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("meta_keywords", {
            id: "meta_keywords",
            header: "Meta Keywords",
            cell: ({ getValue }) => <div>{getValue().length > 80 ? getValue().substring(0, 80) + "..." : getValue()}</div>,
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("meta_author", {
            id: "meta_author",
            header: "Meta Author",
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("meta_image", {
            id: "meta_image",
            header: "Meta Image",
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.accessor("meta_url", {
            id: "meta_url",
            header: "Meta URL",
            size: DISPLAY_COLUMN_SIZE,
        }),

        columnHelper.display({
            id: "delete",
            header: () => (
                <div className="flex justify-center items-center">
                    <FaTrash />
                </div>
            ),
            cell: ({ row }) => (
                <div className="flex justify-center items-center">
                    <button className="text-xs p-1"
                        onClick={() =>
                            setData((prevData) =>
                                prevData.filter((user) => user.id !== row.original.id)
                            )
                        }>
                        <FaTrash />
                    </button>
                </div>
            ),
            size: DISPLAY_COLUMN_SIZE,
        }),
    ], [])

    const columnIds = useMemo(
        () => columns.map((column) => column.id) as string[],
        [columns]
    );

    const initialColumnVisibility = useMemo(() => {
        return columnIds.reduce((acc: { [id: string]: boolean }, val) => {
            acc[val] = true;
            return acc;
        }, {});
    }, [columnIds]);

    return { columns, data, setData, columnIds, initialColumnVisibility };
};