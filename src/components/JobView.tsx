import { FC } from 'react'
import Filter from './Filter'
import JobList from './JobList'

const JobView: FC = () => {
    return (
        <div className="job-search">
            <div className="container">
                <div className="row">
                    <div className="cols-3x">
                        <Filter/>
                    </div>
                    <div className="cols-8x">
                        <JobList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobView
