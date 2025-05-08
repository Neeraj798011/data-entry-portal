import '../css/Apply.css'
import { useNavigate } from 'react-router-dom';
const Apply = ()=>{
    const usenavigate = useNavigate();
    return(
        <>
        
        
        <div id="Apply_home_main_div">
         
      <div id="apply_categries_div">
  
    <form id="job-application-form">
        <h5>Job Application Form</h5>


        <section>

            <label>First Name*</label>
            <input type="text" id="first-name" name="firstName" required/>
            <label>Last Name*</label>
            <input type="text" id="last-name" name="lastName" required/>
            <label>Father Name*</label>
            <input type="text" id="last-name" name="lastName" required/>

            
                <label>Gender*</label>
                <select id="job-type" name="jobType" required>
                    <option value="">Select Gender</option>
                    <option value="full-time">Male</option>
                    <option value="part-time">Female</option>
                    <option value="remote">Other</option>

                </select>

                <label>Mobile No*</label>
                <input type="number" id="phone" name="phone" required/>

                <label>Aadhar No*</label>
                <input type="number" id="phone" name="phone" required/>

                <label>Email id*</label>
                <input type="email" id="email" name="email" required/>

            </section>

            <section>
                <label>Select Your Educations*</label>
                <select id="select_Country" class="select_inp" required>
                    <option value="">Select Educations*</option>
                </select>

                
                <label>Work Mode</label>
                <br/>

                <select id="select_state" class="select_inp" required>

                    <option value="">Select Jos Time</option>

                </select>
                <select id="select_city" class="select_inp" required>
                    <option value="">Auto Select Salary</option>
                </select>

            </section>

            <section>


                <label>Upload Your Qualification Mark Sheets*</label>
                <input type="file" id="resume" name="resume" required/>

              </section>

            <section>
                <label>Message Send:</label>
                <textarea id="cover-letter" name="coverLetter" required></textarea>
            </section>



            <button type="submit">Apply Now</button>
            <button type="submit" id="Pay_bow_btn">Pay Now</button>
            <br/>
            <br/>

            <p>Please  <a onClick={()=>{usenavigate('/registration')}}>Registations Now</a></p>
    </form>
</div>
<div id="apply_image_div">



    <img src="https://www.flexjobs.com/blobcontent/flexjobs/images/how-different.png" alt=""/>
</div>

</div>


        
        </>
    )
}

export default Apply;