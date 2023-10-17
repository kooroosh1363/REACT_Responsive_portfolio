import React from 'react'
import "./portfolio.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { portfolio } from '../../allData';
import Common from '../common/Common'
import { FaMinus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Portfolio = () => {
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
      <section className="portfolio create">
        <div className="container">
          <Slider {...settings}>
            {portfolio.map((val) => {

              return (
                <>
                  <div className="contentItem flex">
                    <Common title="Portfolio" />

                    <div className="rightContent">
                      <img src={val.cover} alt="" />
                    </div>

                    <div className="leftContent">
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>

                      <ul>
                        <li>
                          <FaMinus />{val.p1}
                        </li>

                        <li>
                          <FaMinus />{val.p2}
                        </li>

                        <li>
                          <FaMinus />{val.p3}
                        </li>

                        <li>
                          <FaMinus />{val.p4}
                        </li>

                        <li>
                          <FaMinus />{val.p5}
                        </li>
                      </ul>

                      <button className='btn_init'>
                        visite Website <FaArrowRight/>
                      </button>
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

export default Portfolio
