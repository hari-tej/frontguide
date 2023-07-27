import { Link } from "react-router-dom"; 
import {useTypewriter,Cursor } from "react-simple-typewriter";
import '../styling/home.css';
export const Home=()=>{
    const [text] = useTypewriter({
        words:["Welcome to CS-Mitra!"],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80,
        
    });


    
    
    return(
        
        <div>
                             
        <div className="text-center mt-5">
        <b><h1 className="text-light"> {text}</h1></b>
        



        <br></br><br></br><br></br><br></br><br></br>
        <img id="homepage" src="/images/edu3.jpg" className="img-fluid" alt="..."/>
   <br></br><br></br>
           
            <br></br>
            <section className="card border rounded  border-1 p-5 ms-5 me-5 shadow" >
             <h1><b>About CSE department</b></h1>
             <br></br>
             <p className="">Computer Science and Engineering department is one of the most sought branches in NIT Mizoram.
             The department is filled with experienced faculties who are always ready to help their students at any stage.
             The department actively organizes events both for the institute as well as for the department.
             The department has a society named the CSS Society that is the incharge of organizing the events.
             If you are interested to be a part of the society, you can join its whatsapp group along with other 
             social media handles.</p>
             <h6><b>CSS Society Instagram handle:</b> <a href="https://instagram.com/css_nitmz?igshid=MzRlODBiNWFlZA==" >https://instagram.com/css_nitmz?igshid=MzRlODBiNWFlZA==</a></h6><br></br>
             <h6><b>Download B.tech Syllabus:</b> <a href="#" download='B.tech_Syllabus.pdf'>B.tech Syllabus</a> </h6>
             <p></p>

            </section>
          <br></br>
          
         
        
         
         </div>
         <br></br><br></br><br></br>
           
         </div>
         
    );
};