import { TiCloudStorageOutline } from "react-icons/ti";
import { IoIosWarning } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaTag } from "react-icons/fa";
import { TbClockShare } from "react-icons/tb";

const Main = () => {
    return(
        <>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-10 ">
  {/* <!-- Card 1 --> */}
  <div class="bg-white shadow-md rounded-lg p-5 flex flex-col">
    <div class="flex items-center space-x-3 mb-4 relative">
      <div class="p-6 bg-amber-500 w-[80px] h-[80px] absolute shadow-xl">
        {/* <!-- Replace with an icon e.g., Heroicons --> */}
        <div class="text-white text-4xl text-center" fill="currentColor"><TiCloudStorageOutline/></div>
      </div>
    </div>
    <p class="text-gray-600 flex-1 text-end text-3xl">49/50 GB</p>
    <div class="mt-4 border-t border-gray-200 flex ">
      <span class="text-1xl font-bold text-red-500"><IoIosWarning/></span>
      <span class="text-sm text-purple-500 ml-1 "><a href="">Get more space</a></span>
    </div>
  </div>

  {/* <!-- Repeat for additional cards --> */}
  {/*------card 2----- */}
  <div class="bg-white shadow-md rounded-lg p-5 flex flex-col">
    <div class="flex items-center space-x-3 mb-4 relative">
      <div class="p-5 bg-green-500 w-[80px] h-[80px] absolute shadow-xl">
        {/* <!-- Replace with an icon, e.g., Heroicons --> */}
        <div class="text-white text-4xl text-center" fill="currentColor"><IoIosHome/></div>
      </div>
    </div>
    <p class="text-gray-600 flex-1 text-end text-3xl">$34,245</p>
    <div class="mt-4 border-t border-gray-200 flex ">
      <span class="text-1xl font-bold text-gray-500"><SlCalender/></span>
      <span class="text-sm text-gray-500 ml-1 "><a href="">Last 24 Hours</a></span>
    </div>
  </div>

  {/* -------card3-------- */}
    <div class="bg-white shadow-md rounded-lg p-5 flex flex-col">
    <div class="flex items-center space-x-3 mb-4 relative">
      <div class="p-5 bg-red-500 w-[80px] h-[80px] absolute shadow-xl">
        {/* <!-- Replace with an icon, e.g., Heroicons --> */}
        <div class="text-white text-4xl text-center" fill="currentColor"><AiOutlineIssuesClose/></div>
      </div>
    </div>
    <p class="text-gray-600 flex-1 text-end text-3xl">75</p>
    <div class="mt-4 border-t border-gray-200 flex ">
      <span class="text-1xl font-bold text-gray-500"><FaTag/></span>
      <span class="text-sm text-gray-500 ml-1 "><a href="">Tracked from Github</a></span>
    </div>
  </div>

      {/* ------card4------ */}
  <div class="bg-white shadow-md rounded-lg p-5 flex flex-col">
    <div class="flex items-center space-x-3 mb-4 relative">
      <div class="p-5 bg-blue-500 w-[80px] h-[80px] absolute shadow-xl">
        {/* <!-- Replace with an icon, e.g., Heroicons --> */}
        <div class="text-white text-4xl text-center" fill="currentColor"><FaTwitter/></div>
      </div>
    </div>
    <p class="text-gray-600 flex-1 text-end text-3xl">+225</p>
    <div class="mt-4 border-t border-gray-200 flex ">
      <span class="text-1xl font-bold text-gray-500"><TbClockShare/></span>
      <span class="text-sm text-gray-500 ml-1 "><a href="">just updated</a></span>
    </div>
  </div>
</div>



        
        </>
    )
}

export default Main