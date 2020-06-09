import React, { useState } from "react";

import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const [data, setData] = useState(null);

  const info = useFetch(
    "https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json"
  );

  console.log(info);
  //   setData(info);

  return <div>TEST</div>;
};

export default Home;
