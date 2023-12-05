import "./styles.css"

import Navbar from "./Navbar.jsx"
import Dashboard from "./Dash/Dashboard.jsx"
import Grains from "./Grains/Grains.jsx"
import Hops from "./Hops/Hops.jsx"
import Yeast from "./Yeast.jsx"
import WaterProfile from "./Water/WaterProfile.jsx"
import Maintenance from "./Maint/Maintenance.jsx"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

export default function App(){
  return (
    <Router>
     <Navbar/>
   
    <div className="content">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/grains" element={<Grains/>}/>
        <Route path="/yeast" element={<Yeast/>}/>
        <Route path="/hops" element={<Hops/>}/>
        <Route path="/water" element={<WaterProfile/>}/> 
        <Route path="/maint" element={<Maintenance/>}/>  
      </Routes>
    </div>
  </Router>
  )
}
