import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
// import { Card, CardContent } from "@/components/ui/card"; /  / If you're using shadcn, otherwise replace with <div>

const data = [
  { name: "M", uv: 10, pv: 20 },
  { name: "T", uv: 15, pv: 25 },
  { name: "W", uv: 20, pv: 30 },
  { name: "T", uv: 25, pv: 35 },
  { name: "F", uv: 30, pv: 40 },
  { name: "S", uv: 35, pv: 45 },
  { name: "S", uv: 40, pv: 50 }
];

export default function Graph() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Line Graph Card */}
        <div className="shadow-lg rounded-2xl bg-sky-500">
          <div className="p-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Graph Card */}
        <div className="shadow-lg rounded-2xl bg-amber-500">
          <div className="p-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#e4e4e4ff" />
                <Bar dataKey="pv" fill="#ecececff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Another Line Graph Card */}
        <div className="shadow-lg rounded-2xl bg-red-500">
          <div className="p-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </main>
  );
}
