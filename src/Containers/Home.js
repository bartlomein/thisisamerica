import React, { useState } from "react";
import MapChart from "./MapChart";

const Home = ({ data, loading, error }) => {
  //   setData(info);
  console.log(data);
  console.log(loading);
  console.log(error);

  return (
    <div>
      <MapChart />
    </div>
  );
};

export default Home;
