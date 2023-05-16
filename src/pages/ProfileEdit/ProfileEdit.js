import './ProfileEdit.css'
import React from 'react'
import FrontImage from '../../components/front_image.png'
import {useNavigate} from 'react-router-dom';
import NavbarAfter from '../../components/NavbarAfter1/NavbarAfter1'
import Pointers from '../../components/pointers/Pointers';



const ProfileEdit = () => {
    const navigate = useNavigate();
    const data = [
        { name: "Username", age: "Ajay Singh"},
        { name: "First Name", age: "Ajay"},
        { name: "Last Name", age: "Singh"},
        { name: "E-mail", age: "ajay@gmail.com"},
        { name: "Bio", age: "Hi I am using TalkHarmony. You should also use it"},
      ]
        
  return (
    <>
    <NavbarAfter/>
    <Pointers/>
    <div className="profile-edit">
        <h1> Profile </h1>
        <div className="profile-container-edit">
            <div className="profile-left-edit">
                <form className="sdj">

                <table>
                    {data.map((val, key) => {
                    return (
                        <tr className="table-row" key={key}>
                        <th className="table-detail-left">{val.name}</th>
                        <td className="table-detail-right"><input placeholder={val.age} /></td> 
                        </tr>
                    )
                    })}
                    
            </table>
                </form>
            </div>

            <div className="profile-right-edit">
                <div className="profile-img-edit"></div>
                <div className="profile-img-button-edit">
                    <button  onClick="">Upload</button>
                </div>
            </div>
        </div>
        <div className="profile-edit-button-edit">
            <button  onClick={()=>{navigate("/ProfileEdit")}}>Save</button>
        </div>
    </div>
    </>
  )
}

export default ProfileEdit

// import React from 'react'
// import {useNavigate} from 'react-router-dom';
// import './ProfileEdit.css'
// import NavbarAfter1 from '../../components/NavbarAfter1/NavbarAfter1'

// const ProfileEdit = () => {
//     const navigate = useNavigate();
//     const data = [
//         { name: "First Name", age: "Ajay"},
//         { name: "Last Name", age: "Singh"},
//         { name: "E-mail", age: "ajay@gmail.com"},
//         { name: "Mobile number", age: "2389911"},
//       ]
        
//   return (
//     <>
//     <NavbarAfter1/>
//     <div className="profile-edit">
//         <h1> Profile </h1>
//         <div className="profile-container-edit">
//             <div className="profile-left-edit">
//                 <table>
//                     {data.map((val, key) => {
//                     return (
//                         <tr className="table-row" key={key}>
//                         <th className="table-detail-left">{val.name}</th>
//                         <input className="table-detail-right set-edit" defaultValue={val.age}></input>
//                         </tr>
//                     )
//                     })}
//             `</table>
//             </div>
//             <div className="profile-img-edit"> 
//                 <div className="profile-img-edit-edit">
                    
//                 </div>
//                 <div className="profile-img-but-edit">
//                     <button  onClick="">Upload</button>
//                 </div>
//             </div>
//         </div>
//         <div className="profile-edit-button-edit">
//             <button  onClick={()=>{navigate("/Profile")}}>Save</button>
//         </div>
//     </div>
//     </>
//   )
// }

// export default ProfileEdit