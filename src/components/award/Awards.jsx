import React from 'react'
import "./Award.css"
import Common from '../common/Common'
import { award } from '../../allData';



const Awards = () => {
  return (
    <div>
      <section className="award create">
        <div className="container">
          <div className="contentItem">
            <Common title="Awards" />

            {award.map((val) => {
              return (
                <>
                  <div className="flex content">
                    <div className="leftContent">
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>

                      <div className="box grid">
                        <div className="img">
                          <img src={val.img1} alt="" />
                        </div>

                        <div className="img">
                          <img src={val.img2} alt="" />
                        </div>

                        <div className="img">
                          <img src={val.img3} alt="" />
                        </div>

                        <div className="img">
                          <img src={val.img4} alt="" />
                        </div>
                      </div>
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
    </div>
  )
}

export default Awards
