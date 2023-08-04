import '../styling/third.css';
import Axios from 'axios';
import {useState,useEffect} from 'react';
import {useTypewriter } from "react-simple-typewriter";


export const Second=()=>{

  const[name,setName]=useState("");
   const[rollno,setRollno]=useState("");
   const[comment,setComment]=useState("");
   const[details,setDetails]=useState([]);

   useEffect(()=>{
      
    Axios.get("https://guide-backend-api.onrender.com/second/read").then((response)=>{
      setDetails(response.data);
    });
 
  
  
},[]);
  
const addtodata=()=>{
  
  Axios.post("https://guide-backend-api.onrender.com/second/insert",{
    rollno:rollno,
    name:name,
    comment:comment
 
  });

 window.location.reload();

 };
  const [text] = useTypewriter({
    words:["Hello! Welcome to 2nd year page of CS-Mitra"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
    
});
    return(
      <div>
          <section className="text-center m-5 ">
            <h1 className="text-light text-bolder">{text}</h1>
            <br></br>
          </section>
        <section className=" pt-4 pl-2 pr-2 m-2 border bg-light rounded border-1 shadow-lg">
          <h1 className="text-center text-success ps-5 pe-5 ms-5 me-5"><b>SEMESTER-3</b> </h1>
          <h3 className="text-center">(August-November)</h3>
          <p className="text-center"  >All resources needed by a student have been provided below.These include youtube videos links of each subject and  PYQs.</p>
        <div className="accordion p-5" id="accordionExample">
    <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       OBJECT ORIENTED PROGRAMMING
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
  

        <p>Youtube channels:</p>
          <b>kunal kushwaha:</b> <a href="https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk" target="_blank">https://youtube.com/playlist?list=PL9gnSGHSq</a><br></br>
         <b>codeitup:</b> <a href="https://youtube.com/playlist?list=PLmRclvVt5DtnqhXTJwd-oqVRwO3bLZCGV" target="_blank">https://youtube.com/playlist?list=PLmRclvVt5DtnqhX</a><br></br>
         <b>Smart Programming:</b> <a href="https://youtube.com/playlist?list=PLlhM4lkb2sEhf5NlWeYh_gdcN49pHjVP0" target="_blank">https://youtube.com/playlist?list=PLlhM4lkb2s</a><br></br>
          
          
          <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/Macroeconomics.pdf' download='Oops.pdf'> Download</a></button><p className='text-danger'>Question papers yet to be found,will be available shortly</p>
        
        
         
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        DATA STRUCTURES
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
     
        <p>Youtube Channels:</p>
        <b>Naresh i Technologies:</b> <a href="https://youtube.com/playlist?list=PLVlQHNRLflP_OxF1QJoGBwH_TnZszHR_j" target="_blank">https://youtube.com/playlist?list=PLVlQHNRLflP</a><br></br>
        <b>Engineer Drive:</b> <a href="https://youtube.com/playlist?list=PL5Rc9H5eTGY46HAzmNeHbrE5r9LTf_rNB" target="_blank">https://youtube.com/playlist?list=PL5Rc9H5eTGY46H</a><br></br>
        
        
         <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/DS.pdf' download='DS.pdf'> Download</a></button>
        
        
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        LINEAR ALGEBRA
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
        
        <p>Youtube Channels:</p>
        <b>Dr.Gajendra Purohit:</b> <a href="https://youtube.com/playlist?list=PLU6SqdYcYsfI34zVjDYDCZ6KLAifHmN1v" target="_blank">https://youtube.com/playlist?list=PLU6SqdYcYsf </a><br></br>
        <b>Dr.Gajendra Purohit:</b> <a href="https://youtube.com/playlist?list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG" target="_blank">https://youtube.com/playlist?list=PLU6SqdYcYsf</a><br></br>
        <b>Bhagwan Singh Vishwakarma:</b> <a href="https://youtube.com/playlist?list=PLdM-WZokR4taLvoJPvfHwF8m0Q1K6Qvmz" target="_blank">https://youtube.com/playlist?list=PLdM-WZokR4</a><br></br>
        
        
        <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/LinearAlgebra.pdf' download='LinearAlgebra.pdf'> Download</a></button>
        
        
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        DIGITAL LOGIC DESIGN
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
       
        <p>Youtube Channels:</p>
        <b>Tutorials point:</b> <a href="https://youtube.com/playlist?list=PLWPirh4EWFpHk70zwYoHu87uVsCC8E2S-" target="_blank">https://youtube.com/playlist?list=PLWPirh4EWF</a><br></br>
        <b>Gate academy plus:</b> <a href="https://youtube.com/playlist?list=PL9RcWoqXmzaJN3LcyxBm2tLjUk8wvOYrv" target="_blank">https://youtube.com/playlist?list=PL9RcWoqX</a><br></br>
        <b>Neso Academy:</b> <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm" target="_blank">https://youtube.com/playlist?list=PLBlnK6fEyqRjM</a><br></br>
        
        
        <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/DLD.pdf' download='DLD.pdf'> Download</a></button>
        
        
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        MICRO ECONOMICS
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
         
        <p>Youtube Channels:</p>
        <b>Pratham Singh:</b> <a href="https://youtube.com/playlist?list=PL-fORSyPTUEILOVoZ9rh5KTCC1EnvKCJ0" target="_blank">https://youtube.com/playlist?list=PL-fORSyPTUE</a><br></br>
        
        
        <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/Economics.pdf' download='Microeconomics.pdf'> Download</a></button>
        
        
      </div>
    </div>
  </div>
  <div className="accordion-item p-2">
    <h2 className="accordion-header text-start">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        DISCRETE MATHEMATICS
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-start">
       
        <p>Youtube Channels:</p>
        <b>Dr.Gajendra Purohit:</b> <a href="https://youtube.com/playlist?list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg" target="_blank">https://youtube.com/playlist?list=PLU6SqdYcY</a><br></br>
<b>Neso Academy:</b> <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3" target="_blank">https://youtube.com/playlist?list=PLBlnK6fEyqR</a><br></br>
<b>Knowledge Gate:</b> <a href="https://youtube.com/playlist?list=PLmXKhU9FNesTpQNP_OpXN7WaPwGx7NWsq" target="_blank">https://youtube.com/playlist?list=PLmXKhU9FN</a><br></br>
        
        
        <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/DM.pdf' download='DM.pdf'> Download</a></button>
        
        
      </div>
    </div>
  </div>

</div>

</section>
       
<br></br><br></br>   

 
 <section className="pt-4 pl-2 pr-2 m-2 border bg-light rounded border-1 shadow-lg">
  <h1 className="text-center  text-success "><b>SEMESTER-4</b> </h1>
  <h3 className="text-center">(January-May)</h3>
  <p className="text-center"  >All resources needed by a student have been provided below.These include youtube videos links of each subject and  PYQs.</p>
<div className="accordion p-5" id="accordionExample2">
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
COMPUTER ORGANIZATION AND ARCHITECTURE
</button>
</h2>
<div id="collapseSeven" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">


<p>Youtube channels:</p>
  <b>Sudhakar Atchala:</b> <a href="https://youtube.com/playlist?list=PLXj4XH7LcRfDXDRzSLv1FfZ-SSA38SiC0" target="_blank">https://youtube.com/playlist?list=PLXj4XH7LcRfD</a><br></br>
  <b>Enginnering Drive:</b> <a href="https://youtube.com/playlist?list=PL5Rc9H5eTGY6MHqCKAarxhxqT7nipKgun" target="_blank">https://youtube.com/playlist?list=PL5Rc9H5eTGY</a><br></br>
  <b>Shanu Kuttan CSE classes:</b> <a href="https://youtube.com/playlist?list=PL3R9-um41JsxDsAsdRtw7XN7MJJ27Icsv" target="_blank">https://youtube.com/playlist?list=PL3R9-um41JsxD</a><br></br>
  
  
  <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/COA.pdf' download='COA.pdf'> Download</a></button>
        
        
</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
THEORY OF COMPUTATION
</button>
</h2>
<div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">

<p>Youtube Channels:</p>
<b>Knowledge Gate:</b> <a href="https://youtube.com/playlist?list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T" target="_blank">https://youtube.com/playlist?list=PLmXKhU9FN</a><br></br>
<b>Sandeep Sarathi:</b> <a href="https://youtube.com/playlist?list=PLLOxZwkBK52CTVrHjYa7-SpXlEtef1TqL" target="_blank">https://youtube.com/playlist?list=PLLOxZwkBK</a><br></br>
<b>Education4u:</b> <a href="https://youtube.com/playlist?list=PLrjkTql3jnm_TWSXXvWX1_jX-L6f1QJSx" target="_blank">https://youtube.com/playlist?list=PLrjkTql3jnm</a><br></br>
<b>Neso Academy:</b> <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev" target="_blank">https://youtube.com/playlist?list=PLBlnK6fE</a><br></br>

<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/TOC.pdf' download='TOC.pdf'> Download</a></button>
        
        

</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
PROBABILITY AND STOCHASTIC PROCESSES
</button>
</h2>
<div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">

<p>Youtube Channels:</p>
<b>Dr.Gajendra Purohit:</b> <a href="https://youtube.com/playlist?list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK" target="_blank">https://youtube.com/playlist?list=PLU6SqdY</a><br></br>
<b>Engineering made easy:</b> <a href="https://youtube.com/playlist?list=PLDp9Jik5WjRtVUYHjx_Q0KohHqqDVKhcX" target="_blank">https://youtube.com/playlist?list=PLDp9Jik5Wj</a><br></br>


<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/Probability.pdf' download='Probability.pdf'> Download</a></button>
        
        
</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
DESIGN AND ANALYSIS OF ALGORITHMS
</button>
</h2>
<div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">

<p>Youtube Channels:</p>
<b>Gate Smashers:</b> <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa" target="_blank">https://youtube.com/playlist?list=PLxCzCOWd</a><br></br>
<b>Education4u:</b> <a href="https://youtube.com/playlist?list=PLrjkTql3jnm8wGQyNhgdmm2gkoa8CXCml" target="_blank">https://youtube.com/playlist?list=PLrjkTql3jn</a><br></br>
<b>CSE gurus:</b> <a href="https://youtube.com/playlist?list=PLYT7YDstBQmHr7eumHSrdo1aTMpqrpPDa" target="_blank">https://youtube.com/playlist?list=PLYT7YDstBQmH</a><br></br>


<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/DAA.pdf' download='DAA.pdf'> Download</a></button>
        
        
</div>
</div>
</div>
<div className="accordion-item p-2">
<h2 className="accordion-header">
<button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
CONVEX OPTIMIZATION
</button>
</h2>
<div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
<div className="accordion-body text-start">

<p>Youtube Channels:</p>
<b>Ahmed Bazzi: </b><a href="https://youtube.com/playlist?list=PL-DDW8QIRjNOVxrU2efygBw0xADVOgpmw" target="_blank">https://youtube.com/playlist?list=PL-DDW8QIRjN</a><br></br>
<b>Stanford: </b> <a href="https://youtube.com/playlist?list=PL3940DD956CDF0622" target="_blank">https://youtube.com/playlist?list=PL3940DD956CDF0622</a><br></br>
<b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/Concave.pdf' download='Convex.pdf'> Download</a></button>
        
        
</div>
</div>
</div>

<div className="accordion-item p-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="true" aria-controls="collapseTwelve">
        SIGNAL AND SYSTEMS
      </button>
    </h2>
    <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
      <div className="accordion-body text-start">
   
        <p>Youtube Channels:</p>
       <b>Engineers ki Pathshala:</b> <a href="https://youtube.com/playlist?list=PL9RcWoqXmzaIG-RWneeqDJ-FCt66S15pl" target="_blank">https://youtube.com/playlist?list=PL9RcWoqXmzaIG</a><br></br>
        <b>Neso Academy:</b> <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO" target="_blank">https://youtube.com/playlist?list=PLBlnK6fEyqRh</a><br></br>
        <b>Tutorialspoint</b> <a href="https://youtube.com/playlist?list=PLWPirh4EWFpHr_1ZCkuF9ToYUrmujv9Aa" target="_blank">https://youtube.com/playlist?list=PLWPirh4EWF</a><br></br>
        <b>Previous Year Questions:</b> <button className="btn btn-success "><a className="inner" href='/question/second/SignalandSystems.pdf' download='SignalandSystems.pdf'> Download</a></button>
        
        
      </div>
    </div>
  </div>

</div>
</section>
<br></br>
<form className="bg-warning py-5 m-4">
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