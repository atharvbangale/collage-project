import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componants/Navbar'
import Browsecompany from './Componants/Browsecompany'
import Footer from './Componants/Footer'
import Dashboard from './Componants/Dashboard'
import Signin from './Componants/Signin'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Navbar/>
      <Browsecompany/>
      <Footer/>  */}

      {/* <Dashboard/> */}
      <Signin/>
    </>
  )
}

export default App
