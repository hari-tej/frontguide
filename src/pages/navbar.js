import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../styling/nav.css';
export const Navbar=()=>{
  const [color1,setColor1]=useState('warning');
  const [color2,setColor2]=useState('light');
  const [color3,setColor3]=useState('light');
  const [color4,setColor4]=useState('light');
  const [color5,setColor5]=useState('light');
  const [color6,setColor6]=useState('light');

  const changecolor1=()=>{
     setColor1('warning');
     setColor2('light');
     setColor3('light');
     setColor4('light');
     setColor5('light');
     setColor6('light');

  };
  const changecolor2=()=>{
    setColor1('light');
    setColor2('warning');
    setColor3('light');
    setColor4('light');
    setColor5('light');
    setColor6('light');

 };
 const changecolor3=()=>{
  setColor1('light');
  setColor2('light');
  setColor3('warning');
  setColor4('light');
  setColor5('light');
  setColor6('light');

};
const changecolor4=()=>{
  setColor1('light'); 
  setColor2('light');
  setColor3('light');
  setColor4('warning');
  setColor5('light');
  setColor6('light');

};
const changecolor5=()=>{
  setColor1('light');
  setColor2('light');
  setColor3('light');
  setColor4('light');
  setColor5('warning');
  setColor6('light');

};
const changecolor6=()=>{
  setColor1('light');
  setColor2('light');
  setColor3('light');
  setColor4('light');
  setColor5('light');
  setColor6('warning');

};

    return(
          <>       
           <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary m-0">
              <div className="container-fluid pt-5 ps-5 pe-5 pb-2 bg-dark mt-auto ">
                 <h1 className="navbar-brand fw-bolder text-warning ">CS-Mitra</h1>
                  <button className="navbar-toggler bg-warning " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                 <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav  ms-auto align-items-center-lg ">
                    
                  <li className="nav-item">
                       <Link to="/home"> <a className={`nav-link text-${color1} fw-bold `} onClick={changecolor1} href="#">Home</a></Link> 
                       
                    </li>
                    
                   <li className="nav-item">
                       <Link to="/secondyear"> <a className={`nav-link text-${color2} fw-bold`} onClick={changecolor2} href="#">Second Year</a></Link> 
                    </li>
                  <li className="nav-item">
                      <Link to="/thirdyear"> <a className={`nav-link text-${color3} fw-bold`} onClick={changecolor3} href="#">Third Year</a> </Link> 
                    </li>
                    <li className="nav-item">
                      <Link to="/fourthyear"><a className={`nav-link text-${color4} fw-bold`} onClick={changecolor4} href="#">Fourth Year</a></Link>
                       
                    </li>
                    <li className="nav-item">
                     <Link to="/placement"> <a className={`nav-link text-${color5} fw-bold`} onClick={changecolor5} href="#">Placement</a></Link>
                      
                    </li>
                    
                    <li className="nav-item">
                     <Link to="/seniors"> <a className={`nav-link text-${color6} fw-bold`} onClick={changecolor6} href="#">Connect with Seniors</a></Link>
                      
                    </li>
                  
                    
                  
                </ul>
            </div>
         </div>
     </nav>
       
     </> 
    );
};