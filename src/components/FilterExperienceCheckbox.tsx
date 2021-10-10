import { useContext, useEffect } from "react";
import { FilterCheckboxProps, JobType } from "../types";
import { JobsContext } from '../contexts/JobsContext'

const FilterExperienceCheckbox = ({ options }: FilterCheckboxProps) => {
    const { experienceCheckedItems, setExperienceCheckedItems , handleExperienceFilter}  = useContext(JobsContext)

    const handleChecked = async (option: JobType) => {
        const arr:string[] = experienceCheckedItems

        const valueIndex = await arr.findIndex(element => option.value === element)
        if (valueIndex === -1) {
            arr.push(option.value)
        } else {
            arr.splice(valueIndex, 1)
        }
        setExperienceCheckedItems(arr)
        handleExperienceFilter()
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

export default FilterExperienceCheckbox;
