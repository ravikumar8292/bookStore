
import './App.css'
import About from './about/Abouts'
import SignUp from './components/SignUp'
import Contacts from './contactUs/Contacts'
import Courses from './courses/Courses'
import Home from './home/Home'
import {Navigate, Route,Routes} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


function App() {
  const [authUser , setAuthUser] = useAuth()
  console.log(authUser);

  return (
    <>
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/signup" />}/>
      <Route path='/contact' element={<Contacts />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
    <Toaster />
   </div>
    </>
  )
}

export default App
