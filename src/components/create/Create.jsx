import React from 'react'
import "./Create.css"
import Common from '../common/Common'
import { BsQuote } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { creative } from '../../allData';
const Create = () => {
    return (
        <>
            <section className='create'>
                <div className="container">
                    <div className="contentItem">
                        <Common title="Create"/>
                        {creative.map((val) => {
                            return (
                                <>
                                <div className="content flex">
                                    <div className="leftContent">
                                        <BsQuote className='quote'></BsQuote>
                                        <h1>{val.heading}</h1>
                                        <h3>{val.title}</h3>
                                        <p>{val.desc}</p>

                                        <button className='btn_init'>
                                            Download Resume <FaArrowRight/>
                                        </button>
                                    </div>

                                    <div className="rightContent">
                                        <img src={val.cover} alt="" />
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

export default Create
