
import './App.css'
import About from './about/Abouts'
import SignUp from './components/SignUp'
import Contacts from './contactUs/Contacts'
import Courses from './courses/Courses'
import Home from './home/Home'
import {Route,Routes} from "react-router-dom"


function App() {

  return (
    <>
    {/* <div className="">
      <Home />
      <Course />
    </div> */}

   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/course' element={<Courses />}/>
      <Route path='/contact' element={<Contacts />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
   </div>
    </>
  )
}

export default App
