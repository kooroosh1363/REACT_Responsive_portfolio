import React from 'react'
import Common from '../common/Common'
import { education } from '../../allData';
// import { BsQuote } from "react-icons/bs";
// import { FaArrowRight } from "react-icons/fa";
import image from "../../images/slide1.png"

const Education = () => {
  return (
    <>
      <section className='education create'>
        <div className="container">
          <div className="contentItem">
            <Common title="Education" />

            <div className="content flex">

              <div className="rightContent">
                <img src={image} alt="" />
              </div>

              <div className="leftContent">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque molestias impedit, repellendus minima veniam dolore illo est ullam laborum eligendi.</p>

                {education.map((val) => {
                  return (
                    <>
                      <div className="box flex">
                        <h1>{val.id}</h1>
                        <h2>
                          {val.name} 
                          <br/>
                          <span>{val.program}</span>
                          <br/>
                          <span>{val.year}</span>
                        </h2>
                      </div>
                    </>
                  )
                })}

              </div>


            </div>

          </div>
        </div>
      </section>



    </>
  )
}

export default Education





