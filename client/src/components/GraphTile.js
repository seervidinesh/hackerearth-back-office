import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const GraphTile = ({ data }) => {
  return (
    <>
      {data ? (
        <BarChart
          width={window.innerWidth / 1.2}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="member_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="loan_amnt" fill="#8884d8" />
          <Bar dataKey="funded_amnt_inv" fill="#6CCE25" />
          <Bar dataKey="int_rate" fill="#1CC3C8" />
          <Bar dataKey="annual_inc" fill="#5A43E7" />
          <Bar dataKey="last_pymnt_amnt" fill="#82ca9d" />
          <Bar dataKey="amt" fill="#C02CA2" />
        </BarChart>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default GraphTile;
