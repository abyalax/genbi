import { ToasterContext } from "@/context/toaster"
import { WindowContext } from "@/context/window"
import fetchAxios from "@/lib/axios"
import { Agenda } from "@/types/news"
import { FormEvent, useContext, useState } from "react"
import ReactQuill, { QuillOptions } from "react-quill"



const options: QuillOptions = {
    modules: {
        toolbar: true
    },
    placeholder: "Write something awesome like at Microsoft Word...",
    theme: "snow",
}
const CreateAgenda = ({ dateStart }: { dateStart: string }) => {

    const { setToaster } = useContext(ToasterContext)
    const { setWindow } = useContext(WindowContext)
    const [content, setContent] = useState("")

    const hanldeSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            title: formData.get("title"),
            description: formData.get("description"),
            content,
            start: formData.get("start"),
            end: formData.get("end")
        }
        const response = fetchAxios.post<Agenda>("/api/agenda", data)
        response.then((res) => {
            console.log(res.data);
            setToaster({ variant: "success", message: "Success Create Agenda" })
            setWindow({ windowElement: { title: "", children: null } })
        }).catch((res) => {
            console.log(res);
            setToaster({ variant: "danger", message: "Failed Create Agenda" })
        })
    }

    return (
        <div className="cursor-default">
            <form onSubmit={hanldeSubmit} className="flex flex-col gap-1">
                <p>Title</p>
                <input type="text" name="title" placeholder="Judul Agenda" className="w-full border border-slate-300 rounded-md px-3 py-1 focus:outline-1 focus:outline-toska-light" />
                <p>Description</p>
                <input type="text" name="description" placeholder="Deskripsi Agenda" className="w-full border border-slate-300 rounded-md px-3 py-1 focus:outline-1 focus:outline-toska-light" />
                <div className="flex gap-4 my-2">
                    <div>
                        <p className="mb-2">Agenda Dimulai</p>
                        <input type="datetime-local" defaultValue={dateStart} name="start" placeholder="Date" className="w-fit border border-slate-300 rounded-md px-3 py-1" />
                    </div>
                    <div>
                        <p className="mb-2">Agenda Berakhir</p>
                        <input type="datetime-local" name="end" placeholder="Date" className="w-fit border border-slate-300 rounded-md px-3 py-1" />
                    </div>
                </div>

                <p>Content</p>
                <ReactQuill {...options} onChange={(e) => setContent(e)} />
                <button type="submit" className="w-fit bg-toska hover:bg-toska-dark text-white rounded-md px-3 py-1 my-2">
                    Submit
                </button>

            </form>
        </div>
    )
}

export default CreateAgenda
