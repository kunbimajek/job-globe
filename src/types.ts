import { MouseEventHandler,Dispatch,SetStateAction } from "react";

export interface JobType {
    id?: number;
    label?: string;
    value: string;
    key: string;
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

export interface FilterDataInterface {
    jobList: JobsInterface[];
    result: JobsInterface[];
    search: string;
    key: string;
    checkedItems: string[];
    searchedJob: string;
    setResult: Dispatch<SetStateAction<JobsInterface[]>>;
    setSearch: Dispatch<SetStateAction<string>>;
    setKey: Dispatch<SetStateAction<string>>;
    setCheckedItems: Dispatch<SetStateAction<string[]>>;
    setSearchedJob: Dispatch<SetStateAction<string>>;
    handleFilter: () => void;
    handleHeaderSubmit: (e: any) => void;
}