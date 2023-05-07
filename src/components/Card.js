import React from 'react'
import './Card.css'
import {AiFillHeart} from 'react-icons/ai'
import {BiSave} from 'react-icons/bi'
import {GrShareOption} from 'react-icons/gr'
import {FiTrash2} from 'react-icons/fi'
const Card = ({props}) => {

  return (
    <div className="card">
        <div className="card-description">
            <div className="cardo">
                <div className="dp" style={{}}></div>
                <div className="name" style={{margin:"0 10px"}}>
                    <strong>{props.name}</strong>
                </div>
            </div>
            <div className="timing">
                {props.date}
            </div>  
        </div>
        <div className="post-container">
            <p>{props.description}</p>
        </div>
        <div className="sharing">
            <textarea className="sharing-obj" defaultValue={"comment here"}></textarea>
            <AiFillHeart className="sharing-obj" />
            <BiSave className="sharing-obj" />
            <GrShareOption className="sharing-obj" />
            <FiTrash2 className="sharing-obj"/>
        </div>
    </div>
  )
}

export default Card