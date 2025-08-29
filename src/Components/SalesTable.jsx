import { CiGlobe } from "react-icons/ci";
import flag1 from "../assets/f.png";
import flag2 from "../assets/a.png";
import flag3 from "../assets/b.png";
import flag4 from "../assets/c.png";
import flag5 from "../assets/d.png";
import flag6 from "../assets/e.png";

export default function SalesTable() {
  const salesData = [
    { flag: flag1, country: "USA", sales: "2,920", percent: "53.23%" },
    { flag: flag2, country: "Germany", sales: "1,300", percent: "20.40%" },
    { flag: flag3, country: "Australia", sales: "760", percent: "10.35%" },
    { flag: flag4, country: "United Kingdom", sales: "690", percent: "7.37%" },
    { flag: flag5, country: "Romania", sales: "600", percent: "5.39%" },
    { flag: flag6, country: "Brazil", sales: "550", percent: "4.34%" },
  ];

  return (
    <div className="h-[450px] p-6 bg-gray-100">
      <div className="grid grid-cols-1 gap-6 bg-white shadow-lg  p-6 h-full">
        
        {/* Left: Table */}
        <div className="overflow-y-auto relative">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center size-[50px] text-white bg-green-600 font-bold text-3xl">
              <CiGlobe />
            </div>
            <h2 className="text-xl font-light text-gray-900 ml-3">
              Global Sales by Top Locations
            </h2>
          </div>

          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <tbody>
              {salesData.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">
                    <img src={item.flag} alt={item.country} className="w-[10] h-6" />
                  </td>
                  <td className="px-4 py-2 text-gray-600">{item.country}</td>
                  <td className="px-4 py-2 text-gray-600">{item.sales}</td>
                  <td className="px-4 py-2 text-gray-600">{item.percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
