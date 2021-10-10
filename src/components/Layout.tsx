import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { JobsInterface } from '../types'
import { jobs } from '../data'
import { JobsContext } from '../contexts/JobsContext'

const Layout: FC = ({ children }) => {
    const [jobList, setJobList] = useState<JobsInterface[]>(jobs)
    const [locationCheckedItems, setLocationCheckedItems] = useState([])
    const [jobTypeCheckedItems, setJobTypeCheckedItems] = useState([])
    const [experienceCheckedItems, setExperienceCheckedItems] = useState([])
    const [search, setSearch] = useState<string>('')
    const [searchedJob, setSearchedJob] = useState<string>('')
    const [result, setResult] = useState<JobsInterface[]>(jobList)
    const [experienceStateChange, setExperienceStateChange] = useState<Boolean>(false)
    const [locationStateChange, setLocationStateChange] = useState<Boolean>(false)
    const [jobTypeStateChange, setJobTypeStateChange] = useState<Boolean>(false)

    const handleHeaderSubmit = (e: any) => {
        e.preventDefault()
        const newJobList = jobList.filter(job => {
            return job.title.toLowerCase() === search || job.company.toLowerCase() === search
        })
        setResult(newJobList)
        setSearchedJob(search)
    }

    useEffect(() => {
        if(locationStateChange) {
            handleResultLocationFilter()
            setLocationStateChange(false)
        }
        if(experienceStateChange) {
            handleResultExperienceFilter()
            setExperienceStateChange(false)
        }
        if(jobTypeStateChange) {
            handleResultJobTypeFilter()
            setJobTypeStateChange(false)
        }
    }, [result, locationStateChange, experienceStateChange, jobTypeStateChange]);
   
    const handleLocationFilter = () => {
        if(locationCheckedItems.length > 0){
            let arr = []
            for (let i = 0; i < jobList.length; i++){
                let currentJob = jobList[i]
                for (let j  = 0; j < locationCheckedItems.length; j++){
                    if(currentJob.location.toLowerCase() === locationCheckedItems[j]) {  
                        arr.push(currentJob)
                        break;
                    }
                }
            }
            setResult(arr)
        } else {
            setResult(jobList)
        }
        setJobTypeStateChange(true)
        setExperienceStateChange(true)
    }

    const handleJobTypeFilter = () => {
        if(jobTypeCheckedItems.length > 0){
            let arr = []
            for (let i = 0; i < jobList.length; i++){
                let currentJob = jobList[i]
                for (let j  = 0; j < jobTypeCheckedItems.length; j++){
                    if(currentJob.jobType.toLowerCase() === jobTypeCheckedItems[j]) {  
                        arr.push(currentJob)
                        break;
                    }
                }
            }
            setResult(arr)
        } else {
            setResult(jobList)
        }
        setLocationStateChange(true)
        setExperienceStateChange(true)
    }

    const handleExperienceFilter = () => {
        if(experienceCheckedItems.length > 0){
            let arr = []
            for (let i = 0; i < jobList.length; i++){
                let currentJob = jobList[i]
                for (let j  = 0; j < experienceCheckedItems.length; j++){
                    if(currentJob.experience.toLowerCase() === experienceCheckedItems[j]) {  
                        arr.push(currentJob)
                        break;
                    }
                }
            }
            setResult(arr)
        } else {
            setResult(jobList)
        }
        setLocationStateChange(true)
        setJobTypeStateChange(true)
    }

    const handleResultLocationFilter = () => {
        
        if(locationCheckedItems.length > 0){
            let arr = []
            for (let i = 0; i < result.length; i++){
                let currentJob = result[i]
                for (let j  = 0; j < locationCheckedItems.length; j++){
                    if(currentJob.location.toLowerCase() === locationCheckedItems[j]) {  
                        arr.push(currentJob)
                        break;
                    }
                }
            }
            setResult(arr)
        }
    }

    const handleResultJobTypeFilter = () => {
        
        if(jobTypeCheckedItems.length > 0){
            let arr = []
            for (let i = 0; i < result.length; i++){
                let currentJob = result[i]
                for (let j  = 0; j < jobTypeCheckedItems.length; j++){
                    if(currentJob.jobType.toLowerCase() === jobTypeCheckedItems[j]) {  
                        arr.push(currentJob)
                        break;
                    }
                }
            }
            setResult(arr)
        }
    }

    const handleResultExperienceFilter = () => {
        
        if(experienceCheckedItems.length > 0){
            let arr = []
            for (let i = 0; i < result.length; i++){
                let currentJob = result[i]
                for (let j  = 0; j < experienceCheckedItems.length; j++){
                    if(currentJob.experience.toLowerCase() === experienceCheckedItems[j]) {  
                        arr.push(currentJob)
                        break;
                    }
                }
            }
            setResult(arr)
        }
        
    }
       
    const filterData = {
        jobList,
        locationCheckedItems,
        jobTypeCheckedItems,
        experienceCheckedItems,
        result, 
        search,
        searchedJob,
        setSearch, 
        setResult,
        setLocationCheckedItems,
        setJobTypeCheckedItems,
        setExperienceCheckedItems,
        setSearchedJob,
        handleHeaderSubmit,
        handleLocationFilter,
        handleJobTypeFilter,
        handleExperienceFilter
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