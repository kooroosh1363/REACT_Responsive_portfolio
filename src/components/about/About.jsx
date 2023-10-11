import React from 'react'
import { about } from '../../allData';
import "./About.css"
import Common from '../common/Common';

const About = () => {
    return (
        <>
            <section className='about'>
                <div className="container">
                    <div className="contentItem">
                        <Common title="About Me" />
                        {about.map((data) => {
                            const { name, email, phone, fax, dob, nation, heading, title, desc } = data
                            return (
                                <>
                                    <div className="content flex">
                                        <div className="leftContent">
                                            <div className="flex details">
                                                <h2 className="topH2">
                                                    Name :
                                                </h2>
                                                <h2>{name}</h2>
                                            </div>
                                            <div className="flex details">
                                                <h2 className="topH2">
                                                    Email :
                                                </h2>
                                                <h2>{email}</h2>
                                            </div>
                                            <div className="flex details">
                                                <h2 className="topH2">
                                                    Phone :
                                                </h2>
                                                <h2>{phone}</h2>
                                            </div>
                                            <div className="flex details">
                                                <h2 className="topH2">
                                                    Fax :
                                                </h2>
                                                <h2>{fax}</h2>
                                            </div>
                                            <div className="flex details">
                                                <h2 className="topH2">
                                                    Date of Birth :
                                                </h2>
                                                <h2>{dob}</h2>
                                            </div>
                                            <div className="flex details">
                                                <h2 className="topH2">
                                                    Nation :
                                                </h2>
                                                <h2>{nation}</h2>
                                            </div>
                                            <button className='btn_init'>
                                                DOWNLOAD RESUME
                                            </button>
                                        </div>

                                        <div className="rightContent">
                                            <div className="heading">
                                                <h1>{heading}</h1>
                                            </div>
                                            <div className="title">
                                                <span>Hello</span>
                                                <h3>{title}</h3>
                                                <p>{desc}</p>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })}


                    </div>
                </div>

            </section>

        </>
    )
}

export default About
