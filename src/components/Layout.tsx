import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { JobsInterface } from '../types'
import { jobs } from '../data'
import { JobsContext } from '../contexts/JobsContext'

const Layout: FC = ({ children }) => {
    const [jobList, setJobList] = useState<JobsInterface[]>(jobs)
    const [checkedItems, setCheckedItems] = useState<string>('')
    const [search, setSearch] = useState<string>('')
    const [searchedJob, setSearchedJob] = useState<string>('')
    const [result, setResult] = useState<JobsInterface[]>(jobList)

    const handleHeaderSubmit = (e: any) => {
        e.preventDefault()
        const newJobList = jobList.filter(job => {
            return job.title.toLowerCase() === search || job.company.toLowerCase() === search
        })
        setResult(newJobList)
        setSearchedJob(search)

        console.log(newJobList)
    }
    
   
    const handleFilter = () => {
        console.log(checkedItems, 'checked items')
        let arr = []
        for (let i = 0; i < jobList.length; i++){
            let currentJob = jobList[i]
            for (let j  = 0; j < checkedItems.length; j++){
                if(currentJob.jobType.toLowerCase() === checkedItems[j]) {  
                    arr.push(currentJob)
                    break;
                }
            }
        }
        setResult(arr)
    }
       
    const filterData = {
        jobList,
        checkedItems,
        result, 
        search, 
        searchedJob,
        setSearch, 
        setResult,
        setCheckedItems,
        setSearchedJob,
        handleHeaderSubmit,
        handleFilter
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