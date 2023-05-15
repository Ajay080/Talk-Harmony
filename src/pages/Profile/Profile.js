import './Profile.css'
import React from 'react'
import FrontImage from '../../components/front_image.png'
import {useNavigate} from 'react-router-dom';
import NavbarAfter from '../../components/NavbarAfter1/NavbarAfter1'
import Pointers from '../../components/pointers/Pointers';



const Profile = () => {
    const navigate = useNavigate();
    const data = [
        { name: "First Name", age: ""},
        { name: "Last Name", age: ""},
        { name: "E-mail", age: ""},
        { name: "Mobile number", age: ""},
        { name: "Bio", age: ""},
        { name: "Password", password:""}
      ]
        
  return (
    <>
    <NavbarAfter/>
    <Pointers/>
    <div className="profile">
        <h1> Profile </h1>
        <div className="profile-container">
            <div className="profile-left">
                <table>
                    {data.map((val, key) => {
                    return (
                        <tr className="table-row" key={key}>
                        <th className="table-detail-left">{val.name}</th>
                        <td className="table-detail-right">{val.age}</td>
                        </tr>
                    )
                    })}
            `</table>
            </div>

            <div className="profile-img">
                {/* <div className="profile-img"></div> */}
            </div>
        </div>
        <div className="profile-edit-button">
            <button  onClick={()=>{navigate("/ProfileEdit")}}>Edit</button>
        </div>
    </div>
    </>
  )
}

export default Profile