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
        <li class="list-group-item shadow-lg " data-aos="fade-top"><h1 class="text-secondary text-center  mt-4">1.Learn a Programming Language</h1><br></br>
        <h5 class="px-4 text-start mt-4">The first step in your preperation for a Software Job is ofcourse learning a programming langauge.
        There are many programming langauges out there, each having their own capabilities.However, learning a language
        that is commonly used and easy to understand is importat.So, some of the most commonly used programming langauges are:
        JAVA and C++</h5>
        <h5 class="px-4 text-start">you can learn these from the youtube channel links provided below:</h5>
       <h5 class="px-4 text-start">JAVA:</h5> <a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" alt="..." target="_blank">Java and DSA</a><br></br>
       <h5 class="px-4 text-start">JAVA:</h5> <a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk" alt="..." target="_blank">Java OOPS</a><br></br>
        <h5 class="px-4 text-start" >C++:</h5> <a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb" alt="..."  target="_blank" >The Cherno</a><br></br>
        </li><br></br><br></br>
        <li class="list-group-item shadow-lg " data-aos="fade-top" ><h1 class="text-secondary text-center mt-4">2.Start with basic problems</h1><br></br>
         <h5 class="px-4 text-start mt-4">Always it is important to understand the basic problems in order to understand more complex problems.
         After learning a concept, start solving basic problems and then move on to harder problems. Keep practicing problems
         if you face any problem in solving any problem, always take help from youtube, editorials. There is no fixed number in terms
         of the number of problems to be solved, if you have gripped problem solving then keep on solving as many as you can, however if you 
         are short of time, you may follow DSA sheets to atleast reach a level from where you can solve more problems. There are many coding platforms
         used for coding. Most commonly used ones are: GeeksForGeeks, Leetcode, Codechef,Hackerrank. Any one of these platforms can be used for
         practicing problems. Its never the quanity but the quality that matters the most.</h5>
         <h5 class="px-4 text-start">Some commonly used DSA sheets for problem solving are provided below:</h5>
         <h5 class="px-4 text-start">Striver: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="#" alt="">www.google.com</a><br></br>
         <h5 class="px-4 text-start">Love Babbar:</h5> <a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="#" alt="">www.google.com</a><br></br>
         <h5 class="px-4 text-start">Apna College:</h5> <a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="#" alt="">www.google.com</a><br></br>
         <h5 class="px-4 text-start">Fraz:</h5> <a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="#" alt="">www.google.com</a><br></br><br></br>

        </li><br></br>
         <li class="list-group-item shadow-lg  " data-aos="fade-top"><h1 class="text-secondary text-center  mt-4">3.Learn to make projects</h1><br></br>
         <h5 class="px-4 text-start mt-4"> Projects are an important part in interview. A project highlights the fact that you know how to use technologies to solve real world problems.
         Learning various technolgies to make projects is a habit that one should develop in order to progress well. Working on a project teaches an individual a lot in terms
         of new technologies and how they can should be used to make your project. There are various domains from where you can make a project. Some famous domains include-
         Web development, App development, Machine learning, Blockchain etc. You may explore all these domains before deciding which interests you the most in order to make a project.
         Its not about the number of projects that one makes but how new the project is in terms of the usage of technology. So, keep learning as many technologies as possible, this 
         will not only improve your ability to think newly but also makes it easy for you to learn new technolgies to come.</h5><br></br>
        <h5 class="px-4 text-start mt-4"> A list of youtube playlist for various trending technologies have been provided below:</h5>   
        <h5 class="px-4 text-start mt-4">Python: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" alt="..." target="_blank">Code with Harry</a><br></br>
        <h5 class="px-4 text-start mt-4">SQL: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtu.be/7S_tz1z_5bA" alt="">Programming with Mosh</a><br></br>
        <h5 class="px-4 text-start mt-4">MongoDb: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtu.be/c2M-rlkkT5o" alt="">Bro Code</a><br></br>
        <h5 class="px-4 text-start mt-4">React js: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp" alt="..." target="_blank">Davy Gray</a><br></br>
        <h5 class="px-4 text-start mt-4">Node js: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw" alt="..." target="_blank">Davy Gray</a><br></br>
        <h5 class="px-4 text-start mt-4">Devops: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PLy7NrYWoggjwV7qC4kmgbgtFBsqkrsefG" alt="..." target="_blank">Techworld with Nana</a><br></br>
        <h5 class="px-4 text-start mt-4">Javascript: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtu.be/BI1o2H9z9fo" alt="..." target="_blank">Traversy Media</a><br></br>
        <h5 class="px-4 text-start mt-4">Flutter: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ" alt="..." target="_blank">The Net Ninjas</a><br></br>
        <h5 class="px-4 text-start mt-4">Machine Learning: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ" alt="..." target="_blank">Krish Naik</a><br></br>  
        <h5 class="px-4 text-start mt-4">Kotlin: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PLVUm4IewkTXqwzuRXZisWg7shMTiQhUtz" alt="..." target="_blank">DonN Felkar</a><br></br>        
        <h5 class="px-4 text-start mt-4">UI/UX: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PLW-zSkCnZ-gBtmXf9AfRbA90GnBv7o2gS" alt="..." target="_blank">GFXmentor</a><br></br>
        <h5 class="px-4 text-start mt-4">Cybersecurity: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47" alt="..." target="_blank">The Cyber Mentor</a><br></br>                                    
                
         
         
         
         
         </li><br></br>
         <li class="list-group-item shadow-lg " data-aos="fade-top"><h1 class="text-secondary text-center  mt-4">4.Learn to make Resume</h1><br></br>
         <h5 class="px-4 text-start mt-4">Resume making is another import tool when it comes to interviews. A simple and informative resume is what is expected of you.
         A resume should not be decorative at all, it should be as simple as possible. The only purpose of a resume is to highlight your skills, projects, work experience
         to the interviewer. A resume should not be overly crowded with unnecessary details.It should contain mainly your educational details, conatct details, skills, projects, work experience etc.
         Making a resume doesn't take much of time, there are various websites available which can be used to make resumes in minutes. 
         Below are links of some resume building websites:                 
         </h5>
         <h5 class="px-4 text-start ">Canva: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://www.canva.com/" alt="..." target="_blank">www.canva.com</a><br></br>
         <h5 class="px-4 text-start " >Zety: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://zety.com/blog/best-online-resume-builders" alt="..." target="_blank">www.zety.com</a><br></br>
         <h5 class="px-4 text-start ">Novoresume: </h5><a class="d-flex flex-direction-row jusitfy-content-start ps-4" href="https://novoresume.com/" alt="..." target="_blank">www.novoresume.com</a><br></br>
         </li>
       
        </ul>
        
      </div>
      <br></br><br></br><br></br>
       
      </div>
    );
};