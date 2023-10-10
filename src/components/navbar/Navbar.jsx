import React, { useState } from 'react'
import "./Nvabar.css"
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";



const Navbar = () => {

    const [sideBar, setSideBar] = useState(false)
    return (
        <>
            <header>
                <div className="container bsFlex">
                    <div className="logo">
                        <h1>RAAD<span>WEB</span>SHOP</h1>
                    </div>

                    <nav>
                        <button className='toggle' onClick={() => setSideBar(!sideBar)}>
                            {sideBar ? <FiX></FiX> : <FaBars></FaBars>}
                        </button>

                        <ul className={sideBar ? "link_navSideBar" : "links_nav"} onClick={() => setSideBar(false)}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">creative</a></li>
                            <li><a href="/">Educations</a></li>
                            <li><a href="/">Works</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar
