import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'

import BookRegistration from './BookRegistration'
import Home from './Home'
import ApiDemo from './ApiDemo'
import ViewBooks from './ViewBooks'
import NotFound from './Notfound';
export default function NavBar() {

  return (
    <div>
    <nav className='navbar'>

     <Link to="/">Home</Link>
     <Link to="/bookregistration">BookRegisteration</Link>
     <Link to="/viewbooks">ViewBooks</Link>
     <Link to="/api">ApiDemo</Link>
  

     </nav>


        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/bookregistration" element={<BookRegistration />} />
        <Route path="api" element={<ApiDemo/>} />
        <Route path="/navBar" element={<NavBar />} />
        <Route path="/viewbooks" element={<ViewBooks />} />
        <Route path="*" element={<NotFound/>} /> 

        </Routes>
    </div>
   
  )
}
