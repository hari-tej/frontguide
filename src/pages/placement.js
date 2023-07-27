import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
export const Place=()=>{
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
    return(
      <div>
      <div class="container-lg">
        <ul class="list-group list-group-flush mt-5 ">
        <li class="list-group-item shadow-lg " data-aos="fade-right"><h1 class="text-secondary text-center  mt-4">1.Learn a Programming Language</h1><br></br>
        <h4 class="p-5">The first step in your preperation for a Software Job is ofcourse learning a programming langauge.
        There are many programming langauges out there, each having their own capabilities.However, learning a language
        that is commonly used and easy to understand is importat.So, some of the most commonly used programming langauges are:
        JAVA and C++</h4>
        <h4 className="ps-5">you can learn these from the youtube channel links provided below:</h4>
       <h4 className="ps-5">JAVA:</h4> <a className="p-5" href="#" alt="">www.google.com</a><br></br>
        <h4 className="ps-5" >C++:</h4> <a className="p-5 " href="#" alt="">www.google.com</a><br></br>
        </li><br></br><br></br>
        <li class="list-group-item shadow-lg " data-aos="fade-left"><h1 class="text-secondary text-center mt-4">2.Start with basic problems</h1><br></br>
         <h3 class="p-5">Always it is important to understand the basic problems in order to understand more complex problems.
         After learning a concept, start solving basic problems and then move on to harder problems. Keep practicing problems
         if you face any problem in solving any problem, always take help from youtube, editorials. There is no fixed number in terms
         of the number of problems to be solved, if you have gripped problem solving then keep on solving as many as you can, however if you 
         are short of time, you may follow DSA sheets to atleast reach a level from where you can solve more problems. There are many coding platforms
         used for coding. Most commonly used ones are: GeeksForGeeks, Leetcode, Codechef,Hackerrank. Any one of these platforms can be used for
         practicing problems. Its never the quanity but the quality that matters the most.
         Some commonly used DSA sheets for problem solving are provided below:</h3><br></br><br></br>
         <h3 className="ps-5">Striver: </h3><a className="p-5" href="#" alt="">www.google.com</a><br></br>
         <h3 className="ps-5">Love Babbar:</h3> <a className="p-5" href="#" alt="">www.google.com</a><br></br>
         <h3 className="ps-5">Apna College:</h3> <a className="p-5" href="#" alt="">www.google.com</a><br></br>
         <h3 className="ps-5">Fraz:</h3> <a className="p-5" href="#" alt="">www.google.com</a><br></br><br></br>

        </li><br></br>
         <li class="list-group-item shadow-lg  " data-aos="fade-right"><h1 class="text-secondary text-center  mt-4">3.Learn to make projects</h1><br></br>
         <h3 class="p-5"> Projects are an important part in interview. A project highlights the fact that you know how to use technologies to solve real world problems.
         Learning various technolgies to make projects is a habit that one should develop in order to progress well. Working on a project teaches an individual a lot in terms
         of new technologies and how they can should be used to make your project. There are various domains from where you can make a project. Some famous domains include-
         Web development, App development, Machine learning, Blockchain etc. You may explore all these domains before deciding which interests you the most in order to make a project.
         Its not about the number of projects that one makes but how new the project is in terms of the usage of technology. So, keep learning as many technologies as possible, this 
         will not only improve your ability to think newly but also makes it easy for you to learn new technolgies to come.
         A list of youtube playlist for various trending technologies have been provided below:   </h3><br></br>
        <h3 className="ps-5">Striver: </h3><a className="p-5" href="#" alt="">www.google.com</a><br></br><br></br>      
                
         
         
         
         
         </li><br></br>
         <li class="list-group-item shadow-lg " data-aos="fade-left"><h1 class="text-secondary text-center  mt-4">4.Learn to make Resume</h1><br></br>
         <h3 class="p-5">Resume making is another import tool when it comes to interviews. A simple and informative resume is what is expected of you.
         A resume should not be decorative at all, it should be as simple as possible. The only purpose of a resume is to highlight your skills, projects, work experience
         to the interviewer. A resume should not be overly crowded with unnecessary details.It should contain mainly your educational details, conatct details, skills, projects, work experience etc.
         Making a resume doesn't take much of time, there are various websites available which can be used to make resumes in minutes. 
         Below are links of some resume building websites:                 
         </h3><br></br>
         <h3 className="ps-5">Striver: </h3><a className="p-5" href="#" alt="">www.google.com</a><br></br><br></br>
         
         </li>
       
        </ul>
        
      </div>
      <br></br><br></br><br></br>
       
      </div>
    );
};