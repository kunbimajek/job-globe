import { FC, useState, useRef, useEffect, useContext } from 'react'
import Image from 'next/image'
import JobSvg from './svg/JobSvg'
import LocationSvg from './svg/LocationSvg'
import Modal from '../components/Modal'
import { dropdownOptions as options } from '../data'
import { CSSTransition } from "react-transition-group"
import { JobsContext } from '../contexts/JobsContext'

const JobList: FC = () => {
    const { result, searchedJob }  = useContext(JobsContext)
    const [open, setOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState(options[0])
    const [selectedJob, setSelectedJob] = useState(result[0])

    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onBodyClick = (e: any) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    useEffect(() => {
        if(showModal) document.body.style.overflow = 'hidden' 
        else document.body.style.overflow = 'unset'
    }, [showModal])

    const message =  searchedJob
        ? <h4>Showing <span>{result.length}</span> results for <span>{searchedJob}</span></h4> 
        : <h4></h4>

    const renderJobs = () => {
        return result.map(job => {
            return ( 
                <div className="box brief" key={job.id} onClick={() => { setShowModal(!showModal); setSelectedJob(job) }}>
                    <div className="d-flex jc-sb">
                        <div className="d-flex">
                            <Image src="/logo.png" alt="logo" width={60} height={60} className="job-logo"/>
                            <div className="title">
                                <h4>{job.title}<span className="tag">{job.market}</span></h4>
                                <div className="d-flex al-i-c company-info">
                                    <span>
                                        <JobSvg fill="37C16E" width="11.5" height="10.5"/> 
                                        {job.company}
                                    </span>
                                    <span>
                                        <LocationSvg fill="37C16E" width="14.5" height="12.5"/>
                                        {job.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <h4>${job.salaryMin/1000}k - ${job.salaryMax/1000}k</h4>
                    </div>
                    <div className="summary">
                        <p>{job.summary}</p>
                    </div>
                    <div className="footer d-flex jc-sb">
                        <div className="skills d-md-flex">
                            { job.skills.map(skill =>  <span className="tag" key={skill}>{skill}</span> )}
                        </div>
                        <div>
                            <span className="grey">12th Jun 2021</span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="job-list">
            <CSSTransition in={showModal} timeout={300} classNames="slidingModal" unmountOnExit>
                <Modal
                    showModal={showModal}
                    onDismiss={() => setShowModal(false)} 
                    selectedJob={selectedJob} />
            </CSSTransition>
            <div className="head d-flex jc-sb">
                {message}
                <div className="d-flex sort" ref={dropdownRef}>

                    <p className="title grey">Sort by: </p>
                    
                    <div onClick={() => setOpen(!open)} className="pos-rel">
                        <p className="icon">{selected.label}
                            <span className="caret"> &#62; </span>
                        </p>
                        <div className={`menu ${open ? 'd-block' : 'd-none'}`}>
                            {options.map(option => {
                                if(option.value === selected.value) return null;
                                return (
                                    <div 
                                        key={option.value} 
                                        className="item" 
                                        onClick={() => setSelected(option)}>
                                        {option.label}
                                    </div>
                                )})}
                        </div>
                    </div>
                </div>
            </div>

            { renderJobs() }
        </div>
    )
}

export default JobList