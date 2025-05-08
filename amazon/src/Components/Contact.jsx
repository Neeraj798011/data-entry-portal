import '../css/Contact.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Contact =()=>{

    return(
        <>
      
     
        <div id="Contact_home_main_div">
       <div id="small_div">
       <h6>Contact Us</h6>
       </div>


       <div id="small_image_div">
       <img src="https://vsynergize.com/wp-content/uploads/2023/11/About-hero-img-5.webp" alt="" />
</div>
        </div>

        <div id="SOCIAL_MEADIA">
    <a href="" class="fa fa-facebook"></a>

    <a href="#" class="fa fa-twitter"></a>

   <a href="#" class="fa fa-linkedin"></a>

   <a href="#" class="fa fa-youtube"></a>

    <a href="#" class="fa fa-instagram"></a>

</div>
        <div id="marque_div">

      <marquee behavior="" direction="">Welcome to my website page Bihar Data Entry     Email : bihardataentry@gmail.com</marquee>
    </div>



        <div id="Contact_categries_main_div">

          <div id="Contact_form_div">
          <h1> Contact Us:</h1>

            <form action=""id="form">


            <label for="first_name">First Name*</label>
           <input type="text"name='first_name'/>

         <label for="last_name">Last Name*</label>
        <input type="text"name='last_name'/>

        <label for="job_title">Job Title</label>
        <input type="text"name="job_title" required/>

        <label for="email">Email ID*</label>
      <input type="email" name="email" required/>

     
      <label for="Organization">Organization</label>
      <input type="text"name="Organization" required/>

      <label for="mobile_no">Mobile No*</label>
      <input type="number"name="mobile_no" required/>

         
         <label for="message">Message Send</label>
                <textarea id="cover-letter" name="coverLetter" required></textarea>
           

<input type="submit"id='input_btn'/>
      

            </form>

          </div>




          <div id="Contact_address_box">

            <h1>
Bihar-Data-Entry.com
.</h1>

<p>Floor 3, Vardhman Times Plaza<br></br><br></br>

Plot 13, DDA Community Centre
<br></br><br></br>
Road 44, Pitampura
<br></br><br></br>
New Delhi - 110 034, INDIA</p>

<h3>Mobile No:<a href="">91
    + -783,78562,224</a></h3>

    <p>Phone:+91-11-42644425-29</p>

    <h3>Email Id:<a href="">bihardataentry@gmail.com</a></h3>



<h1>Bihar Address --</h1>

    <p>Floor 8, Darbhanga Raja Place<br></br><br></br>

Plot 22, Mthila University,Darbhanga
<br></br><br></br>
Road 51, Darbhanga
<br></br><br></br>
Bihar - 847227, INDIA</p>

<h3>Mobile No:<a href="">91
    + -815,8943,777</a></h3>

    <p>Phone:+91-11-237623-29</p>

    <h3>Email Id:<a href="">bihardataentry@gmail.com</a></h3>

          </div>

        </div>
        
        </>
    )
}

export default Contact;