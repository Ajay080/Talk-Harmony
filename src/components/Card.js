import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { GrShareOption } from "react-icons/gr";
import "./Card.css";

const Card = ({ props }) => {
  return (
    <div className="card">
      <div className="card-description">
        <div className="cardo">
          <div className="dp" style={{}}></div>
          <div className="name" style={{ margin: "0 10px" }}>
            <strong>{props.username}</strong>
          </div>
        </div>
        <div className="timing">{new Date(props.date).toDateString()}</div>
      </div>
      <div className="post-container">
        <p>{props.text}</p>
      </div>
      <div className="sharing">
        <textarea
          className="sharing-obj"
          placeholder={"comment here"}
        ></textarea>
        <AiFillHeart className="sharing-obj" />
        <BiSave className="sharing-obj" />
        <GrShareOption className="sharing-obj" />
        <FiTrash2 className="sharing-obj" />
      </div>
    </div>
  );
};

export default Card;
