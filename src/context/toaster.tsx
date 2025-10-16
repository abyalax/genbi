import Toaster from "@/component/ui/toaster";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ToasterState {
  variant: "success" | "info" | "warning" | "danger" | "";
  message: string;
};

interface ToasterContextType {
  toaster: ToasterState;
  setToaster: Dispatch<SetStateAction<ToasterState>>;
};

const ToasterContext = createContext<ToasterContextType>({
  toaster: { variant: "", message: "" },
  setToaster: () => {}, 
});

const ToasterProvider = ({ children }: { children: ReactNode }) => {
  const [toaster, setToaster] = useState<ToasterState>({ variant: "", message: "" });

  return (
    <ToasterContext.Provider value={{ toaster, setToaster }}>
      {toaster.message && <Toaster />}
      {children}
    </ToasterContext.Provider>
  );
};

export { ToasterProvider, ToasterContext };
