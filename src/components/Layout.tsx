// @ts-nocheck

import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { JobsInterface, JobType } from '../types'
import { jobs } from '../data'
import { JobsContext } from '../contexts/JobsContext'
import { filterTagProps } from "../types";

const Layout: FC = ({ children }) => {
    const [jobList, setJobList] = useState<JobsInterface[]>(jobs)
    const [search, setSearch] = useState<string>('')
    const [searchedJob, setSearchedJob] = useState<string>('')
    const [result, setResult] = useState<JobsInterface[]>(jobList)
    const [locationCheckedItems, setLocationCheckedItems] = useState([])
    const [jobTypeCheckedItems, setJobTypeCheckedItems] = useState([])
    const [experienceCheckedItems, setExperienceCheckedItems] = useState([])
    const [experienceStateChange, setExperienceStateChange] = useState<Boolean>(false)
    const [locationStateChange, setLocationStateChange] = useState<Boolean>(false)
    const [jobTypeStateChange, setJobTypeStateChange] = useState<Boolean>(false)

    const filterTag: filterTagProps = {
        location: {
            state: locationCheckedItems,
            setState: setLocationCheckedItems,
            change: locationStateChange,
            stateChange: setLocationStateChange,
            tag: 'location'
        },
        jobType: {
            state: jobTypeCheckedItems,
            setState: setJobTypeCheckedItems,
            change: jobTypeStateChange,
            stateChange: setJobTypeStateChange,
            tag: 'jobType'
        },
        experience: {
            state: experienceCheckedItems,
            setState: setExperienceCheckedItems,
            change: experienceStateChange,
            stateChange: setExperienceStateChange,
            tag: 'experience'
        },
    }
    const handleHeaderSubmit = (e: any) => {
        e.preventDefault()
        const newJobList = jobList.filter(job => {
            return job.title.toLowerCase() === search.toLowerCase() 
            || job.company.toLowerCase() === search.toLowerCase()
        })
        setResult(newJobList)
        setSearchedJob(search)
    }

    useEffect(() => {
        let changes = Object.values(filterTag)

        const handleResultFilter = (state, tag) => {
            if(state.length > 0){
                let arr = []
                for (let i = 0; i < result.length; i++){
                    let currentJob = result[i]
                    for (let j  = 0; j < state.length; j++){
                        if(currentJob[tag].toLowerCase() === state[j]) {  
                            arr.push(currentJob)
                            break;
                        }
                    }
                }
                setResult(arr)
            }
        }

        changes.forEach(option => {
            if(option.change) {
                handleResultFilter(option.state, option.tag)
                option.stateChange(false)
            }
        })

    }, [result]);

    const filterData = {
        jobList,
        result, 
        search,
        searchedJob,
        filterTag,
        setSearch, 
        setResult,
        setSearchedJob,
        handleHeaderSubmit,
    }

    return (
        <>
            <Head>
                <title>JobGlobe - Find the best Jobs in the Globe</title>
                <meta 
                    name="description" 
                    property="" 
                    content="Job Globe is the first platform in the globe providing people with jobs on Earth and Mars" />
            </Head>

            <JobsContext.Provider value={filterData}>
                <main>
                    {children}
                </main>
            </JobsContext.Provider>
        </>
    )
}

export default Layout