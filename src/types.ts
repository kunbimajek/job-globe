import { MouseEventHandler,Dispatch,SetStateAction } from "react";

export interface JobType {
    id?: number;
    label?: string;
    value: string;
    tag: string
}

export interface ButtonProps {
    color: string;
    children: string;
    onClick?: MouseEventHandler
}

export interface InputGroupProps {
    placeholder: string;
    header?: boolean
}

export interface FilterHeadProps extends FilterCheckboxProps{
    name: string;
    header?: boolean;
}

export interface FilterCheckboxProps {
    options?: JobType[];
}

export interface JobsInterface {
    id: number;
    image: string;
    title: string;
    company: string;
    location: string;
    summary: string;
    salaryMin: number;
    salaryMax: number;
    market: string; 
    datePosted: string;
    jobType: string;
    experience: string;
    qualifications: string[];
    skills: string[];
}

export interface stateProps {
    state: string[];
    setState: Dispatch<SetStateAction<string[]>>;
}

export interface filterTagProps {
    [key: string]: stateProps;
}

export interface FilterDataInterface {
    jobList: JobsInterface[];
    result: JobsInterface[];
    search: string;
    locationCheckedItems: string[];
    jobTypeCheckedItems: string[];
    experienceCheckedItems: string[];
    searchedJob: string;
    setResult: Dispatch<SetStateAction<JobsInterface[]>>;
    setSearch: Dispatch<SetStateAction<string>>;
    setLocationCheckedItems: Dispatch<SetStateAction<string[]>>;
    setJobTypeCheckedItems: Dispatch<SetStateAction<string[]>>;
    setExperienceCheckedItems: Dispatch<SetStateAction<string[]>>;
    setSearchedJob: Dispatch<SetStateAction<string>>;
    handleLocationFilter: () => void;
    handleJobTypeFilter: () => void;
    handleExperienceFilter: () => void;
    handleHeaderSubmit: (e: any) => void;
    filterTag: filterTagProps
}