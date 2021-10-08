import { useState } from "react"
import { FilterHeadProps } from "../types"

const FilterHead = ({name}: FilterHeadProps) => {
    const [opened, setOpened] = useState(false)

    return (
        <div 
            className="d-flex jc-sb filter-head"
            onClick={() => setOpened(!opened)}>
            <h4>{name}</h4>
            <p className={`icon ${opened? 'rotate' : 'rotate-down'}`}>
                <span className="caret"> &#62; </span>
            </p>
        </div>
    )
}

export default FilterHead
