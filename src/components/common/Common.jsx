import React from 'react'
import { FiMinus } from "react-icons/fi";
import "./Common.css"
const Common = ({title}) => {
  return (
    <>
    <div className="headingSide">
        <h1>
            <FiMinus className='minus'></FiMinus>
            {title}
        </h1>
    </div>
      
    </>
  )
}

export default Common
