import { useEffect, useRef } from "react";

interface CheckboxProps {
    checked?: boolean;
    indeterminate?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Checkbox = ({ checked = false, indeterminate = false, onChange, className }: CheckboxProps) => {
    const checkboxRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = indeterminate;
            checkboxRef.current.checked = checked;
        }
    }, [checked, indeterminate]);

    return (
        <input
            ref={checkboxRef}
            type="checkbox"
            onChange={onChange}
            className={`${className} cursor-pointer w-5 h-5 border border-gray-300 rounded-md`}
        />
    );
};

export default Checkbox;
