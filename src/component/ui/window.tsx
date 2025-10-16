import React, { forwardRef, ReactNode, useState } from 'react';
import Draggable from 'react-draggable';
import { IoCloseSharp } from "react-icons/io5"

interface DraggableWindowProps {
    onClose: () => void;
    children: ReactNode;
    title: string;
}

const DraggableWindow = forwardRef<HTMLDivElement, DraggableWindowProps>((props, ref) => {
    const [position, setPosition] = useState({ x: window.innerWidth / 2 - 400, y: window.innerHeight / 2 - 300 });

    const closeWindow = () => {
        props.onClose();
    };
    const dragBounds = {
        top: 0,
        left: 0,
        right: window.innerWidth - 800,  // Batas kanan
        bottom: window.innerHeight - 600 // Batas bawah
    };

    return (
        <Draggable
            nodeRef={ref as React.RefObject<HTMLElement>}
            bounds={dragBounds}
            position={position} 
            onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
        >
            <div
                ref={ref}
                className="w-[800px] h-fit bg-white shadow-lg rounded-lg p-4 cursor-grab"
                style={{
                    position: 'absolute',
                    zIndex: 1000,
                }}
            >
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="font-semibold">{props.title}</h2>
                    <button onClick={closeWindow}>
                        <IoCloseSharp style={{ width: '20px', height: '20px' }}/>
                    </button>
                </div>

                <div className="mt-4 p-2">
                    {props.children}
                </div>
            </div>
        </Draggable>
    );
});

DraggableWindow.displayName = 'DraggableWindow';

export default DraggableWindow;
