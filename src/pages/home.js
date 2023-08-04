import { Link } from "react-router-dom"; 
import {useTypewriter,Cursor } from "react-simple-typewriter";
import '../styling/home.css';
export const Home=()=>{
    const [text] = useTypewriter({
        words:["Welcome to CS-Mitra!","A one stop solution for CSE students!"],
        loop:{},
        typeSpeed:120,
        deleteSpeed:120,
        
    });


    
    
    return(
        
        <div>
                             
        <div className="text-center mt-5">
        <b><h1 className="text-light"> {text}</h1></b>
            <br></br>
            <section className="card border rounded  border-1 p-5 ms-2 me-2 shadow" >
            <img   src="/images/block.jpg" className="img-fluid" alt="..."/><br></br>
             <h1><b>About CSE department</b></h1>
           
             <br></br>
             <h6 className="text-start">Computer Science and Engineering department is one of the most sought branches in NIT Mizoram.
             The department is filled with experienced faculties who are always ready to help their students at any stage.
             The department actively organizes events both for the institute as well as for the department.
             The department has a society named the CSS Society that is the incharge of organizing the events.
             If you are interested to be a part of the society, you can join its social media handles.</h6>
             <h6><b>CSS Society Instagram handles: <a href="https://instagram.com/css_nitmz?igshid=MzRlODBiNWFlZA==" target="_blank"><b className="btn btn-danger px-4">Instgram</b></a> <a href="https://www.linkedin.com/company/computer-science-society-nit-mizoram/" target="_blank"><b className="btn btn-primary px-4 ms-2">linkedin</b></a></b></h6>
             <h6><b>B.tech Syllabus:</b> <a href="syllabus.pdf" download='B.tech_Syllabus.pdf' className="btn btn-success px-4">Download</a> </h6>
             <p></p>

            </section>
          <br></br>
          
         
        
         
         </div>
         <br></br><br></br><br></br>
           
         </div>
         
    );
};