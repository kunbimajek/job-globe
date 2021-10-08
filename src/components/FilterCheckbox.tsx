import { useContext } from "react";
import { FilterCheckboxProps } from "../types";
import { JobsContext } from '../contexts/JobsContext'

const FilterCheckbox = ({ options }: FilterCheckboxProps) => {
    const { checkedItems, setCheckedItems , handleFilter}  = useContext(JobsContext)

    const handleChecked = (e: any) => {
        setCheckedItems(e.target.value)
        // let arr = JSON.stringify(checkedItems)
        // arr = JSON.parse(arr)
        // console.log(arr, 'a b a')
        // console.log(value, 'value')

        // const valueIndex = await arr.findIndex(element => value === element)
        // if (valueIndex === -1) {
        //     arr.push(value)
        // } else {
        //     arr.splice(valueIndex, 1)
        // }
        // setTimeout(() => {
        //     setCheckedItems(['full time', 'contract'])
        // }, 2000);
        // // setCheckedItems(arr)
        // console.log(arr, 'array')
        // console.log(checkedItems, 'checked items after handlecheck')
        // handleFilter()
        console.log(checkedItems)
    }

    return (
        <>
            {options && options.map((option) => (
                <div key={option.id} className="mb-1h"
                >
                <input
                    type="text"
                    value={option.value}
                    onChange={handleChecked}
                />
                {/* <label className="pl-5">
                    {option.label}
                </label> */}
                </div>
            ))}
        </>
    );
};

export default FilterCheckbox;
