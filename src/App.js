import { Navbar } from './pages/navbar';
import { Senior } from './pages/seniors';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Second } from './pages/secondyear';
import { Third } from './pages/thirdyear';
import { Fourth } from './pages/fourthyear';
import { Home } from './pages/home';
import { Erro } from './pages/error';
import { Place } from './pages/placement';
import { Footer } from './pages/footer';


function App() {


  return (
    <div className="App">
    <Router>
         
             <Navbar/>
         
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/secondyear' element={<Second/>}/>
        <Route path='/thirdyear' element={<Third/>}/>
        <Route path='/fourthyear' element={<Fourth/>}/>
        <Route path='/placement' element={<Place/>}/>
        <Route path='/seniors' element={<Senior/>}/>
        <Route path='*' element={<Erro/>}/>

       </Routes>
       <Footer/>
    </Router>
    </div>
  );
}

export default App;
