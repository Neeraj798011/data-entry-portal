
import '../css/home.css'
// import logo from '../All_Images/img.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const usenavigate = useNavigate();
    return (
        <>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    <div id="HOME_MAIN_DIV">


        <div id="home_categries_div">
            <h1>Get Your Dream Job in 28 Days
                21+9 Job Mantra - Placement Oriented Program</h1>


            <p>Only legit jobs. No ads, scams, or junk to sift through. Our team spends 200+ hours/day verifying every job.

                blue-tick
                Unlimited Job Search Resources
                Full access to all features including unlimited jobs, articles, and webinars to help you with your remote job search.</p>

                <a onClick={()=>{usenavigate('/registration')}}><button id="homepage_signup_btn">Registration Now</button></a>

                <a  onClick={()=>{usenavigate('/login')}}><button id="homepage_apply_btn">Login Now</button></a>

                {/* <a onClick={()=>{usenavigate('/Apply')}}><button id="homepage_signup_btn">Apply Now</button></a> */}

              

        </div>
        <div id="SOCIAL_MEADIA">
    <a href="" class="fa fa-facebook"></a>

    <a href="#" class="fa fa-twitter"></a>

   <a href="#" class="fa fa-linkedin"></a>

   <a href="#" class="fa fa-youtube"></a>

    <a href="#" class="fa fa-instagram"></a>

</div>


        <div id="home_image_categries_div">
       <img src="https://www.data-entry-india.com/images/about-pic2.png" alt="" />
        </div>
    </div>

    <div id="marque_div">

      <marquee behavior="" direction="">Welcome to my website page Bihar Data Entry     Email : bihardataentry@gmail.com</marquee>
    </div>







<div id="STEP_MAIN_DIV">


  <div id="step_categries_div">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsKarQayx2b4wV22ev2ybAAn-TiMEI8B5_e7e7z25HxBDSXyYkPzYA0Kfz9mBN77gXguY&usqp=CAU"/>

    <h1>Step 1</h1>
    <p>
      21 Days Powerful Job Ready Training</p>

  </div>



  <div id="step_categries_div">
    <img src="https://thumbs.dreamstime.com/b/live-stream-icon-linear-style-pictogram-isolated-futuristic-design-streaming-video-vector-outline-emblem-logo-238701612.jpg"/>
    <h1>Step 2</h1>
    <p>Give bihardataentry.com  & Communication test online</p>

  </div>



  <div id="step_categries_div">
    <img src="https://thumbs.dreamstime.com/b/track-field-athlete-icon-track-field-athlete-icon-linear-style-sign-mobile-concept-web-design-sprinter-runner-man-141963005.jpg"/>
    <h1>Step 3</h1>
    <p>Get Guaranteed Interview Opportunity With a Company</p>

  </div>



  <div id="step_categries_div">

    <img src="https://img.freepik.com/premium-vector/hand-book-logo-design-education-logo-with-hand-concept-vector-hand-book-logo-design_754537-701.jpg"/>
    <h1>Step 4</h1>
    <p>Crack interviews And Get Placements In Top Companies</p>

  </div>


</div>






<div id="DATA_COMPANY_all_options">
  <h1>Awesome Companies Hiring for Remote Jobs*</h1>
</div>

<div id="DATA_COMPANY_IMAGE_MAIN_DIV">

  <marquee behavior="smooth" direction="left">

   <div id="amazon_div">
    <img src="https://www.flexjobs.com/assets/jctblobcontent/942/primary"/>
   </div>
  </marquee>



    <div id="amazon_div">
      <img src="https://www.flexjobs.com/assets/jctblobcontent/6714/primary"/>
     </div>




  <div id="amazon_div">
    <img src="https://www.flexjobs.com/assets/jctblobcontent/13538/primary"/>
   </div>




  <div id="amazon_div">
    <img src="https://www.flexjobs.com/assets/jctblobcontent/53191/primary"/>
   </div>
 


  
    <div id="amazon_div">
      <img src="https://www.flexjobs.com/assets/jctblobcontent/39940/primary"/>
     </div>

 
</div>



<div id="DATA_COMPANY_IMAGE_MAIN_DIV2">



   <div id="amazon_div">
    <img src="https://www.flexjobs.com/assets/jctblobcontent/3816/primary"/>
   </div>


<div id="amazon_div">
      <img src="https://www.flexjobs.com/assets/jctblobcontent/38862/primary"/>
     </div>




  <div id="amazon_div">
    <img src="https://www.flexjobs.com/assets/jctblobcontent/25894/primary"/>
   </div>




  <div id="amazon_div">
    <img src="https://www.flexjobs.com/assets/jctblobcontent/3696/primary"/>
   </div>



  <marquee behavior="smooth" direction="right">
    <div id="amazon_div">
      <img src="https://www.flexjobs.com/assets/jctblobcontent/1392/primary"/>
     </div>
    </marquee>

</div>




<div id="DATA_COMPANY_IMAGE_MAIN_DIV2">



  <div id="amazon_div">

   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4jDRftC66dZenW721maGrkTJx-K7Ysj-mw&s"/>
  </div>




   <div id="amazon_div">

     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX0AAACECAMAAABLTQsGAAAAzFBMVEX///8nHnkAtvAiGmskG3nR0NQDAHEsJm0Ase++vccAtPDr9/3A5voAsO8AAG8TAHQAAGmlpLUiGHgAAGYfFHfq6+ccEHYWBXQdFGjy+v4hFngZC3b7/f+Yl6zd8fx5zvWH0vWl3PjFxcyY2Pfk5OVjYIvy8vB4dpe75PlXxPPJ6fqCgJ6wr70xvPGIh6GWlKtHQ3rZ2d0pI2JNwvI0LnJraY/T7ftbWIVwbpIAAFxCPXtSToA7NnYbEWwxK3FMSH0YDl9iX34WCmklHmpifsFlAAAPkklEQVR4nNWde1/qSA/HAescqNIWioUDIhcR5aCo6wXXy/o8+v7f07YiStuZTCaT4md//+0ere2XkMmkSaZUIunwaH80HMxmlZVms8FwdHb/m3Yxsia1xmK57OysdLJcNGrX6F/eDXeM1Xl66NcOzG7yr476eobPm+h+NKtUq1XXdSvfiv8r/n+V2fEfwhUJmtbmj6En2r1us/ypbrfXFiK8PT2fYK6wK8rmarZ6vtc5rU3xd/rLUV/O8KGPRjcJ94pKyWdwcXxkeFVTTRqPgYia8idyIt/bmY+1FyHR//wLIjzdxd4sF/2jYaWqBr/xEVQrw3uTC5up9hr4CvJffHoifNB8AHT6iSLxfI67XRb6h6MLFPqvD+C4mFWgH/pdJJ9OA3IQdvRjJyQ6KP4M9I8GBug/P4D6jN8DxezxfBw/PFXzt6UfX1/cIvyPNf37m7op+9UX4IJ3DT43Yf+hKDxVhSj29GP79x60N21JP2ZPQL8SJ//JI4VXL7iUX46DfnJ5nflb0d+b0dl/8L/ZMwctUyPA+fuc/Lea7Ho89MuO6tNdy4b+McnnpFQfkmhndEKH5XgnEvfPRL9cFifgjdPp/6lYs68kmwBr9zN579kAioJ8+MlGv9x7hm6dTH9g53S+VR8cWsG/pnqdtZxgURz9cqsD7K6J9I9YDH8l17XZfu2GwBMg5b8WR7/cfeGmP+Iy/JXqx3T4AQeh6CXt/Dnpl1tq50OiP6iywo+DnxkR/iSwt/xEUZoQK/1yb8lI//cFn9dZy63Qcg8vmqQOViKdGOClXxaqwNOc/h6jy99QlZJ6uIp48Di/0tdlpl9WbbuM6R/xuvwN/Oah58I0uaCSyOy5uOk7bzz0C4Mfr737hvB5Vtxy3vTZ6Zf9XFBLoX9fHHxz/Ds8K27e9Pnpl0Np1G9G/5472LHBf8nld3KmXwD9SJrwNKK/V6TlJzJZeg+4/E7e9AugXw5k2WwT+nsFs0/w45Oep0zxTrmZM/0i6Pdknt+E/kXx9CsVLPyDkItL3vQh+r4nkfBbur/ihHb0Z4XE+Rm5N0j6D2ym/0/+4mr6/vmBROPGSahLtApJzI+nPyp2xV2rOkTBnyK8vtPqtX3ht9tRBDylxPQB+rKfXt3QZQjnWtuSDS+afqGx5qbqqF1XQxfwdP2gc7K4rNVql/3Tu1+hJ3rSR23eSq5OoB/7wivwnppXdPqHW2Ifq4pJ+VzBCZ6ud3WeDjImtfmt184/rRQniX4cCID4JY4fS38rTn8lF5Hw1ISb4lVaszm5fBeZ55WaPpV+6a4N3JSXjzmR9Pe35XcSVUda+jXQyoKG+hd/pfnLaVLpl56Br6TIv8HE0T/cnuV/4Nf6HjDYhws5apvRidz06fQnwHdSEvTg6A+2S1/veyAb83RVsvPvVzIKmGT6kFlQ6ReY2JRLG/cAW63oVPO7pdI4+NwcNRUv/ej0gQWJSn8rm9y04GeEov0AUaE//QwOVSzp9Euvyqif6Pf/bGeftSnNwgtkAlrKl6gpLbyy2vRt6Ks3In4+FsDQ3zr7ROAjQnkYdbyTUi12/hJr1F1fSx9IUpDon23f9HXGD9DX4llrEqrrzCzoHzDT/wGvnwh6RIg+um2n9EsZHNnQVy5JJPo/4PUTVc+AR4Q8D7JpB5QF/dLfrPRvfgR+BTR+gH5vTkWOuv6W6W891l+rClR3AhGnI0nXG8uC/oTV7w+3u839ljsAnhHYbXl4x6+UBf1rVvo/BT/e8ALPeKu+7a4kj24qC/rn6ng/vyLp6O//zJqbyAWCTijLJuzXXQv6d8o7I2QatpjXzwl4xQu+2grxAxkUotOfqn2iyN+Wjv7PmX7setSJZrV3LSfNKLb46fTn6pfrYb5BTEP/h4L9lVwg5Ac7VhxJK9Z26F+rg7HmY/7HNfS3nNjP0AfS/JqCksAu6qfSn76rcRJqGn6Qfayq+jlrmmqzdojN9zDSn3aAohJP4g5h+laFmx9TeYCJMQj6wIZLV8/jiKBvMCmHg/44BN64yRyPhj49velWK4PR/tn+aGAyviR7ESDm1NeyOX6wJH4BKPTHTx50N9L8E0yf6vbd6uC7GvloSOUPbXd3wWf9VEuEp5QFGEt/97K/0ukyFGApmyOd9AXTJyaXsw3Qh0OqBwMI3eIa5iLKB4Cl3/DaK0W6jm35FhCmT3M89by7PqJZPxDxa9fd1AcwN0v+oOljGzgUlSsg/T0afRmyQ1KbKbTsYo3/Qz3RMVmD2ekrtt8gfdpeS2GvlEtB+y0D408Ur8EnaA/ETV/05X8HpD8i2KvE7axE+SK5Q4jRq7ZlIa2WeEcm4JjpK5vVQfqE3L6rHrlAaACAi9qAbb1Cjh8qrLBI+pHc6evoEwJOF3gmQgQFlxQSuqUd/w1h/6z0I+KUjJkeTxY+VAhC2LsBuYZEj4a+54O/UNcyFEHfV1q+hr65sdbBSUe8X6VS8n6X0jAtnwZWDP1mAJWVgvSNYWk8hbkn09WSE4cFRAHsftjoR6/gRoOXPrDmJjpjp186J/ZMiyfaLFoz+v/7P7zL46VfhVv9zQcN6PsoqPijNwAMm+13RbgAPmZm+vCENfOQH9FBtxsSlt5y8gJMHXxyrrq9UF3Xy0wf7noohH5p+ppthUNKKBdE3nhf7eX++7ZfSqrBaeNKfNUelHmvG3UU+JlXXSgvQ3lHj6OfzB8nTURV4efO83SlE0rY6Q9BRuZ5Iyz9eN8bUPgr8LPnOLs7UutnjvcvQELm5dCave6mpnMKfzl+dvrllvm7LfNMQx2ar3NISLPh6Sf8Cf7Hl9We8NOX5zm58zxDgA4hYQ1/l2T8fdP4x5NsewugXxaSwJM7www5auOL6TIXMv59Y/6SusMi6MsG44H0jwlpMXUZAuVtAVTDr1L/XRhNqJX0jRZCX/J3QPrmeRmgzfwPoa5BkzdS6fxZmOx//VyNH56+sxbi7+TrGkD6pAGQih3XHumtOrx/UGu8DCSzeFTK+QQ0/bCzVhgIXX1XfiItSP83raZBhp9WUkIazrzSweWbFsdauf52Si3btKZd8nNfsiLqeSQWe0YrpzII9yUa32FX4GyvF7WG+VwT8mZL+GH65iHnCtosHfbv3RDrQQ0DzpymjXfUCpDt9aJ3TzzAxZyZqBOmTwh6PuTWB9/uZ598LhQp5MkoXgEQDihT3m3TNQe9b3DeTejTW1fcr10v0ekkIi+6KU3uAq39Z8Yk23RLgy87My4Opk/IDXyRW9O36HoE8xYm/Jeezv8HKY9sQ790DjifzDxgTe8KfUIGB31bt/+t8YvG/aTL663olx7US29m3LmGPtXxs9DX5KvNtIS3pa3UoXB29EsvaqjpRL+G/hEZHQN9zZsyQy3gdovUrFJL+kACIv37un5dKjkW2+fB/sUErHlOdZJb0gfGSLRTr/J19MlDMuzpc8SbKZ1Ck2JTWGzpz5WrTDq40tEnn/VhT59wCJFGQDdt2vHb0h8rfz89C1s7o4Qa9TDYPgvxTUGddqmNkC199bSG9CEIWvqUDgoW+sTsMqgnoLltE4stfWCCzd+bP6alT91wWdOHOuaogpqNvI39ljV99YB6M9un9uza0sfMgf/QAjF79kvQTKuN61jTP1HmNsTm7erpEwez2dKvI1P7Dc9kIsOj+p3jZshZoO17ZvSJaWZb+sjTb5LeLU9+jJ5MapvcFn2xudlF0KcZvyV9ZetjRm/J/fuP2F7cbdFXjoVMp/Mwc5hJxm9JH2n6T6ttTUvTi/L98+qgh9PvA6OzzGKeEtH47egjvX7/6ykFbvQ4tOoyxjxAoseYPinssaKPTDJsvsiI3hBc1HtQ3nhfvbgb7nUTUWobrOjjYv10x6IjlvIy7Q0t1W4/NcLFkv61ek8d3RnTp7SZ29BHHDqU6CrDMgJ6gT4EbbY48zzA6pJ+uYU88ck822NDH/dOa553rv4LBAc8GJMxx1kD0knpd2hI+uYLrwV93Otc6TM64laJ5xpsrU6dQ2FFHzwCMj0SFXvW3LEpQzr9Kiq9pjploClu5T2C53BfeyoOt6L/AtXwpkIe/CmXpn0ndPo4v3Or9K1NXzKKqvYIT/PpPm3+tAX9KTg7Ir3o4umbxj1k+rhWLfBEw3LP68zHX8Y83V286YrKuWoadnfA2qFMMRv+fF3DCnAqfVyKAaqZ+ZDTE0FnedfvL+5+hYrDXTcVstTzTOeawqHMYWAGZ0ubuX4ifVyweY061tvpRu12DzrZ+EsZj0Cjv6vt28uORDU5V91oGjyNPnKT26E1p6uVOXlLTT+aN+Sa34X6inWzKtqMTOYKkugjT1Vfcp2pvla2qQc4VSfy5ephaqUDowryrAysmELfxYU7fTh8ISh76BxA30a5AzjN6P8ulr5qmGQGDXEmjFq5fraC6OfmBZjRN8BPoQ+OFVuLNg0MVO6YomLoZ8rUzenH+JG+35i+i4Nfmuir8Q3Vu8v+jWLo54/+MKVf+o1cek3puzc4+LGewZ2WsZwg9xcKoe/nXz8b08dGPob0qyZd6XescCQngRdB3+nkH4RAvzTA8DSjXx8awE/6ZPl8v8QkC6EvOwOPQr80QiQdjOjXTRu0rnW9KGhFT5LLF0BfOguFRL90pF97Dei7F4T+rCUPoO677OL89FuyY1eI9EuHMx1TPP06rU7/HDpjBitHcgRZEfSdF/PZVJDONIepYOm7LrVMf/pMm4W3oW4gLwLlpu9IpsNY0deZP5J+9ogWIzWIozjXiv5RVOAy01cePUinH3OtAGBR9KsX9DEYiaZPxFGcH/KfVQWIvPSbymM3begnrRVK94OgX9UMkMSotkN2PyK38f8SK/1I7vMT2dEvHSrP0tLSr1ZwVTs69UmjIGOXrx7Qy0pfyELaT1nSj/kfu1K8Gvpc7GNNF4RRhOIVarrgo98FpjAz0I81kh3mB9F36xcs8y/WivmbjcLrhdT5+2ZyxBXYWcNBP959DarZD0BJP/6qDJmmX3xr2tectLepXgidB5GIh77jdzSF7Tz0Y/3JfABS+m6CnrX//1u1V9QoNqcdzLW9Fhz0u+Jde74RG/1Y98c330e65ui78b/NRnYRJqxJf8fzwQ2w0xM7l4g+F2v6zXZwhWjo4KSf6H40uHDrMeivYsz9esy97t4Mz4ok/6nr/nMgevJPoNsWb8jzFq3oO5Ef3F6iOim56X/o8H7/7Hj9jvb+ePTnqIDeW5Wm48VV6Ak/anU/n63bjXzhhU999GH3NPrx32n7Ing/rWGbWAuh//OajBuLu5PnnUSdk5NFY2zS1VvaDXcIOlku+rVrkwOt/+qor/YvpmCS+hNBQU4AAAAASUVORK5CYII="/>
    </div>




 <div id="amazon_div">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5LW5SLtA-18zSPeVvOXBViEhwhX8XmU8yQ&s"/>
  </div>




 <div id="amazon_div">

  
  </div>




 
   <div id="amazon_div">
     <img src="https://iconmarathi.com/wp-content/uploads/2023/12/India-Post-Payments-Bank-Bharti-2024.png"/>
    </div>


</div>





<div id="DATA_COMPANY_IMAGE_MAIN_DIV3">

  <div id="amazon_div">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQ1kPmlfum7gjFaaUFmvFZebCSZaGxKWdAg&s"/>
   </div>




    <div id="amazon_div">
      <img src="https://companieslogo.com/img/orig/meesho_BIG-61019c35.png?t=1720244494"/>
     </div>




  <div id="amazon_div">
    <img src="https://i.pinimg.com/736x/6e/0c/ce/6e0cce3bf57f63bf582921286edd1dc7.jpg"/>
   </div>




  <div id="amazon_div">
    <img src="https://www.flexjobs.com/assets/jctblobcontent/5896/primary"/>
   </div>


</div>
    


<div id="ABOUT_MAIN_DIV">

  <div id="about_categries_div">

    <h1>Welcome to Data Entry Bihar</h1>

    <p>Data Entry India is a Data Entry outsourcing company that is registered and certified by ISO 9001:2008 and licensed to provide Data Entry Services, Data Conversion Services, Data Processing Services, and other related services. Data Entry India is your best option for a data management one-stop-shop in India. By choosing to make use of our services at Data Entry India, you will no longer have to worry about the in-house troubles of processing and managing your organization’s data. All you have to do is outsource your data entry and back-office services to us, and you will have the optimal data management that your organization needs. <br/><br/>The professional services that we currently offer at Data Entry India include Data Entry, Data Conversion, Data Processing, Web Scraping, Mortgage Data Entry Service, Online Data Entry and Offline Data Entry Specialist, Excel Data Entry Representative, Data Extraction, Magento Product Upload Services, eCommerce Product Upload Services, Catalog Data Entry and back-office services. Each of these services is costumed to accommodate the needs of every one of our customers, so you have nothing to worry about when outsourcing your data entry to us. We deliver what you want when you want it.
    </p>

  </div>



  <div id="about_categries_image_div">

   
    <img src=" https://www.flexjobs.com/blobcontent/flexjobs/images/bannerv1.svg" alt=""/>
  </div>


</div>


<div id="ABOUT_MAIN_TEXT_DIV">
  <p>
    We deliver these services from our office in Ahmadabad, India, however, our services transcend geographical boundaries. We currently provide our services to clients from parts of the world such as the United States of America (USA), Canada, United Kingdom (UK), Spain, Australia, New Zealand, Switzerland, France, Netherlands, India, Israel, Japan, Hong Kong, and Singapore. Even more, these organizations are spread across various industries, such as Universities in the USA, UK, and Canada, Schools, other Educational institutions, Marketing firms, products Data Entry Services for E-commerce business, Magento, WooCommerce, Shopify, BigCommerce, media companies, medical research institutions, retail businesses, trade associations and many more.
    
    At Data Entry India, we boast of over 16 years of experience in providing affordable, flexible, and high-quality services to all our clients. Our process involves the deployment of the latest technology innovations that aid us in understanding and delivering the demand of our clients. With Data Entry India, all your worries about data processing are replaced with optimal effectiveness that would amplify the growth of your organization</p>

</div>



<div id="STUDENT_MAIN_DIV">

  <h1>What Our Members Are Saying</h1>

</div>





<div id="scrollbody_instadiv">

  
  <div id="smallinsta_div">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ZSDNAymvobco5-jYYGISQLhmStN03L9T0A&s" alt=""/>

      <h1>A.K SINGH</h1>

  <p>I Joined many money making website, they are also cheat me. But right now I join wekicash.com, this company give me work and money also.</p>


     
      
  </div>



  
  <div id="smallinsta_div">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJ2Ed30bSsVKE3GJP-7FCgD9MDFJHmsugAg&s" alt=""/>


      <h1>SUMAN KUAR</h1>
      <p>I saw many website, they are not provide work. But here i received my work on time.Thanks for giving such a platform to earn money.</p>
         
          
  </div>


  
  





  <div id="smallinsta_div">
      <img src="https://www.shutterstock.com/image-photo/beautiful-businesswoman-working-on-project-260nw-1831260991.jpg" alt=""/>


      <h1>AAYUSHI SINGH</h1>

      <p>Most of the website are fake, just wastage my money. But This company really very helpful and also giving work.</p>
  
  </div>







  <div id="smallinsta_div">
      <img src="https://t4.ftcdn.net/jpg/05/01/17/55/360_F_501175559_Na58U525sprxLIzG3QRENoyWlOoOXjlz.jpg" alt=""/>

      <h1>BIKASH JHA</h1>

      <p>The best and fastest way to contact us is via the webform on below link, but we are also available on Live Chat below hours via the same link.  We do our very best to help you as fast as possible and we normally reply to all questions and emails the same day, but under weekends and holidays our reply could take up to 24h.  If you prefer email, you can also contact us</p>
  
  </div>





  <div id="smallinsta_div">
      <img src="https://media.istockphoto.com/id/1369508549/photo/happy-woman-in-cafe-talking-on-the-phone-with-earphones.jpg?s=612x612&w=0&k=20&c=LWgl8ssEn4RAKhw0v6SzAIBwxSdtPoaezvtSBMEyvKk=" alt=""/>

      <h1>PUJA PANDEY</h1>

      <p>The best and fastest way to contact us is via the webform on below link, but we are also available on Live Chat below hours via the same link.  We do our very best to help you as fast as possible and we normally reply to all questions and emails the same day, but under weekends and holidays our reply could take up to 24h.  If you prefer email, you can also contact us</p>
  
  </div>



  <div id="smallinsta_div">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoIof7WykH_sCATOJgm4H6RIOd1GNbdNL3w&s" alt=""/>
      <h1>MANISH SINHA</h1>
     

      <p>The best and fastest way to contact us is via the webform on below link, but we are also available on Live Chat below hours via the same link.  We do our very best to help you as fast as possible and we normally reply to all questions and emails the same day, but under weekends and holidays our reply could take up to 24h.  If you prefer email, you can also contact us</p>
  
      
  </div>

  <div id="smallinsta_div">
      <img src="https://m.media-amazon.com/images/I/81oqLPG4lKL._AC_UF1000,1000_QL80_.jpg" alt=""/>

      <h1>S.K CHAUDHARY</h1>

      <p>The best and fastest way to contact us is via the webform on below link, but we are also available on Live Chat below hours via the same link.  We do our very best to help you as fast as possible and we normally reply to all questions and emails the same day, but under weekends and holidays our reply could take up to 24h.  If you prefer email, you can also contact us</p>
  
  </div>

  <div id="smallinsta_div">
      <img src="https://www.shutterstock.com/image-photo/happy-woman-wearing-jean-shirt-260nw-2347958841.jpg" alt=""/>

      <h1>SANGITA ROY</h1>

      <p>The best and fastest way to contact us is via the webform on below link, but we are also available on Live Chat below hours via the same link.  We do our very best to help you as fast as possible and we normally reply to all questions and emails the same day, but under weekends and holidays our reply could take up to 24h.  If you prefer email, you can also contact us</p>
  
  </div>




  <div id="smallinsta_div">
      <img src="https://media.istockphoto.com/id/1958000977/photo/excited-young-woman-listening-to-music-on-wireless-headphones-over-a-mobile-app-while-sitting.webp?b=1&s=170667a&w=0&k=20&c=1cbzy7HM5Wnl4rFi2sfPr2MenBAfvKJg-wRt63NkM8g=" alt=""/>

      <h1>SALONI SINGH</h1>

      <p>The best and fastest way to contact us is via the webform on below link, but we are also available on Live Chat below hours via the same link.  We do our very best to help you as fast as possible and we normally reply to all questions and emails the same day, but under weekends and holidays our reply could take up to 24h.  If you prefer email, you can also contact us</p>
  
  
     
      
  </div>




  <div id="smallinsta_div">
      <img src="https://img.freepik.com/premium-photo/busy-man-wireless-headphones-use-smartphone-modern-communication-concept_474717-15283.jpg" alt=""/>

      <h1>N .C CHAUDHARY</h1>

      <p>The best and fastest way to contact us is via the webform on below link, but we are also available on Live Chat below hours via the same link.  We do our very best to help you as fast as possible and we normally reply to all questions and emails the same day, but under weekends and holidays our reply could take up to 24h.  If you prefer email, you can also contact us</p>
  
  </div>

  
  <div id="smallinsta_div">
      <img src="https://media.istockphoto.com/id/1255302027/photo/happy-woman-in-bluetooth-headphones-relaxing-outside-the-home.jpg?s=612x612&w=0&k=20&c=arRkLWLd6HFkCunvNa9beQckIxy6ZCra2dpfvzCoxNs=" alt=""/>

      <h1>MONI ROY</h1>

      <p>The best and fastest way to contact us is via the webform on below link, but we are also available on Live Chat below hours via the same link.  We do our very best to help you as fast as possible and we normally reply to all questions and emails the same day, but under weekends and holidays our reply could take up to 24h.  If you prefer email, you can also contact us</p>
  
  </div>


  






  <div id="smallinsta_div">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1RQEuzrT6qP7qnwhmhuv1k2iU7YVq2hXIg&s" alt=""/>

      <h1>RAKESH GUPTA</h1>

      <p>The best and fastest way to contact us is via the webform on below link, but we are also available on Live Chat below hours via the same link.  We do our very best to help you as fast as possible and we normally reply to all questions and emails the same day, but under weekends and holidays our reply could take up to 24h.  If you prefer email, you can also contact us</p>
  
  </div>
</div>




<div id="COURSE_MAIN_DIV">


  <div id="course_categries_div">



   
    <div id="course_readmore_div">
      
      
     
      <h1 onclick="myFunction()" id="myh1">1. What Is The Qualification Required To Enroll In This Course?</h1>
      <p>Erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta</p>


    </div>


    
    <div id="course_readmore_div">
      <h1 onclick="myFunction()" id="myh1">2. Can We Access This Course On Both Mobile and Laptop?</h1>
      <p>Yes, you can access the course on both Mobile & Laptop.</p>
      
    </div>


    <div id="course_readmore_div">
      <h1 onclick="myFunction()" id="myh1">   3. What Is The Age Criteria Required To Enroll In This Course?</h1>
      <p>Any Age People Can Enroll In This Program & Can Learn From Us, But For Guaranteed Interview’s & For Aasma Test, Age Must Be Below 35 Years. If Your age is More Than 35 Years, You are ELIGIBLE to learn from us, but you are not eligible for Guaranteed Interviews. But Yes With the help of this 21 Days Job Ready Program, you'll learn and be able to contact those company recruiters who are hiring above 35 years age candidates.</p>
   
      
    </div>


    <div id="course_readmore_div">

      <h1 onclick="myFunction()" id="myh1">  4. Will I get Guaranteed Job After Completing this course?</h1>
      <p>Our Boot Camp will provide guaranteed Interview opportunity to every eligible student, not guaranteed job. We will provide 1 guaranteed Interview opportunities to all candidates + if any candidate qualify Aasma Test, then he/she will get 2 more interview opportunities from our side. But he/she must have to attempt bihardataentry.com test. Eligibility For Guaranteed Interview Is - 12th Pass, Age Below 35 Years, Must Complete 21 Days Training & Must Give Aasma Communication Test.</p>
    </div>




  </div>



</div>




<div id="SELECT_STUDENT_MAIN_PAGES">



  <div id="SELECT_STUDENT_categries">

    <div id="select_box_div">
      <img src="https://www.cheggindia.com/wp-content/uploads/2024/08/secret-websites-to-make-money-1024x543.png.webp" alt=""/>
      <h1>New Jobs 8000+</h1>
      <p>Personal Branding: 4 Best Strategies and Courses</p>
    </div>


    <div id="select_box_div">
      <img src="https://www.cheggindia.com/wp-content/uploads/2024/08/secret-websites-to-make-money-1024x543.png.webp" alt=""/>
      <h1>Full time</h1>
      <p>Top 10 Secret Websites to Make Money Online</p>
      
    </div>


    <div id="select_box_div">
      <img src="https://www.cheggindia.com/wp-content/uploads/2024/08/stay-at-home-mom-jobs-1024x543.png.webp" alt=""/>
      <h1>Online Jobs</h1>
      <p>Best Stay at Home Mom Jobs: Flexible and Fulfilling</p>
      
    </div>


    <div id="select_box_div">
      <img src="https://www.cheggindia.com/wp-content/uploads/2024/08/online-jobs-no-experience-1024x543.png.webp" alt=""/>
      <h1>Online Jobs</h1>
      <p>Top Online Jobs with no experience for Students</p>
      
    </div>

  </div>

</div>



</>
    )
}
export default Home