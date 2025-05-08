import './App.css';
import { BrowserRouter,Routes,Route, Router, }from'react-router-dom'
import Mainpage from './pages/mainpage';
import Aboutpage from './pages/Aboutpage';
import Userlistpage from './pages/userlistpage';
import Loginpage from './pages/loginpage';
import Editpage from './pages/editepage';
import Registrationpage from './pages/registrationpage';
import Contactpage from './pages/Contactpage';
// import Applypage from './pages/Applypage';





function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
 
    <Route path='/'element={<Mainpage/>}/>
    <Route path='/About' element={<Aboutpage/>}/>
   <Route path='registration'element={<Registrationpage/>}/>
    <Route path='/login' element={<Loginpage/>}/>
    <Route path='/userlist'element={<Userlistpage/>}/>
    <Route path='/editpage'element={<Editpage/>}/>
    <Route path='/edit/:id' element={<Editpage/>}/>
    <Route path='/Contact'element={<Contactpage/>}/>
    {/* <Route path='/Apply' element={<Applypage/>}/> */}
   

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

