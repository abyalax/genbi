import AdminLayout from "../../component/admin/__layout"
import { useContext } from "react"
import { ToasterContext } from "@/context/toaster"

const AdminHome = () => {

    const { setToaster } = useContext(ToasterContext)

    const handleClicked = (variant: "" | "success" | "info" | "warning" | "danger") => {
        setToaster({
            variant,
            message: "Dashboard Page"
        })
    }

    return (
        <AdminLayout>
            <div className="min-h-screen flex flex-col text-center gap-6 justify-center items-center">
                <h2 className="w-full text-4xl font-semibold">Dashboard Page</h2>
                <p className="font-semibold text-xl">Developed Soon, see other management page at sidebar</p>
                <button onClick={() => handleClicked("success")}>Tampilkan Toaster success</button>
                <button onClick={() => handleClicked("info")}>Tampilkan Toaster info</button>
                <button onClick={() => handleClicked("warning")}>Tampilkan Toaster warning</button>
                <button onClick={() => handleClicked("danger")}>Tampilkan Toaster error</button>
            </div>
        </AdminLayout>
    )
}

export default AdminHome
