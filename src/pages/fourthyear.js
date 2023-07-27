import {useTypewriter,Cursor } from "react-simple-typewriter";
import Axios from 'axios';
import {useState,useEffect} from 'react';


export const Fourth=()=>{
  const[name,setName]=useState("");
  const[rollno,setRollno]=useState("");
  const[comment,setComment]=useState("");
  const[details,setDetails]=useState([]);

  useEffect(()=>{
     
   Axios.get("https://guide-backend-api.onrender.com/fourth/read").then((response)=>{
     setDetails(response.data);
   });

 
 
},[]);
 
const addtodata=()=>{
 
 Axios.post("https://guide-backend-api.onrender.com/fourth/insert",{
   rollno:rollno,
   name:name,
   comment:comment

 });

window.location.reload();

};




    const [text] = useTypewriter({
        words:["Hello! Welcome to 4th year page of CS-Mitra"],
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
        <section className=" pt-4 pl-2 pr-2 m-2 bg-light border rounded border-1 shadow-lg">
          <h1 className="text-center text-primary ps-5 pe-5 ms-5 me-5"><b>SEMESTER-7</b> </h1>
          <h3 className="text-center">(August-November)</h3>
          <p className="text-center"  >All resources needed by a student have been provided below.These include youtube videos links of each subject, textbooks along with PYQs.</p>
        <div className="accordion p-5" id="accordionExample">
    <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       ADVANCED DATA STRUCTURES 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The subject deals with the fundamental concepts of programming.</strong> 

        <p>Youtube channels:</p>
          <a href="https://www.google.com">Gate smashers</a><br></br>
          <a href="#">5 min engineering</a><br></br>
          <a href="#">Neso Academy</a><br></br>
          <a href="#">Sandeep</a><br></br>
          <b>Textbook:</b> <button className="btn btn-success ">Download</button><br></br>
          <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner"href='/question/fourth/ADS.pdf' download='ADS.pdf'> Download</a></button>
        
         
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ADVANCED COMPUTER ARCHITECTURE
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This subject deals with fundamental concepts of computer network.</strong> 
        <p>Youtube Channels:</p>
        <b>Gate Smashers:</b> <a href="#">Gate smashers</a><br></br>
        <b>5 mins engineering:</b> <a href="#">5 min engineering</a><br></br>
        <b>Neso Academy:</b> <a href="#">Neso Academy</a><br></br>
        <b>Sandeep:</b> <a href="#">Sandeep</a><br></br><br></br>
         <b>Textbook:</b> <button className="btn btn-success">Download</button><br></br>
         <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner"href='/question/fourth/ACA.pdf' download='ACA.pdf'> Download</a></button>
        
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        MACHINE LEARNING
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This subject deals with microprocessor fundamentals.</strong> 
        <p>Youtube Channels:</p>
        <b>Gate Smashers:</b> <a href="#">Gate smashers</a><br></br>
        <b>5 mins engineering:</b> <a href="#">5 min engineering</a><br></br>
        <b>Neso Academy:</b> <a href="#">Neso Academy</a><br></br>
        <b>Sandeep:</b> <a href="#">Sandeep</a><br></br>
        <b>Textbook:</b> <button className="btn btn-success">Download</button><br></br>
        <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner"href='/question/fourth/Ml.pdf' download='ML.pdf'> Download</a></button>
        
      </div>
    </div>
  </div>
  

</div>

</section>
       
<br></br><br></br>   

 
 <section className="pt-4 pl-2 pr-2 m-2 bg-light border rounded border-1 shadow-lg">
  <h1 className="text-center text-primary "><b>SEMESTER-8</b> </h1>
  <h3 className="text-center">(January-May)</h3>
<div className="accordion p-5" id="accordionExample2">
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
NETWORK SECURITY AND CRYPTOGRAPHY 
</button>
</h2>
<div id="collapseSix" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
<div className="accordion-body">
<strong>The subject deals with the fundamental concepts of programming.</strong> 

<p>Youtube channels:</p>
  <a href="#">Gate smashers</a><br></br>
  <a href="#">5 min engineering</a><br></br>
  <a href="#">Neso Academy</a><br></br>
  <a href="#">Sandeep</a><br></br>
  <b>Textbook:</b> <button className="btn btn-success">Download</button><br></br>
  <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner"href='/question/fourth/NSC.pdf' download='NSC.pdf'> Download</a></button>
        
</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
CLOUD COMPUTING
</button>
</h2>
<div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body">
<strong>This subject deals with fundamental concepts of computer network.</strong> 
<p>Youtube Channels:</p>
<b>Gate Smashers:</b> <a href="#">Gate smashers</a><br></br>
<b>5 mins engineering:</b> <a href="#">5 min engineering</a><br></br>
<b>Neso Academy:</b> <a href="#">Neso Academy</a><br></br>
<b>Sandeep:</b> <a href="#">Sandeep</a><br></br>
<b>Textbook:</b> <button className="btn btn-success">Download</button><br></br>
<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner"href='/question/fourth/CC.pdf' download='CC.pdf'> Download</a></button>
        

</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
ENVIRONMENTAL STUDIES
</button>
</h2>
<div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body">
<strong>This subject deals with microprocessor fundamentals.</strong> 
<p>Youtube Channels:</p>
<b>Gate Smashers:</b> <a href="#">Gate smashers</a><br></br>
<b>5 mins engineering:</b> <a href="#">5 min engineering</a><br></br>
<b>Neso Academy:</b> <a href="#">Neso Academy</a><br></br>
<b>Sandeep:</b> <a href="#">Sandeep</a><br></br>
<b>Textbook:</b> <button className="btn btn-success">Download</button><br></br>
<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner"href='/question/fourth/EVS.pdf' download='EVS.pdf'> Download</a></button>
        
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
 <textarea placeholder='comments,suggestions,queries...' onChange={(e)=>{setComment(e.target.value)}}></textarea><br></br><br></br>
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