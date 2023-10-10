import React from 'react'
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dataHome}  from '../../allData';




const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <section className='home'>
                <div className="container">
                    <Slider {...settings}>
                        {dataHome.map((val) => {
                            const { name, desc, cover, image } = val
                            return (
                                <>
                                    <div className="contentItem bs_flex">
                                        <div className="left">
                                            <h1>{name}</h1>
                                            <p></p>
                                            <span></span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </Slider>
                </div>

            </section>

        </>
    )
}

export default Home
