import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import "./bigChartBox.scss";
  
  const data = [
    {
      name: "Sun",
      ZonaDeJuegos: 4000,
      ZonaDeSalto: 2400,
      Cumpleaños: 2400,
    },
    {
      name: "Mon",
      ZonaDeJuegos: 3000,
      ZonaDeSalto: 1398,
      Cumpleaños: 2210,
    },
    {
      name: "Tue",
      ZonaDeJuegos: 2000,
      ZonaDeSalto: 9800,
      Cumpleaños: 2290,
    },
    {
      name: "Wed",
      ZonaDeJuegos: 2780,
      ZonaDeSalto: 3908,
      Cumpleaños: 2000,
    },
    {
      name: "Thu",
      ZonaDeJuegos: 1890,
      ZonaDeSalto: 4800,
      Cumpleaños: 2181,
    },
    {
      name: "Fri",
      ZonaDeJuegos: 2390,
      ZonaDeSalto: 3800,
      Cumpleaños: 2500,
    },
    {
      name: "Sat",
      ZonaDeJuegos: 3490,
      ZonaDeSalto: 4300,
      Cumpleaños: 2100,
    },
  ];
  
  const BigChartBox = () => {
    return (
      <div className="bigChartBox">
        <h1>Saltantes por Zona</h1>
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
                dataKey="Cumpleaños"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="ZonaDeSalto"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="ZonaDeJuegos"
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