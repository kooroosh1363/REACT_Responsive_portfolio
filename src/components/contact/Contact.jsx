import React from 'react'
import "./Contact.css"
import Common from '../common/Common'
import image1 from "../../images/slide3.png"
import { BiMap } from "react-icons/bi";
import { BsEnvelopeAt } from "react-icons/bs";
import { BsTelephoneInboundFill } from "react-icons/bs";


const Contact = () => {
  return (
    <>
      <section className='contact create '>
        <div className="container">
            <div className="contentItem">
                <Common title="Contact"/>
                <div className="content flex">
                    <div className="rightContent">
                        <img src={image1} alt="" />
                    </div>

                    <div className="leftContent">
                        <span>
                            <BiMap></BiMap>
                            Lorem ipsum dolor sit amet.
                        </span>
                        <br/>
                        <br/>

                        <span>
                            <BsEnvelopeAt className="icon_contact"></BsEnvelopeAt>
                            Lorem ipsum@dolorsitamet.
                        </span>
                        <br/>
                        <br/>

                        <span>
                            <BsTelephoneInboundFill className="icon_contact"></BsTelephoneInboundFill>
                            +000000000000000
                        </span>
                        

                        <form>
                            <input type="text"  placeholder='Name...' id=''/>
                            <input type="text"  placeholder='Email...' id=''/>
                            <input type="text"  placeholder='interested...' id=''/>

                            <textarea  cols="30" rows="10">
                                Message : 
                            </textarea>
                            <button className='btn_init'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}


export default Contact
