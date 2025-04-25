import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Login from './Page/login'

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/singin" element={<Login/>}/>

   
    </Routes>
    </BrowserRouter>
  )
}

export default App
