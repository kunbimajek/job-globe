import React, { useEffect, useState, forwardRef } from "react"
import ReactDOM from 'react-dom'
import CancelSvg from "./svg/CancelSvg"
import JobSvg from './svg/JobSvg'
import LocationSvg from './svg/LocationSvg'

const Modal = forwardRef<any, any>((props, ref) => {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
        setIsBrowser(true);
    },[]);

    const job = props.selectedJob && props.selectedJob

    if(isBrowser) {
        return ReactDOM.createPortal(
            <div className="modal-wrapper" ref={ref}>
                <div className="modal">
                    <div 
                        className="mb-20 d-flex al-i-c jc-sb" 
                        onClick={props.onDismiss} 
                        style={{cursor: 'pointer'}}>
                        <CancelSvg />
                        <a className="btn btn-primary">Apply here</a>
                    </div>
                    <div className="content box">
                        <span className="grey">Posted on: 12th Jun 2021</span>
                        <div className="bdr-top pt-20 d-flex al-i-c jc-sb title">
                            <h3>{job.title}<span className="tag">{job.market}</span></h3>
                            <h3>${job.salaryMin/1000}k - ${job.salaryMax/1000}k</h3>
                        </div>
                        <div className="d-flex al-i-c jc-sb company-info mb-20">
                            <div>
                                <span>
                                    <JobSvg fill="37C16E" width="11.5" height="10.5"/> 
                                    {job.company}
                                </span>
                                <span>
                                    <LocationSvg fill="37C16E" width="14.5" height="12.5"/>
                                    {job.location}
                                </span>
                            </div>
                            <div>
                                <span className="mr-0">
                                    <JobSvg fill="37C16E" width="11.5" height="10.5"/> 
                                    {job.experience} Level, <b>{job.jobType}</b>
                                </span>
                            </div>
                        </div>
                        <div className="bdr-top pt-20">
                            <div className="mb-30">
                                <h4>About {job.company}</h4>
                                <p>{job.summary}</p>
                            </div>
                            <div className="mb-30">
                                <h4>Job description</h4>
                                <p>{job.summary}</p>
                            </div>
                            <div className="mb-30">
                                <h4 className="mb-10">Responsibilities</h4>
                                <ul>{ job.qualifications.map((list: string) =>  <li key={list}>{list}</li> )}</ul>
                            </div>
                            <div className="mb-30">
                                <h4 className="mb-10">Required qualifications</h4>
                                <ul>{ job.qualifications.map((list: string)=>  <li key={list}>{list}</li> )}</ul>
                            </div>
                        </div>
                        <div className="footer mb-50">
                            <h4>Neccessary Skills</h4>
                            <div className="skills d-md-flex mt-20">
                                { job.skills.map((skill: string) =>  <span className="tag" key={skill}>{skill}</span> )}
                            </div>
                        </div>
                        <a className="btn btn-primary">Apply here</a>
                    </div>
                </div>
            </div>, 
            document.getElementById("modal-root") as HTMLElement
        )
    } else return null
});

Modal.displayName = "Modal";

export default Modal