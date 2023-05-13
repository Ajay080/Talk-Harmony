import React from 'react'
import {useNavigate} from 'react-router-dom';
import './ProfileEdit.css'
import NavbarAfter1 from '../../components/NavbarAfter1/NavbarAfter1'

const ProfileEdit = () => {
    const navigate = useNavigate();
    const data = [
        { name: "First Name", age: "Ajay"},
        { name: "Last Name", age: "Singh"},
        { name: "E-mail", age: "ajay@gmail.com"},
        { name: "Alternative E-mail", age: "vajay@hmai.vom"},
        { name: "Mobile number", age: "2389911"},
        
      ]
        
  return (
    <>
    <NavbarAfter1/>
    <div className="profile">
        <h1> Profile </h1>
        <div className="profile-container">
            <div className="profile-left-o">
                <table>
                    {data.map((val, key) => {
                    return (
                        <tr className="table-row" key={key}>
                        <th className="table-detail-left">{val.name}</th>
                        <input className="table-detail-right set-edit" defaultValue={val.age}></input>
                        </tr>
                    )
                    })}
            `</table>
            </div>
            <div className="profile-right">
                <div className="profile-img-edit">
                    
                </div>
                <div className="profile-img-but">
                    <button  onClick="">Upload</button>
                </div>
            </div>
        </div>
        <div className="profile-edit-button">
            <button  onClick={()=>{navigate("/Profile")}}>Save</button>
        </div>
    </div>
    </>
  )
}

export default ProfileEdit