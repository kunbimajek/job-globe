import { FC } from 'react'
import FilterHead from './FilterHead'
import FilterCheckbox from './FilterCheckbox'
import { jobTypes, experience, locationOptions } from '../data'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';

const filters = [
    { 
        id: 'a',
        head: <FilterHead name="Location" />,
        body: <FilterCheckbox options={locationOptions}/>
    },
    { 
        id: 'b',
        head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Job Type" /></div>, 
        body: <FilterCheckbox options={jobTypes}/>,
    },
    // { 
    //     id: 'c',
    //     head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Market" /></div>, 
    //     body: <FilterLocationCheckbox name="market"/>
    // },
    // { 
    //     id: 'd',
    //     head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Skill" /></div>, 
    //     body: <FilterLocationCheckbox name="skill"/>
    // },
    { 
        id: 'e',
        head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Experience Level" /></div>, 
        body: <FilterCheckbox options={experience}/>
    }
    // { 
    //     id: 'f',
    //     head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Salary" /></div>, 
    //     body: <FilterLocationCheckbox name="salary"/>
    // }
]

const Filter: FC = () => {
    return (
        <div className="filter-section">
            <h3 className="mb-45">Filter By</h3>
            <Accordion 
                preExpanded = {['a', 'b', 'c', 'd', 'e', 'f']}
                allowZeroExpanded
                allowMultipleExpanded>
                { filters.map(filter => {
                    return (
                        <AccordionItem uuid={filter.id} key={filter.id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {filter.head}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                    {filter.body}
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default Filter
