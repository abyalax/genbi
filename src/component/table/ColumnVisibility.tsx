import { Table } from "@tanstack/react-table";
import { convertCamelToTitleCase } from "./Table.utils";
import { useState } from "react";
import { News } from "@/services/news";
import { FaTableList } from "react-icons/fa6";

interface ColumnSelector {
  table: Table<News>;
  columnIds: string[];
}

export const ColumnVisibilitySelector = ({ table, columnIds }: ColumnSelector) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const columnVisibilityCheckboxState = Object.entries(
    table.getState().columnVisibility
  ).filter(([_, value]) => value).map(([key]) => key);

  const togglePopover = () => setPopoverOpen((prev) => !prev);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button onClick={togglePopover} className="flex gap-3 px-2 py-1 rounded-md text-black bg-gray-200 hover:bg-toska-light font-semibold">
        <FaTableList size={30}/>
        Filter Columns
      </button>

      {/* Popover */}
      {isPopoverOpen && (
        <div className="absolute z-10 w-64 bg-white border rounded-md shadow-md p-4 top-10">
          <div className="mb-4">
            <fieldset className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="column-visibility"
                  value="all"
                  className="form-radio"
                  defaultChecked
                  onChange={() =>
                    table.setColumnVisibility(
                      columnIds.reduce(
                        (acc: { [id: string]: boolean }, val) => {
                          acc[val] = true;
                          return acc;
                        },
                        {}
                      )
                    )
                  }
                />
                Show All
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="column-visibility"
                  value="none"
                  className="form-radio"
                  onChange={() =>
                    table.setColumnVisibility(
                      columnIds.reduce(
                        (acc: { [id: string]: boolean }, val) => {
                          acc[val] = false;
                          return acc;
                        },
                        {}
                      )
                    )
                  } />
                Show None
              </label>
            </fieldset>
          </div>
          
          {/* Column Checkbox Group */}
          <div className="flex flex-col gap-2">
            {columnIds.map((id) => (
              <label key={id} className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" value={id} checked={columnVisibilityCheckboxState.includes(id)}
                  onChange={(e) => {
                    const selectedOptions = e.target.checked
                      ? [...columnVisibilityCheckboxState, id]
                      : columnVisibilityCheckboxState.filter((key) => key !== id);
                    table.setColumnVisibility(
                      columnIds.reduce(
                        (acc: { [id: string]: boolean }, val) => {
                          acc[val] = selectedOptions.includes(val);
                          return acc;
                        },
                        {}
                      )
                    );
                  }} />
                {convertCamelToTitleCase(id)}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
