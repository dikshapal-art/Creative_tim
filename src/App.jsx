import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Sidebar_settings from './Components/Sidebar_settings'
import img1 from "./assets/sidebar-1.jpg"
import img2 from "./assets/sidebar-2.jpg"
import img3 from "./assets/sidebar-3.jpg"
import img4 from "./assets/sidebar-4.jpg"

const images = [img1,img2,img3,img4]

const filters = [
    "#e74c3c", // Red
    "#3498db", // Blue
    "#2ecc71", // Green
    "#f1c40f", // Yellow
    "#9b59b6", // Purple
]

function App() {
 
const [color, setColor] = useState("#d2cfcfff");
const [hovercolor , setHover] = useState(filters)
const [bgimg , setBgimg] = useState(images[0])
  return (
    <>
     <div className="flex">
        <Sidebar bgColor={color} hovercolor={hovercolor} bgimg = {bgimg}/>
        <Sidebar_settings color={color} setColor={setColor} setHover={setHover} setBgimg={setBgimg}/>
    </div>

    </>
  )
}

export default App
