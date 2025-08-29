import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import img1 from "../assets/sidebar-1.jpg"
import img2 from "../assets/sidebar-2.jpg"
import img3 from "../assets/sidebar-3.jpg"
import img4 from "../assets/sidebar-4.jpg"

const filters = [
    "#e74c3c", // Red
    "#3498db", // Blue
    "#2ecc71", // Green
    "#f1c40f", // Yellow
    "#9b59b6", // Purple
]

const images = [img1,img2,img3,img4]

const Sidebar_settings = ({color,setColor ,setHovercolor , setBgimg}) => {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <>
      {/* Settings Button */}
      <div className="fixed bottom-20 right-10">
        <IoMdSettings
          className="bg-gray-200 rounded-full p-2 text-5xl text-gray-700 cursor-pointer shadow-lg"
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>

      {/* Toggle Box */}
      {isVisible && (
        <div className="fixed bottom-20 right-40 w-[340px] h-[500px] bg-gray-300 pr-6 pl-6  rounded-xl shadow-xl">
          <h1 className="text-center">Sidebar filters</h1>
          <div className="text-center flex justify-center border-b border-gray-500">
                 <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-16 h-16 p-0 border-none cursor-pointer rounded-xl "
                />
          </div>

            <h1 className="text-center">sidebar color</h1>
          <div className="flex justify-center border-b border-gray-500 p-4">
            
                  {filters.map((c) => (
              <button
                key={c}
                onClick={() => setHovercolor(c)}
                className={`w-5 h-5 rounded-full border-2 transition-all mr-2 ml-2`}
                style={{ backgroundColor: c }}
              ></button>
            ))}
              </div>

              <div className="justify-center flex">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-16 h-32 mr-2 ml-2 mt-4 mb-5 rounded-lg"
                      onClick={()=>setBgimg(src)}
                    />
                  ))}
                </div>

                <div>
                 <button className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-700 transition-all duration-300 mb-4">
                  Buy Now
                </button>
                  
                  <a href="https://demos.creative-tim.com/material-dashboard-pro-material-ui-v4/?_ga=2.143845941.180759970.1754976706-1734745274.1752562715#/documentation/tutorial"><button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 mb-3">Documentation</button></a>
                
                  <h2 className="text-center font-semibold">Thank you for Sharing</h2>
                </div>
              </div>
      )}

    
    </>
  );
};


export default Sidebar_settings;
