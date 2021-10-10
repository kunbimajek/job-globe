import { JobsInterface, JobType } from './types'

export const dropdownOptions = [
    {id: 1, label: 'Newest Jobs', value: 'red'},
    {id: 2, label: 'Actively Hiring', value: 'green'},
    {id: 3, label: 'Highest Paying', value: 'blue'}
]

export const locationOptions: JobType[] = [
    {id: 1, label: 'Mars', value: 'mars', tag: 'location'},
    {id: 2, label: 'Earth', value: 'earth', tag: 'location'}
]

export const jobTypes: JobType[] = [
    {id: 1, label: 'Full Time', value: 'full time', tag: 'jobType'},
    {id: 2, label: 'Part Time', value: 'part time', tag: 'jobType'},
    {id: 3, label: 'Contract', value: 'contract', tag: 'jobType'},
    {id: 4, label: 'Internship', value: 'internship', tag: 'jobType'}
]

export const experience: JobType[] = [
    {id: 1, label: 'Junior', value: 'junior', tag: 'experience'},
    {id: 2, label: 'Intermediate', value: 'intermediate', tag: 'experience'},
    {id: 3, label: 'Advanced', value: 'advanced', tag: 'experience'}
]

export const jobs: JobsInterface[] = [
    {
        id: 1, 
        image: '/logo.png', 
        title: 'Freelancer', 
        company: 'Google', 
        location: 'Mars', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 5000, 
        salaryMax: 7000, 
        market: 'Technology', 
        datePosted: '12th Jun 2021', 
        jobType: 'Part Time',
        experience: 'Junior',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
    {
        id: 2, 
        image: '/logo.png', 
        title: 'Bartender', 
        company: 'Amazon', 
        location: 'Earth', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 1000, 
        salaryMax: 2000, 
        market: 'Entertainment', 
        datePosted: '12th Jun 2021', 
        jobType: 'Full Time',
        experience: 'Intermediate',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
    {
        id: 3, 
        image: '/logo.png', 
        title: 'Frontend Developer', 
        company: 'Amazon', 
        location: 'Earth', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 10000, 
        salaryMax: 20000, 
        market: 'Technology', 
        datePosted: '12th Jun 2021', 
        jobType: 'Full Time',
        experience: 'Advanced',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
    {
        id: 4, 
        image: '/logo.png', 
        title: 'Nurse', 
        company: 'City Height Hospital', 
        location: 'Mars', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 1000, 
        salaryMax: 2000, 
        market: 'Health', 
        datePosted: '12th Jun 2021', 
        jobType: 'Full Time',
        experience: 'Junior',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
    {
        id: 5, 
        image: '/logo.png', 
        title: 'Gym Coach', 
        company: 'Fitness Guru', 
        location: 'Earth', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 80000, 
        salaryMax: 100000, 
        market: 'Fitness', 
        datePosted: '12th Jun 2021', 
        jobType: 'Full Time',
        experience: 'Advanced',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
    {
        id: 6, 
        image: '/logo.png', 
        title: 'Artiste', 
        company: 'Microsoft', 
        location: 'Mars', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 5000, 
        salaryMax: 7000, 
        market: 'Music', 
        datePosted: '12th Jun 2021', 
        jobType: 'Part Time',
        experience: 'Junior',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
    {
        id: 7, 
        image: '/logo.png', 
        title: 'Backend Developer', 
        company: 'Apple', 
        location: 'Earth', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 1000, 
        salaryMax: 2000, 
        market: 'Technology', 
        datePosted: '12th Jun 2021', 
        jobType: 'Full Time',
        experience: 'Intermediate',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
    {
        id: 8, 
        image: '/logo.png', 
        title: 'Pianist', 
        company: 'Stumo Stadio', 
        location: 'Earth', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 10000, 
        salaryMax: 20000, 
        market: 'Music', 
        datePosted: '12th Jun 2021', 
        jobType: 'Full Time',
        experience: 'Advanced',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
    {
        id: 9, 
        image: '/logo.png', 
        title: 'Architect', 
        company: 'MJ Real Estate Agency', 
        location: 'Mars', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 1000, 
        salaryMax: 2000, 
        market: 'Health', 
        datePosted: '12th Jun 2021', 
        jobType: 'Full Time',
        experience: 'Junior',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
    {
        id: 10, 
        image: '/logo.png', 
        title: 'Cleaner', 
        company: 'HomeCare Group', 
        location: 'Earth', 
        summary: 'We are looking for a freelancer to work on a variet of projects for our team in Belruit. MS word is a plus, and so if you are a good freelance please get in touch as we are actively hiring at the momemt. Let us know right away', 
        salaryMin: 80000, 
        salaryMax: 100000, 
        market: 'Household', 
        datePosted: '12th Jun 2021', 
        jobType: 'Full Time',
        experience: 'Advanced',
        qualifications: ['Bachelor’s degree or equivalent experience', '5+ years software engineering experience', 'Proficient in Python, JavaScript'],
        skills: ['Freelancing', 'Hardworking', 'Wonderful', 'Innovative', 'Smart']
    },
]