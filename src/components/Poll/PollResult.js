import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";

const PollResult = ({ data }) => (
  <LineChart width={325} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
    <Line type="monotone" dataKey="uv" stroke="#b43046" />
  </LineChart>
);

export default PollResult;
