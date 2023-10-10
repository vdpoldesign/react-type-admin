import "./bigChartBox.scss";
import {
  AreaChart,
  Area,
  Tooltip,
  YAxis,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A",
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: "B",
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: "C",
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: "D",
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: "E",
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: "F",
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: "G",
    uv: 349,
    pv: 430,
    amt: 210,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Winst Analyse</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
