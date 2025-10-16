import dynamic from "next/dynamic";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

const DraggableWindow = dynamic(
    () => import('@/component/ui/window').then((mod) => mod.default), { ssr: false })

interface WindowState {
    windowElement: {
        title: string;
        children: ReactNode;
    };
};

interface WindowContextType {
    title: string;
    windowElement: {
        title: string;
        children: ReactNode
    };
    setWindow: Dispatch<SetStateAction<WindowState>>;
}

const WindowContext = createContext<WindowContextType>({
    title: "",
    windowElement: {
        title: "",
        children: null,
    },
    setWindow: () => { }
});

const WindowProvider = ({ children }: { children: ReactNode }) => {
    const [windowElement, setWindow] = useState<WindowState>({
        windowElement : {
            title: "",
            children: null,
        }
    });

    const handleCloseWindow = () => {
        setWindow({ windowElement: { title: "", children: null } });
    };

    return (
        <WindowContext.Provider value={{ title: "", setWindow, windowElement: windowElement.windowElement }}>
            {windowElement.windowElement.children && (
                <DraggableWindow title={windowElement.windowElement.title} onClose={handleCloseWindow}>
                    {windowElement.windowElement.children}
                </DraggableWindow>
            )}
            {children}
        </WindowContext.Provider>
    );
};

export { WindowProvider, WindowContext };
