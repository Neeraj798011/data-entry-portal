import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Userlist.css'
import axios from 'axios'
const Userlist = ()=>{
    const [userData,getUserData] = useState('')
    useEffect(()=>{
        userlist()
    },[])

    const navigate = useNavigate();
	const handleEdit=(id)=>{
        	navigate('/edit/'+id)
    	}
    const userlist = ()=>{
        axios.get('https://api.uncodecart.com/users/userlist').then((response)=>{
            getUserData(response.data.message)
        })
    }
    const handleDelete = (id)=>{
        console.log(id)
        axios.delete('https://api.uncodecart.com/users/deleteuser/'+id).then((response)=>{
            console.log(response)
            userlist()
        })
    }

   

    return(
        <>
        <table>
        <tr><th>Users id</th><th>First name</th><th>Last name</th><th>Mobile No</th><th>Email</th><th>Password</th><th>Action</th></tr>
    {userData && userData.map((User)=>(
        
        <tr>
            <td>{User.users_id}</td>
            <td>{User.firstname}</td>
            <td>{User.lastname}</td>
            <td>{User.mobileno}</td>
            <td>{User.email}</td>
            <td>{User.password}</td>

            <td>
                <input type='button'value="Delete"onClick={()=>{handleDelete(User.users_id)}}/>
                <input type='button' value="Edit" class="actionbutton" onClick={()=>{handleEdit(User.users_id)}}/>

            </td>
        </tr>
    ))}
        
        
        </table>
        </>
    );
}

export default Userlist