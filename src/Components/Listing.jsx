import castle from "../assets/castle.jpg"
import officestudio from "../assets/officestudio.jpg"
import apartment from "../assets/apartment.jpg"
import { FaLocationDot } from "react-icons/fa6";

const Listing = () =>{
  const cards = [
    {
      img: apartment,
      title: "Cozy 5 Stars Apartment",
      desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
      price: "$899/night",
      location: "Barcelona, Spain",
    },
    {
      img: officestudio,
      title: "Office Studio",
      desc: "The place is close to Metro Station and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the night life in London, UK.",
      price: "$1.119/night",
      location: "London, UK",
    },
    {
      img: castle,
      title: "Beautiful Castle",
      desc: "The place is close to Metro Station and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Milan.",
      price: "$459/night",
      location: "Milan, Italy",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative bg-white rounded-2xl shadow-lg overflow-hidden group"
        >
          {/* Image with hover effect */}
          <div className="h-56 overflow-hidden ">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:-translate-y-10"
            />
          </div>
            

          {/* Card Body */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-center">{card.title}</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">{card.desc}</p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center px-4 pb-4 border-t border-gray-200 pl-2 pr-2">
            <span className="text-lg font-light text-gray-500">{card.price}</span>
            <div className="flex">
            <FaLocationDot className="text-gray-500 mt-1 mr-3"/>
            <span className="text-gray-500 text-md">{card.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listing