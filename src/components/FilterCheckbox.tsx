import { useContext, useRef, useState } from "react";
import { FilterCheckboxProps, JobType } from "../types";
import { JobsContext } from '../contexts/JobsContext';

const FilterLocationCheckbox = ({ options }: FilterCheckboxProps) => {
    const {
        filterTag,
        handleLocationFilter
    }  = useContext(JobsContext)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleChecked = async (option: JobType) => {

        let tag = filterTag[option.tag]

        const arr:string[] = tag.state
        const valueIndex = await arr.findIndex(element => option.value === element)
        if (valueIndex === -1) arr.push(option.value)
        else arr.splice(valueIndex, 1)
        tag.setState(arr);
            
        handleLocationFilter()
    }

    return (
        <>
            {options && options.map((option) => (
                <div key={option.id} className="mb-1h"
                >
                    <input
                        ref={inputRef}
                        type="checkbox"
                        value={option.value}
                        className={option.tag}
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