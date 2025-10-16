import { ToasterContext } from "@/context/toaster"
import { Dispatch, SetStateAction, useContext } from "react"

export interface ToasterType {
    toaster: {
        variant: string
        message: string
    },
    setToaster: Dispatch<SetStateAction<{variant: "success" | "info" | "warning" | "danger" | "", message: string}>>
}

export interface VariantToaster {
    [key: string]: {
        icon: React.ReactNode
    }
}

const ToasterSuccessIcon = () => {
    return (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-toska-dark">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
        </div>
    )
}
const ToasterInfoIcon = () => {
    return (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" stroke="white" strokeWidth={.5} className="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
        </div>
    )
}
const ToasterDangerIcon = () => {
    return (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http:ww.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span className="sr-only">Error icon</span>
        </div>
    )
}
const ToasterWarningIcon = () => {
    return (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
        </div>
    )
}

const toasterVariant: VariantToaster = {
    success: {
        icon: <ToasterSuccessIcon />,
    },
    info: {
        icon: <ToasterInfoIcon />,
    },
    danger: {
        icon: <ToasterDangerIcon />,
    },
    warning: {
        icon: <ToasterWarningIcon />,
    },
}

const Toaster = () => {
    const { toaster, setToaster }: ToasterType = useContext(ToasterContext)

    if (toaster.variant.length > 0) {
        setTimeout(() => {
            setToaster({variant: "", message: ""})
        }, 4000);
    }

    return (
        <div className="w-screen h-[20vh] fixed z-30 flex justify-center items-start top-6" role="alert">
            <div className="flex items-center w-fit max-w-lg min-w-72 px-4 py-2 mb-4 bg-gray-800 rounded-lg shadow-lg">
                {toaster.variant && toasterVariant[toaster.variant].icon}
                <div className="ms-3 mx-4 text-base text-slate-200 font-semibold">{toaster.message}</div>
                <button type="button" onClick={() => setToaster({variant: "", message: ""})} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Toaster
