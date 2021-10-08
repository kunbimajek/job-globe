import { useContext } from 'react'
import Button from './Button'
import JobSvg from './svg/JobSvg'
import SearchSvg from './svg/SearchSvg'
import { InputGroupProps } from '../types'
import { JobsContext } from '../contexts/JobsContext'

const InputGroup = ({ placeholder, header }: InputGroupProps) => {
    const  {
        search, 
        setSearchedJob,
        setSearch, 
        setResult, 
        jobList,  
        handleHeaderSubmit
    }  = useContext(JobsContext)

    const handleInputChange = (e: any) => {
        setSearch(e.target.value)
        if(!e.target.value) {
            setResult(jobList)
        }
        setSearchedJob('')
    }

    return (
        <div className={`input-group ${header && 'filter-search'}`}>
            { !header ? <JobSvg fill="444" width="15" height="14"/> :  <SearchSvg/>}
            <form onSubmit={handleHeaderSubmit}>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={search} 
                    onChange={handleInputChange}/>
            </form>
            { !header &&
                <Button color="primary" onClick={handleHeaderSubmit}>Search</Button>
            }
        </div>
    )
}

export default InputGroup