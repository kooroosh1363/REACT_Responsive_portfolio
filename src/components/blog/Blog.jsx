import React from 'react'
import "./Blog.css"
import Common from '../common/Common'
import { blog } from '../../allData';




const Blog = () => {
    return (
        <>
            <section className='blog create'>
                <div className="container">
                    <div className="contentItem">
                        <Common title="Blog" />

                        <div className="box">
                            {blog.map((val) => {
                                return (
                                    <>
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Blog
