import React from 'react';
import "./Contact.css";
import Common from '../common/Common';
import image1 from "../../images/slide3.png";
import { BiMap } from "react-icons/bi";
import { BsEnvelopeAt } from "react-icons/bs";
import { BsTelephoneInboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <section className='contact create'>
        <div className="container">
          <div className="contentItem">
            {/* Common component for the title "Contact" */}
            <Common title="Contact"/>
            <div className="content flex">
              <div className="rightContent">
                <img src={image1} alt="" />
              </div>

              <div className="leftContent">
                {/* Contact Address */}
                <span>
                  <BiMap></BiMap>
                  Lorem ipsum dolor sit amet.
                </span>
                <br/>
                <br/>

                {/* Contact Email */}
                <span>
                  <BsEnvelopeAt className="icon_contact"></BsEnvelopeAt>
                  Lorem ipsum@dolorsitamet.
                </span>
                <br/>
                <br/>

                {/* Contact Phone */}
                <span>
                  <BsTelephoneInboundFill className="icon_contact"></BsTelephoneInboundFill>
                  +000000000000000
                </span>
                
                <form>
                  {/* Input for Name */}
                  <input type="text" placeholder='Name...' id=''/>
                  {/* Input for Email */}
                  <input type="text" placeholder='Email...' id=''/>
                  {/* Input for Interest */}
                  <input type="text" placeholder='interested...' id=''/>

                  {/* Textarea for Message */}
                  <textarea cols="30" rows="10">
                    Message : 
                  </textarea>
                  {/* Submit Button */}
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
  );
}

export default Contact;