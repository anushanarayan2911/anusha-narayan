import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Sidebar from '../components/SideBar';
import BlogComponent from '../components/Blog'

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <BlogComponent/>
        </>
    )
}

export default Blog