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
    [key: string]: any;
    id: number;
    image: string;
    title: string;
    company: string;
    location: string
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
    change: Boolean,
    tag: string;
    setState: Dispatch<SetStateAction<string[]>>;
    stateChange: Dispatch<SetStateAction<boolean>>;
}

export interface filterTagProps {
    [key: string]: stateProps;
}

export interface FilterDataInterface {
    jobList: JobsInterface[];
    result: JobsInterface[];
    search: string;
    searchedJob: string;
    filterTag: filterTagProps
    setResult: Dispatch<SetStateAction<JobsInterface[]>>;
    setSearch: Dispatch<SetStateAction<string>>;
    setSearchedJob: Dispatch<SetStateAction<string>>;
    handleHeaderSubmit: (e: any) => void;
}