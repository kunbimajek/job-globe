import { useState, useRef, useEffect } from 'react'
import SearchSvg from '../components/svg/SearchSvg'
import { FilterHeadProps as FilterSearchProps } from '../types'
import FilterCheckbox from './FilterCheckbox'

const FilterSearch = ({name, header, options}: FilterSearchProps) => {
    const [open, setOpen] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const onBodyClick = (e: any) => {
            if(inputRef.current && !inputRef.current.contains(e.target)) setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    return (
        <div 
            ref={inputRef}
            className="filter-search" >
            <SearchSvg/>
            <input 
                type="text" 
                placeholder={`Select ${name}`}
                onClick={() => setOpen(true)} />
            { !header &&
                <ul 
                    id="datalist" 
                    className={`transition ${open ? 'op-1' : 'op-0 d-none'}`} >
                    <FilterCheckbox options={options}/>
                </ul>
            }
        </div>
    )
}

export default FilterSearch