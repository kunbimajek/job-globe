import { useContext, useEffect, useRef, useState } from "react";
import { FilterCheckboxProps, JobType } from "../types";
import { JobsContext } from '../contexts/JobsContext';
import _ from 'lodash'

const FilterLocationCheckbox = ({ options }: FilterCheckboxProps) => {
    const {
        jobList,
        filterTag,
        setResult,
    }  = useContext(JobsContext)


    const handleChecked = async (option: JobType) => {

        let tag = filterTag[option.tag]

        const arr:string[] = tag.state
        const valueIndex = await arr.findIndex(element => option.value === element)
        if (valueIndex === -1) arr.push(option.value)
        else arr.splice(valueIndex, 1)
        tag.setState(arr);
            
        const handleFilter = () => {
            if(tag.state.length > 0){
                let arr = []
                for (let i = 0; i < jobList.length; i++){
                    let currentJob = jobList[i]
                    for (let j  = 0; j < tag.state.length; j++){
                        if(currentJob[option.tag].toLowerCase() === tag.state[j]) {  
                            arr.push(currentJob)
                            break;
                        }
                    }
                }
                setResult(arr)
            } else {
                setResult(jobList)
            }

            let filteredChanges = _.pickBy(filterTag, (value, key) => {
                return !_.startsWith(key, option.tag);
            });

            const stateChange = Object.values(filteredChanges)

            stateChange.forEach(change => change.stateChange(true))
        }

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