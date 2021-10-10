import { FC, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import InputGroup from './InputGroup'

const Header: FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [stickySearch, setStickySearch] = useState(false);

    const headerRef =  useRef<HTMLDivElement>(null)

    useEffect(() => { 

        const handleScroll = () => {
            if (headerRef === null) {
                
            } else {

                const offset = window.scrollY;
                const headerHeight = headerRef.current !== null && headerRef.current.clientHeight - 50
                offset > 0
                    ? setScrolled(true) 
                    : setScrolled(false);
                offset > headerHeight 
                    ? setStickySearch(true) 
                    : setStickySearch(false);
            }
        }

        window.addEventListener('scroll', handleScroll) 
    }, [])

    let placeholder = "Search by Job Title or Company Name";

    const navScrolled = scrolled ? 'nav scrolled' : 'nav'
    const navStickySearch = stickySearch ? 'scrolled-shadow' : ''

    return (
        <div className="header" ref={headerRef}>
            <div className={`${navScrolled} ${navStickySearch}`}>
                <div className="container d-flex jc-sb al-i-c">
                    <Image 
                        className="logo" 
                        src="/logo.svg" 
                        alt="Job Globe Logo" 
                        width={148} 
                        height={50} />
                    <div className={`transition ${stickySearch ? 'op-1' : 'op-0'}`}>
                        <InputGroup placeholder={placeholder} header/>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1>Best Jobs on Earth... and Mars</h1>
                <InputGroup placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default Header
