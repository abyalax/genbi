import { flexRender, Header } from "@tanstack/react-table";
import { FaArrowDown, FaArrowUp, FaEllipsisVertical } from "react-icons/fa6";
import { MouseEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { News } from "@/services/news";
import dynamic from "next/dynamic";

const Draggable = dynamic(
    () => import('react-beautiful-dnd').then((mod) => mod.Draggable),
    { ssr: false }
);

interface TableHeaderProps {
    header: Header<News, unknown>;
    index: number;
}

export const TableHeader = ({ header, index }: TableHeaderProps) => {
    const isPinned = header.column.getIsPinned();
    const isSorted = header.column.getIsSorted();
    const [isOpen, setIsOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const handleOutsideClick = (e: Event) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".dropdown-menu") && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isOpen]);

    const toggleMenu = (e: MouseEvent<HTMLElement>) => {
        setIsOpen(!isOpen);
        const target = e.target as HTMLElement;
        const rect = target.getBoundingClientRect();
        setMenuPosition({
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
        });
    };

    return (
        <Draggable draggableId={header.id} key={header.id} index={index} isDragDisabled={!!isPinned}>
            {(provided, snapshot) => (
                <th key={header.id} colSpan={header.colSpan} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    style={{ width: header.getSize(), ...provided.draggableProps.style, }}
                    className={`border-r border-slate-300 px-3 py-2 ${snapshot.isDragging ? "bg-toska-light" : ""} ${isPinned ? "bg-toska-dark text-white" : ""}`}>

                    {isOpen && ReactDOM.createPortal(
                        <div className="dropdown-menu absolute z-50 bg-white border border-gray-300 rounded shadow-md"
                            style={{ top: menuPosition.top, left: menuPosition.left }}>
                            <ul className="text-sm" onClick={() => setIsOpen(false)}>
                                {isPinned !== "right" && (
                                    <li onClick={() => { header.column.pin("right"); setIsOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Pin to Right
                                    </li>
                                )}
                                {isPinned !== "left" && (
                                    <li onClick={() => { header.column.pin("left"); setIsOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Pin to Left
                                    </li>
                                )}
                                {isPinned && (
                                    <li onClick={() => { header.column.pin(false); setIsOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Unpin
                                    </li>
                                )}
                                <li onClick={header.column.getToggleSortingHandler()} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    {isSorted === "desc" ? "Sort Asc" : "Sort Desc"}
                                </li>
                            </ul>
                        </div>,
                        document.body
                    )}

                    <div className="flex justify-between items-center gap-2 px-4 ">

                        <div className="text-sm">
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                        </div>
                        <div className="flex gap-2 items-center">
                            {isSorted && (
                                <div>
                                    {isSorted === "asc" && <FaArrowDown />}
                                    {isSorted === "desc" && <FaArrowUp />}
                                </div>
                            )}

                            <button onClick={toggleMenu} className={`p-1 rounded ${isPinned ? "text-white hover:bg-[#f5f6fa]  hover:text-black" : "hover:bg-slate-700 hover:text-white text-black"}`}>
                                <FaEllipsisVertical />
                            </button>
                        </div>


                    </div>
                </th>
            )}
        </Draggable>
    );
}
