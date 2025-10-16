interface DropdownProps {
    children: React.ReactNode
    ID: string
    custom?: string
}

const Dropdown = (props: DropdownProps) => {
    const { ID, children, custom } = props
    return (
        <div id={ID} className={`z-10 ${custom} hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow-2xl`}>
            <div className="rounded-lg w-full">
                {children}
            </div>
        </div>
    )
};

export default Dropdown;