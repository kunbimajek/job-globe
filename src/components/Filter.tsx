import { FC } from 'react'
import FilterCheckbox from './FilterCheckbox'
import FilterHead from './FilterHead'
import FilterSearch from './FilterSearch'
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
        body: <FilterSearch name="location" options={locationOptions}/>
    },
    { 
        id: 'b',
        head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Job Type" /></div>, 
        body: <FilterCheckbox options={jobTypes}/>,
    },
    { 
        id: 'c',
        head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Market" /></div>, 
        body: <FilterSearch name="market"/>
    },
    { 
        id: 'd',
        head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Skill" /></div>, 
        body: <FilterSearch name="skill"/>
    },
    { 
        id: 'e',
        head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Experience Level" /></div>, 
        body: <FilterCheckbox options={experience}/>
    },
    { 
        id: 'f',
        head: <div className="bdr-top pt-30 mt-30"><FilterHead name="Salary" /></div>, 
        body: <FilterSearch name="salary"/>
    }
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
