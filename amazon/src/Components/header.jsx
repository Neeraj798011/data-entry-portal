import { useNavigate } from 'react-router-dom';
import '../css/header.css'
const Header = () => {

    const usenavigate = useNavigate();
    return (
        <>
            


            <div id="LOGO_MAIN_DIV">


<div id="header_homepage_Logo_div">

  <img src="https://www.data-entry-india.com/images/Data-Entry-India-Logo.png" alt=""/>


</div>


<div id="header_homepage_items_div">

 
<p>Welcom To My Websit    <a href="">   Data Entry Jobs </a></p>
</div>


</div>


<nav>

  <div id="Logo_div">
  {/* <h1>Uncodemy.com</h1> */}
  </div>



  <div id="logo_nav_text">
 
  

<div id="a_tag_div">

<a onClick={()=>{usenavigate('/')}}>Home</a>

<a onClick={()=>{usenavigate('/About')}}>About Us</a>


<a >Service</a>

<a href="#DATA_COMPANY_all_options">Jobs-Portal</a>

<a href="">Companies</a>

<a onClick={()=>{usenavigate('/userlist')}}>Userlist</a>

<a onClick={()=>{usenavigate('/Contact')}}>Contact Us</a>

</div>

</div>




</nav>

        </>
    );
}
export default Header