"use strict"
const projectPage =document.getElementById('project');
const main_js=document.getElementById('main');
const homePage =document.getElementById('home');
const contactPage =document.getElementById('contacts');
const CV_Page =document.getElementById('cv');
const project=` 
<section class="sec1">
  <div class="first_section">
    <div class="title_sec1">
      <h2>PROJECTS</h2>
    </div>
    <div class="para_sec1">
      <p>
        I'm a paragraph. Click here to add your own text and edit me. It’s
        easy. Just click “Edit Text” or double click me to add your own
        content and make changes to the font. I’m a great place for you to
        tell a story and let your users know a little more about you.
      </p>
    </div>
  </div>
</section>

<section id="sec2">
  <div class="title_sec2">Latest Projects</div>
  <div class="part1_sec2">
    <div>
      <img class="img_sec2" src="R.webp" />
    </div>
    <div class="para1_sec2">
      <p>SAMPLE 1: NEW PRODUCT SCOPING</p>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. It’s
        easy. Just click “Edit Text” or double click me and you can start
        adding your own content. Feel free to drag and drop me anywhere
        you like on your page. I’m a great place for you to tell a story
        and let your users know a little more about you.
      </p>
    </div>
  </div>
</section>

<section id="sec3">
  <div class="part1_sec3">
    <div>
      <img class="img_sec3" src="MW.webp" />
    </div>
    <div class="para1_sec3">
      <p>SAMPLE 2: OPERATIONS PROJECT</p>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. It’s
        easy. Just click “Edit Text” or double click me and you can start
        adding your own content. Feel free to drag and drop me anywhere
        you like on your page. I’m a great place for you to tell a story
        and let your users know a little more about you.
      </p>
    </div>
  </div>
</section>

<section id="sec4">
  <div class="part1_sec4">
    <div>
      <img class="img_sec4" src="H.webp" />
    </div>
    <div class="para1_sec4">
      <p>SAMPLE 3: OPERATIONS PROJECT</p>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. It’s
        easy. Just click “Edit Text” or double click me and you can start
        adding your own content. Feel free to drag and drop me anywhere
        you like on your page. I’m a great place for you to tell a story
        and let your users know a little more about you.
      </p>
    </div>
  </div>
</section>
<div class="title_last_sec">
  <h6>Testimonials</h6>
</div>
<section id="last_section">
  <div class="left_para">
    “I'm a testimonial. Click me to edit and add text that says something
    nice about you and your services. Click me to edit and add text that
    says something nice about you and your services.”<br />
    <div class="author">Samantha Jones, Project Manager</div>
  </div>
  <div class="right_para">
    “I'm a testimonial. Click me to edit and add text that says something
    nice about you and your services. Click me to edit and add text that
    says something nice about you and your services.”<br />
    <div class="author">Samantha Jones, Project Manager</div>
  </div>
</section>
`;
const home=` 
  <div class="all-div"> 
  <div class="image-div">
     <img src="person.png"> 
  </div>
  <div class="hello-div">
  <h1>HELLO,</h1>
  <h3>I'm available for work. </h3>
  <p id="pargraph1">
    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
  </p>
  <div class="button-div">
     <a><button onclick="myFunction()">MY CV</button></a>  
  </div>
  
  </div>
  <div class="final-div"> 
      <div>
       <h4>Available for:</h4>
  <p>Project Management</p>

   <p>Consulting</p> 
    
    <p>Marketing Strategy</p>
    
   <p>Business Intelligence</p> 
      </div>
    <div id="second-div-inside-final">
      <h4>Website:</h4>
   <p><span><a href="http://www.mysite.com/">www.mysite.com</a> </span></p>  
    </div>
  <div id="third-div-inside-final">
   <h4>Cell:</h4>
   <p>123-456-7890</p>   
  </div>
  <div id="forth-div-inside-final">
    <h4>Email:</h4>
   <p>info@mysite.com</p>
   <div id="fifth-div-inside-final">
       <h4>Social links:</h4> 
       <div id="fifth-1-div-inside-final">
          <a href="https://www.facebook.com/wix"><img src="facebook.png"></a> 
           <a href="https://twitter.com/wix"><img src="twitter.png"></a>
           <a href="https://www.linkedin.com/company/wix-com/"><img src="linkedin.png"></a>
       </div>  
   </div>
    
  </div>
    
  </div>
 
</div>
<div class="Second-all-div">
<div id="Testimonnial-div">
 <h4>TESTIMONIAL</h4>
 <p>
“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you.”</p>   
</div>
<div class="vl"></div>
<div id="fav_div">
<h4>FAVORITE QUOTE</h4>
<p id="all-p-inside-second-all-div">"I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."</p>
</div>
<div class="vl"></div>
<div id="recent-div">
<h4>RECENT PROJECT</h4>
<p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
</div>
</div> 
  `;
  const c_v= ` 
  <section class="one">
  <div>
      <h5>CV</h5>
      <p id="font">Greg Saint</p>
      <p>
          500 Terry Francois Street<br>
          San Francisco, CA 94158

      </p>
      <p>E-mail:
          <span id="email">info@mysite.com</span>
          <br>
          Phone: 123-456-7890
      </p>
      <br>
      <div class="icon">
          <a href="https://www.facebook.com/wix"><img src="f1.webp"></a>

          <a href="https://twitter.com/wix"><img src="tw.webp"></a>
          <a href="https://plus.google.com/117167403531518744294"><img src="g.webp"></a>
          <a
              href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHSukc4quL4EgAAAXsc6DCARFo0dMkUsFT31dsR8_xD8NrPo5ltxaBThJwe6y5ffGuhw9rM_geL194gu1Dpp0dkBEIWVzYcnACCiSE9Uv0upmct_RSgABckwT5wA4A9QM98FDU=&originalReferer=https://www.wix.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fwix-com"><img
                  src="in.webp"></a>
      </div>
  </div>
  <div id="image">
      <img src="men.webp">
  </div>
</section>
<section class="two">
  <div>
      <h5>Professional info​</h5>
      <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or <br>double click me to add your own content and make
          changes to the font. Feel free to drag and <br>drop me anywhere you like on
          your page. I’m a great place for you to tell a story and let your <br>users
          know a little more about you.</p>
  </div>
  <div>
      <h6>Languages</h6>
      <p>HTML/CSS<br>

          PHP<br>

          Click to add a language<br>

          Click to add a language<br>

          ​Click to add a language</p>
  </div>
</section>
<section class="three">
  <div>
      <h5>Work experience</h5>
      <h6>Job position. Click here to edit me.</h6>
      <p>2010 - present</p>
      <p>I'm a paragraph. Click here to add your own text and edit
          me. It’s easy. Just click “Edit Text” or<br> double click me to add y
          our own content and make changes to the font. I’m a great place for<br> you to
          tell a story and let your users know a little more about you.</p>

      <h6>Job position. Click here to edit me.</h6>
      <p>2010 - present</p>
      <p>I'm a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or <br>double
          click me to add your own content and make changes
          to the font. Feel free to drag and <br>drop me anywhere
          you like on your page. I’m a great place for you to tell
          a story and let your <br>users know a little more
          about you.

      </p>
      <h6>Job position. Click here to edit me.</h6>
      <p>2010 - present</p>
      <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or <br>double click me to add your own content
          and make changes to the font.</p>


  </div>
  <div>
      <h6 id="skill">Skills</h6>
      <p>PHOTOSHOP<br>

          FLASH<br>

          Click to add a skill<br>

          Click to add a skill<br>

          Click to add a skill</p>
  </div>
</section>
<section class="four">
  <div>
      <h5>Education​</h5>
      <h6>University name. Click here to edit me.</h6>
      <p>​2010 - present</p>
      <p>I'm a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or <br>double click me to add your own
          content and make changes to the font. Feel free to drag and<br> drop me anywhere
          you like on your page. I’m a great place for you to tell a story
          and let your <br>users know a little more about you.</p>
      <h6>University name. Click here to edit me.</h6>
      <p>​2010 - present</p>
      <p>

          I'm a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or<br> double click me to add your
          own content and make changes to the font.
          I’m a great place for you<br> to tell a story and let your users know
          a little more about you.

      </p>
  </div>
</section>
  `;
  const contact =  `  <div id="second-div">
  <div>
<div id="Contacth2">
  <h2>CONTACT</h2>
</div>
<h6>Greg Saint </h6>
<div id="Terry-div">
<p style="color:#545454 ;">500 Terry Francois St.</p>
<p style="color:#545454 ;">San Francisco, CA 94158</p>
</div>

<div id="f-div-Tel">
<p style="color:#545454 ;"> Tel: 123-456-7890 </p>   
<p style="color:#545454 ;">Fax: 123-456-7890 </p>
</div>
<div id="s-div-email">
   <p style="color:#545454 ;">Email: <a id="color-link">info@mysite.com</a> </p>
</div>
<div id="fifth-1-div-inside-final">
<a href="https://www.facebook.com/wix"><img src="facebook.png"></a> 
 <a href="https://twitter.com/wix"><img src="twitter.png"></a>
 <a href="https://www.linkedin.com/company/wix-com/"><img src="linkedin.png"></a>
</div> 


  </div>

<div class="form-div"> 

<div id="p-in-form-div">
    <p style="font-size: 17px;color: #545454;line-height:0em;letter-spacing:0.5px;">Looking forward to answering your email . </p>
</div>
<div id="flow-form">
 <form>
<input name="name" type="text" placeholder="Name">
<input name="Email" type="email" placeholder="Email">
<input name="phone" type="text" placeholder="Phone">
<textarea>Type your message here ...</textarea>
<button style="margin-left: 508px;height:40px;width: 150px;">Submit</button>
 </form>

</div>
</div>
</div> 
  
  `;
projectPage.addEventListener('click', function(event) {event.preventDefault()
 main.innerHTML="";
  main.insertAdjacentHTML("afterbegin",project


)})


  homePage.addEventListener('click', function(event) {event.preventDefault()
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",home
  
  
  )})


 window.addEventListener('load', function(event) {event.preventDefault();
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",home
  
  
  )})
 


 CV_Page.addEventListener('click', function(event) {event.preventDefault(),
  main.innerHTML="";
  main.insertAdjacentHTML("afterbegin",c_v
  
  
  )})

function myFunction(){
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",
   c_v
    
    )
}
contactPage.addEventListener('click', function(event) {event.preventDefault();
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",contact
 
  
  )})
const header = document.getElementById("ul_div");
const btns = header.getElementsByClassName("li-style");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

