import { useEffect, useState } from 'react'
import '../css/Registations.css'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
const Registration = ()=>{
    const location = useLocation()
    const params = useParams();
    const [firstname ,getfirstname]= useState('');
    const [mobileno ,getmobileno]= useState('');
    const [email ,getemail]= useState('');
    const [password ,getpassword]= useState('');
    const [lastname ,getlastname]= useState('');
    const [form_name,getform_name]= useState('');
    const [button_name,getbutton_name] = useState('');
    const handleFirstname = (event) =>{
        getfirstname(event.target.value)  
    }
    const handleLastname = (event)=>{
        getlastname(event.target.value)
    }
    const handleMobileno = (event)=>{
        getmobileno(event.target.value)
    }
    const handleEmail = (event)=>{
        getemail(event.target.value)
    }
    const handlePassword = (event)=>{
        getpassword(event.target.value)
    }
//    const [Msg, setMessage] = useState(false);
    


    const handleSubmit=(event)=>{
        event.preventDefault();
        let formData = {firstname:firstname,lastname:lastname,mobileno:mobileno,email:email,password:password}
        if(location.pathname.split('/')[1] == 'login'){
            alert("Your Data Submit Successful");
            axios.post('https://api.uncodecart.com/users/login',formData).then((response)=>{
                console.log(response)
                localStorage.setItem('users_id',response.data.message[0].users_id)
                localStorage.setItem('email',response.data.message[0].email)
                localStorage.setItem('users_id',response.data.message[0].users_id)

             
            })

        }else{
            axios.post('https://api.uncodecart.com/users/registration',formData).then((response)=>{
                console.log(response)
              

        
        
            })
        }

    }


    
    
    console.log(location.pathname.split('/')[1]);
    useEffect(()=>{
        if(location.pathname.split('/')[1] == 'login'){
            getform_name('Login form')
            getbutton_name('Login')
            
        }
       
        if(location.pathname.split('/')[1] == 'registration'){
            getform_name('Registration form')
            getbutton_name('Registration')
        }

     
        if(location.pathname.split('/')[1] == 'edit'){

            console.log(params.id)
            axios.get('https://api.uncodecart.com/users/singleuserlist/'+params.id).then((response)=>{
                getfirstname(response.data.message[0].firstname)
                getlastname(response.data.message[0].lastname)
                getmobileno(response.data.message[0].mobileno)
                getemail(response.data.message[0].email)
                getpassword(response.data.message[0].password)
                
            });

            getform_name('Update form')
            getbutton_name('Update')
           
        }
       

       
    },[])
    return(
        <>
        <div id="form-top-container">
        <div id="form-container">
            <div class="header-form">{form_name}</div>
            <form class="form">
                
        {button_name !='Login' && 
        <>
      
            <div class="input-box">
                <input type="text" placeholder="Enter Your First Name*" value={firstname} onChange={handleFirstname}/>
            </div>

            <div class="input-box">
                <input type="text" placeholder="Enter Your Last Name*" value={lastname} onChange={handleLastname}/>
            </div>


            <div class="input-box">
                <input type="text" placeholder="Enter Your Mobile No*" value={mobileno} onChange={handleMobileno}/>
            </div>
            </>
        }

            <div class="input-box">
                <input type="text" placeholder="Enter Your Email Id*" value={email} onChange={handleEmail}/>
            </div>


            <div class="input-box">
               <input type="text" placeholder="Enter Your Password*" value={password} onChange={handlePassword}/>
            </div>
            
            
            <input type="submit" value={button_name} onClick={handleSubmit}/>
            </form>
            </div>

            <img src="https://www.flexjobs.com/blobcontent/flexjobs/images/how-different.png" alt="" />
        </div>

        </>
    )
}
export default Registration