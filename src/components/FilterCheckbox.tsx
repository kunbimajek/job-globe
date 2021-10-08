import { useContext } from "react";
import { FilterCheckboxProps, JobType } from "../types";
import { JobsContext } from '../contexts/JobsContext'

const FilterCheckbox = ({ options }: FilterCheckboxProps) => {
    const { checkedItems, setCheckedItems , handleFilter}  = useContext(JobsContext)

    const handleChecked = async (value: string) => {
        const arr:string[] = checkedItems

        const valueIndex = await arr.findIndex(element => value === element)
        if (valueIndex === -1) {
            arr.push(value)
        } else {
            arr.splice(valueIndex, 1)
        }
        setCheckedItems(arr)
        handleFilter()
    }

    return (
        <>
            {options && options.map((option) => (
                <div key={option.id} className="mb-1h"
                >
                    <input
                        type="checkbox"
                        value={option.value}
                        onChange={() => handleChecked(option.value)}
                    />
                    <label className="pl-5" htmlFor={option.value}>
                        {option.label}
                    </label>
                </div>
            ))}
        </>
    );
};

export default FilterCheckbox;
