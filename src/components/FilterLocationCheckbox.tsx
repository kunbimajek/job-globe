import { useContext, useEffect } from "react";
import { FilterCheckboxProps, JobType } from "../types";
import { JobsContext } from '../contexts/JobsContext'

const FilterLocationCheckbox = ({ options }: FilterCheckboxProps) => {
    const { locationCheckedItems, setLocationCheckedItems , handleLocationFilter}  = useContext(JobsContext)

    const handleChecked = async (option: JobType) => {
        const arr:string[] = locationCheckedItems

        const valueIndex = await arr.findIndex(element => option.value === element)
        if (valueIndex === -1) {
            arr.push(option.value)
        } else {
            arr.splice(valueIndex, 1)
        }
        setLocationCheckedItems(arr)
        handleLocationFilter()
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

export default FilterLocationCheckbox;
