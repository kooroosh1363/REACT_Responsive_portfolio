import React from 'react'
import Common from '../common/Common'
import "./Work.css"
import image from "../../images/slide1.png"
import { work } from '../../allData';

const Work = () => {
    return (
        <>
            <section className='work create'>
                <div className="container">
                    <div className="contentItem">
                        <Common title="Empolyee" />

                        <div className="content flex">
                            <div className="leftContent">
                                {work.map((val) => {
                                    return (
                                        <>
                                            <div className="box flex">
                                                <button className='btn_init'>
                                                    {val.years}
                                                </button>

                                                <h2>
                                                    {val.company}
                                                    <p>{val.desc}</p>
                                                </h2>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>

                            <div className="rightContent">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work

