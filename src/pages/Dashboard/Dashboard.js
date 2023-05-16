import React from 'react'
import Card1 from './Card1.png'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import '../../components/Card'
import Card from '../../components/Card'
import {useState} from 'react';
import NavbarAfter1 from '../../components/NavbarAfter1/NavbarAfter1'
import Pointers from '../../components/pointers/Pointers';

const Dashboard = () => {
  let navigate = useNavigate();

  const val=[
    {
        "id":"1",
        "name":"Ajay Singh",
        "date":"10-feb-2018",
        "description":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    },
    {
      "id":"1",
      "name":"Vijay Singh",
      "date":"10-feb-2018",
      "description":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    },
    {
      "id":"1",
      "name":"Vijay Singh",
      "date":"10-feb-2018",
      "description":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    }
  ]
  function DisplayData(){
    return(
    val.map((progps)=>{
    return <Card props={progps}/>
  }))}
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <>
    <NavbarAfter1/>

    <Pointers/>
    <div className="dash-container">
      <div className="dashboard-header">
        <div className="dashboard-profile">
          <div className ="dashboard-dp">
            <div className="dp-out">
              <img src={Card1} alt="Dp"/>
            </div>
            <h3><strong>Ajay Singh</strong></h3>
          </div>
          <div className="dashboard-description">
            <p className="description-bio-head">Bio</p>
            <p className="description-bio">
            Ambivert
            <br/>
            #hermit
            <br/>
            Lob: Designs and Sketches
            <br/>
            Vit'24
            <br/>
            You will build a small tic-tac-toe game
            during this tutorial.This tutorial does not assume any 
            existing React knowledge. 
            
            </p>
          </div>
        </div>
        <div className="dashboard-stats">
          <div>
          <div className="dashboard-posts">
            <h2>299</h2>
            <p>Post</p>
          </div>
          <div className="dashboard-likes">
            <h2>299</h2>
            <p>Likes</p>
          </div>
          </div>
          <div>
          <div className="dashboard-saved">
            <h2>299</h2>
            <p>Saved</p>
          </div>
          <div className="dashboard-comments">
            <h2>19k</h2>
            <p>Comments</p>
          </div>
          </div>
        </div>
      </div>
      <div className="dashboard-collection">
        <button id="but" onClick={handleClick}>Post</button>
        <button id="but" onClick={handleClick}>Saved</button>
        <button id="but" type="button" onClick={handleClick}>Archieves</button>
      </div>
      {isShown && 
          <DisplayData/>}
      
      {/* <hr/> */}

    </div>
    </>
  )
}

export default Dashboard