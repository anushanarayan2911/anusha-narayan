import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Sidebar from "../components/SideBar";
import CoachingComponent from "../components/Coaching";

const Coaching = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <CoachingComponent/>
        </>
    )
}

export default Coaching