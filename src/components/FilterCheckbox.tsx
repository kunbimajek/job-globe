import { useContext, useEffect } from "react";
import { FilterCheckboxProps, JobType } from "../types";
import { JobsContext } from '../contexts/JobsContext'

const FilterCheckbox = ({ options }: FilterCheckboxProps) => {
    const { checkedItems, setCheckedItems , handleFilter, setKey}  = useContext(JobsContext)

    const handleChecked = async (option: JobType) => {
        const arr:string[] = checkedItems
        setKey(option.key)

        const valueIndex = await arr.findIndex(element => option.value === element)
        if (valueIndex === -1) {
            arr.push(option.value)
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
                        onChange={() => handleChecked(option)}
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
