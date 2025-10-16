import dynamic from "next/dynamic"
import { QuillOptions } from "react-quill"

const options: QuillOptions = {
    modules: {
        toolbar: true
    },
    placeholder: "Write something awesome like at Microsoft Word...",
    theme: "snow"
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

const UpdateAgenda = ({ data }: any) => {

    console.log({ data });

    return (
        <div className="cursor-default flex flex-col gap-3">
            <form >
                <p>Title</p>
                <input type="text" defaultValue={data.title} placeholder="Judul Agenda" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                <p>Description</p>
                <input type="text" defaultValue={data.description} placeholder="Deskripsi Agenda" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                <p>Content</p>
                <ReactQuill {...options} />
                <p>Agenda Dimulai</p>
                <input type="datetime-local" defaultValue={data.start} placeholder="Date" className="w-fit border border-slate-300 rounded-md px-4 py-2" />
                <p>Agenda Berakhir</p>
                <input type="datetime-local" defaultValue={data.end} placeholder="Date" className="w-fit border border-slate-300 rounded-md px-4 py-2" />
            </form>
        </div>
    )
}

export default UpdateAgenda
