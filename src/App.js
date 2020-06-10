import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useFetch from "./hooks/useFetch";

import Home from "./Containers/Home";

function App() {
  const { response, loading, error } = useFetch(
    "https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json"
  );
  return (
    <div className="App">
      <Home data={response} loading={loading} error={error} />
    </div>
  );
}

export default App;
