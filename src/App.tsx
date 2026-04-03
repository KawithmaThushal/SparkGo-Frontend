import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Destinations from './Page/Destinations & Tips/Destinations'
import Home from './Page/Home'
import Login from './Page/Login'
import SingUp from './Page/SingUp'
import ElectricChargePlace from './Page/ElectricChargePlace'
import TripPlan from './Page/TripPlan'
import PlacePage from './Page/Destinations & Tips/PlacePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/place" element={<PlacePage />} />
        <Route path="/charging-place" element={<ElectricChargePlace />} />
        <Route path="/trip-plan" element={<TripPlan />} />

        <Route path="/Home" element={<Navigate to="/home" replace />} />
        <Route path="/singin" element={<Navigate to="/signin" replace />} />
        <Route path="/singup" element={<Navigate to="/signup" replace />} />
        <Route path="/Destinations" element={<Navigate to="/destinations" replace />} />
        <Route path="/Place" element={<Navigate to="/place" replace />} />
        <Route path="/ChargingPlace" element={<Navigate to="/charging-place" replace />} />
        <Route path="/planTrip" element={<Navigate to="/trip-plan" replace />} />
        <Route path="/trip-planner" element={<Navigate to="/trip-plan" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
