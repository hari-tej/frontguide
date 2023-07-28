import '../styling/third.css';
import {useTypewriter,Cursor } from "react-simple-typewriter";
import Axios from 'axios';
import {useState,useEffect} from 'react';


export const Third=()=>{
  const[name,setName]=useState("");
  const[rollno,setRollno]=useState("");
  const[comment,setComment]=useState("");
  const[details,setDetails]=useState([]);

  useEffect(()=>{
     
   Axios.get("https://guide-backend-api.onrender.com/third/read").then((response)=>{
     setDetails(response.data);
   });

 
 
},[]);
 
const addtodata=()=>{
 
 Axios.post("https://guide-backend-api.onrender.com/third/insert",{
   rollno:rollno,
   name:name,
   comment:comment

 });

window.location.reload();

};










  const [text] = useTypewriter({
    words:["Hello! Welcome to 3rd year page of CS-Mitra"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
    
});
    return(
        <div>
          <section className="text-center m-5 ">
            <h1 className="text-light">{text}</h1>
            <br></br>
          </section>
        <section className=" pt-4 pl-2 pr-2 m-2 bg-light border rounded  border-1 shadow-lg">
          <h1 className="text-center text-danger ps-5 pe-5 ms-5 me-5"><b>SEMESTER-5</b> </h1>
          <h3 className="text-center">(August-November)</h3>
          <p className="text-center"  >All resources needed by a student have been provided below.These include youtube videos links of each subject and PYQs.</p>
        <div className="accordion p-5" id="accordionExample">
    <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       DATABASE MANAGEMENT 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
        <strong>The subject deals with the fundamental concepts of programming.</strong> 

        <p>Youtube channels:</p>
         <b>Gate Smashers:</b> <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" target="_blank">https://youtube.com/playlist?list=PLxCzCOWd7aiFA</a><br></br>
        <b>Knowledge Gate:</b> <a href="https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV" target="_blank">https://youtube.com/playlist?list=PLmXKhU9FNesR1</a><br></br>
        <b>Neso Academy:</b> <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ" target="_blank">https://youtube.com/playlist?list=PLBlnK6fEyqRi</a><br></br>
        <b>Education 4u:</b>  <a href="https://youtube.com/playlist?list=PLrjkTql3jnm-CLxHftqLgkrZbM8fUt0vn" target="_blank">https://youtube.com/playlist?list=PLrjkTql3jnm</a><br></br>

          <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner"href='/question/third/Database.pdf' download='DBMS.pdf'> Download</a></button>
        
         
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        COMPUTER NETWORKS
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
        <strong>This subject deals with fundamental concepts of computer network.</strong> 
        <p>Youtube Channels:</p>
        <b>Gate Smashers:</b> <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_" target="_blank">https://youtube.com/playlist?list=PLxCzCOWd7aiGFB</a><br></br>
        <b>Knowledge Gate:</b> <a href="https://youtube.com/playlist?list=PLmXKhU9FNesSjFbXSZGF8JF_4LVwwofCd" target="_blank">https://youtube.com/playlist?list=PLmXKhU9FNesS</a><br></br>
        <b>Neso Academy:</b> <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx" target="_blank">https://youtube.com/playlist?list=PLBlnK6fEyqRgMC</a><br></br>
        <b>Sandeep Saradhi:</b> <a href="https://youtube.com/playlist?list=PLLOxZwkBK52BCOXC7wpI_U81W_eklMFE3" target="_blank">https://youtube.com/playlist?list=PLLOxZwkBK5</a><br></br><br></br>

         <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/third/Computernetworks.pdf' download='CN.pdf'> Download</a></button>
        
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        MICROPROCESSOR AND MICROCONTROLLER
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
        <strong>This subject deals with microprocessor fundamentals.</strong> 
        <p>Youtube Channels:</p>
        <b>Padmasri Naban:</b> <a href="https://youtube.com/playlist?list=PLMpCSwrw7iRFqHzQyVTfw9JMHqI3xbS6S" target="_blank">https://youtube.com/playlist?list=PLMpCSwrw7iRF</a><br></br>
        <b>Pawan Chandani:</b> <a href="https://youtube.com/playlist?list=PLt5syl71JKf2KqohkFDBkq4eWX0h4Ol5k" target="_blank">https://youtube.com/playlist?list=PLt5syl71JKf2</a><br></br>
        <b>Tutorialspoint:</b> <a href="https://youtube.com/playlist?list=PLWPirh4EWFpFDi8bggPYOiMLlD1D_bBPM" target="_blank">https://youtube.com/playlist?list=PLWPirh4EWFpF</a><br></br>
        

        <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/third/Microprocessor.pdf' download='MPMC.pdf'> Download</a></button>
        
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        OPERATING SYSTEM
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
        <strong>This subject deals with operating system and its fundamentals</strong>
        <p>Youtube Channels:</p>
        <b>Gate Smashers:</b> <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" target="_blank">https://youtube.com/playlist?list=PLxCzCOWd7a</a><br></br>
        <b>Knowledge Gate:</b> <a href="https://youtube.com/playlist?list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD" target="_blank">https://youtube.com/playlist?list=PLmXKhU9FN</a><br></br>
        <b>Neso Academy:</b> <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O" target="_blank">https://youtube.com/playlist?list=PLBlnK6fEyqR</a><br></br>
        <b>Education4u:</b> <a href="https://youtube.com/playlist?list=PLrjkTql3jnm9U1tSPnPQWQGIGNkUwBFv-" target="_blank">https://youtube.com/playlist?list=PLrjkTql3jnm9</a><br></br>
    
        <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/third/Operatingsystem.pdf' download='OS.pdf'> Download</a></button>
        
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        PRINCIPLES OF PROGRAMMING LANGUAGES
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
        <strong>This is the third item's accordion body.</strong> 
        <p>Youtube Channels:</p>
        <b>Kapil Joshi Tutorials:</b> <a href="https://youtube.com/playlist?list=PLbWkMgLvWbDF3bErg6Ejo8d1QtTSqtWwN" target="_blank">https://youtube.com/playlist?list=PLbWkMgLvWb</a><br></br>

   
        <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/third/Ppl.pdf' download='PPL.pdf'> Download</a></button>
        
      </div>
    </div>
  </div>

</div>

</section>
       
<br></br><br></br>   

 
 <section className="pt-4 pl-2 pr-2 m-2 bg-light border rounded  border-1 shadow-lg">
  <h1 className="text-center  text-danger "><b>SEMESTER-6</b> </h1>
  <h3 className="text-center">(January-May)</h3>
  <p className="text-center"  >All resources needed by a student have been provided below.These include youtube videos links of each subject and  PYQs.</p>
<div className="accordion p-5" id="accordionExample2">
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
ARTIFICIAL INTELLIGENCE
</button>
</h2>
<div id="collapseSix" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">
<strong>The subject deals with the fundamental concepts of programming.</strong> 

<p>Youtube channels:</p>
 <b>Gate Smashers:</b> <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI" target="_blank">https://youtube.com/playlist?list=PLxCzCOWd7aiHGh</a><br></br>
<b>Easy Engineering Classes:</b> <a href="https://youtube.com/playlist?list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe" target="_blank">https://youtube.com/playlist?list=PLV8v</a><br></br>
<b>Education4u:</b>  <a href="https://youtube.com/playlist?list=PLrjkTql3jnm_yol-ZK1QqPSn5YSg0NF9r" target="_blank">https://youtube.com/playlist?list=PLrjkTql3jnm_yol</a><br></br>

  <b>Previous Year Questions:</b> <button className="btn btn-success"><a className="inner" href='/question/third/AI.pdf' download='AI.pdf'> Download</a></button>
        
</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
SOFTWARE ENGINEERING
</button>
</h2>
<div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">
<strong>This subject deals with fundamental concepts of computer network.</strong> 
<p>Youtube Channels:</p>
<b>Gate Smashers:</b> <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2" target="_blank">https://youtube.com/playlist?list=PLxCzCOWd7aiE</a><br></br>
<b>Easy Engineering Tutorials:</b> <a href="https://youtube.com/playlist?list=PLV8vIYTIdSnat3WCO9jfehtZyjnxb74wm" target="_blank">https://youtube.com/playlist?list=PLV8vIY</a><br></br>
<b>Education4u:</b> <a href="https://youtube.com/playlist?list=PLrjkTql3jnm9b5nr-ggx7Pt1G4UAHeFlJ" target="_blank">https://youtube.com/playlist?list=PLrjkTql3jnm</a><br></br>


<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/third/SoftwareEngg.pdf' download='SE.pdf'> Download</a></button>
        

</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
COMPUTER GRAPHICS
</button>
</h2>
<div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">
<strong>This subject deals with microprocessor fundamentals.</strong> 
<p>Youtube Channels:</p>

<b>5 mins engineering:</b> <a href="https://youtube.com/playlist?list=PLYwpaL_SFmcAtxMe7ahYC4ZYjQHun_b-T" target="_blank">https://youtube.com/playlist?list=PLYwpaL_SFmcAt</a><br></br>
<b>Education4u:</b> <a href="https://youtube.com/playlist?list=PLrjkTql3jnm9cY0ijEyr2fPdwnH-0t8EY" target="_blank">https://youtube.com/playlist?list=PLrjkTql3jn</a><br></br>
<b>Sandeep Sarathi:</b> <a href="https://youtube.com/playlist?list=PLLOxZwkBK52DkMLAYhRLA_VtePq5wW_N4" target="_blank">https://youtube.com/playlist?list=PLLOxZwkBK</a><br></br>

<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/third/Computergraphics.pdf' download='CG.pdf'> Download</a></button>
        
</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
COMPILER DESIGN
</button>
</h2>
<div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">
<strong>This subject deals with operating system and its fundamentals</strong>
<p>Youtube Channels:</p>
<b>The GateHub:</b> <a href="https://youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr" target="_blank">https://youtube.com/playlist?list=PL1QH9gyQXf</a><br></br>
<b>Ravindrababu Ravula:</b> <a href="https://youtube.com/playlist?list=PLMzYNEvC0P7FwwnrXwAjPq8zLTC4MDQKQ" target="_blank">https://youtube.com/playlist?list=PLMzYNEvC0P</a><br></br>


<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/third/Compiler.pdf' download='Compiler.pdf'> Download</a></button>
        
</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
MACROECONOMICS
</button>
</h2>
<div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">
<strong>This is the third item's accordion body.</strong> 
<p>Youtube Channel:</p>
<b>Learn to Complete:</b> <a href="https://youtube.com/playlist?list=PLKH0BevfCZvLnVr07InGNBG5KzqDy6ia3" target="_blank">https://youtube.com/playlist?list=PLKH0BevfCZ</a><br></br>


<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/third/Macroeconomics.pdf' download='Economics.pdf'> Download</a></button>
        
</div>
</div>
</div>

</div>
</section>
<br></br>
<br></br>
<form className="bg-warning py-5 m-5">
 <div className="container-lg">
 <h2 className="text-light">Queries & Suggestions</h2><br></br>
 <label><h5>Roll No:</h5></label><br></br>
 <input type="text" placeholder="roll number" onChange={(e)=>{setRollno(e.target.value)}} /><br></br>
 <label><h4>Name:</h4></label><br></br>
 <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/><br></br>
 <label><h5>Comments:</h5></label><br></br>
 <textarea rows="10" cols="30" placeholder='comments,suggestions,queries...' onChange={(e)=>{setComment(e.target.value)}}></textarea><br></br><br></br>
 <button className="btn btn-success" onClick={addtodata}>Submit</button>

 </div>
 </form>
  <br></br>
  <h1 className="text-light">RESPONSES:</h1>
   {
    details.map((val,key)=>{
      return <div class="container-lg">
      <div class="card p-4 my-3 shadow-lg">
      <div class="card-body">
      <h3 class="text-end text-primary">{val.rollno}</h3>
      <h5 class="text-end">{val.name}</h5>
      <p class="text-end">{val.updatedAt}</p>
      <br></br>
         <h5>"{val.comment}"</h5>
         <br></br>

      </div>
    </div>
    </div>
  

    })
  
    }

</div>








        
    );
};