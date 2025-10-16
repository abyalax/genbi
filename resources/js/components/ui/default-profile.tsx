import { FaUserAlt } from "react-icons/fa";

type Size = "xs" | "sm" | "md" | "lg"

export default function DefaultProfile({ size = "lg" }: { size?: Size }) {
    switch (size) {
        case "xs":
            return (
                <div className="w-10 h-10 mx-auto rounded-full bg-gray-400 flex justify-center items-center">
                    <FaUserAlt size={28} />
                </div>
            )
        case "sm":
            return (
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-400 flex justify-center items-center">
                    <FaUserAlt size={28} />
                </div>
            )
        case "md":
            return (
                <div className="w-36 h-36 mx-auto rounded-full bg-gray-400 flex justify-center items-center">
                    <FaUserAlt size={50} />
                </div>
            )
        case "lg":
            return (
                <div className="w-40 h-40 mx-auto rounded-full bg-gray-400 flex justify-center items-center">
                    <FaUserAlt size={70} />
                </div>
            )
        default:
            break;
    }
}
