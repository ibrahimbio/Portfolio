import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../components/About';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Contact from '../components/Contacts';
import NavBar from '../components/NavBar';


const MainContainer = () => {
    
    return ( 
        <>
    <Router>
        <NavBar/>
        <Routes>

            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/contact' element={<Contact/>}/>

        </Routes>
    </Router>
    
    </>

     );
}
 
export default MainContainer;